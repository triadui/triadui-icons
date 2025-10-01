# Project Structure

## 📁 Repository Organization

This repository follows modern React library best practices with proper separation of concerns:

```
mui-iii/
├── 📁 .github/              # GitHub workflows and templates
│   └── copilot-instructions.md
├── 📁 src/                  # Source code
│   ├── 📁 components/       # React components
│   │   ├── 📁 Icon/         # Core Icon component
│   │   │   ├── Icon.tsx     # Main Icon component
│   │   │   └── index.ts     # Exports
│   │   ├── 📁 IconBrowser/  # Icon browser components
│   │   │   ├── MaterialIconBrowser.tsx  # Main browser
│   │   │   ├── CategoryItem.tsx         # Category sidebar item
│   │   │   ├── IconCard.tsx            # Individual icon card
│   │   │   ├── ControlPanel.tsx        # Customization controls
│   │   │   └── index.ts                # Exports
│   │   ├── 📁 UI/           # Reusable UI components
│   │   │   ├── Button.tsx   # Button component
│   │   │   ├── Input.tsx    # Input component
│   │   │   ├── Card.tsx     # Card component
│   │   │   └── index.ts     # Exports
│   │   └── index.ts         # All components exports
│   ├── 📁 styles/           # Styling
│   │   └── m3-global.css    # Global styles with Tailwind
│   ├── 📁 utils/            # Utility functions
│   │   └── cn.ts            # Class name utility
│   ├── icons.ts             # Icon data and search
│   ├── index.ts             # Main library exports
│   ├── App.tsx              # Demo application
│   └── main.tsx             # Entry point
├── 📁 fonts/                # Local font files
│   └── material-symbols.css
├── 📁 demo/                 # Demo and examples
├── 📁 scripts/              # Build and utility scripts
├── 📁 public/               # Static assets
├── dist/                    # Built library (generated)
├── package.json             # Package configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.ts           # Vite build configuration
├── README.md                # Documentation
├── LICENSE                  # MIT License
└── CONTRIBUTING.md          # Contribution guidelines
```

## 🏗️ Component Architecture

### Core Components

#### `Icon` Component
- **Location**: `src/components/Icon/Icon.tsx`
- **Purpose**: Render Material Design 3 icons with variable font features
- **Features**: TypeScript support, Tailwind integration, accessibility

#### `MaterialIconBrowser` Component
- **Location**: `src/components/IconBrowser/MaterialIconBrowser.tsx`
- **Purpose**: Interactive icon browser with search and customization
- **Sub-components**:
  - `CategoryItem`: Sidebar category navigation
  - `IconCard`: Individual icon display with copy functionality
  - `ControlPanel`: Customization controls for style, size, color

#### UI Components
- **Location**: `src/components/UI/`
- **Purpose**: Reusable Material 3 styled components
- **Components**: `Button`, `Input`, `Card` with consistent styling

### Design Patterns

1. **Component Composition**: Small, focused components that compose together
2. **Consistent Props API**: Similar prop patterns across components  
3. **TypeScript First**: Full type safety throughout
4. **Tailwind Integration**: Material 3 design system via Tailwind classes
5. **Accessibility**: ARIA labels, keyboard navigation, semantic HTML

## 📦 Build System

### Development
- **Vite**: Fast development server and HMR
- **TypeScript**: Type checking and intellisense
- **Tailwind CSS**: Utility-first styling with M3 tokens

### Production Build
- **Library Mode**: Optimized for npm distribution
- **Tree Shaking**: Individual component imports
- **Type Definitions**: Generated .d.ts files
- **Font Assets**: Bundled local fonts

### Scripts
- `npm run dev`: Development server
- `npm run build:lib`: Build library for distribution
- `npm run lint`: Code linting
- `npm run download-fonts`: Update Material Symbols fonts

## 🎯 Usage Patterns

### For Library Users

```tsx
// Core icon usage
import { Icon } from '@triadui/icons';

// Icon browser component  
import { MaterialIconBrowser } from '@triadui/icons';

// Individual UI components (advanced)
import { Button, Card } from '@triadui/icons';
```

### For Contributors

```tsx
// Working on Icon component
import { Icon } from './components/Icon';

// Working on Browser components  
import { CategoryItem } from './components/IconBrowser';

// Working on UI components
import { Button } from './components/UI';
```

## 🔧 Configuration Files

### TypeScript Configuration
- `tsconfig.json`: Base TypeScript config
- `tsconfig.build.json`: Build-specific config
- `tsconfig.app.json`: App-specific config

### Build Configuration  
- `vite.config.ts`: Vite bundler configuration
- `tailwind.config.js`: Tailwind CSS with M3 design tokens
- `postcss.config.js`: PostCSS processing

### Package Configuration
- `package.json`: Dependencies, scripts, and metadata
- `eslint.config.js`: Code linting rules

## 🚀 Publishing

### Pre-publish Checklist
1. ✅ All TypeScript types are exported
2. ✅ README is comprehensive and up-to-date
3. ✅ Version number is bumped appropriately
4. ✅ Build passes without errors
5. ✅ All examples work correctly

### Publishing Process
```bash
# Build the library
npm run build:lib

# Publish to npm (will run prepublishOnly script)
npm publish --access public
```

### Distribution Files
The published package includes:
- `dist/`: Compiled JavaScript and TypeScript definitions
- `fonts/`: Material Symbols font files  
- `README.md`: Documentation
- `LICENSE`: MIT license

## 🌟 Best Practices

### Code Organization
- One component per file
- Consistent file naming (PascalCase for components)
- Barrel exports in index.ts files
- Utility functions in dedicated utils folder

### Styling
- Tailwind CSS classes for consistent styling
- Material 3 design tokens
- Responsive design considerations
- Dark/light mode support through CSS variables

### TypeScript
- Strict type checking enabled
- Proper prop interface definitions
- Generic types where appropriate
- No any types allowed

### Performance
- Tree-shakable exports
- Lazy loading where beneficial
- Optimized bundle size
- Font loading optimization

This structure ensures maintainability, scalability, and a great developer experience for both contributors and users of the library.