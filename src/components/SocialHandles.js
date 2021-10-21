import React from "react"

const SocialHandles = () => {
  return (
    <section className="margin-two">
      <h3>Social Handles</h3>
      <p style={{marginBottom: 0}}>Enter your business social media handles</p>
      <div className="flex-item" style={{marginTop: "1.5em"}}>
        <p style={{marginBottom: "0.3em"}}>Choose your Abeg tag (required)</p>
        <input placeholder="@" />
      </div>
      <div className="flex-container" style={{marginTop: "1.5em"}}>
        <div className="flex-item-2">
          <p style={{marginBottom: "0.3em"}}>Instagram</p>
          <input placeholder="@" />
        </div>
        <div className="flex-item-2">
          <p style={{marginBottom: "0.3em"}}>Twitter</p>
          <input placeholder="@" />
        </div>
      </div>
    </section>
  )
}

export default SocialHandles;
