import React from 'react'
import {BiDislike, BiLike} from 'react-icons/bi'

export default function Reviews() {
  return (

    <div className='w-[400px] bg-white h-auto border-4 rounded-md'>
    <div className='h-[150px] w-full  flex p-2 border-b-2 border-gray-200 '>
        <div className='w-[130px] h-[130px]  rounded-full'>
            <img className='w-full h-full rounded-full object-cover' src="https://cdn.discordapp.com/attachments/589338815869747203/1091486229192777859/3135715.png" alt="" />
        </div>

        <div className='w-[70%] h-full  p-4'>
            <h1 className='text-[19px] font-bold'> Ahmed Nacer </h1>
            <h1 className='text-[15px]'>user since <span className='font-bold'> 23 Mars 2023</span> </h1>
            <br />
            <h1 className='text-[20px] font-bold'>Rating : ⭐️⭐️⭐️⭐️</h1>
        </div>

    </div>

    <div className='w-full h-[50%] p-4 flex flex-col gap-4 justify-center items-center'> 
            <p className='text-center text-[16px]'> 
            "Je recommande vivement cette plombière femme. Elle est très professionnelle et a résolu mon problème de plomberie en un rien de temps. Je suis très satisfaite de son travail."
            </p>
            <div className='flex gap-2'>
            <BiLike size={25} className='hover:fill-blue-600 cursor-pointer' />
            <BiDislike size={25} className='hover:fill-red-500 cursor-pointer' />
            
            </div>
            
    </div>

    </div>

    




  )
}
