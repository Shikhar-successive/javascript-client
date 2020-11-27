import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import  hasPermissions  from '../checkPermission';
import config from '../../config/configuration';


export default(module, permissionType) => (req: Request, res: Response, next: NextFunction) => {
     console.log('=================================');
          try {
               const auth = 'authorization';
               const token = req.headers[auth];
               const key = config.SECRET_KEY;
               console.log(token);
               const decodeUser = jwt.verify(token, key);
               console.log('-------', decodeUser.docs);
               console.log(decodeUser.docs.role, module, permissionType);
               console.log(hasPermissions(module, decodeUser.docs.role, permissionType));
               if (hasPermissions(module, decodeUser.docs.role, permissionType)) {
                    res.locals.val = decodeUser.docs;
                    next();
               }
               else {
                     res.status(401).send({
                         status: 'Unauthorized',
                         message: 'User is Unauthorized'
                    });
               }

          } catch (err) {
               res.status(404).send({
                    error: err,
                    message: 'Token Expired'
               });
          }
};