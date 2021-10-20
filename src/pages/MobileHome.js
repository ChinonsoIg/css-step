import React, { Component } from 'react'
import MenuBar from "../components/semantics/MenuBar";
import Stepper from "../components/semantics/Stepper";
import BusinessCategory from "../components/BusinessCategory";
import SocialHandles from '../components/SocialHandles';
import StepCount from '../components/StepCount';
import VerifyAccount from '../components/verifyaccount/VerifyAccount';
import StepperButton from '../components/StepperButton';
import Divider from "../components/semantics/Divider";


class MobileHome extends Component {
  state = {
    step: 1,
    isComplete: false
  }

  handleStep = () => {
    return this.setState({ step: this.state.step + 1 })
  };

  render () {
    const { handleStep } = this;
    const { step } = this.state;

    return (
      <div className="main-content">
        <MenuBar />
        <Stepper step={step} />
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
                  <div>
                      <h3>The End!</h3>
                    <p>
                      You have reached the end of the design. Kindly refresh your browser.
                    </p>
                  </div>
                )
        }
        <Divider />
        <StepperButton 
          value={step === 1 
            ? "Continue"
            : (step === 2 
              ? "Confirm Social Handles"
              : "Complete" )
          }
          clickEvent={handleStep}
        />
      </div>
    );
  }

}

export default MobileHome;
