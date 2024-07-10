import React, { useState } from 'react'

export default function About(props) {
//     const[mystyle,setMystyle]=useState({
//         color:'black',
//         backgroundColor:'white',
//  } )
let mystyle ={
  color:props.mode==='dark'?'white':'#042743',
  backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white'
 
}


 
   
  return (
    <div className='container' >
        <h1 className='my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
       TextUtils gives you a way to analyze your text quickly and efficiently . Be it word count , character count ,how time it will take to read and Preview of entered text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>Textutils is a free character counter tool </strong> that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and character . Thus it is suitable for writing text with word / character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong> Browser Compatible </strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
         This word counter software works in any web browsers such as chrome , Firefox , Internet Explorer , Safari ,Opera. It suits to count characterin facebooks, blog , books, excel document , pdf document , essays , etc.
      </div>
    </div>
  </div>
</div>
</div>
  )
}
