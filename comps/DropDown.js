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
            <ul onClick={handleClick} className={click ? "hidden" : "w-52 absolute top-20 list-none text-left z-50 block"}>
                <div></div>
                {MenuItemsDD.map((MenuItem, index) => (
                    <li key={index} className=' bg-vijyellow cursor-pointer hover:bg-white py-4 mx-2'>
                        <Link href={MenuItem.path} className='block w-full h-full no-underline text-white py-7' onClick={()=> setClick(false)} >
                            {MenuItem.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default DropDown;
