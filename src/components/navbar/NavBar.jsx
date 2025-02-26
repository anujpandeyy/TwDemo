import React from 'react'

export default function NavBar(){
    return(
        <>
        <div className='bg-black text-white font-bold'>
        <ul className='flex p-3 justify-evenly'>
            <li className='hover:text-sky-500 cursor-pointer'><a href=""></a>Home</li>
            <li className='hover:text-sky-500 cursor-pointer'><a href=""></a>About</li>
            <li className='hover:text-sky-500 cursor-pointer'><a href=""></a>Contact</li>
        </ul>
        </div>
        </>
    );
}