import React from 'react'

function IconQuiz() {
  return (
    <>
    <div className='p-10'>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-xl mb-5'>Q.1</p>
        <img src="/itIconQuiz.svg" alt="" className='w-50 md:w-70 rounded-xl'/>
      </div>

       <div className='grid grid-cols-1 md:grid-cols-2 mt-10 text-center gap-x-6 gap-y-6 md:gap-y-10 w-fit mx-auto'>
        <p className='bg-red-300 rounded-xl px-30 md:px-40 py-6 md:py-8'>select1</p>
        <p className='bg-blue-300 rounded-xl px-30 md:px-40 py-6 md:py-8'>select2</p>
        <p className='bg-green-300 rounded-xl px-30 md:px-40 py-6 md:py-8'>select3</p>
        <p className='bg-yellow-300 rounded-xl px-30 md:px-40 py-6 md:py-8'>select4</p>
      </div>
    </div>
    </>
  )
}

export default IconQuiz