import React from 'react'

const StepCount = (props) => {
  return (
    <div>
      <p style={{color: "grey"}}>Step {props.count > 3 ? 3 : props.count}/3</p>
    </div>
  )
}

export default StepCount;
