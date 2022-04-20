import React from 'react'
import{useState} from 'react'
import {FaBars ,FaTimes} from 'react-icons/fa';


function Navbar() {
    const [ nav,setNav]= useState(false);
    const handleclick =()=> setNav(!nav);
  return (
    <div className=' fixed w-full h-[60px] flex justify-between items-center px-4 bg-white text-fuchsia-900 mb-12 '>
        <div>
            <h1 className='w-[50px] font-black text-lg '>LA</h1>
        </div>
      {/*main menu */}
            <ul className='hidden md:flex'>
            <li className='px-2'>Home</li>
            <li className='px-2'>Skills</li>
            <li className='px-2'>Contacts</li>
            </ul>
            {/*humberg */}
            <div onClick={handleclick} className='md:hidden z-10'>
             {!nav ? <FaBars /> : <FaTimes />}
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