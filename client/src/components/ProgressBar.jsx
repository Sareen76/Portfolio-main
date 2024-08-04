import React, { useState } from 'react'
import Circle from './Layout/Circle.jsx'
import './progress.css'

function ProgressBar() {
    const [circle] = useState(4);
    const arr = []

    for(let i=0; i < circle; i++){
        arr.push(<Circle className="circle">{i}</Circle>);
    }
  return (
    <div className="container">
        <div className="content">
            <div className="progressBar">
                {arr}
            </div>
            <div className="button"></div>
            <button className="prev-btn">Prev</button>
            <button className="next-btn">Next</button>
        </div>
    </div>
  )
}

export default ProgressBar