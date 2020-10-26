export interface IPermissions {
     'getUsers': GetUsers;
}
export type GetUsers = {
     all: string[];
     read: string[];
     write: string[];
     delete: string[];
};

export interface IUsers {
     [index: number]: {traineeEmail: string; reviewerEmail: string};
}