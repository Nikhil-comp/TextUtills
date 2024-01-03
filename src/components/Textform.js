import React, { useState } from "react";


function Textform (props) {
    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces is removed","success")
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success")

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const clearBox =()=>{
        let newText='';
        setText(newText);
        props.showAlert("Box is clear","success")
        

    }
    const copyText = ()=>{
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied","success")

    }
   
    const [text, setText] = useState(" ");

    return (
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h3 >{props.heading}</h3>

            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="8" onChange={handleOnChange}  value={text} style={{backgroundColor:props.mode==='dark'?'#0f1121':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <div className="buttons">
            <button className="btn ntn-primary mx-3"onClick={handleUpClick} style={{backgroundColor:props.mode==='dark'?'yellow':'orange'}} >convert to uppercase</button>
            <button className="btn ntn-primary mx-3" style={{backgroundColor:props.mode==='dark'?'yellow':'orange'}} onClick={handleLowClick}>convert to lowercase</button>
            <button className="btn ntn-primary mx-3"  style={{backgroundColor:props.mode==='dark'?'yellow':'orange'}} 
            onClick = {clearBox}>clear</button>
            <button className="btn ntn-primary mx-3"  style={{backgroundColor:props.mode==='dark'?'yellow':'orange'}} 
            onClick = {copyText}>copy</button>
             <button className="btn ntn-primary my-3 "  style={{backgroundColor:props.mode==='dark'?'yellow':'orange'}} 
            onClick = {handleExtraSpace}>Remove Extra space</button>
            </div>
            <div className="container my-3 " style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").lenght} words and {text.length} character</p>
                <p>{0.008 * (text.split(" ").length)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
                
            </div>
            
        </div>
    );
}

export default Textform;