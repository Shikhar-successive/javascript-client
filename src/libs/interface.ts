
export interface IPermissions {
     'getUsers': GetUsers;
}
 type GetUsers = {
     all: string[];
     read: string[];
     write: string[];
     delete: string[];
};