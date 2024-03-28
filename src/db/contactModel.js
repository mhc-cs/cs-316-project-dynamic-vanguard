/**
 * CRUD (create, retrieve, update, delete) operations for contactForm collection in websiteData database
 * created with help from MongoDB documentation and Mongoose Documentation 
 * @author Fevronia 
 */


import mongoose from 'mongoose';

// Define Schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    newsletter: Boolean
});

// Define Model (instances of models are documents)
const Contact = mongoose.model('contact', contactSchema);

/**
 * create instance of model 
 * @param {*} name 
 * @param {*} email 
 * @param {*} message 
 * @param {*} newsletter 
 */
export async function createContactDocument(name, email, message, newsletter) {
    const contact = new Contact({ name, email, message, newsletter });
    await contact.save();
}

/**
 * finds a specific document
 * @param {*} name 
 * @returns found contact
 */
export async function findContactByName(name) {
    return Contact.find({ name });
}

/**
 * updates specific document
 * @param {*} name 
 * @param {*} updatedFields 
 */
export async function updateContactByName(name, updatedFields) {
    await Contact.updateMany({ name }, { $set: updatedFields });
}

/**
 * deletes specific document 
 * @param {*} name 
 */
export async function deleteContactByName(name) {
    await Contact.deleteMany({ name });
}



