/**
 * Connects to DB and handles post for newsletter information
 * @author Carlin Rosen
 */

import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../db/database';
import { addToNewsletter, scheduleSession } from '../../db/newsletterModel';
import mongoose from 'mongoose';


export async function POST(req: Request){

    const {email, name, message} = await req.json();

    try{
        const uri = process.env.DB_URI;
        await connectToDatabase(uri);
        await addToNewsletter(email, name);
        await scheduleSession(email, name, message);


        return NextResponse.json({
            msg: ["Added to newsletter"],
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
                msg: "Couldn't add to newsletter"
            });
        }
    }
}
