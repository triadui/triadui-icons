import React from 'react';
import { Icon } from '@triadui/icons';
import type { IconCategory } from '../../../icons';

interface CategoryFilterProps {
  categories: IconCategory[];
  selectedCategories: Set<string>;
  onToggleCategory: (category: string) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
  className?: string;
}

const getCategoryIcon = (category: string): string => {
  const iconMap: Record<string, string> = {
    navigation: 'navigation',
    actions: 'touch_app',
    communication: 'communication',
    content: 'description',
    device: 'devices',
    social: 'people',
  };
  return iconMap[category] || 'category';
};

const getCategoryDisplayName = (category: string): string => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

/**
 * Category filter component for the icon browser
 * Allows users to filter icons by category
 */
export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategories,
  onToggleCategory,
  onSelectAll,
  onClearAll,
  className,
}) => {
  const hasSelection = selectedCategories.size > 0;
  const isAllSelected = selectedCategories.size === categories.length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className={className}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0' }}>
        <h3 style={{ 
          fontSize: '18px', 
          fontWeight: '600', 
          color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
          margin: 0
        }}>
          Categories
        </h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          {!isAllSelected && (
            <button
              onClick={onSelectAll}
              style={{
                fontSize: '14px',
                color: 'var(--m3-sys-color-primary, #6750A4)',
                backgroundColor: 'var(--m3-sys-color-surface-container-low, #F7F2FA)',
                border: '1px solid var(--m3-sys-color-outline-variant, #CAC4D0)',
                cursor: 'pointer',
                padding: '6px 12px',
                borderRadius: '8px',
                transition: 'all 0.2s ease'
              }}
            >
              Select All
            </button>
          )}
          {hasSelection && (
            <button
              onClick={onClearAll}
              style={{
                fontSize: '14px',
                color: 'var(--m3-sys-color-secondary, #625B71)',
                backgroundColor: 'var(--m3-sys-color-surface-container-low, #F7F2FA)',
                border: '1px solid var(--m3-sys-color-outline-variant, #CAC4D0)',
                cursor: 'pointer',
                padding: '6px 12px',
                borderRadius: '8px',
                transition: 'all 0.2s ease'
              }}
            >
              Clear All
            </button>
          )}
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
        {categories.map((category) => {
          const isSelected = selectedCategories.has(category);
          return (
            <button
              key={category}
              onClick={() => onToggleCategory(category)}
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                padding: '12px 16px',
                textAlign: 'left',
                borderRadius: '12px',
                transition: 'all 0.2s ease',
                border: `2px solid ${isSelected ? 'var(--m3-sys-color-primary, #6750A4)' : 'transparent'}`,
                backgroundColor: isSelected 
                  ? 'var(--m3-sys-color-primary-container, #EADDFF)' 
                  : 'var(--m3-sys-color-surface-container, #F3EDF7)',
                color: isSelected 
                  ? 'var(--m3-sys-color-on-primary-container, #21005D)' 
                  : 'var(--m3-sys-color-on-surface-variant, #49454F)',
                cursor: 'pointer'
              }}
            >
              <Icon 
                name={getCategoryIcon(category)} 
                style={{ 
                  marginRight: '12px',
                  flexShrink: 0,
                  color: isSelected ? 'var(--m3-sys-color-primary, #6750A4)' : 'var(--m3-sys-color-on-surface-variant, #49454F)',
                  fontSize: '20px'
                }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ 
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  fontWeight: '500',
                  fontSize: '14px'
                }}>
                  {getCategoryDisplayName(category)}
                </div>
              </div>
              <span style={{
                marginLeft: '8px',
                padding: '2px 8px',
                fontSize: '12px',
                borderRadius: '12px',
                backgroundColor: isSelected 
                  ? 'var(--m3-sys-color-primary, #6750A4)'
                  : 'var(--m3-sys-color-surface-container-high, #ECE6F0)',
                color: isSelected 
                  ? 'var(--m3-sys-color-on-primary, #FFFFFF)'
                  : 'var(--m3-sys-color-on-surface-variant, #49454F)'
              }}>
                {/* Icon count would be calculated elsewhere */}
                {category === 'navigation' ? '42' : 
                 category === 'actions' ? '87' : 
                 category === 'communication' ? '34' : 
                 category === 'content' ? '65' : 
                 category === 'device' ? '52' : 
                 category === 'social' ? '48' : '0'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};