/**
 * Login panel, takes username and password
 * @author Nikki Bernstein
 */

import React from "react";

export default function Login() {
    return (
        <div className="flex flex-col bg-white/75 rounded-md w-1/2 h-auto items-center align-middle justify-center p-10 gap-5">

            <h1 className="text-5xl text-center font-bold">User Login</h1>

            <div className="w-full">

                <form id="user-auth" className="flex flex-col gap-2">
                    <label className="text-2xl">Username</label>
                    <input className="form-input block w-full text-black bg-white focus:bg-white p-3 rounded-md" type="text" required autoComplete="off" autoCorrect="off" spellCheck="false" placeholder="Username" id="username" defaultValue="" />
                    <div />
                    <label className="text-2xl">Password</label>               
                    <input className="form-input block w-full text-black bg-white focus:bg-white p-3 rounded-md" type="text" required autoComplete="off" autoCorrect="off" spellCheck="false" placeholder="Password" id="password" defaultValue="" />
                    {/*<button className="bg-yellow-500 hover:bg-yellow-400 rounded-sm w-32 p-5" type="submit" value="sumbit">Submit</button> */}
                </form>

            </div>

        </div>
    )
}