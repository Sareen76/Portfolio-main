import React from 'react';
import techslab from '../constants/techslab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import  './progress.css';


function Techslab() {
  return (
    <div className="Techslab w-[80%] mx-auto">
      <div className="flex flex-row flex-wrap gap-3 justify-center" >
        {techslab.map((tech, index) => (
          <div
            className="card flex flex-col gap-4 items-center justify-center bg-[#121212] p-6 pr-10 rounded-2xl relative max-w-[200px] z-0 group "
            key={index}
          >
            <h1 className="title text-white text-xl font-semibold z-2">{tech.title}</h1>

            <div className="rating flex z-2">
              {[...Array(5)].map((_, i) => (
                <span className={`icon ${i < tech.rating ? 'group-hover:scale-105 text-[gold] ':''}`} key={i} >
                  <FontAwesomeIcon icon={i < tech.rating ? solidStar : regularStar} />
                </span>
              ))}
            </div>

            <span className="logo absolute top-1 right-1">
              <tech.logo className="text-3xl" style={{ color: tech.color }} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techslab;
