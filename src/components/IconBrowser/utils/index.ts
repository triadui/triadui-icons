/**
 * Utility functions for the Icon Browser
 */

import type { IconStyle, IconFill, IconWeight, IconGrade, IconOpticalSize } from '@triadui/icons';

/**
 * Icon configuration for code generation
 */
export interface IconCodeConfig {
  iconName: string;
  variant?: IconStyle;
  fill?: IconFill;
  weight?: IconWeight;
  grade?: IconGrade;
  opsz?: IconOpticalSize;
  fontSize?: number;
  includeImport?: boolean;
}

/**
 * Copy text to clipboard
 * @param text - Text to copy
 * @returns Promise that resolves when copy is complete
 */
export const copyToClipboard = async (text: string): Promise<void> => {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
  } else {
    // Fallback for older browsers or non-secure contexts
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
  }
};

/**
 * Generate usage code for an icon with all Material Symbols properties
 * @param config - Icon configuration object
 * @returns Generated code string
 */
export const generateIconCode = (config: IconCodeConfig): string => {
  const {
    iconName,
    variant = 'rounded',
    fill,
    weight,
    grade,
    opsz,
    fontSize,
    includeImport = true
  } = config;

  const importStatement = `import { Icon } from '@triadui/icons';\n\n`;
  
  // Build props array
  const props: string[] = [`name="${iconName}"`];
  
  if (variant && variant !== 'rounded') {
    props.push(`variant="${variant}"`);
  }
  
  if (fill !== undefined && fill !== 0) {
    props.push(`fill={${fill}}`);
  }
  
  if (weight !== undefined && weight !== 400) {
    props.push(`weight={${weight}}`);
  }
  
  if (grade !== undefined && grade !== 0) {
    props.push(`grade={${grade}}`);
  }
  
  if (opsz !== undefined && opsz !== 48) {
    props.push(`opsz={${opsz}}`);
  }
  
  if (fontSize !== undefined && fontSize !== 24) {
    props.push(`fontSize={${fontSize}}`);
  }
  
  const iconCode = `<Icon ${props.join(' ')} />`;
  
  return includeImport ? importStatement + iconCode : iconCode;
};

// Legacy version for backwards compatibility
export const generateIconCodeLegacy = (
  iconName: string, 
  variant: IconStyle = 'rounded',
  includeImport: boolean = true
): string => {
  return generateIconCode({ iconName, variant, includeImport });
};

/**
 * Generate installation command
 * @param packageManager - Package manager to use
 * @returns Installation command string
 */
export const generateInstallCommand = (packageManager: 'npm' | 'yarn' | 'pnpm' = 'npm'): string => {
  const commands = {
    npm: 'npm install @triadui/icons',
    yarn: 'yarn add @triadui/icons',
    pnpm: 'pnpm add @triadui/icons',
  };
  return commands[packageManager];
};

/**
 * Format icon name for display (replace underscores with spaces, capitalize)
 * @param iconName - Raw icon name
 * @returns Formatted display name
 */
export const formatIconName = (iconName: string): string => {
  return iconName
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Debounce function for search input
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Create a download link for icon data
 * @param data - Data to download
 * @param filename - Name of the file
 * @param type - MIME type of the file
 */
export const downloadData = (data: string, filename: string, type: string = 'text/plain'): void => {
  const blob = new Blob([data], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Get icon variant display names
 */
export const VARIANT_DISPLAY_NAMES: Record<IconStyle, string> = {
  outlined: 'Outlined',
  rounded: 'Rounded',
  sharp: 'Sharp',
  filled: 'Filled',
};

/**
 * Validate if a string is a valid icon name format
 * @param name - Icon name to validate
 * @returns True if valid
 */
export const isValidIconName = (name: string): boolean => {
  // Icon names should be lowercase with underscores
  return /^[a-z0-9_]+$/.test(name);
};