import React from 'react';
import {FaWhatsappSquare,FaPhoneAlt}from "react-icons/fa"

function Contact() {
  return (
    <div className='w-full  flex flex-col justify-center items-center  p-6'>
       <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[1000px] w-full'>
            <div className=' flex flex-col justify-center items-center w-full p-6'>
                <h3 className='text-4xl font-bold inline border-b-4 border-lime-600 text-fuchsia-700 '>Contact</h3>
                <p className='text-slate-500 py-4'>Let's talk about your next project </p>
              <section className='flex flex-col justify-center align-center w-full my-10 lg:flex-wrap'>
                <div className=' flex items-center flex-wrap justify-center w-full my-4 gap-4  '>
                  <a href='#' className='w-full md:w-auto px-3 md:px-8 py-5 border  border-slate-400 shadow-md shadow-slate-400 rounded-md hover:border-lime-900
                   duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3'>
                     <FaWhatsappSquare className='text-lime-500 text-[60px] cursor-poniter '/>
                     <p className='text-lg text-slate-500'>Whatsup</p>
                   </a>
                </div>
                <div className=' flex items-center flex-wrap justify-center w-full my-4 gap-4 '>
                  <a href='#' className='w-full md:w-auto px-3 md:px-8 py-5 border border-slate-400  shadow-slate-400 shadow-inner rounded-md hover:border-lime-900
                   duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3'>
                     <FaPhoneAlt className='text-lime-500 text-[60px] cursor-poniter '/>
                     <p className='text-lg text-slate-500'>Call Me</p>
                   </a>
                </div>
              </section>  
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-md' type="text" placeholder='Name' name='name' />
            <input className=' mt-4 p-2 bg-[#ccd6f6] rounded-md' type="email" placeholder='Email' name='email' />
            <input className='mt-4 mb-8 p-2 bg-[#ccd6f6] rounded-md' type="phone" placeholder='phone-num' name='phone'/>
            <textarea className='bg-[#ccd6f6] p-2 rounded-md' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-fuchsia-600 border-2 rounded-md border-fuchsia-600 hover:bg-lime-600 hover:border-pink-600 px-4  py-3 my-8 mx-auto flex items-center'>Send</button>
        </form> 
    </div>
  )
}

export default Contact