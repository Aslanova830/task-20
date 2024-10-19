import React, { useState } from 'react';

function TextLengthChecker() {
  const [text, setText] = useState('');
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Text-tin uzunlugu</h1>
      <input 
        type="text" 
        value={text} 
        onChange={handleInputChange} 
        placeholder=":>"
      />
      <p>Text uzunlugu: {text.length}</p>
    </div>
  );
}

export default TextLengthChecker;
