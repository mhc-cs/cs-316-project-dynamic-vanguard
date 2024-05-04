/**
 * Item object, used to populate Store UI
 * @author Nikki Bernstein
 */

import React from "react";
import { GiTreeBranch } from "react-icons/gi";

export default function Item() {
    return (
        <a className="bg-lime-800 aspect-square" href="#item">
            <GiTreeBranch className="h-full w-full p-5 opacity-60" />
        </a>
    )
}