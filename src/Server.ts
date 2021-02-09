import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Request, Response, NextFunction } from 'express';

import { notFoundHandeler, errorHandler } from './libs/routes';
import routes from './router';
import Database from './libs/Database';
import IConfig from './config/IConfig';
// tslint:disable-next-line: one-variable-per-declaration
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('../swagger.json');

 class Server {
     app;
     constructor(private config: IConfig) {
          this.app = express();
     }

     bootstrap() {
          this.initBodyParser();
          this.setupRoutes();
          return this;
     }

     options = {
          origin: '*',
          optionsSuccessStatus: 200,
     }

     setupRoutes() {
          const {app} = this;
          this.app.get('/health-check', (req: Request, res: Response, next: NextFunction) => {
               res.send('I am ok');
          });

          this.app.use('/api', cors(this.options), routes);

          this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

          this.app.use(notFoundHandeler);

          this.app.use(errorHandler);
     }

     initBodyParser() {
          this.app.use(bodyParser.json());
     }

     run() {
          const {app, config: {PORT , MONGO_URL}} = this;
          Database.open(MONGO_URL)
               .then((res) => {
               console.log('Connection successful');
               app.listen(PORT, (err) => {
                    if (err) {
                         console.log(err);
                    }
                    else {
                         console.log(`App is running on port ${PORT}`);
                    }
               });

               })
               .catch(err => console.log(err));

               return this;
     }
}

export default Server;