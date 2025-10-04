import React, { useState } from 'react';
import { Icon } from '@triadui/icons';

/**
 * Simple IconBrowser for debugging - shows basic icons without complex styling
 */
export const SimpleIconBrowser: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Simple test icons
  const testIcons = [
    'home', 'search', 'settings', 'favorite', 'star', 'person',
    'email', 'phone', 'edit', 'delete', 'add', 'remove'
  ];

  const filteredIcons = testIcons.filter(icon => 
    icon.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#1C1B1F', marginBottom: '24px' }}>
        TriadUI Icons Browser - Debug Mode
      </h1>
      
      {/* Simple search */}
      <input
        type="text"
        placeholder="Search icons..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '12px',
          border: '1px solid #79747E',
          borderRadius: '8px',
          marginBottom: '24px',
          fontSize: '16px'
        }}
      />
      
      {/* Simple results info */}
      <p style={{ color: '#49454F', marginBottom: '16px' }}>
        Found {filteredIcons.length} icons
      </p>
      
      {/* Simple grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '16px',
        maxWidth: '800px'
      }}>
        {filteredIcons.map((iconName) => (
          <div
            key={iconName}
            style={{
              padding: '16px',
              border: '1px solid #CAC4D0',
              borderRadius: '12px',
              textAlign: 'center',
              backgroundColor: '#F3EDF7',
              cursor: 'pointer'
            }}
            onClick={() => {
              const code = `<Icon name="${iconName}" />`;
              navigator.clipboard.writeText(code);
              alert(`Copied: ${code}`);
            }}
          >
            <Icon 
              name={iconName} 
              style={{ 
                fontSize: '32px', 
                color: '#6750A4',
                display: 'block',
                marginBottom: '8px'
              }}
            />
            <div style={{ 
              fontSize: '12px', 
              color: '#49454F',
              wordBreak: 'break-word'
            }}>
              {iconName}
            </div>
          </div>
        ))}
      </div>
      
      {filteredIcons.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '48px',
          color: '#49454F' 
        }}>
          <p>No icons found for "{searchQuery}"</p>
          <p>Try searching for: home, search, settings, etc.</p>
        </div>
      )}
    </div>
  );
};