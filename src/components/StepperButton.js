import React from "react";
import { blue } from "../utils/colours";

const StepperButton = (props) => {
  const { step, title } = props;

  if (step > 3) {
    return null
  }

  return (
    <div style={{display: "flex", justifyContent: "flex-end"}}>
      <button 
        className="button"
        onClick={props.clickEvent}
        style={{backgroundColor: blue}}
      >
        {title}
      </button>
    </div>
  );
}

export default StepperButton;
