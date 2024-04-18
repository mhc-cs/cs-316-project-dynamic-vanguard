import React from "react";

import Carousel from "../components/Carousel";

// import bg1 from "../assets/images/bg1.jpg"

export default function Page() {
    return (
        <div className="flex flex-col h-max w-screen bg-bg2 bg-cover bg-fixed bg-no-repeat bg-center">
            <section className="h-max bg-white">
                <h1 className="py-10 text-5xl text-black text-center">Store</h1>
            </section>
            <div className="h-44" />
            <section className="h-max">
                <Carousel />
            </section>
            <div className="h-44" />
            <section className="h-max">
                <Carousel />
            </section>
        </div>
    )
}