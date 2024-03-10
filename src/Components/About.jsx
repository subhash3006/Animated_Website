import React from 'react'

function About() {
  return (
    <div className='w-full p-10 bg-[#CDEA68] rounded rounded-tl-3xl rounded-tr-3xl text-black'>
          <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[3.5vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
          <div className='border-t-[2px] flex gap-6 pt-8 border-[#80933d] mt-12'>
              <div className='w-1/2'>
                  <h1 className='text-6xl'>Our approach :</h1>
                  <button className='flex items-center gap-10 uppercase px-10 py-6 bg-black rounded-full text-white mt-6 font-semibold'>Read More
                    <div className='w-3 h-3 bg-white rounded-full'></div>
                  </button>
              </div>
             <div className='w-1/2 h-[75vh] bg-[#7d8e3e] rounded-3xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
              </div>
          </div>
      </div>
      
  )
}

export default About
