import React, { Component } from "react";
import MenuBar from "../components/semantics/MenuBar";
import Stepper from "../components/semantics/Stepper";
import BusinessCategory from "../components/BusinessCategory";
import SocialHandles from "../components/SocialHandles";
import StepCount from "../components/StepCount";
import VerifyAccount from "../components/verifyaccount/VerifyAccount";
import StepperButton from "../components/StepperButton";
import Divider from "../components/semantics/Divider";
import { MiniButton } from "../components/semantics/Buttons";


class MobileHome extends Component {
  
  state = {
    step: 1,
  }

  handleStep = () => {
    return this.setState({ step: this.state.step + 1 })
  };

  handleRefresh = () => {
    return window.location.reload(false);
  };

  render () {
    const { handleStep, handleRefresh } = this;
    const { step } = this.state;
    const { width } = this.props;

    return (
      <div className="main-content">
        <MenuBar width={width} />
        {
          width <= 576
            ? (
              <Stepper 
                className="flex-item"
                step={step}
                number={1}
                title="Verify Account"
                width={width}
              />
            ) : (
              <div className="flex-container">
                <Stepper 
                  className="flex-item"
                  step={step}
                  number={1}
                  title="Verify Account"
                  width={width}
                />
                <Stepper 
                  className="flex-item"
                  step={step}
                  number={2}
                  title="Social Handles"
                  width={width}
                />
                <Stepper 
                  className="flex-item"
                  step={step}
                  number={3}
                  title="Business Category"
                  width={width}
                />
              </div>
            )
        }
        <Divider />
        <StepCount count={step} />
        {
          step === 1 
            ? <VerifyAccount />
            : step === 2 
              ? <SocialHandles />
              : step === 3 
                ? <BusinessCategory />
                : (
                  <div style={{display: "grid", placeItems: "center"}}>
                      <h3>The End!</h3>
                    <p>
                      You have reached the end of the design. Kindly refresh your browser to return home.
                    </p>
                    <MiniButton title="Refresh" clickEvent={handleRefresh} />
                  </div>
                )
        }
        <Divider />
        <StepperButton 
          title={step === 1 
            ? "Continue"
            : (step === 2 
              ? "Confirm Social Handles"
              : "Complete" )
          }
          clickEvent={handleStep}
          step={step}
        />
      </div>
    );
  }

}

export default MobileHome;
