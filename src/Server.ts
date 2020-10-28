import config from './config/configuration';
import * as experss from 'express';
import IConfig from './config/IConfig';
 class Server{
     app;
     constructor(private config:IConfig){
          this.app = experss();          
     }

     bootstrap(){
          this.setupRoutes();
          return this;
     }

     setupRoutes(){
          const {app} = this;
          app.get('/health-check', (req, res, next) => {
               res.send('I am ok');
          });
          return this;
     }

     run(){
          const {app, config: {PORT}} = this;
          app.listen(PORT, (err) => {
               if(err){
                    console.log(err);
               }
               else{
                    console.log(`App is running on port ${PORT}`);
               }
          })
     }
}

export default Server;