import React from "react";

const PersonalAccountNumber = () => {

  return (
    <section className="flex-container">
      <div className="flex-item-2">
        <p style={{marginBottom: 0}}>Account Number</p>
        <input style={{width: "100%"}} />
      </div>
      <div className="flex-item-2">
        <p style={{marginBottom: 0}}>Select Bank</p>
        <select placeholder="Select your bank">
          <option value="none">Select</option>
          <option value="gtbank">GTBank</option>
          <option value="fidelity">Fidelity</option>
          <option value="wema">Wema</option>
          <option value="sterling">Sterling</option>
        </select>
      </div>
    </section>
  );
}

export default PersonalAccountNumber;
