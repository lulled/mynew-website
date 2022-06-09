import React from 'react'
import{useState} from 'react'
import {FaBars ,FaTimes} from 'react-icons/fa';
import Frame1 from '../images/frame1.svg';

function Navbar() {
    const [ nav,setNav]= useState(false);
    const handleclick =()=> setNav(!nav);
  return (
    <div className=' fixed w-full h-[66px] flex justify-between items-center px-4 bg-white opacity-95  text-slate-600 mb-12 shadow-lg shadow-slate-300'>
        <div className='  flex gap-15 justify-items-start  pl-4'>
            <img className=' w-[300px] h-[200px] items-left pb-4' src={Frame1} alt=""/>
            
        </div>
      {/*main menu */}
            <ul className='hidden md:flex'>
            <li className='px-2'>Home</li>
            <li className='px-2'>Skills</li>
            <li className='px-2'>Contacts</li>
            </ul>
            {/*humberg */}
            <div onClick={handleclick} className='md:hidden z-10'>
             {!nav ? <FaBars className=' text-slate-700 w-[30px] h-[30px]'/> : <FaTimes className='text-slate-700 w-[30px] h-[30px]' />}
            </div>


        {/*mobile menu */}
        <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-[500px] bg-white flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl text-fuchsia-500'>Home</li>
            <li className='py-6 text-4xl text-fuchsia-500'>Skills</li>
            <li className='py-6 text-4xl text-fuchsia-500'>Contacts</li>  
        </ul>
    </div>
  )
}

export default Navbar;