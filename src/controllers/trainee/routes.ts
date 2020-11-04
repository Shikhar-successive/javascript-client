import * as express from 'express';

import TraineeController from './Controller';
import validation from './validation';
import validationHandler from '../../libs/validationHandler';

const traineeRouter =  express.Router();

traineeRouter.route('/')
     .get(validationHandler(validation.get), TraineeController.get)
     .post(validationHandler(validation.create), TraineeController.post)
     .put(validationHandler(validation.update), TraineeController.update)
     .delete(validationHandler(validation.delete), TraineeController.delete);

traineeRouter.route('/:id').delete(validationHandler(validation.delete), TraineeController.delete);

export default traineeRouter;
