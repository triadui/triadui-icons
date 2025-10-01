import React from 'react';
import { cn } from '../../utils/cn';
import { Icon } from '../Icon';

interface CategoryItemProps {
  id: string;
  name: string;
  icon: string;
  count: number;
  isSelected: boolean;
  onClick: (id: string) => void;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  id,
  name,
  icon,
  count,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={cn(
        'flex items-center w-full px-4 py-3 text-left rounded-m3-medium transition-all duration-200',
        'hover:bg-m3-surface-container-high',
        isSelected
          ? 'bg-m3-primary-container text-m3-primary-on-container shadow-m3-1'
          : 'text-m3-surface-on-surface'
      )}
    >
      <Icon 
        name={icon} 
        className="mr-3 flex-shrink-0"
        color={isSelected ? 'primary' : 'action'}
      />
      <div className="flex-1 min-w-0">
        <div className="truncate font-medium text-sm">{name}</div>
      </div>
      <span className={cn(
        'ml-2 px-2 py-1 text-xs rounded-full',
        isSelected 
          ? 'bg-m3-primary text-m3-primary-on-primary'
          : 'bg-m3-surface-container-high text-m3-surface-on-variant'
      )}>
        {count.toLocaleString()}
      </span>
    </button>
  );
};