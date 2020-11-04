import * as experss from 'express';
import * as bodyParser from 'body-parser';

import { notFoundHandeler, errorHandler } from './libs/routes';
import routes from './router';
 class Server {
     app;
     constructor(private config) {
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

          this.app.use(notFoundHandeler);

          this.app.use(errorHandler);
     }

     initBodyParser() {
          this.app.use(bodyParser.json());
     }

     run() {
          const {app, config: {PORT}} = this;
          app.listen(PORT, (err) => {
               if (err) {
                    console.log(err);
               }
               else {
                    console.log(`App is running on port ${PORT}`);
               }
          });
     }
}

export default Server;