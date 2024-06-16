import React from 'react'

const Contact = () => {
  return (
    <div className='mt-20'>
      
    <div className=' contact flex  justify-center  '>
        <div>
        <h1 className='text-5xl font-medium ml-28 text-white mt-10'>Contact Us</h1>
        <div className='mt-10'>
            <input type="text " placeholder='first Name' className='outline-0  border-2 border-orange-500 rounded-2xl p-3'  />
            <input type="text " placeholder='last Name'  className='outline-0  border-2 border-orange-500  ml-9 rounded-2xl p-3' />

        </div>
        <input type="Email" placeholder='email id' className='outline-0  border-2 border-orange-500  mt-5 rounded-2xl p-3' />
        <input type="Phone No " placeholder='+91...........' className='outline-0  border-2 border-orange-500  mt-5 ml-9 rounded-2xl p-3' />
        <br />
        <textarea cols={55} rows={6} placeholder='how may i help you' className='mt-5 border-2 border-orange-500 outline-0 rounded-2xl p-3'></textarea>
        <br />
        <button
                className="text-white bg- border-2 border-orange-400 px-20 py-2 rounded-full hover:bg-gradient-to-r from-orange-600 to-yellow-400 mt-10 ml-28 mb-12"
                onClick={() => navigat("/contact")}
              >
                Submit
              </button>
        </div>
      
    </div>
  
    </div>
  )
}

export default Contact
