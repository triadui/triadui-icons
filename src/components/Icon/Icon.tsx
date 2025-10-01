import React from 'react';
import { cn } from '../../utils/cn';

export type IconSize = 'inherit' | 'small' | 'medium' | 'large' | number;
export type IconColor = 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error';
export type IconStyle = 'outlined' | 'filled' | 'rounded' | 'sharp';

export interface IconProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
  /** Icon name (e.g., "home", "search", "settings") */
  name: string;
  /** Icon style variant */
  variant?: IconStyle;
  /** Fill variation (0 = outlined, 1 = filled) */
  fill?: 0 | 1;
  /** Font weight (100-700) */
  weight?: number;
  /** Grade variation (-50 to 200, default 0) */
  grade?: number;
  /** Optical size (20-48, represents icon size) */
  opsz?: number;
  /** Icon size preset or custom number */
  fontSize?: IconSize;
  /** Icon color preset */
  color?: IconColor;
  /** Additional CSS class name */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}

const sizeClasses = {
  inherit: '',
  small: 'text-icon-small',
  medium: 'text-icon-medium',
  large: 'text-icon-large',
};

const colorClasses = {
  inherit: 'text-current',
  primary: 'text-m3-primary',
  secondary: 'text-m3-secondary',
  action: 'text-m3-surface-on-variant',
  disabled: 'text-m3-outline opacity-38',
  error: 'text-m3-error',
};

/**
 * Material Symbols Icon Component
 *
 * A React component for displaying Material Design icons using the Material Symbols font.
 * Supports variable font features including fill, weight, grade, and optical size.
 * Available in three styles: outlined, rounded, and sharp.
 *
 * @example
 * ```tsx
 * <Icon name="home" />
 * <Icon name="search" variant="outlined" fill={1} weight={400} opsz={24} />
 * <Icon name="settings" variant="sharp" grade={200} color="primary" fontSize="large" />
 * ```
 */
export const Icon: React.FC<IconProps> = ({
  name,
  variant = 'rounded',
  fill = 0,
  weight = 400,
  grade = 0,
  opsz = 24,
  fontSize = 'medium',
  color = 'inherit',
  className = '',
  style = {},
  ...props
}) => {
  // Get the appropriate font family based on variant
  const getFontFamily = (): string => {
    switch (variant) {
      case 'outlined':
        return 'Material Symbols Outlined';
      case 'filled':
        return 'Material Symbols Rounded'; // Filled uses rounded as base
      case 'rounded':
        return 'Material Symbols Rounded';
      case 'sharp':
        return 'Material Symbols Sharp';
      default:
        return 'Material Symbols Rounded';
    }
  };

  // Build the combined styles
  const iconStyle: React.CSSProperties = {
    fontFamily: getFontFamily(),
    fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opsz}`,
    fontSize: typeof fontSize === 'number' ? `${fontSize}px` : undefined,
    lineHeight: 1,
    ...style,
  };

  // Build classes
  const baseClasses = 'inline-flex items-center justify-center select-none font-material-symbols';
  const sizeClass = typeof fontSize === 'string' ? sizeClasses[fontSize] : '';
  const colorClass = colorClasses[color];

  return (
    <span
      className={cn(baseClasses, sizeClass, colorClass, className)}
      style={iconStyle}
      {...props}
      aria-hidden="true"
    >
      {name}
    </span>
  );
};

Icon.displayName = 'Icon';