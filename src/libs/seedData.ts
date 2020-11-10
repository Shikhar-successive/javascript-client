import UserRepository from '../Repositories/User/UserRepository';
import { userModel } from '../Repositories/User/UserModel';


export default () => {
     const userRepository: UserRepository = new UserRepository();
     userRepository.count()
     .then(res => {
          if (res === 0) {
               console.log('Data sending in progress');
               userRepository.createX({ name: 'Head Trainer', role: 'head-trainer', email: 'headtrainer@successive.tech', password: 'head@123'});
               userRepository.createX({ name: 'Trainer', role: 'trainer', email: 'trainerX@successive.tech', password: 'trainer@123'});
               console.log('----------------');
          }
     })
     .catch(err => console.log(err));
};