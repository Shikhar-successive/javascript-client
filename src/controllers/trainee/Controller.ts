import { Request, Response, NextFunction } from 'express';
import UserRepository from '../../Repositories/User/UserRepository';
import VersioningRepository from '../../Repositories/versionable/VersioningRepository';
import IUserModel from '../../Repositories/User/IUserModel';


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
                    message: 'GenerateID fetched',
                    data: [
                         {

                         }
                    ]
               });
          } catch (err) {
               console.log('inside err');
          }
     }

     getAll(req: Request, res: Response, next: NextFunction) {
          try {
               console.log('Inside getall method');
               const userRepository: UserRepository = new UserRepository();
               userRepository.getAll({}, (err, data) => {
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

     findOne(req: Request, res: Response, next: NextFunction) {
          try {
               const userRepository: UserRepository = new UserRepository();
               const find = userRepository.findOne({email: 'trainerX@successive.tech'}, (err, data) => {
                    if (err) {
                         console.log(err);
                    }
                    else {
                         console.log(data);
                         res.send({
                              message: 'Trainee fetched',
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

     createUser(req: Request, res: Response, next: NextFunction) {
          try {
               const userRepository: UserRepository = new UserRepository();
               userRepository.createX(req.body );
               console.log('Inside creteuser method');
               res.send({
                    message: 'Trainee created',
                    data: [
                         {
                              data: 'data'
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