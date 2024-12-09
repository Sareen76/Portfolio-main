import React, { useState, useEffect } from 'react';
import companies from '../constants/timeline.js';
import  './progress.css';



const triangleOdd = {
  width: 0,
  height: 0,
  borderTop: '17px solid transparent',
  borderBottom: '17px solid transparent',
  borderRight: '25px solid white'
}

const triangleEven = {
  width: 0,
  height: 0,
  borderTop: '17px solid transparent',
  borderBottom: '17px solid transparent',
  borderLeft: '25px solid white'
}


const ProgressBar = () => {

  // const [keyframes, setkeyframes] = useState("");

  // function valueKeyframe() {
  //   const itemsLength = companies.length;
  //   let dynamicKeyframes = '.line {animation: 15s slidedown ease;} @keyframes slidedown{';
  //   let percentage = 100 / itemsLength;

  //     const parent = document.querySelector('.timline');
  //     const child = document.querySelectorAll('.timeline .container');

  //     if (parent) {
  //       const parentHeight = parent.clientHeight;
  //       let factor = 0;

  //       for (let i = 0; i < itemsLength; i++) {
  //         const childHeight = child[i].clientHeight;
  //         const heightPercentage = (childHeight / parentHeight) * 100;
  //         dynamicKeyframes += `${Math.floor(percentage * i + (i === 0? 0 : percentage/itemsLength)*i)}% { bottom : ${ (100 - Math.ceil(factor)) <=14? 14: 100 - Math.ceil(factor)- (percentage/itemsLength+2)}% }\n`; // 86 9-s the bottom max percent

  //         console.log(heightPercentage,i)
  //         dynamicKeyframes += '';
  //         setkeyframes(dynamicKeyframes);
  //         factor += Math.floor(heightPercentage) ;
  //       }

  //     } else {
  //       console.error('Parent element not found');
  //     }


  // }



  // useEffect(() => {
  //   valueKeyframe();

  //   if (keyframes) {
  //     const styleSheet = document.createElement("style");
  //     styleSheet.type = "text/css";
  //     styleSheet.innerHTML = `
  //       ${keyframes}
  //     `;
  //     document.head.appendChild(styleSheet);
  //   }
  // }, [keyframes])




  return (
    <div className='timeline w-full'>
      <h1 className='text-center font-bold text-3xl'>Timeline</h1>

      <div className="timline w-full p-20 relative -mt-16">
        {companies.map((company, index) => (
          <div key={index} className={`container px-3 py-2 relative lg:w-1/2 sm:w-full md:w-full ${index % 2 == 0 ? 'lg:right-container lg:-left-[.7rem]' : 'lg:left-container lg:left-[50%] lg:ml-[1.16rem]'}`}>
            <img src={company.image} alt="img" className={`absolute w-[30px] h-[30px] rounded-full top-[48px] z-10 bg-white md:left-[-30px] sm:left-[-30px] p-1 ${index % 2 == 0 ? "lg:left-[100%]" : ""}`} />
            <div className={`textBox px-5 py-7 -translate-y-3 ${index % 2 == 0 ? 'mr-5' : 'ml-5'} bg-white relative text-black rounded-xl`}>
              <h1 className='font-bold'>{company.companyName}</h1>
              <small className=''>{company.duration}</small>
              <p className='text-[.9rem]'> {company.description}</p>
            </div>

            <div className={`triangle absolute top-12 ${index % 2 == 0 ? 'right-3' : 'left-3'}`} style={index % 2 == 0 ? triangleEven : triangleOdd}></div>
          </div>
        ))}

        <div className="line absolute top-32 bottom-[8%] w-[6px] rounded-xl sm:left-16 md:left-16 lg:left-1/2 bg-white"></div>
      </div>

    </div>
  )
}

export default ProgressBar