import React from 'react'

const StepperButton = (props) => {
  return (
    <div className="btn-section">
      {/* <Button 
        style={{margin: 0}}
        color="blue" 
        onClick={props.clickEvent} >
          {props.value}
      </Button> */}
      <button 
        className="button"
        onClick={props.clickEvent}
      >
        {props.value}
      </button>
    </div>
  )
}

export default StepperButton;
