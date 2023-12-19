import React from 'react'
import im1 from '../assest/im1.jpeg';
import Hero from '../component/Hero.css'


function HeroComponent() {
  return (
    <div style={{backgroundImage:`url(${im1})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className='h-[95vh] relative'>
      <div className='hero-b absolute bottom-5 left-24  h-[260px] w-[560px] mt-3'>
        <p className='pt-3 pl-8 text-4xl font-semibold text-white '>We Crush Your<br/>Competitors,Goals,And<br/>Sales Records-Without<br/>The B.S</p>
        <button className='text-white font-semibold text-lg text-center ml-8 mt-5 w-[250px] rounded-md h-10 bg-orange-600 hover:text-gray-400' >GET FREE CONSULTATION</button>
      </div>

      
    </div>
  )
}

export default HeroComponent;
