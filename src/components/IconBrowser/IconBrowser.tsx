import React, { useState, useMemo } from 'react';
import { Icon } from '../Icon';
import { Input } from '../UI';
import { ICONS, searchIcons, getCategories, getIconsByCategory } from '../../icons';

export const IconBrowser: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [selectedVariant, setSelectedVariant] = useState<'outlined' | 'filled' | 'rounded' | 'sharp'>('outlined');
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);
  const [codeDialog, setCodeDialog] = useState<{isOpen: boolean, iconName: string | null}>({isOpen: false, iconName: null});

  const categories = getCategories();

  // Filter icons based on search and categories
  const filteredIcons = useMemo(() => {
    let icons: string[] = [];

    if (searchQuery) {
      // If there's a search query, search across all icons
      icons = searchIcons(searchQuery);
    } else if (selectedCategories.size > 0) {
      // If categories are selected, get icons from those categories
      selectedCategories.forEach(category => {
        icons.push(...getIconsByCategory(category as keyof typeof ICONS));
      });
    } else {
      // Default: show all icons
      icons = Object.values(ICONS).flatMap(category => Object.values(category));
    }

    // Remove duplicates and limit results (increased limit)
    return [...new Set(icons)];
  }, [searchQuery, selectedCategories]);

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

  const copyToClipboard = async (iconName: string) => {
    const code = `<Icon name="${iconName}" />`;
    try {
      await navigator.clipboard.writeText(code);
      setCopyFeedback(`Copied: ${iconName}`);
      setTimeout(() => setCopyFeedback(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const showCodeDialog = (iconName: string) => {
    setCodeDialog({isOpen: true, iconName});
  };

  const closeCodeDialog = () => {
    setCodeDialog({isOpen: false, iconName: null});
  };

  return (
    <div 
      style={{ 
        minHeight: '100vh',
        backgroundColor: '#FFFBFE', // M3 background
        color: '#1C1B1F', // M3 on-background
        fontFamily: 'Roboto, system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Header */}
      <header 
        style={{ 
          backgroundColor: '#FFFBFE', // M3 surface
          borderBottom: '1px solid #CAC4D0', // M3 outline-variant
          padding: '24px'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h1 
            style={{ 
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#1C1B1F' // M3 on-surface
            }}
          >
            Icon Browser
          </h1>
          <p 
            style={{ 
              fontSize: '1.125rem',
              color: '#49454F' // M3 on-surface-variant
            }}
          >
            Browse and copy {filteredIcons.length} Material Symbols icons
          </p>
        </div>
      </header>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px' }}>
        {/* Copy Feedback Toast */}
        {copyFeedback && (
          <div 
            style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              backgroundColor: '#E8F5E8', // M3 success container
              color: '#146C2E', // M3 on-success-container
              padding: '12px 16px',
              borderRadius: '12px', // M3 medium corner
              boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)', // M3 elevation level2
              zIndex: 1000,
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            {copyFeedback}
          </div>
        )}

        {/* Search */}
        <div style={{ marginBottom: '32px' }}>
          <Input
            placeholder="Search icons (e.g., home, search, settings)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', maxWidth: '400px' }}
          />
        </div>

        {/* Filters */}
        <div style={{ marginBottom: '32px' }}>
          {/* Category Filter */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '500', color: '#1C1B1F', margin: 0 }}>
                Categories
              </h3>
              <button
                onClick={selectAllCategories}
                style={{
                  padding: '4px 12px',
                  backgroundColor: '#E7E0EC',
                  border: '1px solid #CAC4D0',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  color: '#49454F'
                }}
              >
                All
              </button>
              <button
                onClick={clearAllCategories}
                style={{
                  padding: '4px 12px',
                  backgroundColor: '#E7E0EC',
                  border: '1px solid #CAC4D0',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  color: '#49454F'
                }}
              >
                None
              </button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map((category: string) => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: selectedCategories.has(category) ? '#D1C4E9' : '#F3EDF7',
                    border: `1px solid ${selectedCategories.has(category) ? '#6750A4' : '#CAC4D0'}`,
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    color: selectedCategories.has(category) ? '#381E72' : '#49454F',
                    textTransform: 'capitalize',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Variant Filter */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: '500', color: '#1C1B1F', margin: '0 0 12px 0' }}>
              Variant
            </h3>
            <div style={{ display: 'flex', gap: '8px' }}>
              {(['outlined', 'filled', 'rounded', 'sharp'] as const).map(variant => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: selectedVariant === variant ? '#D1C4E9' : '#F3EDF7',
                    border: `1px solid ${selectedVariant === variant ? '#6750A4' : '#CAC4D0'}`,
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    color: selectedVariant === variant ? '#381E72' : '#49454F',
                    textTransform: 'capitalize',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Icons Grid */}
        {filteredIcons.length > 0 ? (
          <div 
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
              gap: '16px'
            }}
          >
            {filteredIcons.map((icon: string, index: number) => (
              <div
                key={`${icon}-${index}`}
                style={{
                  padding: '16px',
                  backgroundColor: '#F3EDF7', // M3 surface-container
                  border: '1px solid #CAC4D0', // M3 outline-variant
                  borderRadius: '16px', // M3 large corner
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ECE6F0'; // M3 surface-container-high
                  e.currentTarget.style.boxShadow = '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)'; // M3 elevation level2
                  // Show action buttons
                  const buttons = e.currentTarget.querySelector('.action-buttons') as HTMLElement;
                  if (buttons) buttons.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F3EDF7'; // M3 surface-container
                  e.currentTarget.style.boxShadow = 'none';
                  // Hide action buttons
                  const buttons = e.currentTarget.querySelector('.action-buttons') as HTMLElement;
                  if (buttons) buttons.style.opacity = '0';
                }}
              >
                {/* Action Buttons - positioned in corners */}
                <div 
                  className="action-buttons"
                  style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    right: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    opacity: 0,
                    transition: 'opacity 0.2s ease',
                    pointerEvents: 'auto'
                  }}
                >
                  {/* Copy Button - Left Corner */}
                  <button
                    onClick={() => copyToClipboard(icon)}
                    style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: '#E7E0EC', // M3 surface-container-lowest
                      border: '1px solid #CAC4D0', // M3 outline-variant
                      borderRadius: '8px', // M3 small corner
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#D1C4E9'; // M3 secondary container
                      e.currentTarget.style.borderColor = '#6750A4'; // M3 primary
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#E7E0EC'; // M3 surface-container-lowest
                      e.currentTarget.style.borderColor = '#CAC4D0'; // M3 outline-variant
                    }}
                    title="Copy code"
                  >
                    <Icon 
                      name="content_copy" 
                      style={{ 
                        color: '#49454F', // M3 on-surface-variant
                        fontSize: '16px'
                      }}
                    />
                  </button>

                  {/* Code Button - Right Corner */}
                  <button
                    onClick={() => showCodeDialog(icon)}
                    style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: '#E7E0EC', // M3 surface-container-lowest
                      border: '1px solid #CAC4D0', // M3 outline-variant
                      borderRadius: '8px', // M3 small corner
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#D1C4E9'; // M3 secondary container
                      e.currentTarget.style.borderColor = '#6750A4'; // M3 primary
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#E7E0EC'; // M3 surface-container-lowest
                      e.currentTarget.style.borderColor = '#CAC4D0'; // M3 outline-variant
                    }}
                    title="Show import code"
                  >
                    <Icon 
                      name="code" 
                      style={{ 
                        color: '#49454F', // M3 on-surface-variant
                        fontSize: '16px'
                      }}
                    />
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                  {/* Icon */}
                  <Icon 
                    name={icon} 
                    variant={selectedVariant === 'filled' ? 'rounded' : selectedVariant}
                    fill={selectedVariant === 'filled' ? 1 : 0}
                    style={{ 
                      color: '#6750A4', // M3 primary
                      fontSize: '32px'
                    }}
                  />
                  
                  {/* Icon Name */}
                  <div 
                    style={{ 
                      fontSize: '12px',
                      color: '#49454F', // M3 on-surface-variant
                      wordWrap: 'break-word',
                      width: '100%',
                      minHeight: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {icon.replace(/_/g, ' ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '64px',
              textAlign: 'center'
            }}
          >
            <Icon 
              name="search_off" 
              fontSize="large" 
              style={{ 
                color: '#49454F', // M3 on-surface-variant
                marginBottom: '16px',
                fontSize: '48px'
              }}
            />
            <h3 
              style={{ 
                fontSize: '1.25rem',
                fontWeight: '500',
                marginBottom: '8px',
                color: '#1C1B1F' // M3 on-surface
              }}
            >
              No icons found
            </h3>
            <p style={{ color: '#49454F' }}> {/* M3 on-surface-variant */}
              {searchQuery
                ? `No icons match "${searchQuery}". Try different search terms.`
                : 'No icons available in this category.'}
            </p>
          </div>
        )}
      </div>

      {/* Code Dialog Modal */}
      {codeDialog.isOpen && codeDialog.iconName && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000
          }}
          onClick={closeCodeDialog}
        >
          <div 
            style={{
              backgroundColor: '#FFFBFE', // M3 surface
              borderRadius: '16px', // M3 large corner
              padding: '24px',
              maxWidth: '500px',
              width: '90%',
              maxHeight: '80vh',
              overflow: 'auto',
              boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.30), 0px 8px 24px 4px rgba(0, 0, 0, 0.15)', // M3 elevation level4
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeCodeDialog}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#49454F', // M3 on-surface-variant
                fontSize: '24px',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F3EDF7'; // M3 surface-container
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              ×
            </button>

            {/* Dialog Title */}
            <h2 
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '16px',
                color: '#1C1B1F', // M3 on-surface
                paddingRight: '40px' // Space for close button
              }}
            >
              Import Code for "{codeDialog.iconName.replace(/_/g, ' ')}"
            </h2>

            {/* Code Block */}
            <div 
              style={{
                backgroundColor: '#F3EDF7', // M3 surface-container
                border: '1px solid #CAC4D0', // M3 outline-variant
                borderRadius: '12px', // M3 medium corner
                padding: '16px',
                fontFamily: 'monospace',
                fontSize: '14px',
                lineHeight: '1.5',
                color: '#1C1B1F', // M3 on-surface
                overflow: 'auto'
              }}
            >
              <div style={{ marginBottom: '16px', color: '#49454F', fontSize: '12px', fontFamily: 'Roboto, sans-serif' }}>
                First, install the package:
              </div>
              <div style={{ marginBottom: '16px', fontWeight: 'bold' }}>
                npm install @triadui/icons
              </div>
              
              <div style={{ marginBottom: '16px', color: '#49454F', fontSize: '12px', fontFamily: 'Roboto, sans-serif' }}>
                Then import and use:
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ color: '#7C4DFF' }}>import</span> {'{ Icon }'} <span style={{ color: '#7C4DFF' }}>from</span> <span style={{ color: '#088E4A' }}>'@triadui/icons'</span>;
              </div>
              <div>
                &lt;<span style={{ color: '#E91E63' }}>Icon</span> <span style={{ color: '#2196F3' }}>name</span>=<span style={{ color: '#088E4A' }}>"{codeDialog.iconName}"</span> /&gt;
              </div>
            </div>

            {/* Copy Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
              <button
                onClick={() => {
                  copyToClipboard(codeDialog.iconName!);
                  closeCodeDialog();
                }}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#6750A4', // M3 primary
                  color: '#FFFBFE', // M3 on-primary
                  border: 'none',
                  borderRadius: '12px', // M3 medium corner
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#5946A3'; // M3 primary (darker)
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#6750A4'; // M3 primary
                }}
              >
                Copy Code
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};