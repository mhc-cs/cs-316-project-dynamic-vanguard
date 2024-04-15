import React from "react";

export default function Newsletter() {
    return(
        <div className="flex flex-col bg-black/15 font-bold p-5 px-60">
            <div className="flex flex-col gap-5 pb-5">
                <h1 className="text-xl">Stay in Touch?</h1>
                <a>Grab the monthly newsletter, unique offerings, events and a healthy dose of healing inspiration. I won't send fluff. Just the goods.</a>
            </div>
            <form>
                <div className="flex gap-5">
                    <input className="form-input block w-3/4 text-black bg-white/25 focus:bg-white px-5 rounded-sm" type="text" required autoComplete="off" autoCorrect="off" spellCheck="false" placeholder="Name" id="name" defaultValue="" />
                    <input className="form-input block w-full text-black bg-white/25 focus:bg-white px-5 rounded-sm" type="text" required autoComplete="off" autoCorrect="off" spellCheck="false" placeholder="yourname@example.com" id="email" defaultValue="" requiredpattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                    <button className="bg-yellow-500 rounded-sm w-32 p-5" type="submit" value="sumbit">Submit</button>
                </div>
            </form>
        </div>
    )
}