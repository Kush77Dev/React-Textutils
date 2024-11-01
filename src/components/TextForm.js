import React,{useState} from "react";

export default function TextForm(props) {

    const [text, setText] =useState('');

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleUpClick = () =>{
        if (text.length===0) {
          props.showAlert("Please Type Something","danger")
        }
        else{
          let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase !","success")
        }
    }

    const handleCapClick = () =>{
     if (text.length===0) {
      props.showAlert("Please Type Something","danger")
     }
     else{
      let words = text.split(" ").map((element) => {
        return element.charAt(0).toUpperCase() + element.slice(1);
       });
  
       let newText = words.join(" ");
       setText(newText);
       props.showAlert("Converted First letter to Capital !","success")
     }

  }

  
  const handleLowClick = () =>{
    if (text.length===0) {
      props.showAlert("Please Type Something","danger")
    }
    else{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase !","success")
    }

}
    return (
    <>
      <div className="container">
        <h2>{props.Heading}</h2>
        <div className="mb-3">
        <label htmlFor="mybox" className="form-label">
        </label>
        <textarea className="form-control" id="mybox" onChange={handleOnChange} rows="8" value={text} style={{backgroundColor: props.mode==='light'?'white':'#222022',color:props.mode==='dark'?'white':'#222022'}}></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-warning" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-success mx-3" onClick={handleCapClick}>Convert to Capital</button>

    </div>
    <div className="container">
      <h2 className="mt-4">Text Summary</h2>
      <p>{text.trim().split(" ").length} word and {text.length} characters</p>
      <p>{0.008 * text.trim().split(" ").length} Minutes to Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something to Preview  Here"}</p>
    </div>
    </>
  );
}
