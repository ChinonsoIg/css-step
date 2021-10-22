import React, { Component } from "react";
import { BasicButton } from "../semantics/Buttons";
import Bvn from "./Bvn";
import PersonalAccountNumber from "./PersonalAccountNumber";
import { dark_blue, blue, dark_grey, btn_primary, btn_highlight } from "../../utils/colours";

class VerifyAccount extends Component {
  state = {
    isBvnActive: true,
    isPanActive: false,
  }
  
  handleButtonClick = (e) => {
    this.setState({ 
      isBvnActive: !this.state.isBvnActive,
      isPanActive: !this.state.isPanActive
    });
  }

  render() {
    const { handleButtonClick } = this;
    const { isBvnActive, isPanActive } = this.state;

    let activeStyle = {
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: blue,
      color: dark_blue,
      backgroundColor: btn_highlight,
      padding: "5px 11px",
      textAlign:" center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
      margin: "4px 2px",
      borderRadius: "5px",
      cursor: "pointer",
    }

    let simpleStyle = {
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: dark_grey,
      color: dark_blue,
      backgroundColor: btn_primary,
      padding: "5px 11px",
      textAlign:" center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
      margin: "4px 2px",
      borderRadius: "5px",
      cursor: "pointer",
    }

    return (
      <section>
        <h3 style={{margin: '0.2em'}}>Verify Account</h3>
        <div className="margin-point-three">
          <p style={{marginBottom: 0}}>Select a verification method</p>
          <div className="mobile-wrap">
            <BasicButton 
              name="bvn"
              clickEvent={(e) => handleButtonClick(e)}
              style={isBvnActive ? activeStyle : simpleStyle}
              title="BVN"
            />
            <BasicButton 
              name="pan"
              clickEvent={(e) => handleButtonClick(e)}
              style={isPanActive ? activeStyle : simpleStyle}
              title="Personal Account Number"
            />
          </div>
        </div>
        <div>
          {
            isBvnActive 
              ? <Bvn /> 
              : <PersonalAccountNumber />
          }
        </div>
      </section>
    );
  }
}

export default VerifyAccount;
