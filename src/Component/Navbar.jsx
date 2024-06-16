import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigat = useNavigate();
  const[lap ,setlap]=useState("Home")
  return (
   <div className="fixed z-30 w-[90%] top-2 ml-2 mt-5 backdrop-blur-lg px-5 py-3 rounded-lg shrink-0 ">
    <div className="flex justify-between ">
      <div className="flex items-center ">
        <Link to="/">
          {" "}
          <img src={Logo} alt="" className="w-14" />
        </Link>
        <h1
          className="text-white text-4xl ml-5 cursor-pointer "
          onClick={() => navigat("/")}
        >
          AI Twitter banner
        </h1>
      </div>

      <ul className="nav-menu  text-white flex items-center gap-10 text-2xl">
        <Link to={"/"} onClick={()=>setlap("Home")} className={lap==="Home"?"active " :""}>Home</Link>
        <Link to={"/About"} onClick={()=>setlap("About")} className={lap==="About"?"active " :""}  >About</Link>
        <Link to={"/pri"} onClick={()=>setlap("Privacy")} className={lap==="Privacy"?"active " :""} >Privacy</Link>
        <Link to={"/price"} onClick={()=>setlap("Pricing")} className={lap==="Pricing"?"active " :""} >Pricing</Link>
      </ul>
      <Link to={"/submit"} > <button
        className="text-white bg- border-2 border-orange-400 px-6 py-2 rounded-full hover:bg-gradient-to-r from-orange-600 to-yellow-400 mt-2"
         
      >
        Get Start For Free
      </button></Link>
     
    </div>
   </div>
  );
};

export default Navbar;
