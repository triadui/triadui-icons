# TriadUI Icons

> **Beautiful Material Design 3 icons for React applications**

TriadUI Icons provides 2,500+ Material Design icons as a lightweight, customizable React component library. Part of the upcoming TriadUI component ecosystem.

[![npm version](https://img.shields.io/npm/v/@triadui/icons.svg)](https://www.npmjs.com/package/@triadui/icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

## ✨ Features

- **2,500+ Icons** - Complete Material Design 3 icon collection
- **Variable Fonts** - Powered by Google's Material Symbols variable font technology
- **Highly Customizable** - Control fill, weight, grade, and optical size
- **TypeScript Ready** - Full TypeScript support with detailed type definitions
- **Lightweight** - Uses font-based icons for optimal performance
- **Tree Shakable** - Only bundle what you use
- **Zero Dependencies** - Minimal runtime dependencies
- **Three Styles** - Outlined, Rounded, and Sharp variants

## 🚀 Quick Start

### Installation

```bash
npm install @triadui/icons
# or
yarn add @triadui/icons
# or
pnpm add @triadui/icons
```

### Setup

1. **Import the CSS** (required for fonts):

```tsx
// In your main CSS file or component
import '@triadui/icons/fonts';
```

2. **Use the Icon component**:

```tsx
import { Icon } from '@triadui/icons';

function App() {
  return (
    <div>
      <Icon name="home" />
      <Icon name="search" variant="outlined" />
      <Icon name="favorite" variant="rounded" fill={1} color="primary" />
    </div>
  );
}
```

## 🎮 Live Demo

Try the interactive demo to explore all icons and see the library in action:

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser to access the icon browser.

## 📖 API Reference

### Icon Component

```tsx
<Icon
  name="icon_name"           // Required: Icon name
  variant="rounded"          // Optional: "outlined" | "rounded" | "sharp"
  fill={0}                   // Optional: 0 (outlined) | 1 (filled)
  weight={400}               // Optional: 100-700
  grade={0}                  // Optional: -50 to 200
  opsz={24}                  // Optional: 20-48 (optical size)
  fontSize="medium"          // Optional: "small" | "medium" | "large" | number
  color="inherit"            // Optional: "inherit" | "primary" | "secondary" | "action" | "disabled" | "error"
  className=""               // Optional: Additional CSS classes
  style={{}}                 // Optional: Inline styles
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | **Required.** Icon name (e.g., "home", "search") |
| `variant` | `"outlined" \| "rounded" \| "sharp"` | `"rounded"` | Icon style variant |
| `fill` | `0 \| 1` | `0` | Fill level: 0 for outlined, 1 for filled |
| `weight` | `number` | `400` | Font weight (100-700) |
| `grade` | `number` | `0` | Grade variation (-50 to 200) for visual adjustments |
| `opsz` | `number` | `24` | Optical size (20-48) - represents the icon size |
| `fontSize` | `"small" \| "medium" \| "large" \| number` | `"medium"` | Icon size preset or custom pixel value |
| `color` | `"inherit" \| "primary" \| "secondary" \| "action" \| "disabled" \| "error"` | `"inherit"` | Color preset |
| `className` | `string` | `""` | Additional CSS class names |
| `style` | `CSSProperties` | `{}` | Inline styles |

## 🎨 Examples

### Basic Usage

```tsx
import { Icon } from '@triadui/icons';

// Simple icon
<Icon name="home" />

// Outlined search icon
<Icon name="search" variant="outlined" />

// Large filled heart
<Icon name="favorite" fill={1} fontSize="large" />
```

### Advanced Customization

```tsx
// Custom styled icon
<Icon 
  name="star" 
  variant="rounded"
  fill={1}
  weight={500}
  grade={200}
  opsz={40}
  color="primary"
  fontSize={32}
  className="my-custom-class"
  style={{ marginRight: '8px' }}
/>

// Button with icon
<button className="btn">
  <Icon name="add" fontSize="small" />
  Add Item
</button>
```

## 🔍 Popular Icons

```tsx
// Navigation
<Icon name="home" />
<Icon name="menu" />
<Icon name="arrow_back" />
<Icon name="close" />

// Actions
<Icon name="add" />
<Icon name="edit" />
<Icon name="delete" />
<Icon name="search" />

// Communication
<Icon name="email" />
<Icon name="phone" />
<Icon name="chat" />
<Icon name="notifications" />

// Media
<Icon name="play_arrow" />
<Icon name="pause" />
<Icon name="volume_up" />
<Icon name="image" />
```

## 🎯 Icon Browser

This package includes an interactive icon browser for development:

```tsx
import { IconBrowser } from '@triadui/icons';

function DevPage() {
  return <IconBrowser />;
}
```

## 📦 What's Included

- **Core Icon Component** - Lightweight, customizable React component
- **Font Files** - Material Symbols fonts (Outlined, Rounded, Sharp)
- **TypeScript Definitions** - Complete type safety
- **Icon Browser** - Interactive development tool
- **2,500+ Icons** - Complete Material Design collection

## 🛠️ Development

### Building from Source

```bash
# Clone the repository
git clone https://github.com/Muhammad-Hashim/triadui-icons.git
cd triadui-icons

# Install dependencies
npm install

# Start development server
npm run dev

# Build the library
npm run build
```

## 🔗 Related Projects

- [Material Design Icons](https://fonts.google.com/icons) - Official Google icon collection
- [Material Design 3](https://m3.material.io/) - Design system guidelines
- **TriadUI** - Full component library (coming soon)

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 🙋‍♂️ Support

- 📖 [Documentation](https://github.com/Muhammad-Hashim/triadui-icons#readme)
- 🐛 [Report Issues](https://github.com/Muhammad-Hashim/triadui-icons/issues)
- 💬 [Discussions](https://github.com/Muhammad-Hashim/triadui-icons/discussions)

---

**TriadUI Icons** - Part of the TriadUI ecosystem. More components coming soon! ⚡