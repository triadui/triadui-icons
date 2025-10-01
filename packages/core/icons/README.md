# @triadui/icons-core

[![npm version](https://badge.fury.io/js/@triadui/icons-core.svg)](https://badge.fury.io/js/@triadui/icons-core)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Core Material Design 3 icon component for React applications with TypeScript support.

## 📦 Installation

```bash
# npm
npm install @triadui/icons-core

# yarn
yarn add @triadui/icons-core

# pnpm
pnpm add @triadui/icons-core
```

## 🚀 Usage

```tsx
import { Icon } from '@triadui/icons-core';

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

## 📖 API

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

## 📄 License

MIT © [MUI-III Team](mailto:contact@mui-iii.dev)