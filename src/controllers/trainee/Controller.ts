import { Request, Response, NextFunction } from 'express';
import traineeRouter from './routes';

class TraineeController {
     static instance: TraineeController;

     static getInstance() {
          if (TraineeController.instance) {
               return TraineeController.instance;
          }
          else {
               TraineeController.instance = new TraineeController();
               return TraineeController.instance;
          }
     }

     get(req: Request, res: Response, next: NextFunction) {
          try {
               console.log('Inside GET method');
               res.send({
                    message: 'Trainee fetched',
                    data: [
                         {
                              name: 'trainee1',
                              address: 'noida'
                         }
                    ]
               });
          } catch (err) {
               console.log('inside err');
          }
     }

     post(req: Request, res: Response, next: NextFunction) {
          try {
               console.log('Inside POST method');
               res.send({
                    message: 'Trainee created',
                    data: {
                              name: 'trainee1',
                              address: 'noida'
                         }
               });
          } catch (err) {
               console.log('inside err');
          }
     }

     update(req: Request, res: Response, next: NextFunction) {
          try {
               console.log('Inside UPDATE method');
               res.send({
                    message: 'Trainee updated',
                    data: {
                              name: 'trainee2',
                              address: 'pune'
                         }
               });
          } catch (err) {
               console.log('inside err');
          }
     }

     delete(req: Request, res: Response, next: NextFunction) {
          try {
               console.log('Inside DELETE method');
               res.send({
                    message: 'Trainee deleted',
                    data: {
                              name: 'trainee1',
                              address: 'noida'
                         }
               });
          } catch (err) {
               console.log('inside err');
          }
     }
}

export default TraineeController.getInstance();