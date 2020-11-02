import * as express from 'express';

import TraineeController from './Controller';
import validation from './validation';
import validationHandler from '../../libs/validationHandler';

const traineeRouter =  express.Router();

traineeRouter.route('/')
     .get(validationHandler(validation.get), TraineeController.get)
     .post(TraineeController.post)
     .put(TraineeController.update)
     .delete(TraineeController.delete);

export default traineeRouter;
