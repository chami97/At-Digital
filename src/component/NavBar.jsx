import React from 'react'
import logo from '../assest/Logo.png';

const NavBar = () => {
    let Links =[
        {name:"SERVICES",link:"/"},
        {name:"ABOUT US",link:"/"},
        {name:"CONTACT US",link:"/"},
        {name:"CAREERS",link:"/"},
    ];
  return (
    <div className='fixed top-0 left-0 z-50 w-full shadow-2xl'>
        <div className='items-center justify-between py-4 bg-[#6B3CC9] md:flex md:px-10 pt-3 pb-4 '>
        <div className='text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
            {/* AT DIGITAL */}
            <img src={logo} alt="Logo" />
        </div>
        <ul className='md:flex md:items-center'>
            {
                Links.map((Link)=>(
                    <li key={Link.name} className='text-xl md:ml-8'>
                        <a href={Link.link} className='text-white hover:text-gray-400'>{Link.name}</a>
                    </li>
                ))
            }
        </ul>
        </div>
    </div>


  )
}
 
export default NavBar;
