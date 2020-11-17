import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import { userModel } from '../../Repositories/User/UserModel';
import { Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcrypt';

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


     // get(req: Request, res: Response, next: NextFunction) {
     //      try {
     //           console.log('Inside GET method');
     //           res.send({
     //                message: 'User fetched',
     //                data: [
     //                     {
     //                          name: 'User1',
     //                          address: 'noida'
     //                     }
     //                ]
     //           });
     //      } catch (err) {
     //           console.log('inside err');
     //      }
     // }

     login(req: Request, res: Response, next: NextFunction) {
          try {

               userModel.findOne({email: req.body.email}, (err, docs) => {
                    if (err) {
                         console.log(err);
                         }
                    else if (docs === null) {
                         console.log(docs);
                         res.send({
                              message: 'Invalid User',
                              data: {
                                        name: req.body,
                                   }
                              });
                         }
                    else if (docs !== null) {
                         bcrypt.compare(req.body.password, docs.password, (error, data: boolean) => {
                                        if (error) {
                                             console.log('bcrypt compare error');
                                        }
                                        else if (data) {
                                             console.log(docs);
                                             const token = jwt.sign({ docs }, config.SECRET_KEY, {expiresIn: '1d'});
                                             res.send({
                                                  Data: token,
                                                  Message: 'Login Successfull',
                                                  status: 200
                                             });
                                        }
                                        else {
                                             res.send({
                                                  message: 'Invalid Password',
                                                  data: {
                                                            name: req.body.password,
                                                       }
                                                  });
                                        }
                         });
                    }
               });
          }
          catch (err) {
               res.send(err);
          }
     }

     me(req: Request, res: Response, next: NextFunction) {
          const user = res.locals.val;
          console.log('-------------------------', user);
          res.send({
                data: user
          });
     }

     // post(req: Request, res: Response, next: NextFunction) {
     //      try {

     //           console.log('Inside POST method');
     //           res.send({
     //                message: 'User created',
     //                data: {
     //                          name: 'User1',
     //                          address: 'noida'
     //                     }
     //           });
     //      } catch (err) {
     //           console.log('inside err');
     //      }
     // }

     // update(req: Request, res: Response, next: NextFunction) {
     //      try {
     //           console.log('Inside UPDATE method');
     //           res.send({
     //                message: 'User updated',
     //                data: {
     //                          name: 'User2',
     //                          address: 'pune'
     //                     }
     //           });
     //      } catch (err) {
     //           console.log('inside err');
     //      }
     // }

     // delete(req: Request, res: Response, next: NextFunction) {
     //      try {
     //           console.log('Inside DELETE method');
     //           res.send({
     //                message: 'User deleted',
     //                data: {
     //                          name: 'User1',
     //                          address: 'noida'
     //                     }
     //           });
     //      } catch (err) {
     //           console.log('inside err');
     //      }
     // }
}

export default UserController.getInstance();