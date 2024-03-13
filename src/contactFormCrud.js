/**
 * CRUD (create, retrieve, update, delete) operations for contactForm collection in websiteData database
 * credit: written with help from: https://www.mongodb.com/languages/javascript/mongodb-and-npm-tutorial
 */


import { MongoClient } from 'mongodb';

//establish connection 
export async function connectToCluster(uri) {
    let mongoClient;
 
    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
 
        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
}

//create
export async function createContactDocument(collection) {
    const contactDocument = {
        name: 'Mary Lyon',
        //come back and verify email later
        email: 'vansi22f@mtholyoke.edu',
        message: 'just a lil database document',
    };
 
    await collection.insertOne(contactDocument);
 }

//retrieve
export async function findContactByName(collection, name) {
    return collection.find({ name }).toArray();
 }


//update
export async function updateContactsByName(collection, name, updatedFields) {
    await collection.updateMany(
        { name },
        { $set: updatedFields }
    );
 }

//delete
export async function deleteContactsByName(collection, name) {
    await collection.deleteMany({ name });
 }

//execute 
export async function executeContactFormCrud() {
    const uri = process.env.DB_URI;
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('websiteData');
        const collection = db.collection('contactForm');

        console.log('CREATE contact');
        await createContactDocument(collection);

        console.log('FIND contact');
        console.log(await findContactByName(collection, 'Mary Lyon'));

        console.log('UPDATE contact email');
        await updateContactsByName(collection, 'Mary Lyon', { email: 'nia13marie@gmail.com' });
        console.log(await findContactByName(collection, 'Mary Lyon'));

        console.log('Delete document');
        await deleteContactsByName(collection, 'Mary Lyon');
        console.log(await findContactByName(collection, 'Mary Lyon'));
        await deleteContactsByName(collection, 'Mary Lyon');
        console.log(await findContactByName(collection, 'Mary Lyon'));



    } finally {
        await mongoClient.close();
    }
}
