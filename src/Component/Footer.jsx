import React from 'react'
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'





const Footer = () => {
    const navigat = useNavigate()
    
  return (
    <>
    <div className=' mt-20 flex justify-between '>
      <div className='flex items-center mb-32'>
        <img src={Logo} alt="" width={50}  onClick={()=>navigat("/")} />
        <h1
          className="text-white text-3xl ml-5 cursor-pointer " onClick={()=>navigat("/")}
        >
          AI Twitter banner
        </h1>
      </div>

      <div className='flex justify-between gap-20 ml-20'>
        <div>
            <h1 className='text-white text-2xl'>PRODUCT</h1>
            <p onClick={()=>navigat("") } className=' text-gray-400 text-xl mt-5  cursor-pointer' >Pricing</p>

        </div>
        <div>
        <h1 className='text-white text-2xl uppercase'>Company</h1>
            <p className=' text-gray-400 text-xl mt-5  cursor-pointer'   onClick={()=>navigat("")}>About</p>
            <p className=' text-gray-400 text-xl mt-5  cursor-pointer'onClick={()=>navigat("")}>Privacy</p>
        </div>
        <div>
            <h1 className='text-white text-2xl uppercase'>Support</h1>
            <p className=' text-gray-400 text-xl mt-5  cursor-pointer' onClick={()=>navigat("")}>Get Support</p>
            
        </div>
        <div>
            <h1 className='text-white text-2xl uppercase'>Follow us</h1>
            <div >
            {/* <img src={Facebool} alt="" />  */}
            <h1 className='text-gray-400 text-lg cursor-pointer mt-4 '>Facebook</h1>
            <h1 className='text-gray-400 text-lg cursor-pointer mt-4 '>Twitter</h1>
            <h1 className='text-gray-400 text-lg cursor-pointer mt-4 '>Instagram</h1>
            </div>
            
        </div>

      

      </div>
      <br />
      
      
    </div>
    <hr className='border border-gray-400 mt-20' />
    <p className='text-xl text-gray-500 p-5 flex  justify-center'>the copy rights reservation under the act </p>
    </>
  )
}

export default Footer
