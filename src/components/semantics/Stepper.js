import React from 'react'

const Stepper = (props) => {
  return (
    <div>
      <b>{props.step}</b>
      <p>{props.title}</p>
      <p>isComplete: {props.isComplete ? "button" : "image"}</p>
    </div>
  )
}

export default Stepper;
