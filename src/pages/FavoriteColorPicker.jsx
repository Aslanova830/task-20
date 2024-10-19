import React, { useState } from 'react';

function FavoriteColorPicker() {
  const [color, setColor] = useState('');
  const handleInputChange = (event) => {
    setColor(event.target.value);  
  };
  return (
    <div>
      <h1>sevimli reng</h1>
      <input 
        type="text" 
        value={color} 
        onChange={handleInputChange} 
        placeholder="sevimli rengini yazzz"
      />
      {color && <p>senin sevimli rengin: <strong>{color}</strong></p>}
    </div>
  );
}

export default FavoriteColorPicker;
