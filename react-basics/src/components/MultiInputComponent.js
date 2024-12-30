import React, { useState } from 'react'

function MultiInputComponent(data) {
    const [inputForm, setForm]=useState({data})

    const handleChange = (e) => {

        const{name, value}=e.target;    
        setForm((prev) => ({
            ...prev, // Önceki state'i kopyala
            [name]:value,

        }));
    
    }
        
         

    


  return (
    <div>
    <div>
        <input
        name="firstName"
        value={inputForm.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        name="lastName"
        value={inputForm.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <p>
        You typed: {inputForm.firstName} {inputForm.lastName}
      </p>
    </div>
      
    </div>
  )
}

export default MultiInputComponent
