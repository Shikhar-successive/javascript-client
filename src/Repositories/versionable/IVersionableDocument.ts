import * as mongoose from 'mongoose';

export default interface IversionableDocument extends mongoose.Document {
     deletedAt: Date;
     originalId: string;
     createdAt: Date;
     updatedAt: Date;
     createdBy: string;
     deletedBy: string;
     updatedBy: string;
}

export interface Iinvalidate {
     deletedAt: Date;
     originalId: string;

}