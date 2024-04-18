"use client";
import React, { useState } from "react";
import ContactForm from "../components/ContactForm";

export default function Page() {
   const submitContact = async (event) => {
       event.preventDefault();
      
       console.log("First name: ", firstName);
       console.log("Last name: ", lastName);
       console.log("Email: ", email);
       console.log("Message: ", message);
       console.log("Newsletter: ", newsletter);


       //Post to db on submit
       const res = await fetch("/contact/api", {
           method: "POST",
           body: JSON.stringify({
               firstName,
               lastName,
               email,
               message,
               newsletter,
           }),
       });


       if (!res.ok) {
           throw new Error('Failed to fetch data')
       }
   }


   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [newsletter, setNewsletter] = useState(false);

    return(
        <div className="grid grid-cols-9 bg-local bg-cover bg-no-repeat bg-bg2 w-screen">
            <div className="col-span-1" />
            <div className="col-span-7">
                <div className="flex flex-col h-max">
                    <div className="flex-none h-32" />
                        <ContactForm />
                    <div className="flex-none h-32" />
                </div>
            </div>
            <div className="col-span-1" />
        </div>
    )
}
