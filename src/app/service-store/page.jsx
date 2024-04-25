import React from "react";

export default function Page() {
    return (
        <div className="flex flex-col h-screen w-screen bg-lime-800 text-white font-bold">

            <div className="h-20 text-5xl italic text-center py-5 text-black">Offered Services</div>
            
            <div className="flex bg-lime-800/90 text-xl text-center py-10">
                <div className="basis-2/5 text-right">One on One Integration</div>
                <div className="basis-1/5">|</div>
                <div className="basis-2/5 text-left">$125 60 min</div>
            </div>

            <div className="h-20" />

            <div className="flex bg-lime-800/90 text-xl text-center py-10">
                <div className="basis-2/5 text-right">Herbal Healing Consultant</div>
                <div className="basis-1/5">|</div>
                <div className="basis-2/5 text-left">$165 90 min</div>
            </div>

            <div className="h-20" />

            <div className="flex bg-lime-800/90 text-xl text-center py-10">
                <div className="basis-2/5 text-right">Bodywork Session (in person)</div>
                <div className="basis-1/5">|</div>
                <div className="basis-2/5 text-left">$115 60 min</div>
            </div>

            <div className="h-20" />

            <div className="flex bg-lime-800/90 text-xl text-center py-10">
                <div className="basis-2/5 text-right">One on One Cacao Ceremonies</div>
                <div className="basis-1/5">|</div>
                <div className="basis-2/5 text-left">$165 90 min</div>
            </div>

            <div className="h-20" />
            
        </div>
    )
}