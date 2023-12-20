import React from 'react';
import Hero from '../component/Hero.css'
import Logo from '../assest/Logo.png';

function Footer() {
  return (
    <div className='footer-bg'>
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 pt-7'>
        <div className='pl-7 sm:pl-[10px] lg:pl-[20px]'>
           
             <img src={Logo} alt='' />

            <p className='pt-5 text-white'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>

        </div>

        <div>
            <div className='flex flex-col pl-7 sm:pl-[100px] lg:pl-[150px] gap-2'>
                <h2 className='text-2xl font-semibold text-white'>Our Technologies</h2>
                <h3 className='text-white'>ReactJS</h3>
                <h3 className='text-white'>Gatsby</h3>
                <h3 className='text-white'>NextJS</h3>
                <h3 className='text-white'>NodeJS</h3>
                <h3 className='text-white'>GraphQL</h3>
                <h3 className='text-white'>Laravel</h3>
            </div>

        </div>

        <div>
            <div className='flex flex-col pl-7 sm:pl-[40px] lg:pl-[40px] gap-2'>
                <h2 className='text-2xl font-semibold text-white'>Our Services</h2>
                <h3 className='text-white'>Social media Marketing</h3>
                <h3 className='text-white'>Web & Mobile App Development</h3>
                <h3 className='text-white'>Data & Analytics</h3>
                <h3 className='text-white'>Google Marketing solutions</h3>
                <h3 className='text-white'>Search Engine Optimization</h3>
            </div>

        </div>

       
      
    </div>
        <div className='pt-5'>
           <hr className='mx-[230px]'></hr>
           <h1 className='pt-2 pb-5 text-center text-white'>Privacy | Terms & Condition</h1>
        </div>
    </div>
  )
}

export default Footer;
