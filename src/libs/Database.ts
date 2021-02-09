import * as mongoose from 'mongoose';
import seedData from './seedData';

class Database {
     static async open(MongoURL) {
          console.log('inside open');
          await mongoose.connect(MongoURL, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
               if (err) {
                    return err;
               }
               seedData();
          });
     }

     static async disconnect() {
          await mongoose.connection.close((err) => {
               if (err) {
                    console.log(err);
                    return;
               }
               console.log('Disconnect');
          });
     }
}

export default Database;