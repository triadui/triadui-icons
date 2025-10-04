# @triadui/icons - Examples

This folder contains example implementations for different frameworks and scenarios.

## 📁 Files

### 1. `javascript-examples.jsx`
Complete JavaScript/JSX examples demonstrating:
- Basic icon usage
- Size variations
- Color options
- Variable font features
- Interactive components
- Dynamic icon lists
- Custom styling

**Usage:**
```jsx
import { 
  BasicIconExamples,
  SizeExamples,
  ColorExamples,
  InteractiveIconButton,
  IconList
} from './examples/javascript-examples.jsx';
```

### 2. `nextjs-app-router.jsx`
Next.js 13+ App Router example with:
- Hero section with icons
- Feature cards
- Action buttons with icons
- Modern layout patterns

**Usage:**
Copy this to your Next.js project as `app/page.js`

### 3. `nextjs-pages-router.jsx`
Next.js 12 Pages Router example with:
- Navigation with icons
- Stats cards
- Content grid
- Dashboard layout

**Usage:**
Copy this to your Next.js project as `pages/index.js`

## 🚀 Quick Start

### Option 1: Copy Examples

Copy any example file to your project and import:

```jsx
import { Icon } from '@triadui/icons';
import '@triadui/icons/styles';

// Use the examples as reference
```

### Option 2: Run in Sandbox

Create a new Next.js app and test:

```bash
npx create-next-app@latest test-app --js
cd test-app
npm install @triadui/icons

# Copy example to app/page.js
cp node_modules/@triadui/icons/examples/nextjs-app-router.jsx app/page.js

# Update app/layout.js to import styles
# Add: import '@triadui/icons/styles';

npm run dev
```

## 📚 More Resources

- [Quick Start Guide](../QUICKSTART.md)
- [Integration Guide](../INTEGRATION.md)
- [Main README](../README.md)
- [Changelog](../CHANGELOG.md)

## 💡 Tips

1. **Always import styles once** in your app's entry point:
   ```jsx
   import '@triadui/icons/styles';
   ```

2. **Use semantic icon names** for better readability:
   ```jsx
   <Icon name="home" />        // ✓ Good
   <Icon name="navigate_next" /> // ✓ Good
   ```

3. **Combine props for powerful effects**:
   ```jsx
   <Icon 
     name="favorite" 
     fill={1} 
     weight={700} 
     grade={200}
     color="error"
   />
   ```

4. **Make icons interactive**:
   ```jsx
   const [active, setActive] = useState(false);
   
   <button onClick={() => setActive(!active)}>
     <Icon name="star" fill={active ? 1 : 0} />
   </button>
   ```

## 🎨 Icon Browser

Find all available icons at:
[Google Fonts - Material Symbols](https://fonts.google.com/icons)

## 🤝 Contributing

Have a great example to share? Open a PR!

---

Happy coding! 🎉
