import React, { useState } from 'react';
import './CalculatorKeypad.css';

const tabs = [
  {
    name: 'Basic',
    keys: ['x²', 'xⁿ', '√', '∛', 'ⁿ√x', 'logₐ', 'π', 'θ', '∞', '∫', 'd/dx']
  },
  {
    name: 'αβγ',
    keys: ['α', 'β', 'γ', 'δ', 'ε', 'λ', 'μ', 'σ', 'Ω', 'θ']
  },
  {
    name: 'ABΓ',
    keys: ['A', 'B', 'Γ', 'Δ', 'E', 'Z', 'H', 'I', 'K', 'Λ']
  },
  {
    name: 'sin cos',
    keys: ['sin', 'cos', 'tan', 'cot', 'csc', 'sec', 'arcsin', 'arccos', 'arctan']
  },
  {
    name: '≥ ÷ →',
    keys: ['≥', '≤', '=', '≠', '<', '>', '÷', '×', '•', '°', '⊙']
  },
  {
    name: 'x∈ℂ∀',
    keys: ['x∈', 'ℝ', 'ℂ', '∀', '∃', '∉', '∅', '⊆', '⊂']
  },
  {
    name: '∑∫∏',
    keys: ['∑', '∫', '∏', '∮', 'lim', '∞', 'd/dx', '∂/∂x']
  },
  {
    name: '(  )',
    keys: ['(', ')', '[', ']', '{', '}', '(f∘g)', 'f(x)']
  },
  {
    name: 'H₂O',
    keys: ['H₂O', 'CO₂', 'O₂', 'Na⁺', 'Cl⁻', 'NH₃', 'CH₄']
  },
  {
    name: 'Calc',
    keys: ['7', '8', '9', '/', 'DEL', '4', '5', '6', '*', 'C', '1', '2', '3', '-', '0', '.', '=', '+', 'Ans']
  }
];

export default function CalculatorKeypad({ onKeyPress }) {
  const [activeTab, setActiveTab] = useState('Basic');
  const currentTab = tabs.find(tab => tab.name === activeTab);

  return (
    <div className="calculator-container">
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.name}
            className={`tab-button ${activeTab === tab.name ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="keypad">
        {currentTab.keys.map((key) => (
          <button
            key={key}
            className="button"
            onClick={() => onKeyPress(key)}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}
