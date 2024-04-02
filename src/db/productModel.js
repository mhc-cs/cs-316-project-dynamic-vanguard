/**
 * CRUD (create, retrieve, update, delete) operations for products collection in websiteData database
 * created with help from MongoDB documentation and Mongoose Documentation 
 * @author Fevronia 
 */


import mongoose from 'mongoose';

// Define Schema
const productSchema = new mongoose.Schema({
    name: String,
    type: String,
    blurb: String,
    link: String, //change this when we know the type of product
    picture: Boolean //I think this will need to be front end? Maybe a tkinter upload type thing 
});

// Define Model (instances of models are documents)
const Product = mongoose.model('product', productSchema);

/**
 * create instance of model 
 * @param {*} label 
 * @param {*} type 
 * @param {*} blurb 
 * @param {*} link 
 * @param {*} picture 
 */
export async function createProductDocument(name, type, blurb, link, picture) {
    const product = new Product({ name, type, blurb, link, picture});
    await product.save();
}

/**
 * finds a specific document
 * @param {*} name 
 * @returns found product
 */
export async function findProductByName(name) {
    return Product.find({ name });
}

/**
 * updates specific document
 * @param {*} name 
 * @param {*} updatedFields 
 */
export async function updateProductByName(name, updatedFields) {
    await Product.updateMany({ name }, { $set: updatedFields });
}

/**
 * deletes specific document 
 * @param {*} name 
 */
export async function deleteProductByName(name) {
    await Product.deleteMany({ name });
}



