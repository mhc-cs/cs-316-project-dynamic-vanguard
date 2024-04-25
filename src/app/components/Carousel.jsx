/**
 * Carousel component, needs fake items to populate
 * @author Nikki Bernstein
 */

import React from "react";
import Item from "./Item";

export default function Carousel() {
    
    

    return (
        <div className="flex gap-5 h-96 scrollbar-hide overflow-x-scroll p-10 bg-black/25">
            <Item />
            <Item />
            <Item />
        </div>
    )
}