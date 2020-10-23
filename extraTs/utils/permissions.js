import {permissions} from '../constants'
export default function hasPermissions(moduleName,role,permissionType)
{
     if(Object.getOwnPropertyNames(permissions).includes(moduleName))                //Condition for checking correct "ModuleName"
     {
     if(permissions[moduleName].all.includes(role))                             //Condition for checking if "permissionType(all)" includes the specified "role"
     {
          console.log(">>Checking Permission of",role,"in Module",moduleName,"of Type",permissionType,":");
          return permissions[moduleName].all.includes(role);              //returns true/false based on "role" present in "permissionType(all)"     
     }
     else
     {
          console.log("\n>>Checking Permission of",role,"in Module",moduleName,"of Type",permissionType,":");
          return permissions[moduleName][permissionType].includes(role);        //returns true/false based on "role" present in "permissionType(other than all)"
     }
     }
     else
     {
          console.log("\n>>Checking Permission of",role,"in Module",moduleName,"of Type",permissionType,":");
          return Object.getOwnPropertyNames(permissions).includes(moduleName);                                        //prints message if "ModuleName" is incorrect
     }
     }