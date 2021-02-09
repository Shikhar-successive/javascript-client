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
                              const totalCount = await userRepository.VerCount({});
                              console.log(data);
                              if (data.length) {
                                   res.status(200).send({
                                        status: 'ok',
                                        message: 'Successfully fetched Trainees',
                                        data : {
                                             totalRecords: totalCount,
                                             count: data.length,
                                             records: data
                                        }
                                   });
                              }
                              else {
                                   res.status(404).send({
                                        status: 'Not found',
                                        message: 'No data Found',
                                        search: req.query.search
                                   });
                              }
                         }
                         else if (/^[a-zA-Z0-9+_.-]+@+[a-zA-Z0-9+_.-]+.+[a-zA-Z0-9+_.-]+$/.test(search) === true) {
                              const data = await userRepository.getAll({email: search}, {skip, limit}, {sort, order});
                              const totalCount = await userRepository.VerCount({});
                              console.log(data);
                              if (data.length) {
                                   res.status(200).send({
                                        status: 'ok',
                                        message: 'Successfully fetched Trainees',
                                        data: {
                                             totalRecords: totalCount,
                                             count: data.length,
                                             records: data                                                  
                                        }
                                   });
                              }
                              else {
                                   res.status(404).send({
                                        status: 'Not found',
                                        message: 'No data Found',
                                        search: req.query.search
                                   });
                              }
                         }
                         else {
                         const data = await userRepository.getAll({}, {skip, limit}, {sort, order});
                         const totalCount = await userRepository.VerCount({});
                              console.log(data);
                                   if (data.length) {
                                        res.status(200).send({
                                             status: 'ok',
                                             message: 'Successfully fetched Trainees',
                                             data: {
                                                  totalRecords: totalCount,
                                                  count: data.length,
                                                  records: data
                                             }
                                             });
                                        }
                                   else {
                                        res.send({
                                             status: 'Not found',
                                             message: 'No data Found',
                                             data: req.query
                                        });
                                   }
                         }
                    }
               else {
                    res.status(400).send({
                         status: 'Bad request',
                         message: 'Invalid SortBy',
                         data: [
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
                         res.status(200).send({
                              status: 'ok',
                              message: 'Trainee Created Successfully',
                              data: req.body,
                                   
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
                    res.status(404).send({
                         status: 'Not found',
                         message: 'Cannot find record to update',
                         data: {
                              originalId: req.body.originalId
                         }
                    });
               }
               else {
                    console.log('Inside UPDATE method');
                    res.status(200).send({
                         status: 'ok',
                         message: 'Trainee Updated Successfully',
                         data: prevRec
                    });
               }
          } catch (err) {
               console.log('inside err');
          }
     }

     async deleterec(req: Request, res: Response, next: NextFunction) {
          try {
               console.log('Inside DELETE method');
               const userRepository: UserRepository = new UserRepository();
               const data = await userRepository.delete(req.params.id, req.body.deletedBy);
               console.log(data);
               if (data === null) {
                    res.status(404).send({
                         status: 'Not found',
                         message: 'Cannot find record to delete',
                         data: {
                              Id: req.params.id
                         }
                    });
               }
               else {
                    res.status(200).send({
                         status: 'ok',
                         message: 'Trainee Deleted Successfully',
                         data: {
                                   id: req.params.id
                              }
                    });
               }
          } catch (err) {
               console.log('inside err');
          }
     }
}

export default TraineeController.getInstance();