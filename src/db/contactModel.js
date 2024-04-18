/**
* CRUD (create, retrieve, update, delete) operations for contacts collection in websiteData database
* created with help from MongoDB documentation and Mongoose Documentation
* @author Fevronia
*/

import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';
import { addToNewsletter } from './newsletterModel.js'
config();


//configure mail service
const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
       user: process.env.EMAIL_USER, 
       pass: process.env.EMAIL_PASS, 
   }
});

// Define Schema
const contactSchema = new mongoose.Schema({
   name: String,
   email: String,
   message: String,
   newsletter: Boolean
});

/**
 * send contact email to Aya
 * @param {*} name
 * @param {*} email 
 * @param {*} message 
 */
export async function contactSubmitted(name, email, message){
   
    // Send email to Aya about the contact
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      subject: name + ' wants to contact you', 
      text: 'Their message: ' + message + '\nTheir email: ' + email
  }
      await transporter.sendMail(mailOptions);
}

// Define Model
export const Contact = mongoose.model('contact', contactSchema);

/**
* create instance of model
* @param {*} firstName
* @param {*} lastName
* @param {*} email
* @param {*} message
* @param {*} newsletter
*/
export async function createContactDocument(name, email, message, newsletter) {
   const contact = new Contact({ name, email, message, newsletter });
   await contact.save();

   //send newsletter welcome email
   if (newsletter){
      addToNewsletter(email, name)
   }
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