# Material Design 3 Icon Browser

A comprehensive icon browser component that replicates the look and feel of the official [Material Design 3 website](https://m3.material.io/styles/icons/overview). This component provides an intuitive interface for browsing, searching, and copying Material Symbols icons.

## Features

### 🎨 Material Design 3 Compliant
- **Authentic Colors**: Uses official Material Design 3 color tokens
- **M3 Typography**: Roboto font family with correct weight and sizing
- **Surface & Elevation**: Proper Material 3 surface colors and elevation shadows
- **Responsive Design**: Adapts beautifully to different screen sizes

### 🔍 Advanced Icon Browser
- **Sidebar Navigation**: Collapsible sidebar with icon categories
- **Smart Search**: Real-time search across all icon names
- **Style Variants**: Support for Outlined, Rounded, and Sharp icon styles
- **Customizable Appearance**: Adjustable size and color options
- **One-Click Copy**: Copy icon code snippets to clipboard

### 🎯 Developer Experience
- **TypeScript Support**: Fully typed with comprehensive interfaces
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance**: Optimized with React hooks and memoization
- **Dark Mode**: Automatic support for dark mode via CSS media queries

## Usage

```tsx
import { M3IconBrowser } from './components/M3IconBrowser';

function App() {
  return <M3IconBrowser />;
}
```

## Component Structure

### Sidebar Navigation
- **Categories**: All Material Design icon categories
- **Icon Counts**: Real-time count of icons per category
- **Collapsible**: Expandable/collapsible sidebar for better space utilization

### Main Content Area
- **Breadcrumb**: Shows current navigation path
- **Search Bar**: Global search with clear functionality
- **Filter Controls**: Style, size, and color selection
- **Icons Grid**: Responsive grid layout of icons
- **Copy Functionality**: Click any icon to copy its React code

### Icon Styles Supported
1. **Outlined** (`material-symbols-outlined`)
2. **Rounded** (`material-symbols-rounded`)
3. **Sharp** (`material-symbols-sharp`)

## Material Design 3 Color System

The component uses authentic M3 color tokens:

```css
/* Primary Colors */
--m3-primary: #6750a4;
--m3-on-primary: #ffffff;
--m3-primary-container: #eaddff;
--m3-on-primary-container: #21005d;

/* Secondary Colors */
--m3-secondary: #625b71;
--m3-on-secondary: #ffffff;
--m3-secondary-container: #e8def8;
--m3-on-secondary-container: #1d192b;

/* Surface Colors */
--m3-surface: #fef7ff;
--m3-on-surface: #1c1b1f;
--m3-surface-variant: #e7e0ec;
--m3-on-surface-variant: #49454f;
```

## Category Organization

Icons are organized into the following categories:
- **All icons** - Complete collection
- **Action** - Interactive elements (bolt, settings)
- **Alert** - Warning and notification icons
- **Audio & Video** - Media controls and playback
- **Communication** - Chat, email, phone
- **Content** - Text formatting and editing
- **Device** - Hardware and system icons
- **Editor** - Text editing tools
- **File** - Document and folder management
- **Hardware** - Computer and device components
- **Home** - Smart home and household
- **Image** - Photo and graphics tools
- **Maps** - Navigation and location
- **Navigation** - UI navigation elements
- **Notification** - Alerts and badges
- **Places** - Locations and venues
- **Social** - Social media and sharing
- **Toggle** - Switch and checkbox controls

## Keyboard Navigation

- **Tab/Shift+Tab**: Navigate through interactive elements
- **Enter/Space**: Activate buttons and copy icons
- **Escape**: Close expanded elements

## Responsive Breakpoints

- **Desktop**: Full sidebar and grid layout
- **Tablet** (≤768px): Horizontal scrollable sidebar
- **Mobile** (≤480px): Compact layout with smaller icons

## Accessibility Features

- **Screen Reader Support**: Comprehensive ARIA labels
- **High Contrast Mode**: Enhanced borders and focus indicators
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant color combinations

## Browser Compatibility

- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

## Performance Optimizations

- **React.memo**: Prevents unnecessary re-renders
- **useMemo**: Cached category calculations
- **useCallback**: Stable function references
- **Virtual Scrolling**: Efficient handling of large icon sets (future enhancement)

## Customization

The component can be customized through CSS custom properties:

```css
.m3-icon-browser {
  --m3-primary: #your-primary-color;
  --m3-surface: #your-surface-color;
  /* ... other custom properties */
}
```

## Integration with Material Design Guidelines

This component follows the official [Material Design 3 guidelines](https://m3.material.io/styles/icons/overview) for:
- Icon sizing and spacing
- Color usage and contrast
- Typography hierarchy
- Interaction patterns
- Layout principles

## Future Enhancements

- [ ] Virtual scrolling for better performance
- [ ] Icon favoriting system
- [ ] Export functionality (SVG, PNG)
- [ ] Advanced filtering options
- [ ] Icon usage statistics
- [ ] Integration with design tools (Figma plugin)

---

Built with ❤️ following Material Design 3 principles