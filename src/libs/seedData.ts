import UserRepository from '../Repositories/User/UserRepository';

const userRepository: UserRepository = new UserRepository();
export default () => {
     userRepository.count()
     .then(res => {
          if (res === 0) {
               console.log('Data sending in progress');
               userRepository.create({ name: 'Head Trainer', role: 'head-trainer', email: 'headtrainer@successive.tech', password: 'head@123'});
               userRepository.create({ name: 'Trainer', role: 'trainer', email: 'trainerX@successive.tech', password: 'trainer@123'});
          }
     })
     .catch(err => console.log(err));
};