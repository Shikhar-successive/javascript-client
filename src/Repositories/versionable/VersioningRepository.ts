// import { query } from 'express';
import * as mongoose from 'mongoose';
import { DocumentQuery, Query } from 'mongoose';


export default class VersioningRepository <D extends mongoose.Document, M extends mongoose.Model<D>> {
     public static generateObjectId() {
          return String(mongoose.Types.ObjectId());
     }

     private model: M;

     constructor(model) {
          this.model = model;
     }

     public async createX(options: any): Promise<D> {
          const id = VersioningRepository.generateObjectId();
          const model = new this.model({
               ...options,
               _id: id,
               originalId: id
          });
          return await model.save();
     }

     public VerCount(query: any): Query<number> {
          const finalQuery = {deleteAt: null, ...query};
          return this.model.countDocuments(finalQuery);
     }

     public getAll(query: any, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
          const finalQuery = { deletedAt: null, ...query };
          return this.model.find(finalQuery, projection, options);
     }

     public findOne(query: any, options: any = {}): DocumentQuery<D, D> {
          const finalQuery = { deleteAt: null, ...query};
          return this.model.findOne(finalQuery, options);
     }

     public find(query: any, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
          const finalQuery = { deleteAt: null, ...query};
          return this.model.find(finalQuery, projection, options);
     }

     // protected invalidate(id: string): DocumentQuery<D, D> {
     //      return this.model.update( { originalId: id, deletedAt: null }, { deletedAt: Date.now() });
     // }

     public async update(data: any): Promise<D> {
          console.log('searching previous document');
          const prev = await this.findOne({originalId: data.originalId, deletedAt: null});
          console.log('previous', prev);

          if (prev) {
               // await this.invalidate(data.originalId);
          }
          else {
               return null;
          }
          console.log('data: ', data);
          const newData = Object.assign(JSON.parse(JSON.stringify(prev)), data);
          console.log('New data: ', newData);
          newData._id = VersioningRepository.generateObjectId();
          delete newData.deleteAt;

          const model = new this.model(newData);
          return model.save();
     }
}