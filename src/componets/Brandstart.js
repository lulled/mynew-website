import React from'react';
import {useState}from 'react';
import {Data} from '../data/Data';
import Quickstart from '../images/quickstart.png';

const Brandstart =()=>{
const [Toggle,setToggle]=useState(false);
const handleClick = (i)=>{
    if (Toggle === i){
        return setToggle(false)
    }
    setToggle(i)
}
    return(
        <div className='container mx-2'>
            <section className=''>
            <div className='mx-4 px-4 md:mx-40 md:px-40 items-center justify-center'>
            
                <div className='grid text-left  md:'>
                       <h2 className='font-small text-[30px] text-slate-800 md:text-[70px] leading-none'>Lets start now <br/>with quick start</h2>
                     
                </div>

                
              {Data.map((items,i)=>(
                    <div className=' w-1/2 h-full mx  md:mx-10 '>
                        
                        <div onClick={()=> handleClick(i)}
                         className='w-full text-[25px] text-slate-800 inline-block  '>{Toggle === i ? '-':'+'}
                            <div className='text-[25px] text-slate-800 inline-block px-4 '>
                                <h2>{items.key}</h2>
                            </div>
                            <div className={Toggle === i ?' w-[200px] text-[20px] text-slate-800 px-8   md:w-[500px] h-full font-thin font-bodoni':'hidden'}>
                                <p>{items.value}</p>
                            </div>
                        </div>
                   </div>
                  
                    ))}
                    <div className='w-full h-full mt-10'>
                        <img src={Quickstart}alt='' className=''/>

                    </div>
                   </div> 
                   <div className='md:m-[30px]'>
                       <h2 className='  text-center text-[30px] font-light text-cyan-500'>Our quick start Package</h2>
                       <ul className='  '> 
                           <li>
                           <div className='md:flex'>
                            <div className='  w-full md:m-10 md:w-[400px] md:h-full flex flex-col text-center items-center justify-center rounded-[30px] bg-slate-100'>
                             <div>
                              <img className='md:w-[400px] h-[300px] rounded-t-[30px]' src={Quickstart} alt=''/>
                            </div>
                            <div className=' flex-col text-center  '>
                            <h2 className='text-rose-600 font-bold text-[35px] mt-4 '>Some bricks</h2>
                              <p className='text-rose-400 px-12 py-2 pb-8 font-thin '>our team will study ur idea and propose a business model and strategy by diving deeper into ur target-market and competion ,we will find a white space and create a name as unique as  ur idea </p>
                             </div>
                              </div>
       

                           </div>
                           </li>
                       </ul>
                   </div>
            
            </section>
        </div>

    )
}
export default Brandstart;