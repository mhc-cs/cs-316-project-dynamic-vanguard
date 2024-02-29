import React from "react";

export default function Navbar() {
    return (
        <div class="flex flex-row items-center bg-pink-800 h-20 p-3">
            <div class="flex basis-1/6 justify-start">
                <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                </svg>
            </div>
            <div class="flex basis-2/3 space-x-4 justify-center align-middle text-white lg:text-2xl md:text-l">
                <a href="/">Home</a>
                <p>|</p>
                <a href="/demo">Demo 1</a>
                <p>|</p>
                <a href="/demo2">Demo 2</a>
                <p>|</p>
                <a href="/demo3">Demo 3</a>
                <p>|</p>
                <a href="/about">About</a>
                <p>|</p>
                <a href="/contact">Contact</a>
            </div>
            <div class="flex basis-1/6 justify-end">
                <a class="rounded-full bg-white text-black py-5 px-2" href="#profile">
                    Profile
                </a>
            </div>
        </div>
    )
}