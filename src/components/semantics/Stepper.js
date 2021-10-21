import React from "react";
import TickCompleted from "./TickCompleted";
import { GreyButton, BlueButton } from "./Buttons";

const Stepper = (props) => {
  const { step, number, title, width } = props;

  if (width <= 576) {
    return (
      <div className="flex-item" style={{padding: "1em 0 0 0"}}>
        {
          step <= 3 
            ? <BlueButton number={step} />
            : <TickCompleted />
        }
      </div>
    )
  }

  return (
    <div className="flex-container">
      <div className="flex-item">
        {
          number === step 
            ? <BlueButton number={number} />
            : number > step 
              ? <GreyButton number={number} />
              : <TickCompleted />
        }
      </div>
      <p className="flex-item" style={{paddingLeft: "0.2em"}}>{title}</p>
    </div>
  )
}

export default Stepper;
