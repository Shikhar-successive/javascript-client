const permissions = {
               'getUsers': {
               all: ['head-trainer','manager'],
               read : ['trainee', 'trainer'],
               write : ['trainer'],
               delete: [],
               },
               
             }

function hasPermissions(moduleName,role,permissionType)
{
     if(Object.getOwnPropertyNames(permissions).includes(moduleName))                //Condition for checking correct "ModuleName"
     {
          if(permissions[moduleName].all.includes(role))                             //Condition for checking if "permissionType(all)" includes the specified "role"
          {
               console.log(permissions[moduleName].all.includes(role));              //prints true/false based on "role" present in "permissionType(all)"     
          }
          else
          {
          console.log(permissions[moduleName][permissionType].includes(role));        //returns true/false based on "role" present in "permissionType(other than all)"
          }
     }
     else
     {
          console.log("Invalid Module Name");                                        //prints message if "ModuleName" is incorrect
     }
}

hasPermissions('getUsers','head-trainer','read');
hasPermissions('getUsers','manager','write');
hasPermissions('getUsers','trainee','write');
hasPermissions('getUsers','trainer','read');
hasPermissions('getUser','trainer','read');