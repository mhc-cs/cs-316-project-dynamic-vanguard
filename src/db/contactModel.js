/**
* CRUD (create, retrieve, update, delete) operations for contacts collection in websiteData database
* created with help from MongoDB documentation and Mongoose Documentation
* @author Fevronia
*/

import mongoose from 'mongoose';


// Define Schema
const contactSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
   email: String,
   message: String,
   newsletter: Boolean
});


// Define Model (instances of models are documents)
export const Contact = mongoose.model('contact', contactSchema);


/**
* create instance of model
* @param {*} firstName
* @param {*} lastName
* @param {*} email
* @param {*} message
* @param {*} newsletter
*/
export async function createContactDocument(firstName, lastName, email, message, newsletter) {
   const contact = new Contact({ firstName, lastName, email, message, newsletter });
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