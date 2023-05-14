import React from 'react'
import { Redirect } from "react-router-dom";
import { useState} from 'react'
import {HiArrowLongRight} from 'react-icons/hi2'
import {AiFillStar} from 'react-icons/ai'


export default function wCard({name, pro, description, rating , star , price, job,value,gender,city, img}) {
  const [redirect, setRedirect] = useState(false);
  const handleClick = () => {
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to={'/hire/' + value} />;
  }
  
  
  return (
    <>
    <div onClick={handleClick}   className=' w-[350px] h-[400px] flex flex-col rounded-sm hover:scale-[1.02] transition-all duration-200 ease-linear flex-shrink-0 cursor-pointer'>
        <div className='bg-blue-400 w-full h-[45%]  rounded-t-md flex justify-center items-center'>
            <img   className='w-full h-full object-cover rounded-t-sm' src={img} alt="" /> 
        </div>
        <div className='bg-white w-full h-full p-4 rounded-b-sm flex flex-col'>
          <div className='items-center flex justify-between'>
          <h1 className='text-[20px] font-bold '>{name}  <p className='text-[16px] font-bold '>{job} | {city}</p></h1>
          
          {pro ? (<div className='w-[70px] bg-gray-800 text-white h-[30px] rounded-md flex justify-center items-center text-[19px] font-bold'> PRO </div>) : (<div className='w-[70px] bg-white text-white h-[30px] rounded-md flex justify-center items-center text-[19px] font-bold'></div>)}
          
          </div>
          <div className='mt-auto'>
           
            <p className='text-[16px]'></p>
             <div className=' text-[20px] flex-col flex '>
              <span className='flex items-center gap-2 font-bold'><AiFillStar size={28} /> {star} ({rating}) </span>
              <span className='text-[20px] font-bold ml-1 flex items-center gap-4 mt'>En savoir plus <HiArrowLongRight  size={40} /></span>
              </div>

          </div>
        </div>
        
        
    </div>
    </>
  )
}
