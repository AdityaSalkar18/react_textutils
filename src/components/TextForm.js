import React,{useState} from 'react'

export default function TextForm(props){
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success"); 
    }
    const handleLoClick = () =>{
      // console.log("Uppercase was clicked:" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase!", "success");
  }
  const handleclearClick = () =>{
    let newText = ' ';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
}

    const handleOnChange = (event) =>{
        // console.log("On Chnage");
        setText(event.target.value);
        
    }

    const handleCopy = () =>{
      // var text = document.getElementById("myBox");
      // text.select();
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('');

    //text = "new text"; //Wrong way to change the state
    //setText("new text");//Correct way to change the state

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1 className='mb-3'>{props.heading}</h1>
  <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary m-2" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary m-2" onClick={handleclearClick}>Clear</button>
  <button className="btn btn-primary m-2" onClick={handleCopy}>CopyText</button>
  <button className="btn btn-primary m-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>

  <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2 >Your text summery</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} charaters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Miutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

  </div>
  </>
  )
}
