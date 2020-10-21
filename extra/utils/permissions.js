const permissions = {
               'getUsers': {
               all: ['head-trainer'],
               read : ['trainee', 'trainer'],
               write : ['trainer'],
               delete: [],
               },
               'getProducts': {
                    all: ['head-trainer'],
                    read : ['trainee', 'trainer'],
                    write : ['trainer'],
                    delete: [],
                    }
             }

function hasPermissions(moduleName,role,permissionType)
{
     if(role === "head-trainer")
     {
          console.log(permissions[moduleName].all.includes(role));
     }
     else
     {
          console.log(permissions[moduleName][permissionType].includes(role));
          
     }
}

hasPermissions('getUsers','trainer','read');
hasPermissions('getUsers','head-trainer','read');
hasPermissions('getUsers','trainee','write');
hasPermissions('getUsers','head-trainer','delete');