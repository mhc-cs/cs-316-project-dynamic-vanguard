/**
 * Modal (popup)
 * @author Nikki Bernstein
 */

"use client";
import React from "react";
import { useState } from "react";

import { IoClose } from "react-icons/io5";

export default function Modal() {

    const [isOpen, setIsOpen] = useState(true)

    const closeModal = () => {
        setIsOpen(false);
    };

    return(
        <div>
            {isOpen && (
                <div className="fixed flex bottom-0 right-0 h-auto w-auto bg-yellow-300 rounded-sm text-center p-5 animate-pulse text-black">
                    <IoClose onClick={closeModal} className="hover:cursor-pointer"/>
                    <div className="flex gap-2">
                        <a className="text-xl font-bold ml-2 italic underline" href="/user-auth">Sign up </a>
                        <h2 className="text-xl font-bold">for a 30 minute free trial!</h2>
                    </div>
                </div>
            )}
        </div>
    )
}