"use client"

import React from "react";

import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <div className="bg-aya-yellow">
            <div className="flex flex-col items-center h-20 w-60">
                <div className="flex basis-1/6 justify-start">
                    <a href="/">
                        <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                        </svg>
                    </a>
                </div>
                <div className="flex flex-col basis-2/3 space-x-4 justify-center align-middle text-black lg:text-2xl md:text-l gap-5 py-5">
                    <div />
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/store">Store</a>
                    <a href="/blog">Blog</a>
                    {/* <a href="/events-page">Events</a> */}
                    <a href="/podcast">Podcast</a>
                    <a href="/courses">Courses</a>
                    <a href="/membership">Membership</a>
                    <a href="/contact">Contact</a>
                    <div />
                </div>
                <div className="flex basis-1/6 justify-end">
                    <a className="rounded-full bg-white text-black py-5 px-2" href="#profile">
                        Profile
                    </a>
                </div>
            </div>
        </div>
    )
}