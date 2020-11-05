import * as jwt from 'jsonwebtoken';
import  hasPermissions  from '../checkPermission';


export default(module, permissionType) => (req, res, next) => {
     console.log('=================================');

          // console.log('congif is ', module, permissionType);
          // console.log('header is ', req.headers['authorization']);
          try {
               const token = req.headers.authorization;
               const decodeUser = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
               console.log(decodeUser.role, module, permissionType);
               if (hasPermissions(module, decodeUser.role, permissionType)) {
               next();
               }
               else {
                     next({
                         error: 403,
                         message: 'Unauthorized'
                    });
               }

          } catch (error) {
               next({
                    error: 403,
                    message: 'Unauthorized'
               });
          }
};