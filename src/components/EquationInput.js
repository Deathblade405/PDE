import React from 'react';
import './EquationInput.css'; // Your existing CSS

export default function EquationInput({ value, onClick, onGo }) {
  return (
    <div className="input-container">
      <input
        className="input-bar"
        type="text"
        value={value}
        placeholder="Enter an equation"
        onClick={onClick}
        readOnly
      />
      <button className="go-button" onClick={onGo}>Go</button>
    </div>
  );
}
