/**
 * CRUD (create, retrieve, update, delete) operations for users collection in websiteData database
 * created using MongoDB and Mongoose Documentation 
 * @author Fevronia 
 */


import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


// define Schema
const userSchema = new mongoose.Schema({
    name: String,
    userName: String,
    password: String,
    joinedAt: {
        type: Date,
        default: Date.now
    },
    email: String,
    access: Boolean,
});

userSchema.pre('save', function(next) {
    const user = this;

    if(!user.isModified('password')) return next();

    try{
        const salt = bcrypt.genSalt(10);
        this.password = bcrypt.hash(this.password, salt);
        return next();
    } catch (error){
        return next(error);
    }
});

userSchema.methods.comparePassword = function(userPassword, cb) {
    bcrypt.compare(userPassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

// define Model (instances of models are documents)
const User = mongoose.model('user', userSchema);

/**
 * create instance of model 
 * @param {*} name
 * @param {*} userName
 * @param {*} password
 * @param {*} email 
* @param  {*} access
 */
export async function createUserDocument( name, userName, password, email, access) {
    const user = new User({name, userName, password, email, access});
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



