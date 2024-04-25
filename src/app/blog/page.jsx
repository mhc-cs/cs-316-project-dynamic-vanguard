import React from "react";

import { Lobster } from "next/font/google";

export const lobster = Lobster({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],  
})

export default function Page() {
    return (
        <div className="flex flex-col h-auto w-full bg-aya-yellow/50 gap-10 text-black">

            <div className={`flex flex-col ${lobster.className} bg-white rounded-md m-10 mb-5 p-10 text-5xl gap-5`}>
                <p>Blog</p>
                <p className="text-xl">Keep up with us!</p>
            </div>

            <div className="flex flex-col h-auto bg-white rounded-md m-10 mt-5 p-10 gap-10">
                
                {/* One post */}
                <div className="flex flex-col h-auto bg-neutral-200 rounded-md p-5 text-xl">
                    <div className="flex flex-col py-5 gap-3">
                        {/* Title and Date */}
                        <div className="text-3xl flex">
                            <div className={`${lobster.className} basis-2/3 text-left`}>I Love Lorem Ipsum</div>
                            <div className="basis-1/3 text-right text-sm pr-3">Today, 12:30</div>
                        </div>
                        {/* Author */}
                        <div className="text-xl flex">
                            By: XxLatinLoverxX
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
                        {/* Title and Date */}
                        <div className="text-3xl flex">
                            <div className={`${lobster.className} basis-2/3 text-left`}>YIPPEE :D</div>
                            <div className="basis-1/3 text-right text-sm pr-3">Today, 11:34</div>
                        </div>
                        {/* Author */}
                        <div className="text-xl flex">
                            By: Mary Lyon
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 text-wrap">
                        <div>
                        According to all known laws of aviation, there is no way that a bee should be able to fly. 
                        Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyways. 
                        Because bees don't care what humans think is impossible
                        </div>
                        <div>
                        Never gonna give you up
                        Never gonna let you down
                        Never gonna run around and desert you
                        Never gonna make you cry
                        Never gonna say goodbye
                        Never gonna tell a lie and hurt you
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}