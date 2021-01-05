import {permissions} from '../constants'
export default function hasPermissions(moduleName,role,permissionType)
{
     if(Object.getOwnPropertyNames(permissions).includes(moduleName))                //Condition for checking correct "ModuleName"
     {
     if(permissions[moduleName].all.includes(role))                             //Condition for checking if "permissionType(all)" includes the specified "role"
     {
          return permissions[moduleName].all.includes(role);              //returns true/false based on "role" present in "permissionType(all)"     
     }
     else
     {
          return permissions[moduleName][permissionType].includes(role);        //returns true/false based on "role" present in "permissionType(other than all)"
     }
     }
     else
     {
          return Object.getOwnPropertyNames(permissions).includes(moduleName);                                        //prints message if "ModuleName" is incorrect
     }
     }