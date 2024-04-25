import React from "react";

import Newsletter from "./components/Newsletter";
import Modal from "./components/Modal";

import { Lobster } from "next/font/google";

export const lobster = Lobster({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],  
})


export default function Page() {
    return (
        <div className="flex flex-col gap-10 bg-white h-max w-screen">
            <Modal />
            <div className={`${lobster.className} flex flex-col gap-10 py-10 justify-center items-center text-black`}>
                <h1 className="text-7xl">
                    Aya Wild
                </h1>
                <h2 className="text-5xl">
                    Psycho-Spiritual Integration Consultant
                </h2>
            </div>
            
            <div className="bg-cover bg-local bg-no-repeat bg-center bg-bg2">
                <div className="flex flex-col bg-white/50 py-52 gap-10 h-auto">
                    
                    <div className="flex justify-center gap-3">
                        <h2 className="text-5xl font-bold text-black text-center pb-5">
                            Healing starts when you
                        </h2>
                        <h2 className="text-5xl font-bold text-white mix-blend-hard-light text-center pb-5">
                            stop judging
                        </h2>
                        <h2 className="text-5xl font-bold text-black text-center pb-5">
                            yourself!!
                        </h2>
                    </div>
                    

                    <h2 className="text-5xl font-bold text-black text-center">
                        Practical honest guidance through DAY-TO DAY healing.
                    </h2>
                    <div className="flex justify-center">
                        <Newsletter />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-9 text-black p-10 text-xl"> 
                <div className="col-span-1"/>
                <div className="flex flex-col gap-3 col-span-3 italic">
                    <h2 className="text-2xl text-center font-bold">
                        The healing power of Integrating.
                    </h2>
                    <p className="text-center italic">
                        I can assist you in assimilating what your experiences with plant medicine, body work, dream work  and trauma reveal and guide you in integrating them into your daily life.
                    </p>
                </div>

                <div className="col-span-1"/>

                <div className="flex flex-col gap-3 col-span-3 italic">
                    <h2 className="text-2xl text-center font-bold">
                        Upgrade your Bullshit detector. 
                    </h2>
                    <p className="text-center">
                        Learn practical ways to build a truthful sovereign lifestyle.
                    </p>
                </div>
                
            </div>

        </div>


    );
}