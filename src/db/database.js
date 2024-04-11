import {createContactDocument,findContactByName,updateContactByName,deleteContactByName} from './contactModel.js';
import {createUserDocument,findUserByName,updateUserByName,deleteUserByName} from './userModel.js';
import {createProductDocument,findProductByName,updateProductByName,deleteProductByName} from './productModel.js';
import { addToNewsletter,scheduleSession,findAllSubscribers,findAllEmails, findEmail, updateEmail,deleteEmail,unsubscribeFromNewsletter} from './newsletterModel.js';
import mongoose from 'mongoose';

/**
 * connect to db
 * @param {} uri 
 */
export async function connectToDatabase(uri) {
    try {
        await mongoose.connect(uri,{dbName:'websiteData'});
        console.log('Successfully connected to MongoDB Database');
    } catch (error) {
        console.error('Connection to MongoDB Database failed', error);
        process.exit();
    }
}

/**
 * test contact schema 
 */
export async function executeContactFormSchema(){
    try{
        await createContactDocument('Mary Lyon', 'vansi22f@mtholyoke.edu', 'just a lil test document', true);
        await findContactByName('Mary Lyon');
        await updateContactByName('Mary Lyon', { email: 'nia13marie@gmail.com' });
        await findContactByName('Mary Lyon');
        await deleteContactByName('Mary Lyon');
        await findContactByName('Mary Lyon');
    }
    catch(error){
        console.error('contact schema CRUD Methods Failed', error);
    }
}

/**
 * test user schema 
 */
export async function executeUserSchema(){
    try{
        await createUserDocument( 'Aya Naomi Yabra', 'yabra22n', 'password', 'yabra22n@mtholyoke.edu', true);
        await findUserByName('Aya Naomi Yabra');
        await updateUserByName('Aya Naomi Yabra', { email: 'yabra22n@mtholyoke.edu' });
        await findUserByName('Aya Naomi Yabra');
        await deleteUserByName('Mary Lyon');
        await findUserByName('Mary Lyon');
    }
    catch(error){
        console.error('user schema CRUD Methods Failed', error);
    }
}

/**
 * test product schema 
 */
export async function executeProductSchema(){
    try{
        await createProductDocument('Herb Mix for Sleeping', 'Medicine', 'this will help you sleep', 'this could be a link', false);
        await findProductByName('Herb Mix for Sleeping');
        await updateProductByName('Herb Mix for Sleeping', { name: 'Sleepytime Herbal Mix' });
        await findProductByName('Sleepytime Herbal Mix');
        await deleteProductByName('Sleepytime Herbal Mix');
    }
    catch(error){
        console.error('product schema CRUD Methods Failed', error);
    }
}

/**
 * test newsletter schema 
 */
export async function executeNewsletterSchema(){
    try{
        await addToNewsletter( 'nia13marie@gmail.com');
        await findAllSubscribers();
        await findAllEmails();
        await updateEmail('nia13marie@gmail.com', { email: 'fevroniavansickle@gmail.com' });
        await findEmail('fevroniavansickle@gmail.com');
        await scheduleSession('fevroniavansickle@gmail.com');
        await deleteEmail('fevroniavansickle@gmail.com');
    }
    catch(error){
        console.error('newsletter schema CRUD Methods Failed', error);
    }
}

/**
 * test db connection and all schemas
 */
export async function executeAll(){
    const uri = process.env.DB_URI;
   try{
    await connectToDatabase(uri);
    await executeContactFormSchema();
    await executeUserSchema()
    await executeProductSchema();
    await executeNewsletterSchema();
   }
   catch(error){
    console.error('CRUD Methods Failed', error);
    process.exit();
   }
}