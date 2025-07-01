import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
   <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
    {/* -----Left Side of Footer------ */}
    <div>
        <img className='mb-5 w-40'src={assets.logo} alt="logo"  />
        <p classsname='w-full md:w-2/3 text-gray-600 leading-6' >We are the only organization dedicated to improving patient care. We strive to provide the best services for our patients.</p>
    </div>
    

    
  
   <div>
    {/* -----Middle Side of Footer------ */}
    <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>

        </ul>
    </div>
   </div>
   <div>
    {/* -----Right Side of Footer------ */}
    <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
            <li>9876542133</li>
            <li>hitman@45gmail.com</li>
        </ul>


    </div>




   </div>
    </div>
    <div>
        {/* -----CopyRight------ */}
        <hr></hr>
        <p>@all rights are reserved</p>

    </div>




    </div>
  )
}

export default Footer