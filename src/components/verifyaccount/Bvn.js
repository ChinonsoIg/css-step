import React, { Component } from "react";
import lock from "../../images/lock.svg";
import arrow_up from "../../images/arrow_up.svg";
import ToggleShow from "./ToggleShow";
import { blue } from "../../utils/colours";

class Bvn extends Component {
  state = {
    show: false,
  }

  handleToggle = () => this.setState({ show: !this.state.show });

  render () {
    const { show } = this.state;
    const { handleToggle } = this;

    return (
      <section>
        <p style={{marginBottom: 0}}>Bank Verification Number (11-digits)</p>
        <input style={{borderColor: blue
        }} placeholder="BVN..." />
        
        <section className="toggle">
          <div className="flex-container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <img src={lock} alt="Lock" />
              <p style={{margin: "0 0.5em", padding: 0, fontWeight: 600}}>
                Why do we need your BVN?
              </p>
            </div>
            <div>
              <p 
                style={{
                  display: "flex", 
                  cursor: "pointer"
                }} 
                onClick={handleToggle}>
                <p style={{margin: "0 0.5em 0 0", padding: 0, fontWeight: 600}}>
                  { show ? "Hide" : "Show" }
                </p>
                <img src={arrow_up} alt="Arrow up" />
              </p>
            </div>
          </div>
          {
            show ? <ToggleShow /> : null
          }
        </section>
      </section>
    );
  }
}

export default Bvn;

