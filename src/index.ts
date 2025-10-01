// Core Icon Component
export { Icon } from './components/Icon';
export type { IconProps, IconSize, IconColor, IconStyle } from './components/Icon';

// Icon Browser Component
export { IconBrowser as MaterialIconBrowser } from './components/IconBrowser';

// Icon Data and Utils
export { ICONS, getAllIconNames, searchIcons } from './icons';
export type { IconName } from './icons';

// Legacy exports for backward compatibility
export { MaterialIconBrowser as IconBrowser } from './components/IconBrowser';

// Re-export UI components for advanced users
export * from './components/UI';
