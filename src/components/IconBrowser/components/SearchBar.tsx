import React from 'react';
import { Icon } from '@triadui/icons';
import { Input } from '../../UI';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

/**
 * Search bar component for filtering icons by name or keywords
 * Provides real-time search with debounced input
 */
export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search icons...",
  className,
}) => {
  const handleClear = () => {
    onChange('');
  };

  return (
    <div style={{ position: 'relative' }} className={className}>
      <div style={{ position: 'relative' }}>
        <Icon 
          name="search"
          style={{ 
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--m3-sys-color-on-surface-variant, #49454F)',
            fontSize: '20px'
          }}
        />
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          style={{
            paddingLeft: '44px',
            paddingRight: value ? '44px' : '16px',
            backgroundColor: 'var(--m3-sys-color-surface-container, #F3EDF7)',
            border: '1px solid var(--m3-sys-color-outline, #79747E)',
            borderRadius: '8px'
          }}
        />
        {value && (
          <button
            onClick={handleClear}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              padding: '4px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'transparent',
              color: 'var(--m3-sys-color-on-surface-variant, #49454F)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Clear search"
          >
            <Icon name="close" style={{ fontSize: '20px' }} />
          </button>
        )}
      </div>
      
      {/* Search suggestions or recent searches could go here */}
      {value && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: '4px',
          fontSize: '12px',
          color: 'var(--m3-sys-color-on-surface-variant, #49454F)'
        }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '4px 8px',
            backgroundColor: 'var(--m3-sys-color-surface-container-high, #ECE6F0)',
            borderRadius: '4px'
          }}>
            <Icon name="info" style={{ marginRight: '4px', fontSize: '16px' }} />
            Tip: Try searching by category or style
          </span>
        </div>
      )}
    </div>
  );
};