import React from "react";

import { Lobster } from "next/font/google";

export const lobster = Lobster({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],  
})

export default function Page() {
    return (
        <div className="flex flex-col h-auto w-full bg-amber-200/75 gap-10 text-black">

            <div className={`flex flex-col ${lobster.className} bg-white rounded-md m-10 mb-5 p-10 text-5xl gap-5`}>
                <p>Courses Catalog</p>
            </div>

            <div className="flex flex-col h-auto bg-white rounded-md m-10 mt-5 p-10 gap-10">
                
                {/* One course */}
                <div className="flex flex-col h-auto bg-neutral-200 rounded-md p-5 text-xl">
                    <div className="flex flex-col py-5 gap-3">
                        {/* Title and Duration */}
                        <div className="text-3xl flex">
                            <div className={`${lobster.className} basis-2/3 text-left`}>Intro to Herbal Healing</div>
                            <div className="basis-1/3 text-right text-sm pr-3">1.5hrs</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 text-wrap">
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
                        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
                        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
                        quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </div>
                    </div>
                </div>

                <div className="flex flex-col h-auto bg-neutral-200 rounded-md p-5 text-xl">
                    <div className="flex flex-col py-5">
                        {/* Title and Duration */}
                        <div className="text-3xl flex">
                            <div className={`${lobster.className} basis-2/3 text-left`}>Why Do We Do What We Do</div>
                            <div className="basis-1/3 text-right text-sm pr-3">45m</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 text-wrap">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
                        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
                        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
                        quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}