"useClient";
import React from "react";
import ContactForm from "../components/ContactForm";

export default function Page() {
    return(
        <div className="grid grid-cols-9 bg-gradient-to-b from-black via-pink-950 to-yellow-500 w-screen">
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