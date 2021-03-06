import React from "react";
import { blue, faint_btn, faint_btn_text, white, faint_blue } from "../../utils/colours"

const BlueButton = (props) => {
  return (
      <b
      style={{
        padding: "0.2em 0.6em",
        borderRadius: "0.2em",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        backgroundColor: blue, 
        color: white
      }}
      >
        {props.number}
      </b>
  )
}

const GreyButton = (props) => {
  return (
    <b
      style={{
        padding: "0.2em 0.6em",
        borderRadius: "0.2em",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        backgroundColor: faint_btn, 
        color: faint_btn_text,
      }}
      >
        {props.number}
    </b>
  )
}

const CheckmarkButton = () => {
  return (
    <b
      style={{
        padding: "0.2em 0.6em",
        borderRadius: "0.2em",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        backgroundColor: faint_blue,
        color: blue,
      }}
      >
        &#10003;
    </b>
  )
}

const BasicButton = (props) => {
  return (
    <button 
      style={props.style}
      onClick={props.clickEvent}
      name={props.name}
    >
      {props.title}
    </button>
  )
}

const MiniButton = (props) => {
  return (
    <button 
      style={{
        border: "none",
        color: white,
        backgroundColor: blue,
        padding: "0.5em 1em",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "1.2em",
        margin: "0.2em 0.1em",
        borderRadius: "0.3em",
        cursor: "pointer",
      }}
      onClick={props.clickEvent}
    >
      {props.title}
    </button>
  )
}

export { BlueButton, GreyButton, BasicButton, MiniButton, CheckmarkButton };
