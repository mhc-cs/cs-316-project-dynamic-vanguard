import React from "react";

import { FaVideo } from "react-icons/fa";

import { Lobster } from "next/font/google";


export const lobster = Lobster({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],  
})

export default function Page() {
    return (
        <div className="flex flex-col h-auto w-full bg-yellow-100/90 gap-10 text-black">

            <div className={`flex flex-col ${lobster.className} bg-white rounded-md m-10 mb-5 p-10 text-5xl gap-5`}>
                <p>Postcast</p>
                <p className="text-xl">Latest Episode: Title</p>
            </div>

            <div className="flex flex-col h-auto bg-white rounded-md m-10 mt-5 p-10 gap-5">
                
                {/* One episode */}
                <div className="flex flex-col h-auto bg-neutral-200 rounded-md p-10 gap-5">
                    <div className={`${lobster.className} text-3xl`}>Title</div>
                    <div className="flex bg-slate-500/75 rounded-sm aspect-video items-center align-middle justify-center">
                        <FaVideo className="h-1/3 w-1/3 opacity-75"/>
                    </div>
                    <div className={`${lobster.className} text-3xl`}>
                        Summary
                    </div>
                    <div className="text-xl">
                        Interesting summary here!
                    </div>
                </div>

            </div>
        </div>
    )
}