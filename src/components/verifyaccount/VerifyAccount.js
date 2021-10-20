import React, { Component } from 'react';
// import Bvn from "./Bvn";
// import PersonalAccountNumber from "./PersonalAccountNumber";

class VerifyAccount extends Component {
  // state = {
  //   activeButton: "bvn",
  // }
  
  // handleButtonClick = (e, { name }) => {
  //   this.setState({ 
  //     activeButton: name
  //   });
  // }

  render() {
    // const { activeButton } = this.state;

    return (
      <section className="margin-two">
        <p>Verify Account</p>
        {/* <Header as="h3">
          Verify Account
        </Header>
        <div className="margin-point-three">
          <p style={{marginBottom: 0}}>Select a verification method</p>
          <div className="mobile-wrap">
            <Button 
              basic 
              name="bvn"
              active={activeButton === "bvn"}
              color={activeButton === "bvn" ? "blue" : null}
              onClick={this.handleButtonClick}
              style={{marginRight: "1em", borderRadius: "0.8em"}}
              className="mobile-item"
              >
              BVN
            </Button>
            <Button 
              basic 
              name="pan"
              active={activeButton === "pan"}
              color={activeButton === "pan" ? "blue" : null}
              onClick={this.handleButtonClick}
              style={{marginLeft: "1em", borderRadius: "0.8em"}}
              className="mobile-item"
              >
              Personal Account Number
            </Button>
          </div>
        </div>
        <div>
          {
            activeButton === "bvn" 
              ? <Bvn /> 
              : <PersonalAccountNumber />
          }
        </div> */}
      </section>
    );
  }
}

export default VerifyAccount
