/**
* CRUD (create, retrieve, update, delete) operations for newsletter collection in websiteData database
* created with help from nodemailer documentation
* @author Fevronia
*/


import mongoose from 'mongoose';
import nodemailer from 'nodemailer';




//configure mail service
const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
       user: 'vansi22f@mtholyoke.edu',
       pass: 'maes zkyv hgwi zsom',
   }
});


// define schema
const newsletterSchema = new mongoose.Schema({
   email: String,
   name: String,
   subscribed: {
       type: Boolean,
       default: true
   },
   subscribedAt: {
       type: Date,
       default: Date.now
   }
});


// define model
const Newsletter = mongoose.model('newsletter', newsletterSchema);


/**
* add an email to the newsletter and send welcome email
* @param {*} email
*/
export async function addToNewsletter(email) {
   // Save the email to the newsletter list
   const newsletterEntry = new Newsletter({ email});
   await newsletterEntry.save();


   // Send a welcome email to the new subscriber
   const mailOptions = {
       from: 'vansi22f@mtholyoke.edu',
       to: email,
       subject: 'Welcome!', //no name in order to reuse code
       text: 'Welcome Warrior!\nThank you so much for becoming a part of our community!\nTo never miss our monthly newsletter, make sure to:\nSave this email address to your contacts so it doesn\'t accidentally go to spam.\nCheers,\nAya Wild\nYou received this email because you subscribed to our list. You can unsubscribe at any time.'
   };


   await transporter.sendMail(mailOptions);
}


/**
* sends email for free session
*  @param {*} email
*/
export async function scheduleSession(email) {
   const mailOptions = {
       from: 'vansi22f@mtholyoke.edu',
       to: email,
       subject: 'Welcome!', //no name in order to reuse code
       text: 'Welcome Warrior! Schedule now'
   };


   await transporter.sendMail(mailOptions);
}
/**
* get all subscribers in collection
* @returns subscribers
*/
export async function findAllSubscribers() {
   return await Newsletter.find({ subscribed: true });
}


/**
* gets all emails in collection
* @returns all emails
*/
export async function findAllEmails() {
   return await Newsletter.find();
}


/**
* gets specific email
* @returns specific email
*/
export async function findEmail(email) {
   return await Newsletter.find({email});
}


/**
* updates email in collection
* @param {*} oldEmail
* @param {*} newEmail
*/
export async function updateEmail(email, updatedfields) {
   await Newsletter.updateMany({email}, { $set: updatedfields});
}


/**
* delete entry
* @param {*} email
*/
export async function deleteEmail(email) {
   await Newsletter.deleteMany({ email });
}


/**
* unsubscribe from newsletter
* @param {*} email
*/
export async function unsubscribeFromNewsletter(email) {
   await Newsletter.updateMany({ email }, { $set: { subscribed: false } });
}


export default Newsletter;


