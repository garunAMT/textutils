import React, { useState } from "react";

export default function Analyzer(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };


  
  const [text, setText] = useState("");

  let ReadingMinutes = 0.008*text.split(" ").length
  let ApproxReadMin = parseFloat(ReadingMinutes).toFixed(1)

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            placeholder="Enter text here"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-5" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          Clear 
        </button>
      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words</p>
        <p>{text.length} characters</p>
        <p>{ApproxReadMin} minutes read</p>
      </div>
    </>
  );
}
