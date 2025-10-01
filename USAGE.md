# Usage Guide

This guide provides comprehensive instructions for installing and using the @triadui/icons library in your React applications.

## 📦 Installation

### Basic Installation

Install the package using your preferred package manager:

```bash
# npm
npm install @triadui/icons

# yarn
yarn add @triadui/icons

# pnpm
pnpm add @triadui/icons
```

### Peer Dependencies

The library requires React as a peer dependency. Make sure you have it installed:

```bash
npm install react react-dom
```

### Optional: Tailwind CSS Integration

For the best experience with Material Design 3 styling, install Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Then configure your `tailwind.config.js`:

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

## 🚀 Basic Usage

### Importing Icons

```tsx
import { Icon } from '@triadui/icons';

function MyComponent() {
  return (
    <Icon name="home" />
  );
}
```

### Icon Names

The library includes 1738 Material Symbols icons. Icon names follow the Material Design naming convention. Here are some examples:

- `home`
- `search`
- `settings`
- `favorite`
- `star`
- `menu`
- `close`
- `arrow_back`
- `arrow_forward`

### Icon Variants

Material Symbols come in different styles:

```tsx
import { Icon } from '@triadui/icons';

function IconVariants() {
  return (
    <div>
      <Icon name="home" variant="outlined" />  {/* Default */}
      <Icon name="home" variant="rounded" />   {/* Rounded corners */}
      <Icon name="home" variant="sharp" />     {/* Sharp corners */}
    </div>
  );
}
```

### Fill and Weight

Control the appearance with fill and weight:

```tsx
function FillAndWeight() {
  return (
    <div>
      <Icon name="favorite" fill={0} />        {/* Outlined */}
      <Icon name="favorite" fill={1} />        {/* Filled */}
      <Icon name="home" weight={300} />       {/* Light */}
      <Icon name="home" weight={400} />       {/* Regular (default) */}
      <Icon name="home" weight={600} />       {/* Semi-bold */}
    </div>
  );
}
```

### Sizes

Use predefined sizes or custom values:

```tsx
function IconSizes() {
  return (
    <div>
      <Icon name="home" fontSize="small" />   {/* 20px */}
      <Icon name="home" fontSize="medium" />  {/* 24px (default) */}
      <Icon name="home" fontSize="large" />   {/* 32px */}
      <Icon name="home" fontSize={48} />      {/* Custom size */}
    </div>
  );
}
```

### Colors

Use Material Design 3 color tokens or custom classes:

```tsx
function IconColors() {
  return (
    <div>
      <Icon name="home" color="primary" />
      <Icon name="search" color="secondary" />
      <Icon name="settings" color="tertiary" />
      <Icon name="favorite" className="text-red-500" />
    </div>
  );
}
```

### Advanced Customization

Combine all properties for full control:

```tsx
function AdvancedIcons() {
  return (
    <Icon
      name="grade"
      variant="rounded"
      fill={1}
      weight={500}
      grade={100}
      opsz={24}
      fontSize="large"
      color="primary"
      className="hover:scale-110 transition-transform"
    />
  );
}
```

## 🎨 Icon Browser Component

The library includes a built-in icon browser for development:

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

This component provides:
- Search functionality
- Category filtering
- Copy-to-clipboard
- Live preview
- Code generation

## 📚 API Reference

### Icon Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Icon name (required) |
| `variant` | `'outlined' \| 'rounded' \| 'sharp'` | `'rounded'` | Icon style variant |
| `fill` | `0 \| 1` | `0` | Fill variation (0 = outlined, 1 = filled) |
| `weight` | `number` | `400` | Font weight (100-700) |
| `grade` | `number` | `0` | Grade variation (-50 to 200) |
| `opsz` | `number` | `24` | Optical size (20-48) |
| `fontSize` | `IconSize \| number` | `'medium'` | Icon size preset or custom px value |
| `color` | `string` | - | Material Design color token |
| `className` | `string` | - | Additional CSS classes |

### IconSize Type

```typescript
type IconSize = 'small' | 'medium' | 'large';
```

### MaterialIconBrowser Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

## 🎯 Best Practices

### Performance

- Use tree-shaking by importing only what you need
- Prefer icon names over dynamic strings when possible
- Use the `fontSize` prop instead of CSS for sizing

### Accessibility

- Icons should have appropriate ARIA labels when used as interactive elements
- Use semantic color names that convey meaning

### Styling

- Leverage Material Design 3 color tokens for consistency
- Use Tailwind classes for custom styling
- Combine with CSS transitions for interactive effects

## 🛠️ Troubleshooting

### Icons not displaying

1. Ensure the font files are properly loaded
2. Check that `@triadui/icons/fonts` is imported in your CSS
3. Verify the icon name is correct

### TypeScript errors

1. Make sure you have the latest version installed
2. Check that your TypeScript version supports the types
3. Import types explicitly if needed

### Build issues

1. Ensure peer dependencies are installed
2. Check your bundler configuration
3. Verify the package is listed in your dependencies

## 📖 Examples

See the `/demo` folder in the repository for complete examples.

## 🤝 Contributing

Found an issue or have a suggestion? Please check our [Contributing Guide](../CONTRIBUTING.md).</content>
<parameter name="filePath">d:\workspace\mui-III\USAGE.md