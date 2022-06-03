import React from 'react'
import Figmaa from '../images/figmaa.png'
import Rreact from '../images/rreact.png'
import Node from '../images/node.png'
import Tailwind from '../images/tailwind.png'
import Github from '../images/github.png'
import Mongodbb from '../images/mongodbb.png'
function Skills() {
  return (
    <div className='flex flex-col  justify-center items-center w-full md:w-[1300px] h-full lg:w-full  '>
        <div className='  mx-auto p-4  justify-center items-center   '>
            <p className='  text-4xl font-bold inline text-fuchsia-600 border-b-4 border-lime-600'>
                Skills & Tools
            </p>
        </div>
        <div className=' flex flex-col justify-center items-center w-full  md:w-full h-full p-6 flex-wrap'>
        <div className=' w-full grid grid-cols-2 px-5 py-8 sm:grid-cols-4 justify-center items-center  gap-4 text-center '>
            <div className=' shadow-lg rounded-md shadow-slate-300 hover:scale-110 duration-500'>
               <img className='w-20 mx-auto  ' src={Rreact} alt=''/>
               <p className='my-4 text-slate-500'>React</p>
            </div>
            <div className=' shadow-lg rounded-md shadow-slate-300 hover:scale-110 duration-500'>
               <img className='w-20 h-20 mx-auto  ' src={Figmaa} alt=''/>
               <p className='my-4 text-slate-500'>Figma </p>
            </div>
            <div className=' shadow-lg shadow-slate-300 rounded-md hover:scale-110 duration-500'>
               <img className='w-20 mx-auto  ' src={Tailwind} alt=''/>
               <p className='my-4 text-slate-500'>Tailwind css</p>
            </div>
            <div className=' shadow-lg shadow-slate-300 rounded-md hover:scale-110 duration-500'>
               <img className='w-20 mx-auto  ' src={Github} alt=''/>
               <p className='my-4 text-slate-500'>Github</p>
            </div>
            
            <div className=' shadow-lg shadow-slate-300 rounded-md hover:scale-110 duration-500'>
               <img className='w-20 mx-auto  ' src={Node} alt=''/>
               <p className='my-4 text-slate-500'>Node js</p>
            </div>
            <div className=' shadow-lg shadow-slate-300 rounded-md hover:scale-110 duration-500'>
               <img className='w-20 mx-auto  ' src={Mongodbb} alt=''/>
               <p className='my-4 text-slate-500'>Mongo DB</p>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Skills