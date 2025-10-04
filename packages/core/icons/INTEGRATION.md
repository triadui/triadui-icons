# Integration Guide for @triadui/icons

Complete integration guide for using @triadui/icons across different React environments.

## 🚀 Quick Integration

### Step 1: Install the Package

```bash
npm install @triadui/icons
# or
yarn add @triadui/icons
# or
pnpm add @triadui/icons
```

### Step 2: Import Styles

Import the Material Symbols font CSS once in your app's entry point:

```jsx
import '@triadui/icons/styles';
```

### Step 3: Use Icons

```jsx
import { Icon } from '@triadui/icons';

<Icon name="home" />
```

---

## 📱 Next.js Integration

### App Router (Next.js 13+)

#### TypeScript Setup

**1. Install dependencies:**
```bash
npm install @triadui/icons react react-dom
```

**2. Update `app/layout.tsx`:**
```tsx
import '@triadui/icons/styles';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

**3. Use in any component `app/page.tsx`:**
```tsx
import { Icon } from '@triadui/icons';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex gap-4">
        <Icon name="home" fontSize="large" />
        <Icon name="search" variant="outlined" />
        <Icon name="favorite" fill={1} color="error" />
      </div>
    </main>
  );
}
```

#### JavaScript Setup

**1. Install dependencies:**
```bash
npm install @triadui/icons react react-dom
```

**2. Update `app/layout.js`:**
```jsx
import '@triadui/icons/styles';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

**3. Use in any component `app/page.js`:**
```jsx
import { Icon } from '@triadui/icons';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex gap-4">
        <Icon name="home" fontSize="large" />
        <Icon name="search" variant="outlined" />
        <Icon name="favorite" fill={1} color="error" />
      </div>
    </main>
  );
}
```

### Pages Router (Next.js 12 and below)

#### TypeScript Setup

**1. Update `pages/_app.tsx`:**
```tsx
import type { AppProps } from 'next/app';
import '@triadui/icons/styles';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

**2. Use in any page `pages/index.tsx`:**
```tsx
import { Icon } from '@triadui/icons';

export default function Home() {
  return (
    <div>
      <h1>
        <Icon name="home" fontSize="large" /> Welcome
      </h1>
    </div>
  );
}
```

#### JavaScript Setup

**1. Update `pages/_app.js`:**
```jsx
import '@triadui/icons/styles';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

**2. Use in any page `pages/index.js`:**
```jsx
import { Icon } from '@triadui/icons';

export default function Home() {
  return (
    <div>
      <h1>
        <Icon name="home" fontSize="large" /> Welcome
      </h1>
    </div>
  );
}
```

---

## ⚡ Vite Integration

### TypeScript Setup

**1. Install dependencies:**
```bash
npm install @triadui/icons react react-dom
```

**2. Update `src/main.tsx`:**
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@triadui/icons/styles';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**3. Use in `src/App.tsx`:**
```tsx
import { Icon } from '@triadui/icons';

function App() {
  return (
    <div className="App">
      <header>
        <Icon name="menu" fontSize="large" />
        <h1>Vite + React + Icons</h1>
      </header>
      <main>
        <Icon name="favorite" fill={1} color="error" />
        <Icon name="star" variant="outlined" />
      </main>
    </div>
  );
}

export default App;
```

### JavaScript Setup

**1. Install dependencies:**
```bash
npm install @triadui/icons react react-dom
```

**2. Update `src/main.jsx`:**
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@triadui/icons/styles';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**3. Use in `src/App.jsx`:**
```jsx
import { Icon } from '@triadui/icons';

function App() {
  return (
    <div className="App">
      <header>
        <Icon name="menu" fontSize="large" />
        <h1>Vite + React + Icons</h1>
      </header>
      <main>
        <Icon name="favorite" fill={1} color="error" />
        <Icon name="star" variant="outlined" />
      </main>
    </div>
  );
}

export default App;
```

---

## ⚛️ Create React App

### TypeScript Setup

**1. Install dependencies:**
```bash
npm install @triadui/icons
```

**2. Update `src/index.tsx`:**
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@triadui/icons/styles';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**3. Use in `src/App.tsx`:**
```tsx
import React from 'react';
import { Icon } from '@triadui/icons';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon name="react_icon" fontSize={48} />
        <h1>Create React App + Icons</h1>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Icon name="favorite" fill={1} color="error" />
          <Icon name="star" fill={1} color="warning" />
          <Icon name="thumb_up" fill={1} color="primary" />
        </div>
      </header>
    </div>
  );
}

export default App;
```

### JavaScript Setup

**1. Install dependencies:**
```bash
npm install @triadui/icons
```

**2. Update `src/index.js`:**
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@triadui/icons/styles';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**3. Use in `src/App.js`:**
```jsx
import React from 'react';
import { Icon } from '@triadui/icons';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon name="react_icon" fontSize={48} />
        <h1>Create React App + Icons</h1>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Icon name="favorite" fill={1} color="error" />
          <Icon name="star" fill={1} color="warning" />
          <Icon name="thumb_up" fill={1} color="primary" />
        </div>
      </header>
    </div>
  );
}

export default App;
```

---

## 🔧 Advanced Configuration

### Custom Font Loading

If you want to host the fonts yourself or use a custom CDN:

```jsx
// Don't import the default styles
// import '@triadui/icons/styles';

// Instead, add this to your CSS:
```

```css
/* your-styles.css */
@font-face {
  font-family: 'Material Symbols Rounded';
  font-style: normal;
  font-weight: 100 700;
  src: url('path/to/your/fonts/material-symbols-rounded.woff2') format('woff2');
}

@font-face {
  font-family: 'Material Symbols Outlined';
  font-style: normal;
  font-weight: 100 700;
  src: url('path/to/your/fonts/material-symbols-outlined.woff2') format('woff2');
}

@font-face {
  font-family: 'Material Symbols Sharp';
  font-style: normal;
  font-weight: 100 700;
  src: url('path/to/your/fonts/material-symbols-sharp.woff2') format('woff2');
}
```

### Webpack Configuration

For older Webpack setups, ensure CSS imports are handled:

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

### Server-Side Rendering (SSR)

The icons work with SSR out of the box. Just ensure the CSS is loaded:

```tsx
// Next.js automatic
// For custom SSR, include the CSS in your HTML head
<link rel="stylesheet" href="/node_modules/@triadui/icons/dist/style.css" />
```

---

## 🎨 Usage Examples

### Dynamic Icon Lists

```jsx
const icons = [
  { name: 'home', label: 'Home' },
  { name: 'search', label: 'Search' },
  { name: 'favorite', label: 'Favorites' },
  { name: 'settings', label: 'Settings' },
];

function IconMenu() {
  return (
    <nav>
      {icons.map(({ name, label }) => (
        <button key={name}>
          <Icon name={name} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
```

### Interactive Icons

```jsx
import { useState } from 'react';
import { Icon } from '@triadui/icons';

function FavoriteButton() {
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

### Icon Button Component

```jsx
function IconButton({ icon, label, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100"
    >
      <Icon name={icon} />
      <span>{label}</span>
    </button>
  );
}

// Usage
<IconButton icon="save" label="Save" onClick={handleSave} />
```

---

## 🐛 Troubleshooting

### Icons not showing

1. Ensure you've imported the styles:
   ```jsx
   import '@triadui/icons/styles';
   ```

2. Check that the font files are being loaded (check Network tab in DevTools)

3. Verify the icon name is correct (check [Google Fonts](https://fonts.google.com/icons))

### TypeScript errors

1. Ensure `@types/react` is installed
2. Check your `tsconfig.json` includes `"jsx": "react-jsx"`

### Next.js build errors

1. For App Router, import styles in `layout.tsx/js`
2. For Pages Router, import styles in `_app.tsx/js`
3. Ensure you're using Next.js 12.0.0 or higher

### Module not found

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Additional Resources

- [Material Symbols Browser](https://fonts.google.com/icons)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/)

---

## 💡 Best Practices

1. **Import styles once** - Only import `@triadui/icons/styles` in your root component
2. **Use semantic names** - Choose icon names that match their purpose
3. **Consider accessibility** - Icons are decorative by default (aria-hidden="true")
4. **Optimize builds** - The package is tree-shakeable, so only imported icons affect bundle size
5. **Cache fonts** - Configure your CDN/server to cache font files

---

Need help? [Open an issue](https://github.com/triadui/triadui-icons/issues)
