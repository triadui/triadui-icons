import React, { useEffect } from 'react';
import { useIconBrowser } from './hooks/useIconBrowser';
import { CategoryFilter, IconGrid, SearchBar, IconDetails } from './components';
import type { IconName } from '../../icons';

/**
 * Main IconBrowser component - provides a comprehensive interface for browsing, searching, and selecting icons
 * Uses the modular architecture with separated concerns
 */
export const IconBrowser: React.FC = () => {
  const {
    // State
    searchQuery,
    selectedCategories,
    selectedIcon,
    showIconDetails,
    copiedIcon,
    
    // Data
    categories,
    filteredIcons,
    
    // Actions
    setSearchQuery,
    toggleCategory,
    selectAllCategories,
    clearAllCategories,
    handleIconSelect,
    handleIconCopy,
    closeIconDetails,
  } = useIconBrowser();

  // Disable body scroll when modal is open
  useEffect(() => {
    if (showIconDetails) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showIconDetails]);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'var(--m3-sys-color-surface-container-low, #F7F2FA)' 
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '32px 24px' 
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '300px 1fr', 
          gap: '24px' 
        }}>
          {/* Sidebar - Search and Categories */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ 
              padding: '24px',
              backgroundColor: 'var(--m3-sys-color-surface, #FFFBFE)',
              borderRadius: '12px',
              border: '1px solid var(--m3-sys-color-outline-variant, #CAC4D0)'
            }}>
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search icons..."
                className="mb-6"
              />
              
              <CategoryFilter
                categories={categories}
                selectedCategories={selectedCategories}
                onToggleCategory={toggleCategory}
                onSelectAll={selectAllCategories}
                onClearAll={clearAllCategories}
              />
            </div>
          </div>

          {/* Main Content - Icon Grid */}
          <div>
            <div style={{ 
              padding: '24px',
              backgroundColor: 'var(--m3-sys-color-surface, #FFFBFE)',
              borderRadius: '12px',
              border: '1px solid var(--m3-sys-color-outline-variant, #CAC4D0)'
            }}>
              {/* Results Summary */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between' 
                }}>
                  <p style={{ 
                    fontSize: '14px', 
                    color: 'var(--m3-sys-color-on-surface-variant, #49454F)' 
                  }}>
                    {filteredIcons.length} icon{filteredIcons.length !== 1 ? 's' : ''} found
                    {searchQuery && ` for "${searchQuery}"`}
                    {selectedCategories.size > 0 && ` in ${selectedCategories.size} categor${selectedCategories.size !== 1 ? 'ies' : 'y'}`}
                  </p>
                </div>
              </div>

              {/* Icon Grid */}
              <IconGrid
                icons={filteredIcons as IconName[]}
                selectedIcon={selectedIcon}
                copiedIcon={copiedIcon}
                onIconSelect={handleIconSelect}
                onIconCopy={handleIconCopy}
              />
            </div>
          </div>
        </div>

        {/* Icon Details Modal/Panel */}
        {showIconDetails && selectedIcon && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '16px'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '600px',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}>
              <IconDetails
                iconName={selectedIcon}
                onClose={closeIconDetails}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};