import{useState}from "react";



  export default function TextForm(props) {
    const handelClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handelClick1 = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handelClear = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handelChange = (event)=>{
        setText(event.target.value) 
    }

    
    const handelCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert(" Text Copied to Clipboard!", "success");
    }

  
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }



    






    const [text,setText]= useState("")
    return(

      <>
        
  

  <div className="container"  style={{color: props.mode==="dark"?"white":"black"}}>
        
        
            <h1>{props.heading}</h1>
  <div className="mb-3">
    <label for="exampleFormControlTextarea1"></label>
    <textarea class="form-control" id="box" rows="8" value={text} onChange={handelChange}   style={{backgroundColor: props.mode==="dark"?"#343637":"white",color: props.mode==="dark"?"white":"black"}}></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handelClick} disabled={text.length===0}>Convert to upper case</button>
  <button className="btn btn-primary mx-2" onClick={handelClick1}disabled={text.length===0}>Convert to Lower case</button>
  <button className="btn btn-primary mx-2" onClick={handelClear}disabled={text.length===0}>Clear text</button>
  <button className="btn btn-primary mx-2" onClick={handelCopy}disabled={text.length===0}>Copy text</button>
  <button className="btn btn-primary mx-2" onClick={ handleExtraSpaces}disabled={text.length===0}>clear extra spaces</button>


  </div>
<div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
<h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>

  </div>


        
        </>
        
    )
    }

