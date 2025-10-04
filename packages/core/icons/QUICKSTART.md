# Quick Start Guide - @triadui/icons

Get up and running with @triadui/icons in under 5 minutes!

## 🚀 For Next.js Projects

### Next.js with TypeScript

```bash
# 1. Install
npm install @triadui/icons

# 2. Import styles in app/layout.tsx
import '@triadui/icons/styles';

# 3. Use anywhere
import { Icon } from '@triadui/icons';
<Icon name="home" />
```

### Next.js with JavaScript

```bash
# 1. Install
npm install @triadui/icons

# 2. Import styles in app/layout.js
import '@triadui/icons/styles';

# 3. Use anywhere
import { Icon } from '@triadui/icons';
<Icon name="home" />
```

## ⚡ For Vite Projects

### Vite with TypeScript

```bash
# 1. Install
npm install @triadui/icons

# 2. Import styles in src/main.tsx
import '@triadui/icons/styles';

# 3. Use anywhere
import { Icon } from '@triadui/icons';
<Icon name="search" />
```

### Vite with JavaScript

```bash
# 1. Install
npm install @triadui/icons

# 2. Import styles in src/main.jsx
import '@triadui/icons/styles';

# 3. Use anywhere
import { Icon } from '@triadui/icons';
<Icon name="search" />
```

## ⚛️ For Create React App

### CRA with TypeScript

```bash
# 1. Install
npm install @triadui/icons

# 2. Import styles in src/index.tsx
import '@triadui/icons/styles';

# 3. Use anywhere
import { Icon } from '@triadui/icons';
<Icon name="favorite" />
```

### CRA with JavaScript

```bash
# 1. Install
npm install @triadui/icons

# 2. Import styles in src/index.js
import '@triadui/icons/styles';

# 3. Use anywhere
import { Icon } from '@triadui/icons';
<Icon name="favorite" />
```

## 📝 Common Examples

### Basic Usage

```jsx
// Simple icon
<Icon name="home" />

// With size
<Icon name="star" fontSize="large" />

// With color
<Icon name="favorite" color="error" />

// Filled variant
<Icon name="heart" fill={1} />
```

### With Different Variants

```jsx
<Icon name="settings" variant="outlined" />
<Icon name="settings" variant="filled" />
<Icon name="settings" variant="rounded" />
<Icon name="settings" variant="sharp" />
```

### Interactive Button

```jsx
import { useState } from 'react';
import { Icon } from '@triadui/icons';

function LikeButton() {
  const [liked, setLiked] = useState(false);
  
  return (
    <button onClick={() => setLiked(!liked)}>
      <Icon 
        name="favorite" 
        fill={liked ? 1 : 0}
        color={liked ? 'error' : 'inherit'}
      />
    </button>
  );
}
```

### Icon List

```jsx
const items = ['home', 'search', 'favorite', 'settings'];

<div>
  {items.map(icon => (
    <Icon key={icon} name={icon} fontSize="large" />
  ))}
</div>
```

## 🎨 All Available Props

```jsx
<Icon 
  name="star"              // required - icon name
  variant="rounded"        // outlined | filled | rounded | sharp
  fill={1}                 // 0 | 1
  weight={700}             // 100-700
  grade={0}                // -50 to 200
  opsz={24}                // 20-48
  fontSize="large"         // small | medium | large | xlarge | number
  color="primary"          // inherit | primary | secondary | error | warning | info | success
  className="custom-class" // string
  style={{ color: 'red' }} // CSSProperties
/>
```

## 🔍 Finding Icons

Browse all icons at: https://fonts.google.com/icons

Search for any icon and use its name directly:
- `home` → Home icon
- `search` → Search icon
- `favorite` → Favorite/Heart icon
- `settings` → Settings icon
- `account_circle` → User profile icon

## ❓ Need Help?

- 📚 [Full README](./README.md)
- 📖 [Integration Guide](./INTEGRATION.md)
- 💻 [JavaScript Examples](./examples/javascript-examples.jsx)
- 🐛 [Report Issues](https://github.com/triadui/triadui-icons/issues)

---

**That's it!** You're ready to use Material Design icons in your React app. 🎉
