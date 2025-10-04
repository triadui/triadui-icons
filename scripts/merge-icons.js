/**
 * Script to merge and deduplicate icons from multiple sources
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the current icons.ts file
const iconsPath = path.join(__dirname, '..', 'src', 'icons.ts');
const content = fs.readFileSync(iconsPath, 'utf8');

// Extract the ICONS object
const iconsMatch = content.match(/export const ICONS = \{([\s\S]*?)\n\};/);
if (!iconsMatch) {
  console.error('Could not find ICONS object');
  process.exit(1);
}

// Parse the categories
const categories = {};
const categoryRegex = /(\w+):\s*\{([^}]+)\}/g;
let match;

while ((match = categoryRegex.exec(iconsMatch[1])) !== null) {
  const categoryName = match[1];
  const categoryContent = match[2];
  
  // Skip if already processed (handle duplicates)
  if (!categories[categoryName]) {
    categories[categoryName] = new Set();
  }
  
  // Extract icon names
  const iconRegex = /(\w+):\s*'([^']+)'/g;
  let iconMatch;
  
  while ((iconMatch = iconRegex.exec(categoryContent)) !== null) {
    categories[categoryName].add(iconMatch[1]);
  }
}

// Generate the new file
let output = `/**
 * Material Symbols Icon Constants
 *
 * Comprehensive collection of Material Design 3 icons organized by category.
 * This includes thousands of icons from the Material Symbols Rounded font.
 */

export const ICONS = {\n`;

// Sort categories
const sortedCategories = Object.keys(categories).sort();

sortedCategories.forEach((categoryName, catIndex) => {
  const icons = Array.from(categories[categoryName]).sort();
  
  output += `  // ${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}\n`;
  output += `  ${categoryName}: {\n`;
  
  icons.forEach((icon) => {
    output += `    ${icon}: '${icon}',\n`;
  });
  
  output += `  }${catIndex < sortedCategories.length - 1 ? ',' : ''}\n`;
  if (catIndex < sortedCategories.length - 1) {
    output += '\n';
  }
});

output += `} as const;\n\n`;

// Add helper functions
output += `/**
 * Type representing all available icon names
 */
export type IconName = string;

/**
 * Type representing all available icon categories
 */
export type IconCategory = keyof typeof ICONS;

/**
 * Interface for icon metadata
 */
export interface IconMetadata {
  name: string;
  category: IconCategory;
  keywords?: string[];
  description?: string;
}

/**
 * Get all available icon names as a flat array
 * @returns Array of all icon names
 */
export const getAllIconNames = (): string[] => {
  const names: string[] = [];
  Object.values(ICONS).forEach((category) => {
    Object.values(category as Record<string, string>).forEach((iconName) => {
      names.push(iconName);
    });
  });
  return [...new Set(names)]; // Remove duplicates
};

/**
 * Search for icons by name
 * @param query - Search query string
 * @returns Array of matching icon names
 */
export const searchIcons = (query: string): string[] => {
  const allIcons = getAllIconNames();
  const lowerQuery = query.toLowerCase();
  return allIcons.filter((icon) => icon.toLowerCase().includes(lowerQuery));
};

/**
 * Get all icons from a specific category
 * @param category - The category to get icons from
 * @returns Array of icon names in the category
 */
export const getIconsByCategory = (category: keyof typeof ICONS): string[] => {
  return Object.values(ICONS[category]);
};

/**
 * Get all available category names
 * @returns Array of category names
 */
export const getCategories = (): string[] => {
  return Object.keys(ICONS);
};
`;

// Write the new file
fs.writeFileSync(iconsPath, output, 'utf8');

// Print statistics
console.log('✅ Icons merged and deduplicated successfully!');
console.log(`\nStatistics:`);
sortedCategories.forEach((cat) => {
  console.log(`  ${cat}: ${categories[cat].size} icons`);
});
const totalIcons = sortedCategories.reduce((sum, cat) => sum + categories[cat].size, 0);
console.log(`\nTotal unique icons: ${totalIcons}`);
