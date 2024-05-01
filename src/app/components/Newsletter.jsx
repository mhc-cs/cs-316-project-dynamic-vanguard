"use client";
import React, { useState } from "react";

export default function Newsletter() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const res = await fetch("/api", {
            method: "POST",
            body: JSON.stringify({
                name,
                email,
                subscribed,
            }),
        });
 
 
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        console.log("Request submitted")
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(true);

    return(
        <div className="flex flex-col bg-orange-950/90 font-bold p-5 w-1/3">
            <div className="flex flex-col gap-5 pb-5">
                <h1 className="text-xl">Stay in Touch?</h1>
                <a>Grab the monthly newsletter, unique offerings, events and a healthy dose of healing inspiration. I won't send fluff. Just the goods.</a>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-5 text-sm">
                    <input className="form-input block w-1/3 text-white bg-white/25 focus:bg-white px-5 rounded-sm" type="text" required autoComplete="off" autoCorrect="off" spellCheck="false" placeholder="Name" id="name" defaultValue="" onChange={((e) => setName(e.target.value))} value={name}/>
                    <input className="form-input block w-full text-white bg-white/25 focus:bg-white px-5 rounded-sm" type="text" required autoComplete="off" autoCorrect="off" spellCheck="false" placeholder="yourname@example.com" id="email" defaultValue="" requiredpattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={((e) => setEmail(e.target.value))} value={email}/>
                    <button className="bg-yellow-500 hover:bg-yellow-400 rounded-sm w-32 p-5" type="submit" value="sumbit">Submit</button>
                </div>
            </form>
        </div>
    )
}