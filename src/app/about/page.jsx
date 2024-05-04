import React from "react";

export default function Page() {
    return (
        <div className="flex flex-col h-screen w-screen bg-white px-20">
            <div className="flex basis-1/3 items-center text-black text-center italic">
                <div className="inline-block align-middle basis-1/2 text-5xl">Meet Aya,</div>
                <div className="basis-1/2" />
            </div>
            <div className="flex flex-col gap-10 basis-2/3 items-center text-black text-3xl text-center italic pb-10">
                <div className="inline-block align-middle font-bold">
                    I was experiencing boredom, emptiness, meaninglessness, hopelessness, and loneliness. 
                    I've tried and learnt a variety of therapeutic modalities, but I was having trouble figuring out, 
                    "How the fuck do I apply it to daily life?"
                </div>
                <div className="inline-block align-middle">
                    I was born in South America and immigrated to New York as part of a religious cult. 
                    I lived in a secluded environment with no contact with the outside world. 
                    There was no education other than religious study. My daily life consisted of dissociation, extreme trauma, and abuse. 
                    At a young age, I learnt to disassociate for survival and had to work to remove that as a 
                    way of coping with experiences as I got older.
                </div>
                <div className="inline-block align-middle">
                Because of my commitment to my healing, I explored many modalities during my journey. 
                I became certified as an Emotional Freedom Technique (EFT) Coach, got certified in Cranial 
                Sacral 1 and 2, and I received a Bachelor's degree at Mount Holyoke College on Integrative Therapies for Trauma: Plant Assisted Therapy. 
                I am also in the process of pursuing a Rosen Body Work Certificate, and an Evolutionary Herbalist Certificate. 
                </div>
                <div className="inline-block align-middle">
                My expertise is in guiding people step by step through their intense trauma situations and mystical experiences. 
                Along with that, I am trained in building self awareness, so the individuals can exhibit less dissociation, and 
                fragmentation all while increasing their ability to make choices that are beneficial, and rooted from their self autonomy. 
                In effect, my guidance will assist in their ability to live a passionate and healthy lifestyle. 
                </div>
            </div>
        </div>
    )
}