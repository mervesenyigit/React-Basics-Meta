import React, { useState } from 'react'


function InputComponent() {
    function handleChange(e) { 
        setText(e.target.value); 
      } 
    
    const[inputText,setText]=useState("hello");
  return (
    <div>
      <input value={inputText} onChange={handleChange} />
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hi!!!!')}> 
        Reset 
      </button> 
    </div>
  )
}

export default InputComponent
