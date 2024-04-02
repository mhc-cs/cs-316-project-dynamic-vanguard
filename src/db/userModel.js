/**
 * CRUD (create, retrieve, update, delete) operations for users collection in websiteData database
 * created with help from MongoDB documentation and Mongoose Documentation 
 * @author Fevronia 
 */


import mongoose from 'mongoose';

// Define Schema
const userSchema = new mongoose.Schema({
    name: String,
    userName: String,
    password: String, 
    // dateJoined: Date,
    email: String,
});

// Define Model (instances of models are documents)
const User = mongoose.model('user', userSchema);

/**
 * create instance of model 
 * @param {*} name
 * @param {*} userName
 * @param {*} password
//  * @param {*} dateJoined
 * @param {*} email 
 */
export async function createUserDocument( name, userName, password, email) {
    // code for once hooked to UI
    // let year = getFullYear();
    // let month = getMonth();
    // let day = getDate();
    // let dateJoined = month + '.' + day + '.' + year;
    const user = new User({name, userName, password, email});
    await user.save();
}

/**
 * finds a specific document
 * @param {*} name 
 * @returns found user
 */
export async function findUserByName(name) {
    return User.find({ name });
}

/**
 * updates specific document
 * @param {*} name 
 * @param {*} updatedFields 
 */
export async function updateUserByName(name, updatedFields) {
    await User.updateMany({ name }, { $set: updatedFields });
}

/**
 * deletes specific document 
 * @param {*} name 
 */
export async function deleteUserByName(name) {
    await User.deleteMany({ name });
}



