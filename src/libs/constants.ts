import { IPermissions } from './interface';
export const permissions: IPermissions = {
     'getUsers': {
     all: ['head-trainer', 'manager'],
     read : ['trainee', 'trainer'],
     write : ['trainer'],
     delete: [],
     },

   };