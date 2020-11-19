import * as bcrypt from 'bcrypt';
import UserRepository from '../Repositories/User/UserRepository';
import config from '../config/configuration';



export default () => {
     const userRepository: UserRepository = new UserRepository();
     userRepository.count()
     .then(res => {
          if (res === 0) {
               console.log('Data seeding in progress');
               bcrypt.hash(config.PASSWORD, 5, (err,data) => {
                    if (err){
                         console.log(err);
                    }
                    else{
                         userRepository.createX({ name: 'Head Trainer',
                                                  role: 'head-trainer',
                                                  email: 'headtrainer@successive.tech',
                                                  password: data});

                         userRepository.createX({ name: 'Trainer',
                                                  role: 'trainer',
                                                  email: 'trainerX@successive.tech',
                                                  password: data});

                         console.log('Seeding Done');
                    }
               });

          }
     })
     .catch(err => console.log(err));
};