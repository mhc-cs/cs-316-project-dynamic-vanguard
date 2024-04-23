/**
 * Modal (popup), yet to figure out how to implement correctly
 * @author Nikki Bernstein
 */

import React from "react";

import Newsletter from "./Newsletter";

export default function Modal() {
    return(
        <div className="fixed flex flex-col top-0 right-0 h-auto w-auto bg-yellow-800 text-center p-5 animate-pulse">
            <h2 className="text-xl font-bold">Want a break from the ads?</h2>
        </div>
    )
}