import React from "react";
import Divider from "../semantics/Divider";
import key from "../../images/key.svg";
import tick from "../../images/tick.svg";

const ToggleShow = () => {
  return (
    <div style={{padding: "0.1em 2em"}}>
      <p style={{margin: "0"}}>We only need access to your:</p>
      <ul 
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          listStylePosition: "inside"
        }}
      >
        <li 
          style={{
            display: "flex", 
            justifyContent: "flex-start", 
            alignItems: "center",             
            padding: "0",
          }}
        >
          <img 
            src={tick} 
            alt="Tick" 
            style={{
              padding: "0 0.5em 0 0",
              margin: 0,
            }}
          />
          <p style={{margin: "0"}}>Full Name</p>
        </li>
        <li
          style={{
            display: "flex", 
            justifyContent: "flex-start", 
            alignItems: "center", 
            padding: "0",
          }}
        >
          <img 
            src={tick} 
            alt="Tick" 
            style={{
              padding: "0 0.5em 0 0",
              margin: 0
            }} 
          />
          <p style={{margin: "0.1em"}}>Phone Number</p>
        </li>
        <li
          style={{
            display: "flex", 
            justifyContent: "flex-start", 
            alignItems: "center", 
            padding: 0
          }}
        >
          <img 
            src={tick} 
            alt="Tick"
            style={{
              padding: "0 0.5em 0 0",
              margin: 0
            }}
          />
          <p style={{margin: "0"}}>Date of Birth</p>
        </li>
      </ul>
      <Divider />
      <div style={{display: "flex"}}>
        <img 
          src={key} 
          alt="Key"
          style={{
            padding: "0 0.5em 0 0",
            margin: 0
          }}
        />
        <p style={{margin: "0 0.5em", fontWeight: 600}}>Your BVN does not give us acces to your transactions.</p>
      </div>
    </div>
  );
}

export default ToggleShow;
