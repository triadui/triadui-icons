# @triadui/icons

[![npm version](https://img.shields.io/npm/v/@triadui/icons.svg)](https://www.npmjs.com/package/@triadui/icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-Compatible-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Next.js](https://img.shields.io/badge/Next.js-Ready-black.svg)](https://nextjs.org/)

Core Material Design 3 icon component for React applications with TypeScript and JavaScript support. Works seamlessly with Next.js, Vite, Create React App, and more.

## ✨ Features

- 🎨 **Material Design 3** - Latest Material Symbols icons
- 📦 **Multiple Formats** - ESM, CommonJS, and UMD builds
- 🔷 **TypeScript** - Full type definitions included
- 🟨 **JavaScript** - Works perfectly without TypeScript
- ⚡ **Next.js Ready** - App Router and Pages Router compatible
- 🌐 **Universal** - Works in all React environments
- 🎭 **Variable Fonts** - Fill, weight, grade, and optical size control
- 🎯 **Tree-shakeable** - Import only what you need
- 📱 **Responsive** - Built-in size presets

## 📦 Installation

```bash
# npm
npm install @triadui/icons

# yarn
yarn add @triadui/icons

# pnpm
pnpm add @triadui/icons
```

## 🚀 Quick Start

### TypeScript / TSX

```tsx
import { Icon } from '@triadui/icons';

function App() {
  return (
    <div>
      <Icon name="home" />
      <Icon name="search" variant="outlined" fill={1} />
      <Icon name="settings" variant="sharp" color="primary" fontSize="large" />
    </div>
  );
}
```

### JavaScript / JSX

```jsx
import { Icon } from '@triadui/icons';

function App() {
  return (
    <div>
      <Icon name="home" />
      <Icon name="search" variant="outlined" fill={1} />
      <Icon name="settings" variant="sharp" color="primary" fontSize="large" />
    </div>
  );
}
```

## 🔧 Framework Setup

### Next.js

```tsx
// In your layout or main component
import '@triadui/icons/styles';

// Use in components
import { Icon } from '@triadui/icons';

<Icon name="home" />
```

### Vite / Create React App

```tsx
// In your main CSS file or component
import '@triadui/icons/styles';

// In your components
import { Icon } from '@triadui/icons';

<Icon name="search" variant="outlined" />
```

## 📖 API Reference

### Icon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Icon name (required) |
| `variant` | `'outlined' \| 'filled' \| 'rounded' \| 'sharp'` | `'rounded'` | Icon style variant |
| `fill` | `0 \| 1` | `0` | Fill variation (0 = outlined, 1 = filled) |
| `weight` | `number` | `400` | Font weight (100-700) |
| `grade` | `number` | `0` | Grade variation (-50 to 200) |
| `opsz` | `number` | `24` | Optical size (20-48) |
| `fontSize` | `IconSize` | `'medium'` | Icon size preset or custom number |
| `color` | `IconColor` | `'inherit'` | Icon color preset |
| `className` | `string` | `''` | Additional CSS class name |
| `style` | `React.CSSProperties` | `{}` | Inline styles |

### Size Presets

- `'small'` - 20px
- `'medium'` - 24px (default)
- `'large'` - 32px
- `'xlarge'` - 40px
- Custom number (e.g., `28`)

### Color Presets

- `'inherit'` - Inherit from parent
- `'primary'` - Theme primary color
- `'secondary'` - Theme secondary color
- `'error'` - Error/danger color
- `'warning'` - Warning color
- `'info'` - Info color
- `'success'` - Success color

## 🎨 Advanced Usage

### Custom Styling

```tsx
// TypeScript
<Icon 
  name="favorite"
  style={{ color: '#ff0000', fontSize: '32px' }}
/>

// With CSS classes
<Icon 
  name="star"
  className="my-custom-icon"
/>
```

### Variable Font Settings

```tsx
<Icon 
  name="home"
  fill={1}        // Filled icon
  weight={700}    // Bold
  grade={200}     // Emphasized
  opsz={48}       // Large optical size
/>
```

### Dynamic Icons (JavaScript)

```jsx
const iconNames = ['home', 'search', 'settings', 'favorite'];

function IconList() {
  return (
    <div>
      {iconNames.map((name) => (
        <Icon key={name} name={name} fontSize="large" />
      ))}
    </div>
  );
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- React Native (with appropriate setup)

## 📝 TypeScript Support

Full TypeScript definitions are included. Types are automatically imported when using TypeScript:

```tsx
import { Icon, IconProps, IconSize, IconColor } from '@triadui/icons';

const MyIcon: React.FC<{ size: IconSize }> = ({ size }) => {
  return <Icon name="home" fontSize={size} />;
};
```

## 🤝 CommonJS Support

This package supports both ESM and CommonJS:

```javascript
// ESM (recommended)
import { Icon } from '@triadui/icons';

// CommonJS
const { Icon } = require('@triadui/icons');
```

## � Finding Icons

Visit [Google Fonts Material Symbols](https://fonts.google.com/icons) to browse all available icons. Use the icon name exactly as shown (e.g., `home`, `search`, `favorite`).

## �📄 License

Part of Triad UI design system

## 🐛 Issues

Report issues at: [GitHub Issues](https://github.com/Muhammad-Hashim/triadui-icons/issues)

## 📦 Related Packages

- `@triadui/core` - Core UI components
- `@triadui/theme` - Theme system

---

Made with ❤️ by the Triad UI team
