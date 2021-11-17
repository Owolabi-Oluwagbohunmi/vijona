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
            <ul onClick={handleClick} className={click ? " hidden " : " w-max absolute top-20 list-none text-left -mx-4 bg-black rounded"}>
                <div></div>
                {MenuItemsDD.map((MenuItem, index) => (
                    <li key={index} className=' bg-v-bg cursor-pointer hover:bg-white p-3 mt-2'>
                        <Link href={MenuItem.path} className='block w-full h-full no-underline text-white py-7 ' onClick={()=> setClick(false)} >
                            {MenuItem.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default DropDown;
