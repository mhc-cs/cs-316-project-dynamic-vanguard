"use client";
import React, { useState } from "react";


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


   return (
       <div className="grid grid-cols-9 bg-gradient-to-b from-black via-pink-950 to-yellow-500">
           <div className="col-span-1" />
           <div className="col-span-7">
               <div className="flex flex-col h-max">
                   <div className="flex-none h-60" />
                   <div className="grow rounded-md bg-white/50 items-center p-5">
                       <form id="contact" className="flex flex-col gap-5" onSubmit={submitContact} method='POST'>
                       {/* Add db method: */}
                       {/* <form id="contact" className="flex flex-col gap-5" onSubmit={submitContact()} method="POST"> */}
                           <section>
                               <h1 className="text-7xl text-center">Contact Us!</h1>
                               <div className="grid grid-cols-7">
                                   <div className="flex flex-col col-span-1 gap-5 p-5 text-right align-middle items-end">
                                       <h1>First Name</h1>
                                       <h1>Last Name</h1>
                                       <h1>Email</h1>
                                       <h1>Message</h1>
                                   </div>
                                   <div className="flex flex-col col-span-5 gap-5 p-5 rounded-md text-black">
                                       {/* Backend team - I haven't fleshed out the collection but the input values are 'value' if you want to try collecting data in submitContact() :)
                                       also switch the above <form> container once backend is connected */}
                                       <input className="form-input block w-full bg-white/90 focus:bg-white rounded-sm" id="first-name" type="text" onChange={((e) => setFirstName(e.target.value))} value={firstName} />
                                       <input className="form-input block w-full bg-white/90 focus:bg-white rounded-sm" id="last-name" type="text" onChange={((e) => setLastName(e.target.value))} value={lastName} />
                                       <input className="form-input block w-full bg-white/90 focus:bg-white rounded-sm" id="email" type="text" onChange={((e) => setEmail(e.target.value))} value={email} />
                                       <textarea className="form-textarea block w-full bg-white/90 focus:bg-white rounded-sm" id="message" rows="5" onChange={((e) => setMessage(e.target.value))} value={message} />
                                       <label className="inline-flex items-center hover:cursor-pointer">
                                           <input type="checkbox" className="form-checkbox text-pink-950" id="mailing-list" onChange={((e) => setNewsletter(e.target.checked))} value={newsletter} />
                                           <span className="ml-5">I would like to be added to the mailing list.</span>
                                       </label>
                                       <button className="bg-gradient-to-b from-pink-700 to-pink-600 hover:from-yellow-500 hover:to-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4 w-32" type="submit" value="submit">
                                           Submit
                                       </button>
                                   </div>
                                   <div className="col-span-1" />
                               </div>
                           </section>
                       </form>
                   </div>
                   <div className="flex-none h-60" />
               </div>
           </div>
           <div className="col-span-1" />
       </div>
   );
}
