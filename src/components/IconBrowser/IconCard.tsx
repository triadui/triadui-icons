import React from 'react';
import { cn } from '../../utils/cn';
import { Icon } from '@triadui/icons-core';
import type { IconColor, IconSize, IconStyle } from '@triadui/icons-core';
import { Card } from '../UI';

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
    <Card
      className={cn(
        'relative cursor-pointer transition-all duration-200 hover:scale-105 group',
        isSelected && 'ring-2 ring-m3-primary shadow-m3-2',
        isCopied && 'animate-bounce-soft'
      )}
      hover
    >
      <div 
        className="flex flex-col items-center justify-center p-4 min-h-[100px]"
        onClick={handleClick}
      >
        {/* Copy button */}
        <button
          onClick={handleCopyClick}
          className={cn(
            'absolute top-2 right-2 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200',
            'bg-m3-surface-container hover:bg-m3-surface-container-high text-m3-surface-on-variant',
            isCopied && 'opacity-100 bg-m3-success text-m3-success-on-success'
          )}
          title={isCopied ? 'Copied!' : 'Copy icon code'}
        >
          <Icon 
            name={isCopied ? 'check' : 'content_copy'} 
            fontSize="small"
          />
        </button>

        {/* Icon display */}
        <div className="mb-3 flex items-center justify-center">
          <Icon
            name={name}
            variant={style}
            color={color}
            fontSize={size}
            className="transition-colors duration-200"
          />
        </div>

        {/* Icon name */}
        <div className="text-center">
          <div className="text-sm font-medium text-m3-surface-on-surface truncate max-w-full">
            {name.replace(/_/g, ' ')}
          </div>
          <div className="text-xs text-m3-surface-on-variant mt-1 capitalize">
            {category}
          </div>
        </div>

        {/* Selection indicator */}
        {isSelected && (
          <div className="absolute inset-0 border-2 border-m3-primary rounded-m3-large pointer-events-none" />
        )}
      </div>
    </Card>
  );
};