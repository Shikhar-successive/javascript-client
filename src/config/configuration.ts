import IConfig from './IConfig';
// tslint:disable-next-line: no-var-requires
const envVar = require('dotenv').config();
const config: IConfig = envVar.parsed;
Object.freeze(config);
export default config;