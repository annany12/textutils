import React ,{useState} from "react";
//import PropTypes from 'prop-types';



export default function TextForm(props) {
    const [text, setText]=useState("")
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }

    function words() {
     
      let words = text.trim().split(" ").length;
      if (words === 1 && text.split(" ")[0] === "") {
        words = 0;
        return words;
      } else {
        return words;
      }
    }


    const handleUpClick=()=>{
        console.log("Upper case was clicked"  + text);
        let newText=text.toUpperCase();
        setText(newText);
         props.showAlert("Converted to Uppercase!","success")
    }
    const handleLoClick=()=>{
        //console.log(" case was clicked"  + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success")
    }
    const handleclearClick=()=>{
        //console.log(" case was clicked"  + text);
        let newText='';
        setText(newText);
        props.showAlert("Text Cleared!","success")
    }
    
    const handleCopy=()=>{
        var text= document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!","success")

        
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed!","success")
    }

  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'#03386c'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
            style={{backgroundColor:props.mode==='dark'?'black':'white' , color:props.mode==='dark'?'white':'#03386c'}}
          className="form-control"
          id="mybox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-3" onClick={handleclearClick}>Clear Text</button>
      <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Space</button>

      

      </div>
      <div className="container my-2" style={{color:props.mode==='dark'?'white':'#03386c'}}>
        <h2>your text summary</h2>
        <p>{words()} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes required to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter to Preview It Here"}</p>
      </div>
    </>
  );
}
