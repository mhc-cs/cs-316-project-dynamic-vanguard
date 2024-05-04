/**
 * Navbar, always open but can be made to close
 *  by uncommenting the blocked out code below
 *  and commenting out the current code
 * @author Nikki Bernstein
 */

"use client"

import React from "react";
import { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";

import Services from "./Services";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex bg-aya-yellow">

            <div className="flex flex-col items-left w-60 relative">
                <div className="flex flex-col space-x-4 justify-center text-black lg:text-2xl md:text-l gap-5 sticky top-0">
                    <div />
                    <a className="hover:text-yellow-700" href="/">Home</a>
                    <a className="hover:text-yellow-700" href="/about">About</a>
                    <a className="hover:text-yellow-700" href="/service-store">Services</a>
                    {/* <Services /> */}
                    <a className="hover:text-yellow-700" href="/store">Store</a>
                    <a className="hover:text-yellow-700" href="/blog">Blog</a>
                    {/* <a className="hover:text-yellow-700" href="/events-page">Events</a> */}
                    <a className="hover:text-yellow-700" href="/podcast">Podcast</a>
                    <a className="hover:text-yellow-700" href="/courses">Courses</a>
                    <a className="hover:text-yellow-700" href="/membership">Membership</a>
                    <a className="hover:text-yellow-700" href="/contact">Contact</a>
                    <div />
                </div>
            </div>

        </div>
    )
}