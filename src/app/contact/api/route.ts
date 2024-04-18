/**
* Connects to MongoDB and handles POST, GET, PATCH, and DELETE for contact form
* @author Carlin Rosen
*/

import { NextResponse } from 'next/server';
import { createContactDocument, findContactByName, updateContactByName, deleteContactByName } from '../../../db/contactModel' ;
import { connectToDatabase } from '../../../db/database';
import mongoose  from 'mongoose';


// Posts to the DB
export async function POST(req) {
   const {name, email, message, newsletter} = await req.json();
  
   try {
       const uri = process.env.DB_URI;
       await connectToDatabase(uri);


       await createContactDocument(name, email, message, newsletter);
       await contactSubmitted(name, email, message);

       return NextResponse.json({
           msg: ["Form submitted"],
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
               msg: "Form submission failed"
           });
       }
   }
}

export async function GET(req: Request){
    const name = await req.json();
    
    try {
        const uri = process.env.DB_URI;
        await connectToDatabase(uri);

        await findContactByName(name);
        return NextResponse.json({
            msg: ["Contact found"],
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
                msg: "Couldn't find contact"
            });
        }
    }
}

export async function PATCH(req: Request){
    const {name, updatedFields} = await req.json();

    try {
        const uri = process.env.DB_URI;
        await connectToDatabase(uri);

        await updateContactByName(name, updatedFields);
        return NextResponse.json({
            msg: ["Contact updated"],
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

        await deleteContactByName(name);
        return NextResponse.json({
            msg: ["Contact deleted"],
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
                msg: "Couldn't delete contact"
            });
        }
    }
}

