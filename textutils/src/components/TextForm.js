import React,{useState} from "react";



export default function TextForm(props) {
  const handleClick =()=>{
    console.log("onclick")
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const handleonchange =(event)=>{
    console.log("handleonchange")
    setText(event.target.value)
  }
  const [text,setText] = useState("Enter Text Here");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleonchange}
          id="mybox"
          rows="3"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleClick}>Convert To uppercase</button>
    </div>
    <div className="container my -2">
      <h1>Summary</h1>
      <p>{text.split(" ").length} words and {text.length} sentences</p>
      <p>{0.008*text.split(" ").length} Time</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
