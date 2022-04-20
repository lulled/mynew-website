import React from 'react'
//import Whatsup from '../images/whatsup.svg'
//import Phone from '../images/phone.png';
import {FaWhatsappSquare,FaPhoneAlt}from "react-icons/fa"
function Contact() {
  return (
    <div className='w-full h-[1000px] flex flex-col justify-center items-center  p-6'>
       <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='  '>
                <h3 className='text-4xl font-bold inline border-b-4 border-lime-600 text-fuchsia-700 '>Contact</h3>
                <p className='text-slate-500 py-4'>Let's talk about your next project </p>
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                  <div className='py-4'>
                    <span ><FaWhatsappSquare className='text-lime-500 w-20 h-20'/></span>
                    <p className='text-slate-500'>What'sup </p>
                    </div>
                    <div className='py-4 '>
                    <FaPhoneAlt className='text-lime-500 w-20 h-20'/>
                    <p className='text-slate-500 '>+256708699881</p>
                    </div>
                </div>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className=' mt-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <input className='mt-4 mb-8 p-2 bg-[#ccd6f6] ' type="phone" placeholder='phone-num' name='phone'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-fuchsia-600 border-2 border-fuchsia-600 hover:bg-lime-600 hover:border-pink-600 px-4  py-3 my-8 mx-auto flex items-center'>Send</button>
        </form> 
    </div>
  )
}

export default Contact