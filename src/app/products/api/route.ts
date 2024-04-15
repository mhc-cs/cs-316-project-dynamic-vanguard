/**
 * Connects to database and handles get for products
 * @author Carlin Rosen
 */

import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../db/database';
import { createProductDocument, findProductByName, updateProductByName, deleteProductByName } from '../../../db/productModel';
import mongoose from 'mongoose';

export async function POST(req: Request){
    const {name, type, blurb, link, picture} = await req.json();

    try {

        //Connect to db
        const uri = process.env.DB_URI;
        connectToDatabase(uri);

        await createProductDocument(name, type, blurb, link, picture);

        return NextResponse.json({
            msg: ["Product created"],
            success: true,
        });
    } catch (error) {
    if (error instanceof mongoose.Error.ValidationError){
        const errorList = [];
        for (const e in error.errors) {
            errorList.push(error.errors[e].message);
        }

        return NextResponse.json({
            msg: errorList
        });
    } else {
        return NextResponse.json({
            msg: "Product creation failed"
        });
    }
}
}

export async function GET(req: Request){
    const {name} = await req.json();
    
    try{

        // Connect to db
        const uri = process.env.DB_URI;
        await connectToDatabase(uri);

        await findProductByName(name);

        return NextResponse.json({
            msg: "Product found",
            success: true,
        });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError){
            const errorList = [];
            for (const e in error.errors) {
                errorList.push(error.errors[e].message);
            }
 
            return NextResponse.json({
                msg: errorList
            });
        } else {
            return NextResponse.json({
                msg: "Couldn't find product"
            });
        }
    }
}

export async function PATCH(req: Request) {
    const {name, updatedFields} = await req.json();

    try{

        // Connect to db
        const uri = process.env.DB_URI;
        await connectToDatabase(uri);

        await updateProductByName(name, updatedFields);

        return NextResponse.json({
            msg: ["Product added"],
            success: true,
        });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError){
            const errorList = [];
            for (const e in error.errors) {
                errorList.push(error.errors[e].message);
            }
 
            return NextResponse.json({
                msg: errorList
            });
        } else {
            return NextResponse.json({
                msg: "Couldn't add product"
            });
        }
    }
}

export async function DELETE(req: Request){
    const name = await req.json();

    try {

        // Connect to db
        const uri = process.env.DB_URI;
        await connectToDatabase(uri);

        await deleteProductByName(name);

        return NextResponse.json({
            msg: ["Product deleted"],
            success: true,
        });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError){
            const errorList = [];
            for (const e in error.errors) {
                errorList.push(error.errors[e].message);
            }
 
 
            return NextResponse.json({
                msg: errorList
            });
        } else {
            return NextResponse.json({
                msg: "Product deletion failed"
            });
        }
    }
}