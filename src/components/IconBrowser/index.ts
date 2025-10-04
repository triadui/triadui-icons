/**
 * IconBrowser Module
 * 
 * Modular icon browser with separated concerns for better maintainability
 */

// Main browser component
export { IconBrowser } from './IconBrowser';

// Individual components for reuse
export { CategoryFilter, IconGrid, SearchBar, IconDetails } from './components';

// Existing components (kept for compatibility)
export { CategoryItem } from './CategoryItem';
export { ControlPanel } from './ControlPanel';
export { IconCard } from './IconCard';
export { SimpleBrowser } from './SimpleBrowser';

// Hooks and utilities
export { useIconBrowser } from './hooks/useIconBrowser';
export * from './utils';