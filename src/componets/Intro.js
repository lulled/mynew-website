import React from 'react'
import Dev from '../images/dev.png'
function Intro() {
  return (
    <div name='' className=' flex flex-col w-full h-full bg-white p-4 '>
      {/*main container */}
      <div className='justify-center items-center mt-16 flex flex-col w-full h-full'>

          <div className='max-w-[1300px] w-full h-full  sm:grid grid-cols-2 gap-8 '>
          <div className=''>
          <p className='text-fuchsia-500 mx-2 text-[18px ] px-4'>Hello, there I'am</p>
          <h1 className='text-lime-500 text-[25px] font mx-2  max-w-[500px] px-4'>Lule Ahmed
          </h1>
              <h3 className='text-fuchsia-500 text-4xl px-4'>a UIUX designer & software developer
              </h3>
              <p className=' mx-2 text-slate-500 max-w-[500px] items-left px-4'>Who's pasionate about solving business problems with human centered design,
          Creating digital experiences by combining visual design with product thinking to bring meaningful expriences alive 
          </p>
          </div>
          
          <div className='flex flex-col justify-center w-full h-full '>
          <img className='justify-center items-ceneter md:w-[300px] h-[300px]  px-6' src={Dev} alt=''/>
          </div>
      </div>
      
  
      </div>
    </div>
  )
}

export default Intro