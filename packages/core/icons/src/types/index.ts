/**
 * Icon size types - defines available size presets and custom numeric values
 */
export type IconSize = 'inherit' | 'small' | 'medium' | 'large' | number;

/**
 * Icon color types - defines available color presets based on Material Design 3
 */
export type IconColor = 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error';

/**
 * Icon style variants - defines the three Material Symbols styles
 */
export type IconStyle = 'outlined' | 'filled' | 'rounded' | 'sharp';

/**
 * Fill variation for Material Symbols
 * - 0: Outlined/hollow icons
 * - 1: Filled/solid icons
 */
export type IconFill = 0 | 1;

/**
 * Font weight range for Material Symbols (100-700)
 */
export type IconWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700;

/**
 * Grade variation for Material Symbols (-50 to 200)
 * Used for fine-tuning the visual weight of icons
 */
export type IconGrade = number; // -50 to 200

/**
 * Optical size range for Material Symbols (20-48)
 * Represents the intended icon display size for optimal rendering
 */
export type IconOpticalSize = number; // 20 to 48

/**
 * Icon component props interface
 * Extends HTML span element attributes but omits the 'color' prop to avoid conflicts
 */
export interface IconProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
  /** Icon name (e.g., "home", "search", "settings") */
  name: string;
  /** Icon style variant */
  variant?: IconStyle;
  /** Fill variation (0 = outlined, 1 = filled) */
  fill?: IconFill;
  /** Font weight (100-700) */
  weight?: IconWeight | number;
  /** Grade variation (-50 to 200, default 0) */
  grade?: IconGrade;
  /** Optical size (20-48, represents icon size) */
  opsz?: IconOpticalSize;
  /** Icon size preset or custom number */
  fontSize?: IconSize;
  /** Icon color preset */
  color?: IconColor;
  /** Additional CSS class name */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}

/**
 * Configuration object for icon display settings
 */
export interface IconConfig {
  variant: IconStyle;
  fill: IconFill;
  weight: IconWeight | number;
  grade: IconGrade;
  opsz: IconOpticalSize;
  fontSize: IconSize;
  color: IconColor;
}

/**
 * Partial configuration for icon settings (all properties optional)
 */
export type PartialIconConfig = Partial<IconConfig>;