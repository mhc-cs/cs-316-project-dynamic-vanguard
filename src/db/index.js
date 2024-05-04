//written with help from: https://www.mongodb.com/languages/javascript/mongodb-and-npm-tutorial

import { config } from 'dotenv';
import { executeAll } from './database.js';

config();
await executeAll();
