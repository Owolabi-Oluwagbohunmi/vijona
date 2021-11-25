import React from "react";
import Link from "next/link";
import { MenuItemsDD } from "./DropDownMenuItems";
import { useState } from "react";

const DropDown = () =>
{

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <ul onClick={handleClick} className={click ? " hidden " : "shadow-2xl w-max absolute  top-18 list-none text-left -mx-4 bg-white rounded-xl"}>
                <div></div>
                {MenuItemsDD.map((MenuItem, index) => (
                    <li key={index} className=' rounded bg-v-bg hover:bg-navyellow cursor-pointer  p-4'>
                        <Link href={MenuItem.path} className=' px-10 block w-full h-full no-underline text-white py-10 ' onClick={()=> setClick(false)} >
                            {MenuItem.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default DropDown;
