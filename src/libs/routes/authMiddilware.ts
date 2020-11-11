import * as jwt from 'jsonwebtoken';
import  hasPermissions  from '../checkPermission';
import configuration from '../../config/configuration';


export default(module, permissionType) => (req, res, next) => {
     console.log('=================================');

          // console.log('congif is ', module, permissionType);
          // console.log('header is ', req.headers['authorization']);
          try {
               const token = req.headers.authorization;
               const key = configuration.SECRET_KEY;
               console.log(token);
               const decodeUser = jwt.verify(token, key);
               console.log(decodeUser.docs);
               console.log(decodeUser.docs.role, module, permissionType);
               console.log(hasPermissions(module, decodeUser.docs.role, permissionType));
               if (hasPermissions(module, decodeUser.docs.role, permissionType)) {
                    res.locals.val = decodeUser.docs;
                    next();
               }
               else {
                     req.send({
                         error: 403,
                         message: 'Unauthorized'
                    });
               }

          } catch (error) {
               req.send({
                    error: 403,
                    message: 'Something went wrong'
               });
          }
};