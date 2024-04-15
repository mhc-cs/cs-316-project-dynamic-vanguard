/**
* Connects to MongoDB and handles POST, GET, PATCH, DELETE for accounts
* @author Carlin Rosen
*/

import { NextResponse } from 'next/server';
import { createUserDocument, findUserByName, updateUserByName, deleteUserByName } from '../../../db/userModel' ;
import { connectToDatabase } from '../../../db/database';
import mongoose  from 'mongoose';

export async function POST(req: Request) {
    const {name, userName, password, email, access} = await req.json();
          
    try {
        const uri = process.env.DB_URI;
        await connectToDatabase(uri);
        
        await createUserDocument(name, userName, password, email, access);
        
        return NextResponse.json({
            msg: ["Account created"],
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
                msg: "Account creation failed"
            });
        }
    }
}

export async function GET(req: Request){
    const name = await req.json();
    
    try {
        const uri = process.env.DB_URI;
        await connectToDatabase(uri);

        await findUserByName(name);

        return NextResponse.json({
            msg: ["User found"],
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
                msg: "Couldn't find user"
            });
        }
    }
}

export async function PATCH(req: Request){
    const {name, updatedFields} = await req.json();

    try {
        const uri = process.env.DB_URI;
        await connectToDatabase(uri);

        await updateUserByName(name, updatedFields);

        return NextResponse.json({
            msg: ["Account updated"],
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
                msg: "Couldn't update information"
            });
        }
    }
}

export async function DELETE(req: Request){
    const name = await req.json();

    try {
        const uri = process.env.DB_URI;
        await connectToDatabase(uri);

        await deleteUserByName(name);

        return NextResponse.json({
            msg: ["Account deleted"],
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
                msg: "Couldn't delete account"
            });
        }
    }
}


   
    