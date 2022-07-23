import React from 'react';
import Brand1 from '../images/brand1.png'
import mbc from '../images/mbc.png'

function Brand() {


  return (
    <section className='container pt-[35px]'>
        <div className='mx-2 px-4  items-center justify-center'> 
            <div className='grid grid-cols-1 gap-20'>
                <div className='text-center my-4 md:my-10'>0
                    <h1 className='  text-center text-[45px] text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-700 leading-none md:text-[100px] font-bold py-2'>
                        Create a brand & sell anything
                    </h1>
                    <p className='text-slate-700 mt-5 py- md:mx-20  text-[20px]  font-light font-poppins '>
                   Spin-up your own Brand and practically sell anything, whether you're just starting out or a mature business we gonna get u covered.
                    </p>
                    <img src={Brand1} alt='' className='hidden md:block  md:w-full md:justify-center md:items-center   '/>
                    <img src={mbc} alt='' className=' w-full justify-center items-center  md:hidden '/>
                </div>

            

                

            </div>
        </div>
    </section>
  )
}

export default Brand;