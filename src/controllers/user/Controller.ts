import * as jwt from 'jsonwebtoken';
import * as mongoose from 'mongoose';
import { userModel } from '../../Repositories/User/UserModel';
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

     login(req: Request, res: Response, next: NextFunction) {
          // console.log(req.body.email);
          // const userCred = req.body;
          try {userModel.findOne({email: req.body.email, password: req.body.password}, (err, docs) => {
                    if (err) {
                         console.log(err);
                    }
                    else {
                         console.log(docs);
                         if (docs === null) {
                         res.send({
                              message: 'Invalid User',
                              data: {
                                        name: req.body,
                                   }
                              });
                         }
                         else {
                              const token = jwt.sign({ docs }, 'qwertyuiopasdfghjklzxcvbnm123456');
                              res.send({
                                   Data: token,
                                   Message: 'Login Successfull',
                                   status: 200
                              });
                         }
                    }
               });
          }
          catch (err) {
               res.send(err);
          }
     }

     me(req: Request, res: Response, next: NextFunction) {
          const user = res.locals.val;
          res.send({
                data: user
          });
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