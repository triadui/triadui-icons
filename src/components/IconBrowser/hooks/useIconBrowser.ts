import { useState, useMemo } from 'react';
import { searchIcons, getCategories, getIconsByCategory, getAllIconNames } from '../../../icons';
import { copyToClipboard } from '../utils';
import type { IconCategory, IconName } from '../../../icons';
import type { IconStyle } from '@triadui/icons';

export interface UseIconBrowserProps {
  initialVariant?: IconStyle;
}

export interface UseIconBrowserReturn {
  // Search & Filter State
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategories: Set<string>;
  setSelectedCategories: (categories: Set<string>) => void;
  selectedVariant: IconStyle;
  setSelectedVariant: (variant: IconStyle) => void;
  
  // UI State
  copiedIcon: string | null;
  setCopiedIcon: (icon: string | null) => void;
  codeDialog: { isOpen: boolean; iconName: string | null };
  setCodeDialog: (dialog: { isOpen: boolean; iconName: string | null }) => void;
  selectedIcon: IconName | null;
  showIconDetails: boolean;
  
  // Computed Data
  filteredIcons: string[];
  categories: IconCategory[];
  totalIconCount: number;
  
  // Actions
  toggleCategory: (category: string) => void;
  selectAllCategories: () => void;
  clearAllCategories: () => void;
  clearSearch: () => void;
  resetFilters: () => void;
  handleIconSelect: (icon: IconName) => void;
  handleIconCopy: (icon: IconName) => void;
  closeIconDetails: () => void;
}

/**
 * Custom hook for managing icon browser state and logic
 */
export const useIconBrowser = ({
  initialVariant = 'rounded',
}: UseIconBrowserProps = {}): UseIconBrowserReturn => {
  // Core state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [selectedVariant, setSelectedVariant] = useState<IconStyle>(initialVariant);
  
  // UI state
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [codeDialog, setCodeDialog] = useState<{isOpen: boolean, iconName: string | null}>({
    isOpen: false, 
    iconName: null
  });
  const [selectedIcon, setSelectedIcon] = useState<IconName | null>(null);
  const [showIconDetails, setShowIconDetails] = useState(false);

  // Static data
  const categories = getCategories() as IconCategory[];
  const totalIconCount = getAllIconNames().length;

  // Filter icons based on search and categories
  const filteredIcons = useMemo(() => {
    let icons: string[] = [];

    if (searchQuery.trim()) {
      // If there's a search query, search across all icons
      icons = searchIcons(searchQuery);
    } else if (selectedCategories.size > 0) {
      // If categories are selected, get icons from those categories
      selectedCategories.forEach(category => {
        icons.push(...getIconsByCategory(category as IconCategory));
      });
    } else {
      // Default: show all icons
      icons = getAllIconNames();
    }

    // Remove duplicates and limit results
    const uniqueIcons = [...new Set(icons)];
    return uniqueIcons;
  }, [searchQuery, selectedCategories]);

  // Category management
  const toggleCategory = (category: string) => {
    const newSelected = new Set(selectedCategories);
    if (newSelected.has(category)) {
      newSelected.delete(category);
    } else {
      newSelected.add(category);
    }
    setSelectedCategories(newSelected);
  };

  const selectAllCategories = () => {
    setSelectedCategories(new Set(categories));
  };

  const clearAllCategories = () => {
    setSelectedCategories(new Set());
  };

  // Icon interaction handlers
  const handleIconSelect = (icon: IconName) => {
    setSelectedIcon(icon);
    setShowIconDetails(true);
  };

  const handleIconCopy = async (icon: IconName) => {
    try {
      await copyToClipboard(`<Icon name="${icon}" />`);
      setCopiedIcon(icon);
      setTimeout(() => setCopiedIcon(null), 2000);
    } catch (error) {
      console.error('Failed to copy icon code:', error);
      // Could add error feedback here if needed
    }
  };

  const closeIconDetails = () => {
    setShowIconDetails(false);
    setSelectedIcon(null);
  };

  // Utility actions
  const clearSearch = () => {
    setSearchQuery('');
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategories(new Set());
    setSelectedVariant(initialVariant);
    closeIconDetails();
  };

  return {
    // Search & Filter State
    searchQuery,
    setSearchQuery,
    selectedCategories,
    setSelectedCategories,
    selectedVariant,
    setSelectedVariant,
    
    // UI State
    copiedIcon,
    setCopiedIcon,
    codeDialog,
    setCodeDialog,
    selectedIcon,
    showIconDetails,
    
    // Computed Data
    filteredIcons,
    categories,
    totalIconCount,
    
    // Actions
    toggleCategory,
    selectAllCategories,
    clearAllCategories,
    clearSearch,
    resetFilters,
    handleIconSelect,
    handleIconCopy,
    closeIconDetails,
  };
};