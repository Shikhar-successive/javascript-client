import * as express from 'express';

import TraineeController from './Controller';
import validation from './validation';
import validationHandler from '../../libs/validationHandler';
import { authMiddilware } from '../../libs/routes';

const traineeRouter =  express.Router();

traineeRouter.route('/')
     .get(authMiddilware('getUsers', 'read'), validationHandler(validation.get), TraineeController.get)
     .post(authMiddilware('getUsers', 'read'), validationHandler(validation.create), TraineeController.post)
     .put(authMiddilware('getUsers', 'read'), validationHandler(validation.update), TraineeController.update)
     .delete(authMiddilware('getUsers', 'read'), validationHandler(validation.delete), TraineeController.delete);

traineeRouter.route('/:id').delete(authMiddilware('getUsers', 'read'), validationHandler(validation.delete), TraineeController.delete);

traineeRouter.route('/getall')
     .get(TraineeController.getAll);

traineeRouter.route('/findone')
     .get(TraineeController.findOne);

traineeRouter.route('/create')
     .post(TraineeController.createUser);

export default traineeRouter;
