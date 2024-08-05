import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("You have click to upperCase")
        let newText = text.toUpperCase();
        setText(newText);

        if(newText===""){
            props.showAlert("Please enter something!", "warning");
        }else{
        props.showAlert("Converted to upperCase!", "success")
    }

    }

    const handleLowClick = () => {
        console.log("You have click to lowerCase")
        let newText = text.toLowerCase();
        setText(newText);

        if(newText===""){
            props.showAlert("Please enter something!", "warning");
        }else{
        props.showAlert("Converted to lowerCase!", "success")
    }
        }

    const handleOnChange = (event) => {
        console.log("Change is happening");
        setText(event.target.value);

    }  
    
    const handleClear = () =>{
        console.log("Text will be cleared");
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }

    const[text, setText] = useState("Enter here");


  return (
    <>
    <div className="container" style={{color: props.mode==='light'? 'black' : 'white'}}>
        <h2>{props.heading}</h2>
<div className="mb-3">
  <label for="myBox" className="form-label">Your textArea</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='light' ? 'white' : 'black', color: props.mode==='light'? 'black' : 'white'}}></textarea>
</div>

<button  className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upperCase</button>
<button  className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowerCase</button>
<button disabled={text.length===0} className="btn btn-secondary mx-1" onClick={handleClear}>Clear text</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='light'? 'black' : 'white'}}>
        <h2>Your text summary</h2>

        <p>{text.split(/\s+/).filter((elements)=>{return elements.length!==0;}).length} words and {text.length} characters</p>
        <p>Read time {0.008 * text.split(/\s+/).filter((elements)=>{return elements.length!==0;}).length} </p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something above inorder to preview it here :)"}</p>

    </div>

    </>
  )
}
