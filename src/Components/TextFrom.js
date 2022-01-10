import React, {useState} from "react";
import PropTypes from 'prop-types';
import './textFrom.css';
export default function TextFrom(props){
    const handleUpclick=()=>
    {
        console.log("This is use to convert to Upper Case"+ text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoclick=()=>
    {
        console.log("This is use to convert to Upper Case"+ text);
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearClick=()=>
    {
        console.log("This is use to convert to Upper Case"+ text);
        let newText="";
        setText(newText)
    }
    const handleOnChange=(event)=>
    {
        setText(event.target.value);
    }     
    const[text,setText]=useState('Enter text here');
    
    return(
        <>
        <div className="Containers" style={{display: 'flex'}}>
            <div>    
                <div className="Container">
                    <h1>{props.heading}</h1>
                    <div className="mb">
                    <textarea className="form_control" value ={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
                    </div>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
                
                <div className="ContainersText" >
                    <h1> Text Summary</h1>
                    <p>{text.split(" ").length} Words and {text.length} Character</p>
                    <p>{0.008*text.split(" ").length} Minutes Read</p>
                </div>
            </div>    
            <div class="cellContainer">

                </div>
                <div>
                    <div className="ContainersPreview" >
                        <h2>Preview</h2>
                        {text}
                    </div>
                </div>
            
        </div>    
        </>
    )
}

TextFrom.prototype={
    heading: PropTypes.string.isRequired
}
Text.defaultProps={
    heading: "Set TextArea"
}