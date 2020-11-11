import { permissions } from './constants';
export default function hasPermissions(moduleName: string, role: string, permissionType: string): boolean {
     if (Object.getOwnPropertyNames(permissions).toString() === moduleName) {
     if (permissions[moduleName].all.includes(role)) {
          console.log('>>Checking Permission of', role, 'in Module', moduleName, 'of Type', permissionType, ':');
          return permissions[moduleName].all.includes(role);              // returns true/false based on "role" present in "permissionType(all)"
     }
     else {
          console.log('>>Checking Permission of', role, 'in Module', moduleName, 'of Type', permissionType, ':');
          return permissions[moduleName][permissionType].includes(role);        // returns true/false based on "role" present in "permissionType(other than all)"
     }
     }
     else {
          console.log('>>Checking Permission of', role, 'in Module', moduleName, 'of Type', permissionType , ':');
          return false;                                        // prints message if "ModuleName" is incorrect
     }
     }