import React from "react";

const StepCount = (props) => {
  return (
    <div>
      <p style={{color: "grey", margin: 0}}>Step {props.count > 3 ? 3 : props.count}/3</p>
    </div>
  )
}

export default StepCount;
