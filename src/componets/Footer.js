import React from 'react'
import Tailwind from '../images/tailwind.png'
import Node from '../images/node.png'
import Rreact from '../images/rreact.png'

function Footer() {
  return (
    <div>
       <div className='flex items-center justify-center text-slate-400 py-2'>powered by</div>
         <div className='flex flex-col items-center justify-center '>
         <ul className=' flex   gap-4'>
           <li>
           <img className='w-[40px] h-[40px]'src={Tailwind} alt=''/>
           </li>
           <li>
           <img className='w-[40px] h-[40px]'src={Rreact} alt=''/>
           </li>
           <li>
           <img className='w-[40px] h-[40px]'src={Node} alt=''/>
           </li>

         </ul>
         <p className='text-slate-500 py-4'>&copy;copyright2022 by Lule Ahmed.</p>
         </div>
         
         
       </div> 
    
  )
}

export default Footer