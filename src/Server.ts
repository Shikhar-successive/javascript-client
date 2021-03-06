import * as experss from 'express';
import * as bodyParser from 'body-parser';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from '../swagger.json'

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
          this.app = experss();
     }

     bootstrap() {
          this.initBodyParser();
          this.setupRoutes();
          return this;
     }

     setupRoutes() {
          const {app} = this;
          this.app.get('/health-check', (req, res, next) => {
               res.send('I am ok');
          });

          this.app.use('/api', routes);

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