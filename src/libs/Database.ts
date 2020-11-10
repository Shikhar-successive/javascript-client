import * as mongoose from 'mongoose';
import seedData from './seedData';

// console.log(mongoose);
class Database {
     static open(MongoURL) {

          return new Promise((resolve, reject) => {
               console.log('inside open');
               mongoose.connect(MongoURL, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
                    if (err) {
                         reject(err);
                         return;
                    }
                    seedData();
                    resolve();
               });
          });

     }

     static disconnect() {
          mongoose.connection.close((err) => {
               if (err) {
                    console.log(err);
                    return;
               }
               console.log('Disconnect');
          });
     }
}

export default Database;