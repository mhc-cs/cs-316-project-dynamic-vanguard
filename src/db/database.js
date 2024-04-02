import {createContactDocument,findContactByName,updateContactByName,deleteContactByName} from './contactModel.js';
import {createUserDocument,findUserByName,updateUserByName,deleteUserByName} from './userModel.js';
import {createProductDocument,findProductByName,updateProductByName,deleteProductByName} from './productModel.js';
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
    
        console.log('CREATE contact');
        await createContactDocument('Mary Lyon', 'vansi22f@mtholyoke.edu', 'just a lil test document', true);
    
        console.log('FIND contact');
        console.log(await findContactByName('Mary Lyon'));
    
        console.log('UPDATE contact email');
        await updateContactByName('Mary Lyon', { email: 'nia13marie@gmail.com' });
        console.log(await findContactByName('Mary Lyon'));
    
        console.log('DELETE contact');
        // await deleteContactByName('Mary Lyon');
        console.log(await findContactByName('Mary Lyon')); // Should return an empty array
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
    
        console.log('CREATE user');
        await createUserDocument( 'Aya Naomi Yabra', 'yabra22n', 'password', 'yabra22n@mtholyoke.edu');
        console.log('FIND user');
        console.log(await findUserByName('Aya Naomi Yabra'));
    
        console.log('UPDATE user email');
        await updateUserByName('Aya Naomi Yabra', { email: 'yabra22n@mtholyoke.edu' });
        console.log(await findUserByName('Aya Naomi Yabra'));
    
        console.log('DELETE user');
        // await deleteUserByName('Mary Lyon');
        console.log(await findUserByName('Mary Lyon')); // Should return an empty array
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
    
        console.log('CREATE product');
        await createProductDocument( 'Herb Mix for Sleeping', 'Medicine', 'this will help you sleep', 'this could be a link', false);

        console.log('FIND product');
        console.log(await findProductByName('Herb Mix for Sleeping'));
    
        console.log('UPDATE product name');
        await updateProductByName('Herb Mix for Sleeping', { name: 'Sleepytime Herbal Mix' });
        console.log(await findProductByName('Sleepytime Herbal Mix'));
    
        console.log('DELETE product');
        // await deleteProductByName('Sleepytime Herbal Mix');
        console.log(await findProductByName('Sleepytime Herbal Mix')); // Should return an empty array
    }
    catch(error){
        console.error('product schema CRUD Methods Failed', error);
    }
    
}



/**
 * test db connection and all schemas
 */
export async function executeAll(){
    const uri = process.env.DB_URI;
    await connectToDatabase(uri);
    // await executeContactFormSchema();
    // await executeUserSchema()
    // await executeProductSchema();


}