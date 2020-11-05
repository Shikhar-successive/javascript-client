import * as mongoose from 'mongoose';

interface IUserModel extends mongoose.Document {
     id: string;
     name: string;
     email: string;
     role: string;
     password: string;
}

export default IUserModel;