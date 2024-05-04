/**
 * configures and runs database
 * @Fevronia 
 */

import { config } from 'dotenv';
import { executeAll } from './database.js';

config();
await executeAll();
