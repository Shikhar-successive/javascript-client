import { Request, Response, NextFunction } from 'express';
import UserRepository from '../../Repositories/User/UserRepository';
import * as bcrypt from 'bcrypt';
import * as mongoose from 'mongoose';

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

     // get(req: Request, res: Response, next: NextFunction) {
     //      try {
     //           console.log('Inside GET method');
     //           res.send({
     //                message: 'GenerateID fetched',
     //                data: [
     //                     {

     //                     }
     //                ]
     //           });
     //      } catch (err) {
     //           console.log('inside err');
     //      }
     // }

     async getAll(req: Request, res: Response, next: NextFunction) {
          try {
               console.log('Inside getall method');
               const userRepository: UserRepository = new UserRepository();
               await userRepository.getAll({}, (err, data) => {
                    if (err) {
                         console.log(err);
                    }
                    else {
                         console.log(data);
                         res.send({
                              message: 'Records fetched',
                              data: [
                                   {
                                       Total_Records: data.length,
                                       Records: data
                                   }
                              ]
                         });
                    }
               });
          } catch (err) {
               console.log('inside err');
          }
     }

     async findOne(req: Request, res: Response, next: NextFunction) {
          try {
               const userRepository: UserRepository = new UserRepository();
               await userRepository.findOne({email: req.body.email, name: req.body.name}, (err, data) => {
                    if (err) {
                         console.log(err);
                    }
                    else {
                         console.log(data);
                         res.send({
                              message: 'Record fetched',
                              data: [
                                   {
                                        Userdata: data
                                   }
                              ]
                         });
                    }
               });
               console.log('Inside GET method');
          } catch (err) {
               console.log('inside err');
          }
     }

     async createUser(req: Request, res: Response, next: NextFunction) {
          try {
               await bcrypt.hash(req.body.password, 5 , (error, userPwd) => {
                    if (error) {
                         console.log('Password Hash error');
                    }
                    else {
                         req.body.password = userPwd;
                         const userRepository: UserRepository = new UserRepository();
                         userRepository.createX(req.body );
                         console.log('Inside creteuser method');
                         res.send({
                              message: 'Trainee created',
                              data: [
                                   {
                                        data: req.body
                                   }
                              ]
                         });
                    }
               });
          } catch (err) {
               console.log('inside err');
          }
     }

     async search(req: Request, res: Response, next: NextFunction) {
          try {
               console.log('Inside find method');
               const userRepository: UserRepository = new UserRepository();
               await userRepository.find(req.body, (err, data) => {
                    if (err) {
                         console.log(err);
                    }
                    else {
                         console.log(data);
                         res.send({
                              message: 'Records fetched',
                              data: [
                                   {
                                        Data: data
                                   }
                              ]
                         });
                    }
               });
          } catch (err) {
               console.log('inside err');
          }
     }

     // post(req: Request, res: Response, next: NextFunction) {
     //      try {
     //           console.log('Inside POST method');
     //           res.send({
     //                message: 'Trainee created',
     //                data: {
     //                          name: 'trainee1',
     //                          address: 'noida'
     //                     }
     //           });
     //      } catch (err) {
     //           console.log('inside err');
     //      }
     // }

     update(req: Request, res: Response, next: NextFunction) {
          try {
               console.log('Inside find method');
               const userRepository: UserRepository = new UserRepository();
               userRepository.update(req.body);
               console.log('Inside UPDATE method');
               res.send({
                    message: 'Trainee updated',
                    data: {
                              Details: req.body
                         }
               });
          } catch (err) {
               console.log('inside err');
          }
     }

     // delete(req: Request, res: Response, next: NextFunction) {
     //      try {
     //           console.log('Inside DELETE method');
     //           res.send({
     //                message: 'Trainee deleted',
     //                data: {
     //                          name: 'trainee1',
     //                          address: 'noida'
     //                     }
     //           });
     //      } catch (err) {
     //           console.log('inside err');
     //      }
     // }

     deleterec(req: Request, res: Response, next: NextFunction) {
          try {
               const userRepository: UserRepository = new UserRepository();
               userRepository.delete(req.body.id, req.body.deletedBy);

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