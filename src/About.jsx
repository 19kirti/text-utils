import React, {useState} from "react";

export default function About(props) {

  const myStyle = {

      color: props.mode==='light'? 'black': 'white',
      backgroundColor: props.mode==='light'? 'white': 'black'

    }

  
  return (
    <>
      <h2 className="container" style={{color: props.mode==='light'? 'black': 'white'}}>About Us</h2>

      <div className="container" style={myStyle}>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Free to Use
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>A completely free to use text utility web-site on your finger tips!</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Browser Complatible
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>Fully compatible with any browser!</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Analyzes your Text
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>Analyzes your text and performs multiple operations on it!</strong>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}
