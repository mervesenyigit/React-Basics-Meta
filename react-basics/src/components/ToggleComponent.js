"use strict"

const ToggleComponent=()=>
{
    let buttonState=false;
    

    const buttonToggle=(event)=> {
    
         buttonState=!buttonState;
         event.target.textContent = buttonState ? "True" : "False";
    }

  return (
    <div>

      <button
        className="btn btn-secondary"
        style={{
          border: "none",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          maxHeight:"50px",
          minWidth:"45px"
        }}
        onClick={buttonToggle}>False 
      </button>
    </div>
  );
   
}
export default ToggleComponent;