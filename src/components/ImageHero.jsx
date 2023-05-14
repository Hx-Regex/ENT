import React from 'react'

export default function ImageHero() {
  return (
    <div className='relative h-[700px] bg-red-500 mb-20 flex justify-center items-center  w-full'>
        <h1 className=' text-center absolute z-10 text-[100px] text-white font-bold lg:text-[100px] text-[70px]'> Hire our trusted workers today!</h1>
        <img  draggable='false' className=' brightness-50 w-full h-full object-cover' src="https://cdn.discordapp.com/attachments/589338815869747203/1091185849414209578/adobestock-112252874-small.jpg" alt="" />
        
    </div>
  )
}
