import React from 'react'
import { FaPaintBrush,FaTablet, FaCode } from "react-icons/fa";

function Skill() {
  return (
    <div className='pt-20 bg-slate-200 pb-11'>
      <div className='text-center pt-32 text-4xl font-bold text-blue-600'>My Skills</div>
      <div className='text-center pt-3 pb-24 text-gray-600 text-xl'>I Like To Craft Beautiful and Scalable Web Products.</div>
<div className='grid grid-cols-2 pl-24'>
  <div className='w-[100%]'>
<div className='flex'>
  <div className='text-7xl px-10 py-3'><FaPaintBrush /></div>
  <div>
    <div className='font-bold text-4xl'>Design + Development</div>
    <div className='text-xl w-[95%] pt-4 text-gray-600'>Clean, modern designs - optimized for performance, search engines, and converting users to customer.</div>
  </div>
</div>
<div className='flex mt-16'>
  <div className='text-7xl px-10 py-3'><FaCode/></div>
  <div>
    <div className='font-bold text-4xl'>Technology</div>
    <div className='text-xl w-[100%] pt-4 text-gray-600'>Combined all the latest technologies to a progressive website.</div>
  </div>
</div>
<div className='flex mt-16'>
  <div className='text-7xl px-10 py-3'><FaTablet /></div>
  <div>
    <div className='font-bold text-4xl'>Always Responsive</div>
    <div className='text-xl w-[95%] pt-4 text-gray-600'>A responsive design makes your website accesible to all users, regardless of their device.</div>
  </div>
</div>
</div>
<div className=' space-y-6 text-lg text-white w-[90%]'>
  <div className='bg-orange-600 py-3 pl-3'>HTML 5</div>
  <div className='bg-blue-500 py-3 pl-3'>CSS3</div>
  <div className='bg-gray-700 py-3 pl-3'>jQuery</div>
  <div className='bg-purple-700 py-3 pl-3'>PHP</div>
  <div className='bg-slate-900 py-3 pl-3'>Wordpress</div>
  <div className='bg-green-500 py-3 pl-3'>SEO</div>
  <div className='bg-blue-700 py-3 pl-3'>Photoshop</div>
</div>
      </div>
    </div>
  )
}

export default Skill
