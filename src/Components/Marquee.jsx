import React from 'react'
import {motion} from 'framer-motion'
function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full py-20 rounded-3xl bg-[#004D43]'>
          <div className='text border-t-2  border-b-2 border-gray-500 flex overflow-hidden whitespace-nowrap'>
           
          <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:10}} className='text-[40vh] leading-none font-bold uppercase tracking-tighter  mb-[1vw] '>&nbsp;We are ochi&nbsp;</motion.h1>            
          <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:10}} className='text-[40vh] leading-none font-bold uppercase tracking-tighter  mb-[1vw]'>&nbsp;We are ochi&nbsp;</motion.h1>   
       </div>
    </div>
  )
}

export default Marquee
