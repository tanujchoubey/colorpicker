import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <div className="color-picker">
      <button onClick={handleButtonClick}>
        {selectedColor ? `Selected color: ${selectedColor}` : 'Pick a color'}
      </button>
      {isOpen && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li
              key={index}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ColorPicker;
