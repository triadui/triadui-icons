/**
 * @triadui/icons - TriadUI Icons Library
 * 
 * Material Design 3 icons for React applications.
 * Part of the upcoming TriadUI component library.
 * 
 * Features:
 * - 2,500+ Material Design icons
 * - Variable font technology for customization
 * - TypeScript support
 * - Tree-shakable
 * - Lightweight and performant
 * 
 * @example
 * ```tsx
 * import { Icon } from '@triadui/icons';
 * 
 * // Basic usage
 * <Icon name="home" />
 * 
 * // Advanced usage
 * <Icon 
 *   name="favorite" 
 *   variant="rounded" 
 *   fill={1} 
 *   weight={500} 
 *   color="primary" 
 *   fontSize="large" 
 * />
 * ```
 */

// Re-export everything from the core package
export * from '@triadui/icons';

// Export icon browser for development/documentation
export { IconBrowser } from './components/IconBrowser';

// Export icon data for browser functionality
export { ICONS } from './icons';
import { ICONS } from './icons';

// Utility functions for working with icons
export const getAllIconNames = (): string[] => {
  const allIcons: string[] = [];
  Object.values(ICONS).forEach((category) => {
    if (typeof category === 'object' && category !== null) {
      allIcons.push(...Object.values(category as Record<string, string>));
    }
  });
  return allIcons;
};

export const searchIcons = (query: string): string[] => {
  const lowerQuery = query.toLowerCase();
  const allIcons = getAllIconNames();
  return allIcons.filter(icon => 
    icon.toLowerCase().includes(lowerQuery)
  );
};

// Export icon name type
export type IconName = string;



