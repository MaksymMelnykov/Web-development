import React from "react";

function Button() {
    const handleClick = () => {
      alert('Кнопка була натиснута!');
    };
  
    return (
      <div>
        <button style={{backgroundColor: "red",
                        borderRadius: 10, 
                        padding: 20,
                        fontSize: 20,
                        border: 2,
                        color:"white"}} onClick={handleClick}>Натисніть мене</button>
      </div>
    );
  }
  
  export default Button;