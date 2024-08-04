import React from 'react'
import Card from './card/Card'
const projects = [
        {
            "name": "Project 1",
            "description": "This is a description of project 1",
            "image": "https://picsum.photos/200/300",
            "link": "https://www.google.com"
            }
        ]

const Project = () => {
  return (
    <div className='Project w-full flex flex-col justify-center'>
        <h1 className='text-center mb-2 font-bold text-3xl'>PROJECTS</h1>
        <div className="p-3 flex flex-wrap">
            {projects.map((project, index) => {
                return (
                    <Card key={index} value={project} />
                )
            })}
        </div>
    </div>
  )
}

export default Project