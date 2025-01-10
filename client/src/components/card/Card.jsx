import React from 'react'
import "./Card.css"
import { projects } from '../../constants/projects';

const Card = ({ project, theme }) => {

  return (
    <div className="card-hover w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 pt-1 pb-1 pr-2 pl-2 ">
        <div>
          <a href="" className="card">
            <img src="https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-132231.jpg?t=st=1736349896~exp=1736353496~hmac=8170ef87623c485366242fce6486424117fca64202111710293a406bd018be2a&w=996" className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={theme.image}  alt={theme.name} style={{backgroundColor: `${theme.background}`}}/>
                <div className="card__header-text">
                  <h3 className="card__title">{project.name}</h3>
                  <span className="card__status">1 hour ago</span>
                </div>
              </div>
              <p className="card__description">{project.description}</p>
            </div>
          </a>
        </div>
    </div>
  )
}

export default Card