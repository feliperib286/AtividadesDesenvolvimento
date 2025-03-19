import React, { useState } from 'react';
import Ball from './Ball';
const containerStyle: React.CSSProperties = {
  backgroundColor: '#222',
  padding: '20px',
  borderRadius: '10px',
  width: '320px',
  textAlign: 'center',
  marginBottom: '20px',
};

const inputStyle: React.CSSProperties = {
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  textAlign: 'center',
  fontSize: '16px',
  width: '90%',
  outline: 'none',
};

const buttonStyle: React.CSSProperties = {
  marginTop: '10px',
  padding: '10px',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundColor: '#3498db',
  color: '#fff',
  border: 'none',
  fontSize: '16px',
};

const Exercise2: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [input, setInput] = useState<string>('');

  const addNumber = () => {
    const num = Number(input);
    if (!isNaN(num) && num !== 0) {
      setNumbers((prev) => {
        const newNumbers = [...prev, num];
        return newNumbers.length > 12 ? newNumbers.slice(1) : newNumbers;
      });
    }
    setInput('');
  };

  const removeNumber = (index: number, event: React.MouseEvent) => {
    event.preventDefault();
    setNumbers((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#e74c3c' }}>Exercício 2</h2>
      <input
        type="number"
        placeholder="Digite um número"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={inputStyle}
      />
      <button onClick={addNumber} style={buttonStyle}>
        Adicionar
      </button>
      <div>
        {numbers.map((num, index) => (
          <Ball key={index} number={num} onContextMenu={(e) => removeNumber(index, e)} />
        ))}
      </div>
    </div>
  );
};

export default Exercise2;
