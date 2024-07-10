import React,{useState} from 'react'


export default function TextForm(props) {

  const [text,setText]=useState('');
  

    const handleUpClick=()=>{
   let newtext=text.toUpperCase();
   setText(newtext);
   props.showAlert("Converted to Uppercase","success");
    }

    const handleToClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase","success");
         }

   const handleclearClick=()=>{
           setText("");
           props.showAlert("Text is Cleared!","success");
     }

     const handlecopy=()=>{
      var text =document.getElementById("myBox");
    
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clickboard","success");
     }
   
  const handleExtra=()=>{
    let newText=text.split(/[  ]+/);// removes the extra space when there is 2 or more space.
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed","success");
  }
     

    const handleonchange=(event)=>{
  setText(event.target.value);
    }
 

  return (
    <>
    <div className='container' style={{color:props.mode=== 'dark' ? 'white':'#042743'}}>
     <h1 className='mb-4'>{props.heading}</h1>

     

<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark' ? '#13466e':'white',   color: props.mode === 'dark' ? 'white' : 'Black'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}  style={{border:"3px solid pink" }}>
    Convert to Uppercase
   </button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleToClick} style={{border:"3px solid pink" }}>
    Convert to Lowercase
   </button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick} style={{border:"3px solid pink" }}>
    Clear text
   </button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy} style={{border:"3px solid pink" }}>
    Copy to clickboard
   </button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtra} style={{border:"3px solid pink" }}>
    Remove extra space
   </button>
    </div>
    
    <div className="container my-4" style={{color:props.mode==='dark' ? 'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>It takes {0.08*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read .</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to Preview'}</p>
    </div>
    </>
  )
}
