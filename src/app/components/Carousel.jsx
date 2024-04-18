import React from "react";

import Item from "./Item";

export default function Carousel() {
    return (
        <div className="flex gap-5 bg-white/50 h-96 rounded-md w-screen overflow-x-hidden scrollbar-hide p-5">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    )
}