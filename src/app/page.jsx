import React from "react";

import Carousel from "./components/Carousel";
import Newsletter from "./components/Newsletter";
import Image from "next/image";
import bg2 from "./assets/images/bg2.jpg"

export default function Page() {
    return (
        <div className="flex flex-col gap-10 bg-white h-max w-screen">
            <div className="flex flex-col gap-10 py-10 justify-center items-center text-black">
                <h1 className="text-7xl font-serif">
                    Aya Wild
                </h1>
                <h2 className="text-5xl">
                    Psycho-Spiritual Integration Consultant
                </h2>
            </div>
            
            <div className="flex flex-col bg-cover bg-local bg-no-repeat bg-center bg-bg2 py-52 gap-10 h-auto">
                
                <h2 className="text-5xl font-bold text-black text-center pb-5">
                    Healing starts when you stop judging yourself!!
                </h2>
                

                <h2 className="text-5xl font-bold text-black text-center">
                    Practical honest guidance through DAY-TO DAY healing.
                </h2>
                <div className="flex justify-center">
                    <Newsletter />
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
           
            {/* <div className="flex">
                <Carousel />
            </div> */}

        </div>


    );
}