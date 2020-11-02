import { Router } from "express";
import TraineeController from './Controller';
const traineeRouter =  Router();

traineeRouter.route('/')
     .get(TraineeController.get)
     .post(TraineeController.post)
     .put(TraineeController.update)
     .delete(TraineeController.delete);

export default traineeRouter;
