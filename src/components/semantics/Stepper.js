import React from "react";
import { GreyButton, BlueButton, CheckmarkButton } from "./Buttons";

const Stepper = (props) => {
  const { step, number, title, width } = props;

  if (width <= 576) {
    return (
      <div className="flex-item" style={{padding: "1em 0 0 0"}}>
        {
          step <= 3 
            ? <BlueButton number={step} />
            : <CheckmarkButton />
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
              : <CheckmarkButton />
        }
      </div>
      <p className="flex-item" style={{paddingLeft: "0.2em"}}>{title}</p>
    </div>
  )
}

export default Stepper;
