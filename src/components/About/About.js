import React from 'react'
import place from '../../assets/images/scene.jpg'
function About() {
  return ( 
    <div className=' bg-purple-200 h-full pb-28'>
      <div className='max-sm:hidden'>
    <div className='flex pt-48 grid-cols-2 w-[100%]'>
      <div className=' pt-32 pl-[10%] w-[65%]'>
        <h2 className='text-4xl text-gray-700 font-bold mb-5 w-[80%]'>We make your desired dreamland visit with ease and cheap.</h2>
        <h4 className='text-2xl text-gray-700 w-[70%]'>Welcome to Traveller Plans Maker, where wanderlust meets expertise. We specialize in crafting personalized travel experiences that exceed expectations. Let us turn your dreams into unforgettable adventures. Your journey starts here.</h4>
      </div>
      <div className='w-45% '><img src={place} className='h-96 w-96 rounded-full '/></div>
      </div>
      <div className='text-center'>
      <button className='bg-gray-700 hover:bg-gray-900 text-white h-12 md:text-xl pl-4 pr-4 rounded-md  text-center sm:text-sm'>View Destinations</button>
    </div>
    <div className='text-gray-700 text-4xl text-center mb-24 first:font-serif font-bold mt-16 underline'>Our Members</div>
    <div className='flex grid-cols-4 gap-[10%]'> 
    <div className='text-center pl-14 '> 
         <img src={place} className='md:h-56 md:w-56  sm:h-28 sm:w-28 rounded-full'/>
          <div className='md:text-3xl sm:text-xl text-gray-700 mt-9 font-serif'>Mr.Karan Shrestha</div>
          <div className='md:text-2xl sm:text-sm text-gray-700 mt-1 font-serif'>Tourist Guide</div>
     </div>
     <div className='text-center '> <img src={place} className='md:h-56 md:w-56 sm:h-28 sm:w-28 rounded-full'/>
          <div className='md:text-3xl sm:text-xl text-gray-700 mt-9 font-serif'>Mr.Bhuwan Shrestha</div>
          <div className='md:text-2xl sm:text-sm text-gray-700 mt-1 font-serif'>Helper</div>
     </div>
     <div className='text-center '> <img src={place} className='md:h-56 md:w-56 sm:h-28 sm:w-28 rounded-full'/>
          <div className='md:text-3xl sm:text-xl text-gray-700 mt-9 font-serif'>Mr.Bishal Shrestha</div>
          <div className='md:text-2xl sm:text-sm text-gray-700 mt-1 font-serif'>Manager</div>
     </div>
     <div className='text-center '> <img src={place} className='md:h-56 md:w-56 sm:h-28 sm:w-28 rounded-full'/>
          <div className='md:text-3xl sm:text-xl text-gray-700 mt-9 font-serif'>Ms.Trishna Shrestha</div>
          <div className='md:text-2xl sm:text-sm text-gray-700 mt-1 font-serif'>Guide</div>
     </div>
      </div>
      </div>
      <div className='hidden min-sm:block max-sm:block'> <div className=' pt-48 grid-cols-2 w-[100%]'>
      <div className='w-45% '><img src={place} className='h-96 w-96 rounded-full m-auto'/></div>
      <div className=' pt-32 ml-[20%] w-[65%]'>
        <h2 className='text-4xl text-gray-700 font-bold mb-5 w-[80%]'>We make your desired dreamland visit with ease and cheap.</h2>
        <h4 className='text-2xl text-gray-700 w-[70%]'>Welcome to Traveller Plans Maker, where wanderlust meets expertise. We specialize in crafting personalized travel experiences that exceed expectations. Let us turn your dreams into unforgettable adventures. Your journey starts here.</h4>
      </div>
      </div>
      <div className='text-center mt-4'>
      <button className='bg-gray-700 hover:bg-gray-900 text-white h-12 md:text-xl pl-4 pr-4 rounded-md  text-center sm:text-sm'>View Destinations</button>
    </div>
    <div className='text-gray-700 text-4xl text-center mb-24 first:font-serif font-bold mt-16 underline'>Our Members</div>
    <div className='grid grid-cols-2 gap-[10%]'> 
    <div className='text-center '> 
         <img src={place} className=' ml-12  w-52 h-52 rounded-full'/>
          <div className='md:text-3xl sm:text-xl text-gray-700 mt-9 font-serif'>Mr.Karan Shrestha</div>
          <div className='md:text-2xl sm:text-sm text-gray-700 mt-1 font-serif'>Tourist Guide</div>
     </div>
     <div className='text-center '> <img src={place} className=' ml-12 w-52 h-52 rounded-full'/>
          <div className='md:text-3xl sm:text-xl text-gray-700 mt-9 font-serif'>Mr.Bhuwan Shrestha</div>
          <div className='md:text-2xl sm:text-sm text-gray-700 mt-1 font-serif'>Helper</div>
     </div>
     <div className='text-center '> <img src={place} className=' ml-12 w-52 h-52 rounded-full'/>
          <div className='md:text-3xl sm:text-xl text-gray-700 mt-9 font-serif'>Mr.Bishal Shrestha</div>
          <div className='md:text-2xl sm:text-sm text-gray-700 mt-1 font-serif'>Manager</div>
     </div>
     <div className='text-center '> <img src={place} className=' ml-12 w-52 h-52  rounded-full'/>
          <div className='md:text-3xl sm:text-xl text-gray-700 mt-9 font-serif'>Ms.Trishna Shrestha</div>
          <div className='md:text-2xl sm:text-sm text-gray-700 mt-1 font-serif'>Guide</div>
     </div>
      </div></div>
    </div>
  )
}

export default About
