import React from 'react';
import Card from './card/Card';
import { projects, themes } from '../constants/projects';

const Project = () => {

  // Move the function outside of the map to avoid recreating it on every render
  const getThemeForProject = (project, themes) => {
    return themes[project.category]; // Dynamically fetch theme using project.category
  };

  return (
    <div className='Project w-[90%] flex flex-col m-auto'>
      <h1 className='text-center mb-2 font-bold text-3xl'>PROJECTS</h1>
      <div className="projectCards p-3 flex flex-wrap">
        {projects.map((project, index) => {
          // Pass theme based on category
          const theme = getThemeForProject(project, themes);

          return (
            <Card key={index} project={project} theme={theme} />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
