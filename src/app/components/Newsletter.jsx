import React from "react";

export default function Newsletter() {
    return(
        <div className="flex flex-col bg-orange-950/90 font-bold p-5 w-1/3">
            <div className="flex flex-col gap-5 pb-5">
                <h1 className="text-xl">Stay in Touch?</h1>
                <a>Grab the monthly newsletter, unique offerings, events and a healthy dose of healing inspiration. I won't send fluff. Just the goods.</a>
            </div>
            <form>
                <div className="flex gap-5">
                    <input className="form-input block w-1/3 text-white bg-white/50 focus:bg-white px-5 rounded-sm" type="text" required autoComplete="off" autoCorrect="off" spellCheck="false" placeholder="Name" id="name" defaultValue="" />
                    <input className="form-input block w-full text-white bg-white/50 focus:bg-white px-5 rounded-sm" type="text" required autoComplete="off" autoCorrect="off" spellCheck="false" placeholder="yourname@example.com" id="email" defaultValue="" requiredpattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                    <button className="bg-yellow-500 hover:bg-yellow-400 rounded-sm w-32 p-5" type="submit" value="sumbit">Submit</button>
                </div>
            </form>
        </div>
    )
}