import React from 'react'

const Card = (project) => {
    project = project.value;
    console.log(project)
    if (!project) {
        return (
          <div className="w-1/3 sm:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-10 flex flex-col items-center justify">
              <div className="loader">
                <div className="spin"></div>
                <div className="bounce"></div>
              </div>
            </div>
          </div>
        );
      }
    
      return (
        <div className="lg:w-1/3 sm:w-full">
          <div className="bg-white rounded-lg shadow-lg p-10 flex flex-col items-center justify">
            <img src={project.image} alt={project.name} />
            <h3 className="font-bold text-2xl mb-2">{project.name}</h3>
            <p className="text-gray-800 font-normal text-sm mb-4">{project.description}</p>
            <a href={project.link}>Show Project</a>
          </div>
        </div>
      );
    };

export default Card