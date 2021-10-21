import React from "react";
import { red } from "../../utils/colours";

const MenuBar = (props) => {

  if (props.width <= 576) {
    return null;
  }

  return (
    <div style={{display: "flex", justifyContent: "flex-end"}}>
      <button 
        className="button"
        style={{backgroundColor: red}}
      >
        Logout
      </button>
    </div>
  )
}

export default MenuBar
