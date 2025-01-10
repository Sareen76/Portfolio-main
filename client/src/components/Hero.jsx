import React, { useContext, useState, useEffect } from 'react'
import hair from "../assets/hair.svg";
import { DataContext } from "../context/DataProvider.jsx";
import { FaNodeJs } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import image from '../assets/png/hero.png'

import './Hero.css'





function Hero() {

  const { personInfo } = useContext(DataContext);
  const data = personInfo.personalInfo[0];

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smoothTransition, setSmoothTransition] = useState(true);

  const handleMouseMove = (e) => {
    setSmoothTransition(false);
    const heroElement = document.querySelector(".hero");
    const elementRect = heroElement.getBoundingClientRect();
    const centerX = elementRect.left + elementRect.width / 2;
    const centerY = elementRect.top + elementRect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const maxDistance = 10;
    const distance = Math.sqrt(mouseX ** 2 + mouseY ** 2);
    const scale = Math.min(1, maxDistance / distance);

    setPosition({
      x: mouseX * scale,
      y: mouseY * scale,
    });
  };

  const handleMouseLeave = () => {
    setSmoothTransition(true); // Enable animation for smooth reset
  };


  return (
    <div className="container  w-[90%] flex flex-row flex-wrap-reverse  lg:h-screen sm:h-auto items-center justify-center lg:items-center z-0 m-auto">



      <div className="banner lg:w-1/2 sm:w-full p-4  " onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <div className="heading text-center flex flex-col gap-1 mb-3">
          <h3 className="text-3xl flex-nowrap">I'M <span className="text-5xl font-bold text-[#ffce6e]">{data.selfDetails.name.split(" ")[0].toUpperCase()}</span></h3>
          <h2 className="text-3xl font-medium  ">{data.selfDetails.proficiency}</h2>
          <p>
            {data.bio.split('.')[0]}
          </p>
        </div>
        <div className="resume w-full flex justify-center ">
          <button
            className=" text-[#f0bf6c] font-bold rounded-md px-4 py-3 hover:scale-[1.06] transition-all ease-in-out border-[#f0bf6c] border-[3px]"
            href=""
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            Resume
          </button>
        </div>

        <div className="metrics w-full p-2 mt-11 ">
          <ul className="listmetrics flex justify-evenly">
            {data.metrics.map((metric, index) => (
              <li key={index} className='flex flex-col items-center'>
                <p className='text-2xl font-semibold'>{metric.value} +</p>
                <h1 className='text-sm font-normal'>{metric.title.split(" ")[0]}</h1>
              </li>
              ))}
          </ul>
        </div>

      </div>
      {/* <div className="hero flex lg:w-1/2  sm:w-full sm:justify-center p-3 mb-4">
        <img
          src={HeroImage}
          alt="Sareen Garnaik"
          style={{ objectFit: "contain" }}
        />
      </div> */}

      <div className="heroContainer relative flex items-center justify-center lg:w-1/2  sm:w-full mb-4  lg:h-[70vh] lg:pt-12 sm:h-[40vh] scale-[1.3]" 
      
      >
        <div className="hero relative h-[30rem] w-[30rem]" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img src={hair} className='absolute w-[20rem] top-[10%] left-[17.9%]' alt="hair" />

          <div className="eyeL flex absolute items-center justify-between w-[15%]  top-[43%] left-[30%]">
            <h1 className="eyeLeadL col text-black text-[3.5rem] font-[400] ">{`{`}</h1>
            <div className="eyeball mt-1 h-6 w-6 rounded-full bg-black flex" style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          animation: `eyeballVisibility 7s ease-in-out infinite, ${smoothTransition ? 'eyeball 12s cubic-bezier(0.25, 1, 0.5, 1) infinite' : 'none'}`,
          transition: 'transform .1s ease',
        }}
        ><div className="innerball h-2 w-2 rounded-full m-[0.15rem] bg-white transition-all duration-1000"></div></div>
            <h1 className="eyeLeadR col text-black text-[3.5rem] font-[400]">{`}`}</h1>

          </div>

          <div className="nose absolute top-[42%] left-[50%]">
            <h1 className='text-black text-[4rem] font-[400]'>
              |
            </h1>
          </div>

          <div className="eyeR flex absolute items-center justify-between w-[15%]  top-[43%] right-[26.5%]">
            <h1 className="eyeLeadL col text-black text-[3.5rem] font-[400] ">{`{`}</h1>
            <div className="eyeball mt-1 h-6 w-6 rounded-full bg-black flex transition-opacity duration-300" style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          animation: `eyeballVisibility 7s ease-in-out infinite, ${smoothTransition ? 'eyeball 12s cubic-bezier(0.25, 1, 0.5, 1) infinite' : 'none'}`,
          transition: 'transform .1s ease',
        }}
        ><div className="innerball h-2 w-2 rounded-full m-[0.15rem] bg-white transition-all duration-1000"></div></div>
            <h1 className="eyeLeadR col text-black text-[3.5rem] font-[400]">{`}`}</h1>


          </div>

          <div className="mySign absolute top-[55%]  left-[38%] left-1/2">
            <h1 className='text-[6rem]'>SG</h1>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Hero