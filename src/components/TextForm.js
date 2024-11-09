import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TextForm(props) {

  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleUpClick = () => {
    if (text.length === 0) {
      props.showAlert("Please Type Something", "danger");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase!", "success");
    }
  }

  const handleCapClick = () => {
    if (text.length === 0) {
      props.showAlert("Please Type Something", "danger");
    } else {
      let words = text.split(" ").map((element) => {
        return element.charAt(0).toUpperCase() + element.slice(1);
      });
      let newText = words.join(" ");
      setText(newText);
      props.showAlert("Converted First letter to Capital!", "success");
    }
  }

  const handleLowClick = () => {
    if (text.length === 0) {
      props.showAlert("Please Type Something", "danger");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase!", "success");
    }
  }

  return (
    <>
      <div className="container my-3">
        <h2 className="text-center">{props.Heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            onChange={handleOnChange}
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : '#222022',
              color: props.mode === 'dark' ? 'white' : '#222022',
              resize: 'none'
            }}
          ></textarea>
        </div>

        <div className="d-flex flex-wrap justify-content-center">
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-warning mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
          <button className="btn btn-success mx-2 my-2" onClick={handleCapClick}>Convert to Capital</button>
        </div>
      </div>

      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{text.trim().split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.trim().split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
      </div>
    </>
  );
}
