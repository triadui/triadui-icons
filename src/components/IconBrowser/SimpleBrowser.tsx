import React, { useState, useMemo, useCallback } from 'react';
import { Icon } from '@triadui/icons';
import { Input } from '../UI';
import { ICONS, searchIcons } from '../../icons';
import type { IconColor, IconSize, IconStyle } from '@triadui/icons';

interface MaterialIconBrowserProps {
  className?: string;
}

export const MaterialIconBrowser: React.FC<MaterialIconBrowserProps> = ({ className = '' }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedColor, setSelectedColor] = useState<IconColor>('inherit');
  const [selectedSize, setSelectedSize] = useState<IconSize>('medium');
  const [selectedStyle, setSelectedStyle] = useState<IconStyle>('rounded');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  // Simple categories for now
  const categories = [
    { id: 'all', name: 'All icons', count: 100 },
    { id: 'action', name: 'Action', count: 20 },
    { id: 'communication', name: 'Communication', count: 15 },
  ];

  const filteredIcons = useMemo(() => {
    let icons: Array<{ name: string; category: string }> = [];

    if (selectedCategory === 'all') {
      Object.keys(ICONS).forEach(category => {
        const categoryIcons = ICONS[category as keyof typeof ICONS];
        Object.values(categoryIcons).forEach((name) => {
          icons.push({ name: name as string, category });
        });
      });
    } else {
      const categoryIcons = ICONS[selectedCategory as keyof typeof ICONS];
      if (categoryIcons) {
        Object.values(categoryIcons).forEach((name) => {
          icons.push({ name: name as string, category: selectedCategory });
        });
      }
    }

    if (searchQuery.trim()) {
      const searchResults = searchIcons(searchQuery);
      icons = icons.filter(icon => searchResults.includes(icon.name));
    }

    return icons;
  }, [searchQuery, selectedCategory]);

  const copyToClipboard = useCallback(async (iconName: string) => {
    try {
      const codeSnippet = `<Icon name="${iconName}" />`;
      await navigator.clipboard.writeText(codeSnippet);
      setCopiedIcon(iconName);
      setTimeout(() => setCopiedIcon(null), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  }, []);

  return (
    <div className={`flex h-screen bg-purple-50 ${className}`}>
      {/* Sidebar */}
      <div className="w-80 bg-[var(--m3-sys-color-surface)] border-r border-[var(--m3-sys-color-outline-variant)] flex flex-col">
        <div className="p-4 border-b border-[var(--m3-sys-color-outline-variant)]">
          <h2 className="text-xl font-bold text-[var(--m3-sys-color-on-surface)]">Material Icons</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center w-full px-3 py-2 text-left rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-100 text-purple-800'
                    : 'text-[var(--m3-sys-color-on-surface)] hover:bg-[var(--m3-sys-overlay-hover)]'
                }`}
              >
                <Icon name="apps" className="mr-3" />
                <span className="flex-1">{category.name}</span>
                <span className="ml-2 px-2 py-1 text-xs bg-[var(--m3-sys-color-surface-container)] text-[var(--m3-sys-color-on-surface-variant)] rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-[var(--m3-sys-color-surface)] border-b border-[var(--m3-sys-color-outline-variant)] p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-[var(--m3-sys-color-on-surface)]">Icon Browser</h1>
                <p className="text-[var(--m3-sys-color-on-surface-variant)] mt-1">Browse Material Design 3 icons</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-[var(--m3-sys-color-primary)]">
                  {filteredIcons.length}
                </div>
                <div className="text-sm text-[var(--m3-sys-color-on-surface-variant)]">icons</div>
              </div>
            </div>

            <div className="max-w-md">
              <Input
                placeholder="Search icons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Control Panel */}
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-[var(--m3-sys-color-on-surface)]">Style:</label>
                <select
                  value={selectedStyle}
                  onChange={(e) => setSelectedStyle(e.target.value as IconStyle)}
                  className="px-3 py-1 border border-[var(--m3-sys-color-outline)] rounded-[var(--m3-sys-shape-corner-small)] text-sm bg-[var(--m3-sys-color-surface)] text-[var(--m3-sys-color-on-surface)]"
                >
                  <option value="outlined">Outlined</option>
                  <option value="rounded">Rounded</option>
                  <option value="sharp">Sharp</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-[var(--m3-sys-color-on-surface)]">Size:</label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value as IconSize)}
                  className="px-3 py-1 border border-[var(--m3-sys-color-outline)] rounded-[var(--m3-sys-shape-corner-small)] text-sm bg-[var(--m3-sys-color-surface)] text-[var(--m3-sys-color-on-surface)]"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-[var(--m3-sys-color-on-surface)]">Color:</label>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value as IconColor)}
                  className="px-3 py-1 border border-[var(--m3-sys-color-outline)] rounded-[var(--m3-sys-shape-corner-small)] text-sm bg-[var(--m3-sys-color-surface)] text-[var(--m3-sys-color-on-surface)]"
                >
                  <option value="inherit">Inherit</option>
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="error">Error</option>
                </select>
              </div>
            </div>
          </div>
        </header>

        {/* Icons Grid */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {filteredIcons.map((icon, index) => (
              <div
                key={`${icon.name}-${index}`}
                className="bg-[var(--m3-sys-color-surface)] rounded-[var(--m3-sys-shape-corner-large)] border border-[var(--m3-sys-color-outline-variant)] p-4 hover:shadow-[var(--m3-sys-elevation-level2)] hover:border-[var(--m3-sys-color-primary)] transition-all duration-200 cursor-pointer group"
                onClick={() => copyToClipboard(icon.name)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 relative">
                    <Icon
                      name={icon.name}
                      variant={selectedStyle}
                      color={selectedColor}
                      fontSize={selectedSize}
                      className="transition-colors duration-200"
                    />
                    {copiedIcon === icon.name && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-green-500 text-white text-xs rounded">
                        Copied!
                      </div>
                    )}
                  </div>
                  <div className="text-xs font-medium text-[var(--m3-sys-color-on-surface)] truncate w-full">
                    {icon.name.replace(/_/g, ' ')}
                  </div>
                  <div className="text-xs text-[var(--m3-sys-color-on-surface-variant)] mt-1 capitalize">
                    {icon.category}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredIcons.length === 0 && (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <Icon name="search_off" fontSize="large" className="mb-4 text-[var(--m3-sys-color-on-surface-variant)]" />
              <h3 className="text-xl font-semibold text-[var(--m3-sys-color-on-surface)] mb-2">No icons found</h3>
              <p className="text-[var(--m3-sys-color-on-surface-variant)]">
                {searchQuery
                  ? `No icons match "${searchQuery}". Try different search terms.`
                  : 'This category is empty or still loading.'}
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// Export as SimpleBrowser for compatibility
export const SimpleBrowser = MaterialIconBrowser;