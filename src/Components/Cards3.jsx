import React from 'react'

function Cards3() {
  return (
    <div className='w-full h-screen bg-white flex justify-center '>
  <div className="container flex gap-10 items-center ">
      <div className=' relative card rounded-xl w-[50vw] h-[64vh] bg-[#004D43] flex justify-center items-center'>
         <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />         
         <button className='absolute px-3 py-1 rounded-full border-2 left-5 bottom-4 border-[#CDEA68] text-[#CDEA68]'> &copy; 2022-2025</button>
      </div>
      <div className='relative card rounded-xl w-[50vw] h-[64vh] bg-[#000] flex justify-center items-center'>
         <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
         <button className='absolute px-4 py-1 rounded-full border-2 left-5 bottom-4'>RATING 5.0 ON CLUTCH</button>         
    </div>
     <div className=' relative card rounded-xl w-[50vw] h-[64vh] bg-[#212121] flex justify-center items-center '>
          <img className='h-[20vh]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
           <button className='absolute px-5 py-1 rounded-full border-2 left-5 bottom-4'>BUSINESS BOOTCAMP ALUMNI</button>       
    </div>
  </div>
</div>
  )
}

export default Cards3
