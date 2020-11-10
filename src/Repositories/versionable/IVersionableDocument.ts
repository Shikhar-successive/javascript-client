import * as mongoose from 'mongoose';

export default interface IversionableDocument extends mongoose.Document {
     deletedAt: Date;
     originalId: string;
     createdAt: Date;
}