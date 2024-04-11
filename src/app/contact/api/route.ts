/**
* Connects to MongoDB and handles POST and GET
* @author Carlin Rosen
*/


import { NextResponse } from 'next/server';
import { createContactDocument } from '../../../db/contactModel' ;
import { connectToDatabase } from '../../../db/database';
import mongoose  from 'mongoose';


// Posts to the DB
export async function POST(req) {
   const {firstName, lastName, email, message, newsletter} = await req.json();
  
   try {
       const uri = process.env.DB_URI;
       await connectToDatabase(uri);


       await createContactDocument(firstName, lastName, email, message, newsletter);


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
           })
       }
   }
  
  
 }

