import type { IconSize, IconColor } from '../types';

/**
 * Default configuration values for the Icon component
 */
export const DEFAULT_ICON_CONFIG = {
  variant: 'rounded' as const,
  fill: 0 as const,
  weight: 400,
  grade: 0,
  opsz: 24,
  fontSize: 'medium' as const,
  color: 'inherit' as const,
} as const;

/**
 * CSS class mappings for icon size presets
 */
export const ICON_SIZE_CLASSES: Record<Exclude<IconSize, number>, string> = {
  inherit: '',
  small: 'text-icon-small',
  medium: 'text-icon-medium',
  large: 'text-icon-large',
} as const;

/**
 * CSS class mappings for icon color presets
 */
export const ICON_COLOR_CLASSES: Record<IconColor, string> = {
  inherit: 'text-current',
  primary: 'text-m3-primary',
  secondary: 'text-m3-secondary',
  action: 'text-m3-surface-on-variant',
  disabled: 'text-m3-outline opacity-38',
  error: 'text-m3-error',
} as const;

/**
 * Font family mappings for Material Symbols variants
 */
export const MATERIAL_SYMBOLS_FONTS = {
  outlined: 'Material Symbols Outlined',
  filled: 'Material Symbols Rounded', // Filled uses rounded as base with fill=1
  rounded: 'Material Symbols Rounded',
  sharp: 'Material Symbols Sharp',
} as const;

/**
 * Base CSS classes applied to all icon instances
 */
export const BASE_ICON_CLASSES = 'inline-flex items-center justify-center select-none font-material-symbols';

/**
 * Range constraints for Material Symbols variable font properties
 */
export const FONT_CONSTRAINTS = {
  weight: { min: 100, max: 700 },
  grade: { min: -50, max: 200 },
  opsz: { min: 20, max: 48 },
} as const;