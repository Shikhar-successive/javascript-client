import validateEmail from './helpers';
import{ users } from '../constants';
export default function validateUsers(Users: object): void {
     const UserList: string[] = [];
     const ValidUser: string[] = [];
     const InvalidUser: string[] = [];
     for (let i: number = 0 ; i < Object.keys(Users).length ; i++) {
          validateEmail(Users[i].traineeEmail) ? ValidUser.push(Users[i].traineeEmail) : InvalidUser.push(Users[i].traineeEmail);
          validateEmail(Users[i].reviewerEmail) ? ValidUser.push(Users[i].reviewerEmail) : InvalidUser.push(Users[i].reviewerEmail);
     }
     console.log('\nValid user list', ValidUser, '\nValid user count', ValidUser.length);
     console.log('\nInvalid user list', InvalidUser, '\nInvalid user count', InvalidUser.length);
}