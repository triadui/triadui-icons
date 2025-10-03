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
export * from '@triadui/icons-core';

// Export icon browser for development/documentation
export { IconBrowser } from './components/IconBrowser';

// Export icon data for browser functionality
export { ICONS, getAllIconNames, searchIcons } from './icons';
export type { IconName } from './icons';
