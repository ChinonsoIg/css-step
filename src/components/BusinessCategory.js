import React, { Component } from "react";
import { BasicButton } from "./semantics/Buttons";
import { dark_blue, blue, dark_grey, btn_primary, btn_highlight } from "../utils/colours";

class BusinessCategory extends Component {
  state = {
    isYesActive: true,
    isNoActive: false,
  }
  
  handleButtonClick = (e) => {
    this.setState({ 
      isYesActive: !this.state.isBvnActive,
      isNoActive: !this.state.isPanActive
    });
  }

  render () {
    const { isYesActive, isNoActive } = this.state;;

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
      <section className="margin-two">
        <h3>Business Categoery</h3>
        <section className="flex-container margin-point-three">
          <div className="flex-item-2">
            <p>Type of your business</p>
            <select>
              <option value="none">Select</option>
              <option value="soleproprietorship">Sole Proprietorship</option>
              <option value="Partnership">Partnership</option>
              <option value="limitedliabilitycompany">Limited Liability Company (LLC)</option>
              <option value="corporation">Corporation</option>
            </select>
          </div>
          <div className="flex-item-2">
            <p>Business category</p>
            <select placeholder="Select business category">
              <option value="none">Select</option>
              <option value="hospitality">Hospitality</option>
              <option value="finance">Finance</option>
              <option value="agriculture">Agriculture</option>
              <option value="health">Health</option>
            </select>
          </div>
        </section>
        <section>
          <p>Do you use POS machines for your business?</p>
          <div>
            <BasicButton 
              name="yes"
              clickEvent={(e) => this.handleButtonClick(e)}
              style={isYesActive ? activeStyle : simpleStyle}
              title="Yes"
            />
            <BasicButton 
              name="no"
              clickEvent={(e) => this.handleButtonClick(e)}
              style={isNoActive ? activeStyle : simpleStyle}
              title="No"
            />
          </div>
        </section>
      </section>
    );
  }
}

export default BusinessCategory
