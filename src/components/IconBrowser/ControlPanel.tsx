import React from 'react';
import { cn } from '../../utils/cn';
import { Icon } from '@triadui/icons-core';
import type { IconColor, IconSize, IconStyle } from '@triadui/icons-core';

interface ControlPanelProps {
  selectedColor: IconColor;
  selectedSize: IconSize;
  selectedStyle: IconStyle;
  onColorChange: (color: IconColor) => void;
  onSizeChange: (size: IconSize) => void;
  onStyleChange: (style: IconStyle) => void;
  className?: string;
}

const colorOptions: { value: IconColor; label: string; preview: string }[] = [
  { value: 'inherit', label: 'Inherit', preview: 'text-current' },
  { value: 'primary', label: 'Primary', preview: 'text-m3-primary' },
  { value: 'secondary', label: 'Secondary', preview: 'text-m3-secondary' },
  { value: 'action', label: 'Action', preview: 'text-m3-surface-on-variant' },
  { value: 'disabled', label: 'Disabled', preview: 'text-m3-outline opacity-38' },
  { value: 'error', label: 'Error', preview: 'text-m3-error' },
];

const sizeOptions: { value: IconSize; label: string }[] = [
  { value: 'small', label: 'Small (18px)' },
  { value: 'medium', label: 'Medium (24px)' },
  { value: 'large', label: 'Large (36px)' },
];

const styleOptions: { value: IconStyle; label: string; description: string }[] = [
  { value: 'outlined', label: 'Outlined', description: 'Clean, minimal style' },
  { value: 'rounded', label: 'Rounded', description: 'Friendly, approachable' },
  { value: 'sharp', label: 'Sharp', description: 'Bold, modern style' },
];

export const ControlPanel: React.FC<ControlPanelProps> = ({
  selectedColor,
  selectedSize,
  selectedStyle,
  onColorChange,
  onSizeChange,
  onStyleChange,
  className,
}) => {
  return (
    <div className={cn('bg-m3-surface-container rounded-m3-large p-4 shadow-m3-1', className)}>
      <h3 className="text-lg font-semibold text-m3-surface-on-surface mb-4">
        Icon Customization
      </h3>

      {/* Style Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-m3-surface-on-surface mb-3">
          Style
        </label>
        <div className="grid grid-cols-1 gap-2">
          {styleOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onStyleChange(option.value)}
              className={cn(
                'flex items-center p-3 rounded-m3-medium text-left transition-all duration-200',
                'hover:bg-m3-surface-container-high',
                selectedStyle === option.value
                  ? 'bg-m3-primary-container text-m3-primary-on-container shadow-m3-1'
                  : 'bg-m3-surface text-m3-surface-on-surface'
              )}
            >
              <Icon 
                name="star" 
                variant={option.value}
                className="mr-3"
                color={selectedStyle === option.value ? 'primary' : 'action'}
              />
              <div>
                <div className="font-medium text-sm">{option.label}</div>
                <div className="text-xs text-m3-surface-on-variant">
                  {option.description}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-m3-surface-on-surface mb-3">
          Size
        </label>
        <div className="grid grid-cols-1 gap-2">
          {sizeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onSizeChange(option.value)}
              className={cn(
                'flex items-center p-3 rounded-m3-medium text-left transition-all duration-200',
                'hover:bg-m3-surface-container-high',
                selectedSize === option.value
                  ? 'bg-m3-primary-container text-m3-primary-on-container shadow-m3-1'
                  : 'bg-m3-surface text-m3-surface-on-surface'
              )}
            >
              <Icon 
                name="resize" 
                fontSize={option.value}
                className="mr-3"
                color={selectedSize === option.value ? 'primary' : 'action'}
              />
              <span className="font-medium text-sm">{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div>
        <label className="block text-sm font-medium text-m3-surface-on-surface mb-3">
          Color
        </label>
        <div className="grid grid-cols-1 gap-2">
          {colorOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onColorChange(option.value)}
              className={cn(
                'flex items-center p-3 rounded-m3-medium text-left transition-all duration-200',
                'hover:bg-m3-surface-container-high',
                selectedColor === option.value
                  ? 'bg-m3-primary-container text-m3-primary-on-container shadow-m3-1'
                  : 'bg-m3-surface text-m3-surface-on-surface'
              )}
            >
              <Icon 
                name="palette" 
                className={cn('mr-3', option.preview)}
              />
              <span className="font-medium text-sm">{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};