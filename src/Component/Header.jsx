import React from 'react'
import Hero from "../assets/hero-shape.png"

const Header = () => {
  return (
    <div className=' header bg-black flex justify-between  rounded-3xl relative  p-32 mt-10'>
        <div className=' z-20 '>
            <button className='text-white text-2xl bg-gradient-to-r from-slate-600 to bg-gray-600 px-16 py-1.5 rounded-full mb-12' >Genrate Banner dalle-b</button>
            <h1 className='w-2/4 text-7xl text-white font-semibold'>Instantly Craft stunning twitter Banners</h1>
            <button
        className="text-white bg- border-2 border-orange-400 px-6 py-2 rounded-full hover:bg-gradient-to-r from-orange-600 to-yellow-400 mt-10"
        onClick={() => navigat("/submit")}
      >
        Get Start For Free
      </button>
        </div>
        <div>
            <img src={Hero} alt="" className=' absolute  right-0 top-0 rounded-t-3xl z-10'  />
        </div>
      
    </div>
  )
}

export default Header
