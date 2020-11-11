import * as express from 'express';

import UserController from './Controller';
import validation from './validation';
import validationHandler from '../../libs/validationHandler';
import { authMiddilware } from '../../libs/routes';

const UserRouter =  express.Router();

UserRouter.route('/')
     .get(authMiddilware('getUsers', 'read'), validationHandler(validation.get), UserController.get)
     // .post(authMiddilware('getUsers', 'read'), validationHandler(validation.create), UserController.post)
     .put(authMiddilware('getUsers', 'read'), validationHandler(validation.update), UserController.update)
     .delete(authMiddilware('getUsers', 'read'), validationHandler(validation.delete), UserController.delete);

UserRouter.route('/:id')
     .delete(authMiddilware('getUsers', 'read'), validationHandler(validation.delete), UserController.delete);

UserRouter.route('/login')
     .post(validationHandler(validation.create), UserController.login);

UserRouter.route('/me')
     .get(validationHandler(validation.get), authMiddilware('getUsers', 'read'), UserController.me);
export default UserRouter;
