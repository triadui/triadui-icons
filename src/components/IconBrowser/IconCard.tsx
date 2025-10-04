import React from 'react';
import { Icon } from '@triadui/icons';
import type { IconColor, IconSize, IconStyle } from '@triadui/icons';

interface IconCardProps {
  name: string;
  category: string;
  isSelected?: boolean;
  isCopied?: boolean;
  onSelect?: (name: string) => void;
  onCopy?: (name: string) => void;
  color?: IconColor;
  size?: IconSize;
  style?: IconStyle;
}

export const IconCard: React.FC<IconCardProps> = ({
  name,
  category,
  isSelected = false,
  isCopied = false,
  onSelect,
  onCopy,
  color = 'inherit',
  size = 'medium',
  style = 'rounded',
}) => {
  const handleClick = () => {
    if (onSelect) {
      onSelect(name);
    }
  };

  const handleCopyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onCopy) {
      onCopy(name);
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        transform: 'scale(1)',
        backgroundColor: 'var(--m3-sys-color-surface, #FFFBFE)',
        borderRadius: '12px',
        border: isSelected ? '2px solid var(--m3-sys-color-primary, #6750A4)' : '1px solid var(--m3-sys-color-outline-variant, #CAC4D0)',
        boxShadow: isSelected ? '0 4px 12px rgba(103, 80, 164, 0.15)' : '0 2px 4px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = isSelected ? '0 4px 12px rgba(103, 80, 164, 0.15)' : '0 2px 4px rgba(0, 0, 0, 0.1)';
      }}
      onClick={handleClick}
    >
      {/* Copy button */}
      <button
        onClick={handleCopyClick}
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          padding: '6px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: isCopied ? 'var(--m3-sys-color-tertiary, #7D5260)' : 'var(--m3-sys-color-surface-container, #F3EDF7)',
          color: isCopied ? 'var(--m3-sys-color-on-tertiary, #FFFFFF)' : 'var(--m3-sys-color-on-surface-variant, #49454F)',
          opacity: 0,
          transition: 'all 0.2s ease',
          cursor: 'pointer',
          zIndex: 10
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '1';
          e.currentTarget.style.backgroundColor = isCopied ? 'var(--m3-sys-color-tertiary, #7D5260)' : 'var(--m3-sys-color-surface-container-high, #ECE6F0)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '0';
        }}
        title={isCopied ? 'Copied!' : 'Copy icon code'}
      >
        <Icon
          name={isCopied ? 'check' : 'content_copy'}
          fontSize='small'
        />
      </button>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          minHeight: '100px'
        }}
      >
        {/* Icon display */}
        <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon
            name={name}
            variant={style}
            color={color}
            fontSize={size}
            style={{ transition: 'color 0.2s ease' }}
          />
        </div>

        {/* Icon name */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '0.875rem',
            fontWeight: '500',
            color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100%'
          }}>
            {name.replace(/_/g, ' ')}
          </div>
          <div style={{
            fontSize: '0.75rem',
            color: 'var(--m3-sys-color-on-surface-variant, #49454F)',
            marginTop: '4px',
            textTransform: 'capitalize'
          }}>
            {category}
          </div>
        </div>
      </div>

      {/* Selection indicator */}
      {isSelected && (
        <div style={{
          position: 'absolute',
          inset: 0,
          border: '2px solid var(--m3-sys-color-primary, #6750A4)',
          borderRadius: '12px',
          pointerEvents: 'none'
        }} />
      )}
    </div>
  );
};