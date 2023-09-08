import React from 'react';

function Input() {
  return (
    <div>
      <input type="text" placeholder="Введіть текст" 
      style={{borderRadius: 10, 
      padding: 15,
      fontSize: 20,
      fontWeight: 700}}/>
    </div>
  );
}

export default Input;