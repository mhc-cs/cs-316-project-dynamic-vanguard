import React from "react";

import Newsletter from "./Newsletter";

export default function Modal() {
    return(
        <div className="fixed top-0 left-0 h-screen w-screen bg-black opacity-50">
            <Newsletter className="bg-white" />
        </div>
    )
}