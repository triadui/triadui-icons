# @triadui/icons

- 🚀 **Production Ready**: Optimized for performance and accessibility

## 🎮 Demo

Try the interactive demo to explore all icons and see the library in action:

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser. The demo includes:
- **Home**: Landing page with features and UI examples
- **Search**: Quick icon search functionality
- **About**: Library information and installation guide
- **Icon Browser**: Full searchable interface with all 1738 Material Symbols icons

## 📖 Usage Guide

For detailed installation and usage instructions, see our [Usage Guide](USAGE.md).m version](https://badge.fury.io/js/@triadui/icons.svg)](https://badge.fury.io/js/@triadui/icons)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Ready-38bdf8.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive **Material Design 3 (M3) icon library** with 1738 Material Symbols icons for React applications, featuring variable font support, TypeScript definitions, Tailwind CSS integration, and an interactive icon browser.

## ✨ Features

- 🎨 **Material Design 3**: Latest Material Symbols font with M3 design tokens
- 🔧 **Variable Font Support**: Full control over fill, weight, grade, and optical size
- 📝 **TypeScript Ready**: Complete type definitions and IntelliSense support
- 🌈 **Tailwind CSS Integration**: Pre-configured M3 design system with Tailwind
- 🌐 **Local Font Hosting**: No CDN dependencies (includes local font files)
- 📦 **Tree Shaking**: Optimized bundle size with ES modules
- 🎯 **Material-UI Compatible**: Similar API and design patterns
- 🔍 **Interactive Icon Browser**: Beautiful, searchable icon explorer
- 📱 **Responsive Design**: Works perfectly on all screen sizes
- 🚀 **Production Ready**: Optimized for performance and accessibility

## � Usage Guide

For detailed installation and usage instructions, see our [Usage Guide](USAGE.md).

## �📦 Installation

```bash
# npm
npm install @triadui/icons

# yarn
yarn add @triadui/icons

# pnpm
pnpm add @triadui/icons
```

### Peer Dependencies

Make sure you have React installed in your project:

```bash
npm install react react-dom
```

### Tailwind CSS Setup (Optional but Recommended)

If you want to use the pre-configured Material 3 design system:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Add to your `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@triadui/icons/dist/**/*.js'
  ],
  theme: {
    extend: {
      // The package includes Material 3 design tokens
    },
  },
  plugins: [],
}
```

## 🚀 Quick Start

### Basic Icon Usage

```tsx
import { Icon } from '@triadui/icons';

function MyComponent() {
  return (
    <div>
      <Icon name="home" />
      <Icon name="search" color="primary" />
      <Icon name="settings" fontSize="large" />
    </div>
  );
}
```

### Icon Browser Component

```tsx
import { MaterialIconBrowser } from '@triadui/icons';

function App() {
  return (
    <div className="h-screen">
      <MaterialIconBrowser />
    </div>
  );
}
```

### With Custom Styling

```tsx
import { Icon } from '@triadui/icons';

function StyledIcons() {
  return (
    <div>
      {/* Basic usage */}
      <Icon name="star" />
      
      {/* With Material 3 colors */}
      <Icon name="favorite" color="primary" />
      
      {/* Custom size and weight */}
      <Icon name="bolt" fontSize={32} weight={600} />
      
      {/* Filled variant */}
      <Icon name="heart" fill={1} color="error" />
      
      {/* Advanced customization */}
      <Icon 
        name="grade"
        variant="rounded"
        fill={1}
        weight={500}
        grade={100}
        fontSize="large"
        className="text-blue-500 hover:text-blue-600"
      />
    </div>
  );
}
```

## 🎨 API Reference

### Icon Component

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Icon name (required) |
| `variant` | `'outlined' \\| 'rounded' \\| 'sharp'` | `'rounded'` | Icon style variant |
| `fill` | `0 \\| 1` | `0` | Fill variation (0 = outlined, 1 = filled) |
| `weight` | `number` | `400` | Font weight (100-700) |
| `grade` | `number` | `0` | Grade variation (-50 to 200) |
| `opsz` | `number` | `24` | Optical size (20-48) |
| `fontSize` | `IconSize \\| number` | `'medium'` | Icon size preset or custom px value |
| `color` | `IconColor` | `'inherit'` | Color preset |
| `className` | `string` | - | Additional CSS classes |
| `style` | `CSSProperties` | - | Inline styles |

#### Size Options

- `'small'`: 18px
- `'medium'`: 24px  
- `'large'`: 36px
- Custom number: Any pixel value

#### Color Options

- `'inherit'`: Inherits text color
- `'primary'`: Material 3 primary color
- `'secondary'`: Material 3 secondary color
- `'action'`: Default action color
- `'disabled'`: Disabled state color
- `'error'`: Error state color

### MaterialIconBrowser Component

Interactive icon browser with search, filtering, and customization controls.

```tsx
<MaterialIconBrowser className="custom-browser" />
```

## 🎯 Examples

### Icon Variants

```tsx
// Different style variants
<Icon name="star" variant="outlined" />
<Icon name="star" variant="rounded" />
<Icon name="star" variant="sharp" />
```

### Variable Font Features

```tsx
// Weight variations
<Icon name="text_format" weight={100} />
<Icon name="text_format" weight={400} />
<Icon name="text_format" weight={700} />

// Fill variations
<Icon name="favorite" fill={0} />  {/* Outlined */}
<Icon name="favorite" fill={1} />  {/* Filled */}

// Grade variations (thickness)
<Icon name="brightness_6" grade={-25} />
<Icon name="brightness_6" grade={0} />
<Icon name="brightness_6" grade={200} />

// Optical size optimization
<Icon name="visibility" opsz={20} fontSize={20} />
<Icon name="visibility" opsz={48} fontSize={48} />
```

### With Tailwind CSS Classes

```tsx
<Icon 
  name="star" 
  className="text-yellow-500 hover:text-yellow-600 transition-colors" 
/>

<Icon 
  name="heart" 
  fill={1}
  className="text-red-500 animate-pulse" 
/>
```

## 🌈 Material 3 Design System

This package includes pre-configured Material 3 design tokens for Tailwind CSS:

### Color Classes Available

```css
/* Primary colors */
.text-m3-primary
.bg-m3-primary-container
.text-m3-primary-on-container

/* Surface colors */
.bg-m3-surface
.text-m3-surface-on-surface
.bg-m3-surface-container

/* And many more M3 colors... */
```

### Shadow Classes

```css
.shadow-m3-1  /* Elevation 1 */
.shadow-m3-2  /* Elevation 2 */
.shadow-m3-3  /* Elevation 3 */
```

### Border Radius

```css
.rounded-m3-small    /* 4px */
.rounded-m3-medium   /* 8px */
.rounded-m3-large    /* 12px */
.rounded-m3-extra    /* 28px */
```

## 🔍 Available Icons

This package includes **2,500+ Material Symbols** organized in categories:

- **Action** (settings, home, search, etc.)
- **Communication** (message, call, email, etc.)
- **Content** (copy, cut, paste, etc.)
- **Device** (smartphone, laptop, tablet, etc.)
- **File** (folder, document, download, etc.)
- **Image** (photo, camera, image, etc.)
- **Navigation** (menu, arrow, chevron, etc.)
- **Notification** (notifications, alarm, etc.)
- **Social** (people, person, group, etc.)
- And many more...

### Searching Icons

```tsx
import { searchIcons, ICONS } from '@triadui/icons';

// Search for icons
const results = searchIcons('home');
console.log(results); // ['home', 'home_work', 'cottage', ...]

// Access all icons by category
const actionIcons = ICONS.action;
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Icon/           # Core Icon component
│   ├── IconBrowser/    # Interactive browser components
│   └── UI/            # Reusable UI components
├── icons.ts           # Icon data and utilities
├── utils/             # Utility functions
└── styles/            # Global styles and Tailwind config
```

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/your-username/mui-iii.git
cd mui-iii

# Install dependencies
npm install

# Start development server
npm run dev

# Build the library
npm run build:lib

# Run linting
npm run lint
```

## 📄 License

MIT © [MUI-III Team](LICENSE)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## 🐛 Issues

Found a bug? Please file an issue on our [GitHub Issues](https://github.com/your-username/mui-iii/issues) page.

## 🌟 Show Your Support

If this library is useful to you, please consider giving it a ⭐️ on GitHub!

---

**Made with ❤️ for the React and Material Design community**