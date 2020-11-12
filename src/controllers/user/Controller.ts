import { Request, Response, NextFunction } from 'express';
import traineeRouter from './routes';

class UserController {
     static instance: UserController;

     static getInstance() {
          if (UserController.instance) {
               return UserController.instance;
          }
          else {
               UserController.instance = new UserController();
               return UserController.instance;
          }
     }

     get(req: Request, res: Response, next: NextFunction) {
          try {
               console.log('Inside GET method');
               res.send({
                    message: 'User fetched',
                    data: [
                         {
                              name: 'User1',
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
                    message: 'User created',
                    data: {
                              name: 'User1',
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
                    message: 'User updated',
                    data: {
                              name: 'User2',
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
                    message: 'User deleted',
                    data: {
                              name: 'User1',
                              address: 'noida'
                         }
               });
          } catch (err) {
               console.log('inside err');
          }
     }
}

export default UserController.getInstance();