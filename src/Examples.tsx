import React from 'react';
import { IconBrowser, Icon } from './components';

export const Examples: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--m3-sys-color-background)' }}>
      {/* Icon Browser - Main Feature */}
      <IconBrowser />

      {/* Examples Section */}
      <div className="p-6 border-t" style={{ borderColor: 'var(--m3-sys-color-outline-variant)' }}>
        <h2 
          className="text-2xl font-bold mb-4"
          style={{ color: 'var(--m3-sys-color-on-surface)' }}
        >
          Usage Examples
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic Icons */}
          <div 
            className="p-4 rounded-lg"
            style={{ 
              backgroundColor: 'var(--m3-sys-color-surface-container)',
              borderRadius: 'var(--m3-sys-shape-corner-large)'
            }}
          >
            <h3 className="font-semibold mb-3" style={{ color: 'var(--m3-sys-color-on-surface)' }}>
              Basic Usage
            </h3>
            <div className="flex gap-3">
              <Icon name="home" />
              <Icon name="search" />
              <Icon name="settings" />
            </div>
          </div>

          {/* Colored Icons */}
          <div 
            className="p-4 rounded-lg"
            style={{ 
              backgroundColor: 'var(--m3-sys-color-surface-container)',
              borderRadius: 'var(--m3-sys-shape-corner-large)'
            }}
          >
            <h3 className="font-semibold mb-3" style={{ color: 'var(--m3-sys-color-on-surface)' }}>
              Colors
            </h3>
            <div className="flex gap-3">
              <Icon name="favorite" color="primary" />
              <Icon name="star" color="secondary" />
              <Icon name="error" color="error" />
            </div>
          </div>

          {/* Sizes */}
          <div 
            className="p-4 rounded-lg"
            style={{ 
              backgroundColor: 'var(--m3-sys-color-surface-container)',
              borderRadius: 'var(--m3-sys-shape-corner-large)'
            }}
          >
            <h3 className="font-semibold mb-3" style={{ color: 'var(--m3-sys-color-on-surface)' }}>
              Sizes
            </h3>
            <div className="flex items-center gap-3">
              <Icon name="circle" fontSize="small" />
              <Icon name="circle" fontSize="medium" />
              <Icon name="circle" fontSize="large" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;