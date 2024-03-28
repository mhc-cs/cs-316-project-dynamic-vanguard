import {createContactDocument,findContactByName,updateContactByName,deleteContactByName} from './contactModel.js';
import mongoose from 'mongoose';

/**
 * connect to websiteData db
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
 * tests contact schema 
 */
export async function executeContactFormSchema(){
    
    const uri = process.env.DB_URI;
    await connectToDatabase(uri);

    try{
    
        console.log('CREATE contact');
        await createContactDocument('Mary Lyon', 'vansi22f@mtholyoke.edu', 'just a lil database document', true);
    
        console.log('FIND contact');
        console.log(await findContactByName('Mary Lyon'));
    
        console.log('UPDATE contact email');
        await updateContactByName('Mary Lyon', { email: 'nia13marie@gmail.com' });
        console.log(await findContactByName('Mary Lyon'));
    
        // console.log('DELETE contact');
        // await deleteContactByName('Mary Lyon');
        // console.log(await findContactByName('Mary Lyon')); // Should return an empty array
    }
    catch(error){
        console.error('CRUD Methods Failed', error);
    }
    
}