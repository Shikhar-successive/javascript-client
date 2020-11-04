import * as express from 'express';
import { traineeRouter } from './controllers';

const mainRouter = express.Router();

mainRouter.use('/trainee', traineeRouter);

export default mainRouter;