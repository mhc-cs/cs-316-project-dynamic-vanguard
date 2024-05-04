import React from "react";

import Login from "../components/Login";

export default function Page() {
    return (
        <div className="flex flex-col h-screen w-screen bg-white">
            <div className="h-1/6" />
            <div className="flex grow bg-bg1 bg-bottom bg-cover h-auto justify-center align-middle items-center">

                <Login />

            </div>
            <div className="h-1/6" />
        </div>
    )
}