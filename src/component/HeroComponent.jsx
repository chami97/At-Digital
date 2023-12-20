import React from 'react'
import im1 from '../assest/im1.jpeg';
import Hero from '../component/Hero.css'



function HeroComponent() {
  return (
    
    <div>
  

     <div style={{backgroundImage:`url(${im1})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className='w-full  sm:w-full md:w-full lg:w-full h-[50vh] sm:h-[50vh] md:h-[80vh] lg:h-[95vh] relative'>
      <div className='hero-b absolute bottom-5 left-5 sm:left-10 lg:left-24 h-[150px] sm:h-[240px] lg:h-[260px] w-[300px] sm:w-[430px] lg:w-[560px] mt-3'>
        <p className='pt-3 pl-8 text-sm font-semibold text-white sm:text-3xl lg:text-4xl'>We Crush Your<br/>Competitors,Goals,And<br/>Sales Records-Without<br/>The B.S</p>
        <button className='text-white font-semibold text-sm sm:text-lg lg:text-lg text-center ml-8 mt-1 sm:mt-4 lg:mt-5 w-[180px] sm:w-[250px] lg:w-[250px] rounded-md h-10 bg-orange-600  hover:text-gray-400' >GET FREE CONSULTATION</button>
      </div>
      </div>

      
  

    </div>
  )
}

export default HeroComponent;