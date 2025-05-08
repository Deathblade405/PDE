import React, { useState } from 'react';
import EquationInput from './components/EquationInput';
import CalculatorKeypad from './components/CalculatorKeypad';
import './App.css';

export default function App() {
  const [equation, setEquation] = useState('');
  const [showKeypad, setShowKeypad] = useState(false);

  const handleKeyPress = (key) => {
    if (key === 'C') {
      setEquation('');
    } else if (key === 'DEL') {
      setEquation((prev) => prev.slice(0, -1));
    } else if (key === '=') {
      try {
        const formatted = equation
          .replace(/π/g, Math.PI)
          .replace(/e/g, Math.E)
          .replace(/√/g, 'Math.sqrt')
          .replace(/sin/g, 'Math.sin')
          .replace(/cos/g, 'Math.cos')
          .replace(/tan/g, 'Math.tan')
          .replace(/log/g, 'Math.log10')
          .replace(/ln/g, 'Math.log')
          .replace(/\^/g, '**');

        const result = eval(formatted);
        setEquation(String(result));
      } catch {
        setEquation('Error');
      }
    } else {
      setEquation((prev) => prev + key);
    }
  };

  return (
    <div className="container">
      <EquationInput
        value={equation}
        onClick={() => setShowKeypad((prev) => !prev)} // toggle change
      />
      {showKeypad && (
        <CalculatorKeypad onKeyPress={handleKeyPress} />
      )}
    </div>
  );
}
