import React, { useState } from "react";
import Section from "../assets/section-bg.png";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const [menu, setMenu] = useState("Month");
 const [year ,setYearly] = useState("Month");
  const navigat = useNavigate()
 
  return (
    <div className=" pricing h-[800px] bg-black mt-20 relative rounded-xl">
      <img
        src={Section}
        className=" object-cover absolute z-10"
        alt="section"
      />
      <div className="  absolute w-full z-20 top-56">
        <div className="flex flex-col items-center">
        <h1 className="text-white text-5xl item-center ">
          Predicatable pricing for <br /> <span className="ml-20">
          every use case
          </span>
        </h1>
        <p className="text-white text-xl mt-5 ">
          find a plan that fits you. upgrade at any time to enable additional
          features
        </p>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-10 mt-10 px-5">
            <div className="border-2 border-white flex flex-col items-center p-5 rounded-2xl">
              <h1 className="text-white text-2xl mt-5">basic</h1>
              <p className="text-white text-xl">{year==="Month"?"$5/Month":"$10/Yearly"}</p>
              <ul className="nav-cont text-white mt-5 cursor-pointer">
                <li
                  onClick={() => setYearly("Month")}
                  className={year === "Month" ? "active" : ""}
                >
                  Month
                </li>
                <li
                  onClick={() => setYearly("Yearly")}
                  className={year === "Yearly" ? "active" : ""}
                >
                  Yearly
                </li>
              </ul>
              <ul className="text-white mt-5">
                <li>✓ Genrate 10 Banner image</li>
                <li>✓ basic edtiding image</li>
                <li>✓ email supporting</li>
              </ul>
              <button
                className="text-white bg- border-2 border-orange-400 px-20 py-2 rounded-full hover:bg-gradient-to-r from-orange-600 to-yellow-400 mt-10"
                onClick={() => navigat("/submit")}
              >
                Get Started
              </button>
            </div>

            <div className="border-2 border-white flex flex-col items-center p-5 rounded-2xl">
              <h1 className="text-white text-2xl mt-5">Pro</h1>
              <p className="text-white text-xl">{menu==="Month"?"$10/Month":"$30/Yearly"}</p>
              <ul className="nav-cont text-white mt-5 cursor-pointer">
                <li
                  onClick={() => setMenu("Month")}
                  className={menu === "Month" ? "active" : ""}
                >
                  Month
                </li>
                <li
                  onClick={() => setMenu("Yearly")}
                  className={menu === "Yearly" ? "active" : ""}
                >
                  Yearly
                </li>
              </ul>
              <ul className="text-white mt-5">
                <li>✓ Genrate 10 Banner image</li>
                <li>✓ basic edtiding image</li>
                <li>✓ email supporting</li>
              </ul>
              <button
                className="text-white bg- border-2 border-orange-400 px-20 py-2 rounded-full hover:bg-gradient-to-r from-orange-600 to-yellow-400 mt-10"
                onClick={() => navigat("/submit")}
              >
                Get Started
              </button>
            </div>

            <div className="border-2 border-white flex flex-col items-center p-5 rounded-2xl">
              <h1 className="text-white text-2xl mt-5">Enterprise</h1>
              <p className="text-white text-xl">Custom</p>
              <ul className="text-white mt-5">
                <li>✓ Genrate 10 Banner image</li>
                <li>✓ basic edtiding image</li>
                <li>✓ email supporting</li>
              </ul>
              <button
                className="text-white bg- border-2 border-orange-400 px-20 py-2 rounded-full hover:bg-gradient-to-r from-orange-600 to-yellow-400 mt-10"
                onClick={() => navigat("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
