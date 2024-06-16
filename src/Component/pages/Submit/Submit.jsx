import React from 'react'



const Submit = () => {
  return (
    <div className=' ml-28'>
      <div className=' submit h-[500px] w-[400px] bg-black  mt-20  ml-96   text-center rounded-2xl '  >
      <div className=' text-white'>
         <h1 className='text-2xl font-medium p-7'>Ai Twitter Banner</h1>
         <p className='text-xl  p-5'>Join Ai Banner and start Generating Banner For Free</p>
         <button className=' bg-blue-600 text-black text-xl px-24 py-3 rounded-2xl'>Continue with Google</button>
         <button className=' bg-pink-300 text-black text-xl px-24 py-3 rounded-2xl mt-5'>Continue with GitHub</button>
         <button className=' bg-gray-600 text-black text-xl px-24 py-3 rounded-2xl mt-5'>Continue with Email</button>
         <p className='p-5 '>By clicking continue . you Agree <span className='text-blue-400 underline cursor-pointer'>Trems of service </span>  and <span className='text-blue-400 underline cursor-pointer'>Privacy Policy</span> </p>
      </div>
    </div>
    </div>
  )
}

export default Submit
