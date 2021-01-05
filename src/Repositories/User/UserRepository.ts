import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersioningRepository from '../versionable/VersioningRepository';

export default class UserRepository extends VersioningRepository<IUserModel, mongoose.Model<IUserModel>> {

     constructor() {
          super(userModel);
     }

     public static generateObjectId() {
          return String(mongoose.Types.ObjectId());
     }

     public create(data): Promise<IUserModel> {
          console.log('User Repository : create', data);
          const id = UserRepository.generateObjectId();
          const model = new userModel({
               _id: id,
               ...data,
          });
          return model.save();
     }

     public count() {
          return userModel.countDocuments();
     }
}