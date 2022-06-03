import React from'react';
import {useState}from 'react';
import {Data} from '../data/Data';


const Brandstart =()=>{
const [Toggle,setToggle]=useState(false);
const handleClick = (i)=>{
    if (Toggle === i){
        return setToggle(false)
    }
    setToggle(i)
}
    return(
        <div>
            <section className=''>
            <div className='mx-2  md:mx-40 md:px-40 items-center justify-center'>
            <div className='text-left  md:'>
                    <h2 className='font-small text-[30px] text-slate-800 md:text-[70px] leading-none'>Lets start now <br/>with quick start</h2>
                     
                    <div className='grid grid-cols-1 gap-20 md:grid-cols-2'>

                    </div>

                </div>

                
                {Data.map((items,i)=>(
                    <div className='md:mx-10 px-4 '>
                        
                        <div onClick={()=> handleClick(i)}
                         className='text-[30px] text-slate-800 inline-block px-6 '>{Toggle === i ? '-':'+'}
                            <div className='text-[25px] text-slate-800 inline-block px-6 '>
                                <h2>{items.key}</h2>
                            </div>
                            <div className={Toggle === i ?' w-[] text-[20px] text-slate-800 px-8   md:w-[500px] h-full font-thin font-bodoni':'hidden'}>
                                <p>{items.value}</p>
                            </div>
                        </div>
                   </div>
                    ))}
                </div>
            </section>
        </div>

    )
}
export default Brandstart;