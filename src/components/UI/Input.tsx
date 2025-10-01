import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  style?: React.CSSProperties;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  style,
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {label && (
        <label 
          htmlFor={inputId}
          style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#1C1B1F' // M3 on-surface
          }}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        style={{
          display: 'flex',
          height: '40px',
          width: '100%',
          borderRadius: '12px', // M3 medium corner
          border: error ? '1px solid #B3261E' : '1px solid #79747E', // M3 error or outline
          backgroundColor: '#FFFBFE', // M3 surface
          padding: '8px 12px',
          fontSize: '14px',
          color: '#1C1B1F', // M3 on-surface
          outline: 'none',
          transition: 'all 0.2s ease',
          ...style
        }}
        onFocus={(e) => {
          e.target.style.borderColor = error ? '#B3261E' : '#6750A4'; // M3 error or primary
          e.target.style.boxShadow = `0 0 0 2px ${error ? 'rgba(179, 38, 30, 0.12)' : 'rgba(103, 80, 164, 0.12)'}`;
        }}
        onBlur={(e) => {
          e.target.style.borderColor = error ? '#B3261E' : '#79747E'; // M3 error or outline
          e.target.style.boxShadow = 'none';
        }}
        {...props}
      />
      {error && (
        <p style={{ fontSize: '14px', color: '#B3261E' }}>{error}</p> // M3 error
      )}
    </div>
  );
};