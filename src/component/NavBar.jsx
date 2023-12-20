import React, { useState } from 'react';
import Logo from '../assest/Logo.png';
import { IoMdMenu } from "react-icons/io";

function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className='flex justify-between h-16 footer-bg'>
      <div className='pt-2 pl-12'>
        <img src={Logo} alt='' />
      </div>

      <div className='hidden lg:flex'>
        <ul className='flex gap-4 pt-5 pr-5 text-white'>
          <li className='font-semibold cursor-pointer hover:text-gray-400'>SERVICES</li>
          <li className='font-semibold cursor-pointer hover:text-gray-400'>ABOUT US</li>
          <li className='font-semibold cursor-pointer hover:text-gray-400'>CONTACT US</li>
          <li className='font-semibold cursor-pointer hover:text-gray-400'>CAREERS</li>
        </ul>
      </div>


      <div className='lg:hidden'>
        <button
          className='p-2 text-white hover:text-gray-400'
          onClick={toggleMenu}
        >
         <IoMdMenu className='pt-1 text-4xl'/>
        </button>
      </div>

     
      {/* {isMenuOpen && (
        <div className='absolute bg-gray-800 lg:hidden top-5 left-1'>
          <ul className='flex flex-col gap-4 p-4 '>
            <li className='font-semibold'>SERVICES</li>
            <li className='font-semibold'>ABOUT US</li>
            <li className='font-semibold'>CONTACT US</li>
            <li className='font-semibold'>CAREERS</li>
          </ul>
        </div>
      )} */}
    </div>
  )
} export default NavBar;
