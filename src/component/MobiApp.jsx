import React from 'react';
import im2 from '../assest/im2.jpeg'

function MobiApp() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2'>
        <div>
            <img className='pl-[100px]' src={im2} alt=''/>

        </div>
           

        <div>
           <h2 className='pt-[120px] text-3xl font-bold text-indigo-600'>Web & Mobile App Development</h2>
           <p className='pt-4'>Your web and mobile Apps are pieces of the puzzle to grow your <br/> business. We use frameworks which tailor content and engagement<br/> methods to respond to different intents shown by your potential <br/> customers who interact with your business online.</p>
           <button className='text-center text-white font-semibold bg-orange-600 w-[160px] h-[40px] rounded-md text-lg mt-3  hover:text-gray-400'>LERN MORE</button>

        </div>
    </div>
  )
}

export default MobiApp;
