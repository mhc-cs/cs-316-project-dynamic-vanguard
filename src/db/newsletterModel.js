/**
 * CRUD (create, retrieve, update, delete) operations for newsletter collection in websiteData database
 */

import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';
config();

//configure mail service
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
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
        from: process.env.EMAIL_USER, 
        to: email,
        subject: 'Welcome '+ name + '!',
        html:  ' <p>Welcome ' + name + ',</p> <p>Thank you so much for becoming a part of our community!</p><p>To never miss our monthly newsletter, make sure to:</p><ul><li>Save this email address to your contacts so it doesn\'t accidentally go to spam.</li></ul><p>Cheers,</p><p>Aya Wild</p><p>You received this email because you subscribed to our list. You can unsubscribe at any time.</p>'
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
        from: process.env.EMAIL_USER, 
        to: email,
        subject: 'Welcome '+ name + '!',
        html: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Welcome Warrior!</title></head><body style="font-family: Arial, sans-serif;"><h1 style="color: #333;">Welcome Warrior!</h1><p>Dear ' + name + ',</p><p>Thank you so much for joining our community! As a token of appreciation, we\'d like to offer you a free session with our community leader, Aya Wild. This session is an opportunity to discuss your goals, challenges, and how we can support you on your journey.</p><p>To schedule your free session with Aya, please click the link below:</p><a href="https://yourdomain.com/schedule-session" style="display: inline-block; background-color: #007bff; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px;">Schedule Free Session</a><p>If you have any questions or need assistance, feel free to reply to this email. We\'re here to help!</p><p>Best regards,<br>Aya Wild</p><p><em>You received this email because you subscribed to our list. You can unsubscribe at any time.</em></p></body></html>'
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
        from: process.env.EMAIL_USER, 
        to: process.env.EMAIL_USER, 
        subject: name + ' has requested a free session!',
        text: 'Hi Aya,\n' + name + ' has been sent an email to schedule their free session with you.\nTheir email is: '+ email + '\nTheir message: '+message
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

