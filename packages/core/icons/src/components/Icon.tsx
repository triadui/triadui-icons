import React from 'react';
import { cn } from '../utils/cn';
import type { IconProps } from '../types';
import { 
  DEFAULT_ICON_CONFIG, 
  ICON_SIZE_CLASSES, 
  ICON_COLOR_CLASSES, 
  MATERIAL_SYMBOLS_FONTS, 
  BASE_ICON_CLASSES 
} from '../constants';

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
  variant = DEFAULT_ICON_CONFIG.variant,
  fill = DEFAULT_ICON_CONFIG.fill,
  weight = DEFAULT_ICON_CONFIG.weight,
  grade = DEFAULT_ICON_CONFIG.grade,
  opsz = DEFAULT_ICON_CONFIG.opsz,
  fontSize = DEFAULT_ICON_CONFIG.fontSize,
  color = DEFAULT_ICON_CONFIG.color,
  className = '',
  style = {},
  ...props
}) => {
  // Get the appropriate font family based on variant
  const fontFamily = MATERIAL_SYMBOLS_FONTS[variant];

  // Build the combined styles
  const iconStyle: React.CSSProperties = {
    fontFamily,
    fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opsz}`,
    fontSize: typeof fontSize === 'number' ? `${fontSize}px` : undefined,
    lineHeight: 1,
    ...style,
  };

  // Build classes
  const sizeClass = typeof fontSize === 'string' ? ICON_SIZE_CLASSES[fontSize] : '';
  const colorClass = ICON_COLOR_CLASSES[color];

  /** Render the icon as a span element with the computed styles and classes */
  return (
    <span
      className={cn(BASE_ICON_CLASSES, sizeClass, colorClass, className)}
      style={iconStyle}
      {...props}
      aria-hidden="true"
    >
      {name}
    </span>
  );
};

Icon.displayName = 'Icon';