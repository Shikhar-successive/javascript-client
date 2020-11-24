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

     async getAll(req: Request, res: Response, next: NextFunction) {
          try {
               console.log('Inside getall method');
               const userRepository: UserRepository = new UserRepository();
               const skip = parseInt(req.query.skip.toString(), 10);
               const limit = parseInt(req.query.limit.toString(), 10);
               if (req.query.sortby.toString() === 'createdAt'
                    || req.query.sortby === 'name'
                    || req.query.sortby === 'email') {
                         const sort = req.query.sortby;
                         const order = req.query.order;
                         const search = req.query.search.toString();
                         if (/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test(search) === true) {
                              const data = await userRepository.getAll({name: search}, {skip, limit}, {sort, order});
                              console.log(data);
                                   res.send({
                                        status: 'ok',
                                        message: 'Successfully fetched Trainees',
                                        data : {
                                             count: data.length,
                                             records: [
                                                  {
                                                   data
                                                  }
                                             ]
                                   }
                                   });
                         }
                         else if (/^[a-zA-Z0-9+_.-]+@+[a-zA-Z0-9+_.-]+.+[a-zA-Z0-9+_.-]+$/.test(search) === true) {
                              const data = await userRepository.getAll({email: search}, {skip, limit}, {sort, order});
                              console.log(data);
                                   res.send({
                                        status: 'ok',
                                        message: 'Successfully fetched Trainees',
                                        data: {
                                             count: data.length,
                                             records: [
                                                  {
                                                   data
                                                  }
                                             ]
                                   }
                                   });
                         }
                         else {
                         const data = await userRepository.getAll({}, {skip, limit}, {sort, order});
                              console.log(data);
                                   res.send({
                                        status: 'ok',
                                        message: 'Successfully fetched Trainees',
                                        data: {
                                             count: data.length,
                                             records: [
                                                  {
                                                   data
                                                  }
                                             ]
                                   }
                                   });
                              }
                    }
               else {
                    res.send({
                         Error: 'Invalid SortBy',
                         Message: [
                              {
                              SortBy: 'Only applicable on email and name'
                              }
                         ]
                    });
                    }
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
                    }
                         const userRepository: UserRepository = new UserRepository();
                         userRepository.createX(req.body );
                         console.log('Inside creteuser method');
                         res.send({
                              status: 'ok',
                              message: 'Trainee Created Successfully',
                              data:
                                   {
                                        data: req.body,
                                   }
                         });
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

     async update(req: Request, res: Response, next: NextFunction) {
          try {
               console.log('Inside find method');
               if (req.body.password) {
                    await bcrypt.hash(req.body.password, 5 , (error, userPwd) => {
                         if (error) {
                              console.log('Password Hash error');
                         }
                         else {
                              req.body.password = userPwd;
                         }
                    });
               }
               const userRepository: UserRepository = new UserRepository();
               const prevRec = await userRepository.update(req.body);
               console.log(prevRec);
               if (prevRec === null) {
                    res.send({
                         message: 'Unable to update record',
                         Error: 'Cannot find record to update',
                         data: {
                              originalId: req.body.originalId
                         }
                    });
               }
               else {
                    console.log('Inside UPDATE method');
                    res.send({
                         status: 'ok',
                         message: 'Trainee Updated Successfully',
                         data: {
                                   Details: req.body
                              }
                    });
               }
          } catch (err) {
               console.log('inside err');
          }
     }

     deleterec(req: Request, res: Response, next: NextFunction) {
          try {
               const userRepository: UserRepository = new UserRepository();
               userRepository.delete(req.body.id, req.body.deletedBy);

               console.log('Inside DELETE method');
               res.send({
                    status: 'ok',
                    message: 'Trainee Deleted Successfully',
                    data: {
                              id: req.body.id
                         }
               });
          } catch (err) {
               console.log('inside err');
          }
     }
}

export default TraineeController.getInstance();