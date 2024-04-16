/**
 * CRUD (create, retrieve, update, delete) operations for newsletter collection in websiteData database
 */

import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

//configure mail service 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vansi22f@mtholyoke.edu',//ayawconsultant@gmail.com
        pass: 'maes zkyv hgwi zsom', //change this on Thurs 4/18
    }
});

// define schema
const newsletterSchema = new mongoose.Schema({
    email: String,
    name: String,
    message: String,
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
export async function addToNewsletter(email, name) {
   
    // Save the email to the newsletter list
   const newsletterEntry = new Newsletter({ email, name});
   await newsletterEntry.save();

    // Send a welcome email to the new subscriber
    const mailOptions = {
        from: 'vansi22f@mtholyoke.edu', //CHANGE
        to: email,
        subject: 'Welcome'+ name + '!',
        text: 'Welcome Warrior!\nThank you so much for becoming a part of our community!\nTo never miss our monthly newsletter, make sure to:\nSave this email address to your contacts so it doesn\'t accidentally go to spam.\nCheers,\nAya Wild\nYou received this email because you subscribed to our list. You can unsubscribe at any time.'
    }
        await transporter.sendMail(mailOptions);
}

/**
 * sends email for free session 
 *  @param {*} email 
 */
export async function scheduleSession(email, name, message) {
   
    //send scheduling email to client
    const mailOptions = {
        from: 'vansi22f@mtholyoke.edu', //CHANGE THIS
        to: email,
        subject: 'Welcome'+ name + '!',
        text: 'Welcome Warrior! Schedule your free session'
    };
    await transporter.sendMail(mailOptions);
    await scheduleSessionNotice(email, name, message);
}

/**
 * notify Aya of request for free session 
 *  @param {*} email 
 */
export async function scheduleSessionNotice(email, name, message) {
   
    //send email to Aya with client request info
    const mailOptions = {
        from: 'vansi22f@mtholyoke.edu', //CHANGE
        to: 'yabra22n@mtholyoke.edu', //CHANGE
        subject: name + 'has requested a free session!',
        text: 'Hi Aya,\n' + name + 'has been sent an email to schedule their free session with you.\nTheir email is:'+ email + '\nTheir message:\n'+message
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