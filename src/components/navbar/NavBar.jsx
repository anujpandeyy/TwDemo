import React from 'react'

export default function NavBar() {
  return (
    <>
      <div className='bg-black text-white font-bold'>
        <div className='flex items-center justify-between px-9 py-5'>
          <h1 className='ml-9 text-4xl'>A P</h1>
          <ul className='flex space-x-6'>
            <li className='hover:text-sky-500 cursor-pointer hover:animate-pulse'>
              <a href="">ABOUT</a>
            </li>
            <li className='hover:text-sky-500 cursor-pointer hover:animate-pulse'>
              <a href="">SKILLS</a>
            </li>
            <li className='hover:text-sky-500 cursor-pointer hover:animate-pulse'>
              <a href="">WORK</a>
            </li>
            <li className='hover:text-sky-500 cursor-pointer hover:animate-pulse'>
              <a href="">PROJECTS</a>
            </li>
            <li className='hover:text-sky-500 cursor-pointer hover:animate-pulse'>
              <a href="">CONTACT</a>
            </li>
            <li className='hover:text-sky-500 cursor-pointer hover:animate-pulse'>
              <a href="">RESUME</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
