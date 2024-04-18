/**
 * Create, retrieve, update, delete operations for events database collection
 * Created using MongoDB documentation and Mongoose Documentation
 * @author Carlin Rosen
 */

import mongoose from 'mongoose';

// Create schema
const eventSchema = new mongoose.Schema ({
    name: String,
    date: String,
    about: String,
    picture: Image,
    cost: String,
});

// Create model
const Event = mongoose.Model('event', eventSchema);

/**
 * Create event
 * @param {*} name 
 * @param {*} date 
 * @param {*} about 
 * @param {*} picture 
 * @param {*} cost 
 */
export async function createEventDocument(name, date, about, picture, cost){
    const event = new Event({name, date, about, picture, cost});
    await event.save();
}

/**
 * Retrieve event
 * @param {*} name 
 * @returns event found by specified name
 */
export async function findEventDocumentByName(name){
    return Event.find({name});
}

/**
 * Update event
 * @param {*} name 
 * @param {*} updatedFields 
 */
export async function updateEventDocumentByName(name, updatedFields){
    await Event.updateMany({name}, {$set: updatedFields});
}

/**
 * Delete event
 * @param {*} name 
 */
export async function deleteEventDocumentByName(name){
    await Event.deleteMany({name});
}
