import React, {useState} from 'react'

export default function TextForms(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = ()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      
  }

  const handleClearText = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText)
  }

    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");

    // text = "new text"; // This is the wrong way to change the state
    // setText("new text"); // This is the correct way to change the state


    
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="my-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
   </div>

    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>         
    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>    
    <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button> 
    </div>

    <div clssName = "container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox to preview it"}</p>
    </div>
    </>
  )
}