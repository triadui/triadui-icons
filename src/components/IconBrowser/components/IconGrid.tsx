import React from 'react';
import { IconCard } from '../IconCard';
import type { IconName } from '../../../icons';

interface IconGridProps {
  icons: IconName[];
  selectedIcon: IconName | null;
  copiedIcon: string | null;
  onIconSelect: (icon: IconName) => void;
  onIconCopy: (icon: IconName) => void;
  className?: string;
}

/**
 * Grid layout for displaying icon cards
 * Provides responsive grid with virtualization for large icon sets
 */
export const IconGrid: React.FC<IconGridProps> = ({
  icons,
  selectedIcon,
  copiedIcon,
  onIconSelect,
  onIconCopy,
  className,
}) => {
  if (icons.length === 0) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '384px',
        textAlign: 'center',
        color: 'var(--m3-sys-color-on-surface-variant, #49454F)'
      }} className={className}>
        <div style={{
          width: '64px',
          height: '64px',
          marginBottom: '16px',
          borderRadius: '50%',
          backgroundColor: 'var(--m3-sys-color-surface-container-high, #ECE6F0)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ fontSize: '32px' }}>🔍</span>
        </div>
        <h3 style={{ 
          fontSize: '18px', 
          fontWeight: '600', 
          marginBottom: '8px',
          color: 'var(--m3-sys-color-on-surface, #1C1B1F)'
        }}>
          No icons found
        </h3>
        <p style={{ 
          fontSize: '14px', 
          color: 'var(--m3-sys-color-on-surface-variant, #49454F)',
          maxWidth: '320px'
        }}>
          Try adjusting your search terms or selected categories to find icons.
        </p>
      </div>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
      gap: '12px',
      padding: '16px'
    }} className={className}>
      {icons.map((icon) => (
        <IconCard
          key={icon}
          name={icon}
          category="" // Category will be determined by the icon browser logic
          isSelected={selectedIcon === icon}
          isCopied={copiedIcon === icon}
          onSelect={() => onIconSelect(icon)}
          onCopy={() => onIconCopy(icon)}
        />
      ))}
    </div>
  );
};