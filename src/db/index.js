//written with help from: https://www.mongodb.com/languages/javascript/mongodb-and-npm-tutorial

import { config } from 'dotenv';
import { executeContactFormSchema } from './database.js';

config();
await executeContactFormSchema();

