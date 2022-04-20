import React from 'react'
import Dev from '../images/dev.png'
function Intro() {
  return (
    <div name='' className='w-full h-[650px] bg-white '>
      {/*main container */}
      <div className='justify-center items-center flex flex-col w-full h-full'>

          <div className='max-w-[500px] w-full sm:grid grid-cols-2 gap-8 '>
          <div className=''>
          <p className='text-fuchsia-500 mx-2 text-[18px ] px-4'>Hello, there am</p>
          <h1 className='text-lime-500 text-[25px] font mx-2  max-w-[500px] px-4'>Lule Ahmed
          </h1>
              <h3 className='text-fuchsia-500 text-4xl px-4'>a UIUX designer & software developer
              </h3>
              <p className=' mx-2 text-slate-500 max-w-[500px] items-left px-4'> based in Kampala uganda,Who's pasionate about solving business problems with human centered design,
          Creating digital experiences by combining visual design with product thinking to bring meaningful expriences alive 
          </p>
          </div>
          
          <div className='justify-center w-full h-full px-6'>
          <img className='justify-center items-ceneter  px-6' src={Dev} alt=''/>
          </div>
      </div>
      
  
      </div>
    </div>
  )
}

export default Intro