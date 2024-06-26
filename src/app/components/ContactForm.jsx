/**
 * Contact form, takes full name email and messages
 * @author Nikki Bernstein
 */
"use client";
import React, { useState } from "react";

export default function ContactForm() {
    const [isSubmitted, setisSubmitted] = useState(false)
  
    const handleSubmit = async (event) => {
        event.preventDefault();

        const res = await fetch("/contact/api", {
            method: "POST",
            body: JSON.stringify({
                name,
                email,
                message,
                newsletter,
            }),
        });
 
 
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        setisSubmitted(true)
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [newsletter, setNewsletter] = useState(false);

    return (
        <div className="grow rounded-md bg-white/75 items-center p-5 text-black font-bold">
            <form id="contact" className="flex flex-col gap-5 group" noValidate onSubmit={handleSubmit}>
            {/* Add db method: */}
            {/* <form id="contact" className="flex flex-col gap-5" onSubmit={submitContact()} method="POST"> */}
                <section>
                    <h1 className="text-7xl text-center">Contact Us!</h1>
                    <div className="grid grid-cols-7">
                        <div className="col-span-1" />
                        <div className="flex flex-col col-span-5 gap-5 p-5 rounded-md text-black">
                            {/* Backend team - I haven't fleshed out the collection but the input values are 'value' if you want to try collecting data in submitContact() :) 
                            also switch the above <form> container once backend is connected */}
                            <input className="form-input block w-full bg-white/90 focus:bg-white rounded-md p-2" type="text" required autoComplete="off" autoCorrect="off" spellCheck="false" placeholder="Name*" id="name" defaultValue="" onChange={((e) => setName(e.target.value))} value={name} />
                            <input className="form-input block w-full bg-white/90 focus:bg-white rounded-md p-2" type="text" required autoComplete="off" autoCorrect="off" spellCheck="false" placeholder="Email*" id="email" defaultValue="" requiredpattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={((e) => setEmail(e.target.value))} value={email} />
                            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                Please enter a valid email address
                            </span>
                            <textarea className="form-textarea block w-full bg-white/90 focus:bg-white rounded-md p-2" autoComplete="off" minLength={10} maxLength={1200} placeholder="Write us a message!" id="message" rows="12" defaultValue="" onChange={((e) => setMessage(e.target.value))} value={message} />
                            <label className="inline-flex items-center hover:cursor-pointer">
                                <input type="checkbox" className="form-checkbox text-pink-950" id="mailing-list" onChange={((e) => setNewsletter(e.target.checked))} value={newsletter} />
                                <span className="ml-5 hover:text-white">I would like to be added to the mailing list.</span>
                            </label>
                            <button className="bg-gradient-to-b from-pink-700 to-pink-600 hover:from-yellow-500 hover:to-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4 w-32" type="submit" value="submit">
                                Submit
                            </button>
                        </div>
                        <div className="col-span-1" />
                    </div>
                </section>
            </form>
            {isSubmitted && (
                <div>
                    Thank you for your message!
                </div>
            )}
        </div>
    );
}