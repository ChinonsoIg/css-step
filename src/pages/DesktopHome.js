// import React, { Component } from 'react'
// import MenuBar from "../components/semantics/MenuBar";
// import Stepper from "../components/semantics/Stepper";
// import BusinessCategory from "../components/BusinessCategory";
// import SocialHandles from '../components/SocialHandles';
// import StepCount from '../components/StepCount';
// import VerifyAccount from '../components/verifyaccount/VerifyAccount';
// import Divider from "../components/semantics/Divider";

// import StepperButton from '../components/StepperButton';
// import StepperButton from '../components/StepperButton';
// import image_2 from "../image/image_2.svg";


// class DesktopHome extends Component {
//   state = {
//     step: 1,
//   }

//   handleStep = () => {
//     return this.setState({ step: this.state.step + 1 })
//   }

//   render () {
//     const { handleStep } = this;
//     const { step } = this.state;

//     return (
//       <section className="desktop-view">
//         <p>Deestop</p>
        
//         <img src={image_2} className="image-content" alt="logo" />

//         <section className="main-content">
//           <MenuBar />
//           <Stepper step={step} />
//           <Divider />
//           <StepCount count={step} />
//           {
//             step === 1 
//               ? <VerifyAccount />
//               : step === 2 
//                 ? <SocialHandles />
//                 : step === 3 
//                   ? <BusinessCategory />
//                   : (
//                     <div>
//                         <h3>The End!</h3>
//                       <p>
//                         You have reached the end of the design. Kindly refresh your browser.
//                       </p>
//                     </div>
//                   )
//           }
//           <Divider />
//           <StepperButton />
//         </section>

//       </section>
//     );
//   }

// }

// export default DesktopHome;
