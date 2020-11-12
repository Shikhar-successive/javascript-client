import * as express from 'express';
import { traineeRouter, UserRouter } from './controllers';

const mainRouter = express.Router();

mainRouter.use('/trainee', traineeRouter);
mainRouter.use('/user', UserRouter);

export default mainRouter;