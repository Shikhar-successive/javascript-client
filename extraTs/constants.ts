import { IPermissions } from './interface';
import { IUsers } from './interface';
export const permissions: IPermissions = {
     'getUsers': {
     all: ['head-trainer', 'manager'],
     read : ['trainee', 'trainer'],
     write : ['trainer'],
     delete: [],
     },

   };

export  const users: IUsers = [
     {
          traineeEmail : 'shikhar.singh@successive.tech',
          reviewerEmail : 'naresh.kumar@tcs.tech',
     },

     {
          traineeEmail : 'niyati.pavar@tcs.tech',
          reviewerEmail : 'nilesh.agarwal@successive.tech',
     },

     {
          traineeEmail : 'sam.sharma@wipro.tech',
          reviewerEmail : 'vimal.avasti@wipro.tech',
     },

     {
          traineeEmail : 'shyam.bansal@successive.tech',
          reviewerEmail : '@successive.techamit.kumar',
     },

     {
          traineeEmail : 'rohan.kumawat@google.tech',
          reviewerEmail : 'suraj.kumar@google.tech',
     },

];