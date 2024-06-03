import React from 'react'

function Page({pageNo,handlePrev,handleNext}) {
  return (
    <div className='bg-gray-400 mt-8 p-4 flex justify-center '>
        <div  onClick={handlePrev} className='px-8'><i class="fa-solid fa-arrow-left"></i></div>
        {pageNo}
       <div onClick={handleNext} className='px-8'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Page