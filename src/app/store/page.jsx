"use client"

import React, { useState } from "react";

import Carousel from "../components/Carousel";

import { CiShoppingCart } from "react-icons/ci";
import { IoChevronBackOutline } from "react-icons/io5";

import { GiTreeBranch } from "react-icons/gi";
import { GiSpiralBottle } from "react-icons/gi";
import { GiIncense } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";

export default function Page() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    const closeCart = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex flex-col h-max  bg-white">
            <button className="fixed bottom-5 right-5 h-20 aspect-square rounded-full bg-amber-500" onClick={toggleCart}>
                <CiShoppingCart className="h-full w-full p-5"/>
            </button>
            {isOpen && (
                <div className="flex bg-aya-yellow justify-end w-1/2">

                    <div className="flex m-5 h-12 w-12 justify-right align-middle rounded-sm rotate-180">
                        <button onClick={closeCart}>
                            <IoChevronBackOutline className="text-black"/>
                        </button>
                    </div>

                    <div className="flex flex-col items-left h-screen w-full">
                        <div className="flex flex-col space-x-4 justify-center text-black lg:text-2xl md:text-l gap-5">
                            SHOPPING CART YAY :D
                        </div>
                    </div>

                </div>
            )}

            <div className="h-auto text-black font-bold italic text-5xl text-center py-5">Store</div>
            <div className="h-[1px] bg-black w-full" />

            <div className="bg-bg2 bg-cover bg-bottom">
                <div className="grid grid-cols-4 grid-flow-row gap-10 p-10 text-xl text-center bg-white/50">
                    <a className="relative col-span-1 bg-lime-800 aspect-square" href="#herbal">
                        <label className="absolute h-0 w-full bottom-0 left-0 font-3xl font-bold text-black italic">Herbal Remedies</label>
                        <GiTreeBranch className="h-full w-full p-5 opacity-60" />
                    </a>
                    <a className="relative col-span-1 bg-lime-800 aspect-square" href="#">
                        <label className="absolute h-0 w-full bottom-0 left-0 font-3xl font-bold text-black italic">Demo Topic 1</label>
                        <GiSpiralBottle className="h-full w-full p-5 opacity-60" />
                    </a>
                    <a className="relative col-span-1 bg-lime-800 aspect-square" href="#">
                        <label className="absolute h-0 w-full bottom-0 left-0 font-3xl font-bold text-black italic">Demo Topic 2</label>
                        <GiIncense className="h-full w-full p-5 opacity-60" />
                    </a>
                    <a className="relative col-span-1 bg-lime-800 aspect-square" href="#">
                        <label className="absolute h-0 w-full bottom-0 left-0 font-3xl font-bold text-black italic">Demo Topic 3</label>
                        <IoPeople className="h-full w-full p-5 opacity-60" />
                    </a>
                </div>
            </div>

            <h2 className="text-black font-bold text-5xl text-center py-5">What We Offer</h2>

            <div className="p-5 text-black text-3xl text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <div className="flex flex-col p-5 gap-10">
                <h2 className="text-5xl font-bold text-black bg-white"  id="herbal"> Herbal Remedies </h2>
                <Carousel />
            </div>

        </div>
    )
}