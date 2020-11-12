import IConfig from './IConfig';
const envVar = require('dotenv').config();
const config: IConfig = envVar.parsed;
Object.freeze(config);
export default config;