import React from 'react'
import Mongo from '../images/mongo.png'
import Figmaa from '../images/figmaa.png'
import Rreact from '../images/rreact.png'
import Node from '../images/node.png'
import Tailwind from '../images/tailwind.png'
import Github from '../images/github.png'
import Mongodbb from '../images/mongodbb.png'
function Skills() {
  return (
    <div className=''>
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center   w-full h-full '>
            <p className='  text-4xl font-bold inline text-fuchsia-600 border-b-4 border-lime-600'>
                Skills & Tools
            </p>
        </div>
        <div className=' w-full grid grid-cols-2 px-5 py-8 sm:grid-cols-4 gap-4 text-center '>
            <div className=' shadow-md shadow-[#EB088D] hover:scale-110 duration-500'>
               <img className='w-20 mx-auto  ' src={Rreact} alt=''/>
               <p className='my-4 text-slate-500'>React</p>
            </div>
            <div className=' shadow-md shadow-[#EB088D] hover:scale-110 duration-500'>
               <img className='w-20 h-20 mx-auto  ' src={Figmaa} alt=''/>
               <p className='my-4 text-slate-500'>Figma </p>
            </div>
            <div className=' shadow-md shadow-[#EB088D] hover:scale-110 duration-500'>
               <img className='w-20 mx-auto  ' src={Tailwind} alt=''/>
               <p className='my-4 text-slate-500'>Tailwind css</p>
            </div>
            <div className=' shadow-md shadow-[#EB088D] hover:scale-110 duration-500'>
               <img className='w-20 mx-auto  ' src={Github} alt=''/>
               <p className='my-4 text-slate-500'>Github</p>
            </div>
            
            <div className=' shadow-md shadow-[#EB088D] hover:scale-110 duration-500'>
               <img className='w-20 mx-auto  ' src={Node} alt=''/>
               <p className='my-4 text-slate-500'>Node js</p>
            </div>
            <div className=' shadow-md shadow-[#EB088D] hover:scale-110 duration-500'>
               <img className='w-20 mx-auto  ' src={Mongodbb} alt=''/>
               <p className='my-4 text-slate-500'>Mongo DB</p>
            </div>

        </div>
    </div>
  )
}

export default Skills