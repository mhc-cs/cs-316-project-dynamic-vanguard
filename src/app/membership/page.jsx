import React from "react";

export default function Page() {
    return (
        <div className="flex h-max w-full bg-bg2 bg-fixed bg-cover bg-bottom">
            <div className="h-screen w-full bg-white/50">

                <div className="bg-white rounded-md text-center text-5xl text-black p-10 m-10">
                    Membership Options
                </div>

                <div className="grid grid-cols-10">
                    <div className="col-span-1" />
                    
                    <div className="flex flex-col col-span-2 bg-white rounded-md p-5 text-xl">
                        <div className="text-black underline italic text-center font-bold text-2xl text-wrap">
                            Membership Option 1
                        </div>
                        <ul className="max-w-md space-y-1 list-disc list-inside text-black">
                            <li>Perk</li>
                            <li>Perk</li>
                            <li>Perk</li>
                            <li>Perk</li>
                            <li>Perk</li>
                        </ul>
                    </div>

                    <div className="col-span-1" />

                    <div className="flex flex-col col-span-2 bg-white rounded-md p-5 text-xl">
                        <div className="text-black underline italic text-center font-bold text-2xl text-wrap">
                            Membership Option 2
                        </div>
                        <ul className="max-w-md space-y-1 list-disc list-inside text-black">
                            <li>Perk</li>
                            <li>Perk</li>
                            <li>Perk</li>
                            <li>Perk</li>
                            <li>Perk</li>
                            <li>Perk</li>
                            <li>Perk</li>
                        </ul>
                    </div>

                    <div className="col-span-1" />

                    <div className="flex flex-col col-span-2 bg-white rounded-md p-5 text-xl">
                        <div className="text-black underline italic text-center font-bold text-2xl text-wrap">
                            Membership Option 3
                        </div>
                        <ul className="max-w-md space-y-1 list-disc list-inside text-black">
                            <li>Perk</li>
                            <li>Perk</li>
                            <li>Perk</li>
                            <li>Perk</li>
                            <li>Perk</li>
                            <li>Perk</li>
                            <li>Perk</li>
                            <li>Perk</li>
                            <li>Perk</li>
                            <li>Perk</li>
                        </ul>
                    </div>

                    <div className="col-span-1" />
                </div>

            </div>
        </div>
    )
}