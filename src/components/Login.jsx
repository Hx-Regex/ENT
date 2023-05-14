import React from 'react'
import './login.css'
import {BiUser} from 'react-icons/bi'
import {RiLockPasswordLine} from 'react-icons/ri'
import {FcGoogle} from 'react-icons/fc'
import {GrFacebook} from 'react-icons/gr'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlinePhone} from 'react-icons/ai'
import { useState } from 'react'
const Login = () => {
    const [ switcher , setSwitcher] = useState(false);
    
    const handleSwitcher = () => {
        setSwitcher(!switcher);
      };


      
    

  return (
    <>
        <div className=' h-[700px] bg-red-500 mb-10 rounded-md flex md:w-[60%] w-full'>
           

            <div className='   h-full bg-white rounded-l-md  lg:w-[40%] w-full'>
         

                <form className={` ${!switcher ? 'flex' : 'hidden' } w-full h-full  flex-col justify-center items-center  `}>
                    <div className='w-[60%]'>
                    <p className='text-[30px] font-bold'>Sign In</p>
                    <p>New to Mawqeef? <span className='text-blue-500 font-bold cursor-pointer' onClick={handleSwitcher}>Register Here for FREE</span> </p>
                    </div>
                    <div className='w-[60%] mt-8'>
                       <div className=' border-b-2 rounded-m flex items-center '> <BiUser size={25} className='mr-3' color='2d68f6' /> <input type="email" className='w-[80%]  h-[40px]  bg-white focus:outline-none '  placeholder='Username'/>  </div> 
                       <div className=' border-b-2 rounded-m flex items-center mt-4 mb-2'> <RiLockPasswordLine size={25} className='mr-3' color='2d68f6' /> <input type="email" className='w-[80%]  bg-white h-[40px] focus:outline-none '  placeholder='Password'/>  </div> 
                        <span className=' font-bold text-blue-500'>Forgot password?</span>
                        <button className='w-full bg-[#2d68f6] mt-4  rounded-[4px] text-white font-bold p-[6px] hover:bg-[#0739ac]'> Log In</button>
                        <button className='w-full bg-white hover:brightness-95 border-2 mt-3  rounded-[4px] text-black font-bold p-[6px] flex items-center justify-center'> <FcGoogle /> <span className='ml-2'> Sign in with Google</span></button>
                    </div>

                </form>


                <form className={` ${!switcher ? 'hidden' : 'flex' } w-full h-full  flex-col justify-center items-center  `}>
                    <div className='w-[60%]'>
                    <p className='text-[30px] font-bold'>Sign Up</p>
                    <p>Already a Member of Mawqeef? <span className='text-blue-500 font-bold cursor-pointer' onClick={handleSwitcher}>Sign in</span> </p>
                    </div>
                    <div className='w-[60%] mt-8'>
                       <div className=' border-b-2 rounded-m flex items-center '> <BiUser size={25} className='mr-3' color='2d68f6' /> <input type="email" className='w-[80%] bg-white  h-[40px] focus:outline-none '  placeholder='Username'/>  </div> 
                       <div className=' border-b-2 rounded-m flex items-center mt-4 mb-2'> <HiOutlineMail size={25} className='mr-3' color='2d68f6' /> <input type="email" className='w-[80%] bg-white  h-[40px] focus:outline-none '  placeholder='Email'/>  </div> 
                       <div className=' border-b-2 rounded-m flex items-center mt-4 mb-2'> <RiLockPasswordLine size={25} className='mr-3' color='2d68f6' /> <input type="email" className='w-[80%]  bg-white h-[40px] focus:outline-none '  placeholder='Password'/>  </div>
                       <div className=' border-b-2 rounded-m flex items-center mt-4 mb-2'> <AiOutlinePhone size={25} className='mr-3' color='2d68f6' /> <input type="Number" className='w-[80%]  bg-white h-[40px] focus:outline-none '  placeholder='Phone Number'/>  </div>
                        <button className='w-full bg-[#2d68f6] mt-4  rounded-[4px] text-white font-bold p-[6px] hover:bg-[#0739ac] '> Register Now</button>
                        <button className='w-full bg-white border-2 mt-3  rounded-[4px] text-black font-bold p-[6px] flex items-center justify-center hover:brightness-95'> <FcGoogle /> <span className='ml-2'> Sign up with Google</span></button>
                    </div>

                </form>

            

            </div>









            
            <div className=' relative w-[60%] h-full bg-green-300 rounded-r-md lg:flex hidden'>
                <img src="https://cdn.discordapp.com/attachments/589338815869747203/1091185849414209578/adobestock-112252874-small.jpg"  alt="" className='object-cover w-full h-full' />
            </div>


        </div>

    </>
    
  )
}

export default Login