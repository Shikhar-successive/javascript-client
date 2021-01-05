// import { query } from 'express';
import IversionableDocument from './IVersionableDocument';
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
          const finalQuery = {deleteAt: {$exists: false}, deletedBy: {$exists: false}, ...query};
          return this.model.countDocuments(finalQuery);
     }

     public getAll(query: any, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
          console.log('---------projection skip >>', projection.skip);
          console.log('---------projection limit >>', projection.limit);
          console.log('---------Option sort >>', options.sort);
          console.log('---------Option order >>', options.order);
          if (options.sort === 'createdAt') {
               const defaultSort = {[options.sort]: -1};
               const finalQuery = { deleteAt: {$exists: false}, deletedBy: {$exists: false}, ...query };
               return this.model.find(finalQuery).skip(projection.skip).limit(projection.limit).sort(defaultSort);
          }
          else {
               const customSort = {[options.sort]: options.order};
               const finalQuery = { deleteAt: {$exists: false}, deletedBy: {$exists: false}, ...query };
               return this.model.find(finalQuery).skip(projection.skip).limit(projection.limit).sort(customSort);
          }
     }

     public findOne(query: any, options: any = {}): DocumentQuery<D, D> {
          const finalQuery = { deleteAt: {$exists: false}, deletedBy: {$exists: false}, ...query};
          return this.model.findOne(finalQuery, options);
     }

     public find(query: any, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
          const finalQuery = { deleteAt: null, ...query};
          return this.model.find(finalQuery, projection, options);
     }

     public deleteRecordAt(id: string, remover: string): DocumentQuery<D, D> {
          const findId: any = {originalId : id, deletedAt: {$exists: false}, deletedBy: {$exists: false}};
          const DeleteRec: any = {deletedAt: Date.now(), deletedBy: remover};
          return this.model.updateOne(  findId , DeleteRec );
     }

     public async delete(id: string, remover: string): Promise<D> {
          const data = await this.findOne({originalId: id, deletedAt: {$exists: false}, deletedBy: {$exists: false}});
                    if (data) {
                         return this.deleteRecordAt(id, remover);
                    }
                    else {
                         return null;
                    }
     }

     public async update(data: any): Promise<D> {
          const prev = await this.findOne({ originalId: data.originalId,
                                            deletedAt: {$exists: false},
                                            deletedBy: {$exists: false},
                                        });
          console.log('previous', prev);

          if (prev) {
               await this.delete(data.originalId, data.updatedBy);
          }
          else {
               return null;
          }
          const newData = Object.assign(JSON.parse(JSON.stringify(prev)), data);
          console.log('New data: ', newData);
          newData._id = VersioningRepository.generateObjectId();
          delete newData.deleteAt;
          newData.updatedAt = Date.now();
          const model = new this.model(newData);
          return model.save();
     }
}