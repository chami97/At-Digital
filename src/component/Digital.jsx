import React from 'react';
import im3 from '../assest/im3.jpeg'

function Digital() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2'>
        <div className='pl-[85px]'>
            <h2 className='pt-[120px] text-3xl font-bold text-indigo-600'>  Digital Strategy Consulting</h2>
            <p className='pt-4'>Your digital strategy should complement the overall marketing strategy<br/>of the company. In online marketing, each component will never work in<br/>isolation and every business needs a different mix. We provide a clear<br/>concept and strategic overview to find the most efficient model for<br/> your business.</p>
            <button className='text-center text-white font-semibold bg-orange-600 w-[160px] h-[40px] rounded-md text-lg mt-3 hover:text-gray-400'>LERN MORE</button>

        </div>
            

        <div>
            <img src={im3} alt=''/>

        </div>
      
    </div>
  )
}

export default Digital;
