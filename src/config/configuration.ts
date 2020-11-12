import * as dotenv from 'dotenv';
import IConfig from './IConfig';
const envVar = dotenv.config().parsed;
const config: IConfig = {
     PORT: envVar.PORT,
     NODE_ENV: envVar.NODE_ENV,
     SECRET_KEY: envVar.SECRET_KEY,
     MONGO_URL: envVar.MONGO_URL
};
Object.freeze(config);
export default config;