// Example: Basic Icon Usage (JavaScript/JSX)
// This file demonstrates how to use @triadui/icons in a plain JavaScript React project

import React from 'react';
import { Icon } from '@triadui/icons';

/**
 * Basic Icon Examples
 */
export function BasicIconExamples() {
  return (
    <div>
      <h2>Basic Icons</h2>
      
      {/* Simple icon with default settings */}
      <Icon name="home" />
      
      {/* Icon with different variants */}
      <Icon name="favorite" variant="outlined" />
      <Icon name="favorite" variant="filled" />
      <Icon name="favorite" variant="rounded" />
      <Icon name="favorite" variant="sharp" />
    </div>
  );
}

/**
 * Size Examples
 */
export function SizeExamples() {
  return (
    <div>
      <h2>Icon Sizes</h2>
      
      {/* Using size presets */}
      <Icon name="star" fontSize="small" />
      <Icon name="star" fontSize="medium" />
      <Icon name="star" fontSize="large" />
      <Icon name="star" fontSize="xlarge" />
      
      {/* Using custom pixel size */}
      <Icon name="star" fontSize={28} />
      <Icon name="star" fontSize={36} />
      <Icon name="star" fontSize={48} />
    </div>
  );
}

/**
 * Color Examples
 */
export function ColorExamples() {
  return (
    <div>
      <h2>Icon Colors</h2>
      
      {/* Using color presets */}
      <Icon name="favorite" color="primary" fill={1} />
      <Icon name="favorite" color="secondary" fill={1} />
      <Icon name="favorite" color="error" fill={1} />
      <Icon name="favorite" color="warning" fill={1} />
      <Icon name="favorite" color="info" fill={1} />
      <Icon name="favorite" color="success" fill={1} />
      
      {/* Custom color using style prop */}
      <Icon name="favorite" style={{ color: '#ff0000' }} fill={1} />
      <Icon name="favorite" style={{ color: '#00ff00' }} fill={1} />
      <Icon name="favorite" style={{ color: '#0000ff' }} fill={1} />
    </div>
  );
}

/**
 * Variable Font Features
 */
export function VariableFontExamples() {
  return (
    <div>
      <h2>Variable Font Features</h2>
      
      {/* Fill variation */}
      <Icon name="home" fill={0} /> {/* Outlined */}
      <Icon name="home" fill={1} /> {/* Filled */}
      
      {/* Weight variation */}
      <Icon name="settings" weight={100} />
      <Icon name="settings" weight={400} />
      <Icon name="settings" weight={700} />
      
      {/* Grade variation */}
      <Icon name="star" grade={-50} />
      <Icon name="star" grade={0} />
      <Icon name="star" grade={200} />
      
      {/* Optical size variation */}
      <Icon name="search" opsz={20} />
      <Icon name="search" opsz={24} />
      <Icon name="search" opsz={48} />
      
      {/* Combined variations */}
      <Icon 
        name="favorite" 
        fill={1} 
        weight={700} 
        grade={200} 
        opsz={48}
      />
    </div>
  );
}

/**
 * Interactive Icon Button
 */
export function InteractiveIconButton() {
  const [liked, setLiked] = React.useState(false);
  
  return (
    <button 
      onClick={() => setLiked(!liked)}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
      }}
    >
      <Icon 
        name="favorite" 
        fill={liked ? 1 : 0}
        color={liked ? 'error' : 'inherit'}
        fontSize="large"
      />
    </button>
  );
}

/**
 * Icon List with Dynamic Data
 */
export function IconList() {
  const menuItems = [
    { id: 1, name: 'home', label: 'Home' },
    { id: 2, name: 'search', label: 'Search' },
    { id: 3, name: 'favorite', label: 'Favorites' },
    { id: 4, name: 'settings', label: 'Settings' },
    { id: 5, name: 'account_circle', label: 'Profile' },
  ];
  
  return (
    <nav>
      <h2>Navigation Menu</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {menuItems.map((item) => (
          <li key={item.id} style={{ marginBottom: '12px' }}>
            <a 
              href={`#${item.name}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Icon name={item.name} />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Icon with Custom Styling
 */
export function CustomStyledIcon() {
  return (
    <div>
      <h2>Custom Styled Icons</h2>
      
      {/* Using className */}
      <Icon 
        name="star" 
        className="custom-icon-class"
        fill={1}
      />
      
      {/* Using inline styles */}
      <Icon 
        name="favorite" 
        style={{
          color: '#e91e63',
          fontSize: '48px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
        }}
        fill={1}
      />
      
      {/* Combining className and style */}
      <Icon 
        name="verified" 
        className="icon-badge"
        style={{ color: '#4caf50' }}
        fill={1}
      />
    </div>
  );
}

/**
 * Complete App Example
 */
export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1>
          <Icon name="widgets" fontSize="large" />
          {' '}
          @triadui/icons Examples
        </h1>
        <p>JavaScript/JSX usage demonstrations</p>
      </header>
      
      <main>
        <section style={{ marginBottom: '40px' }}>
          <BasicIconExamples />
        </section>
        
        <section style={{ marginBottom: '40px' }}>
          <SizeExamples />
        </section>
        
        <section style={{ marginBottom: '40px' }}>
          <ColorExamples />
        </section>
        
        <section style={{ marginBottom: '40px' }}>
          <VariableFontExamples />
        </section>
        
        <section style={{ marginBottom: '40px' }}>
          <h2>Interactive Examples</h2>
          <InteractiveIconButton />
        </section>
        
        <section style={{ marginBottom: '40px' }}>
          <IconList />
        </section>
        
        <section style={{ marginBottom: '40px' }}>
          <CustomStyledIcon />
        </section>
      </main>
    </div>
  );
}

// If using this in a real app, don't forget to import styles:
// import '@triadui/icons/styles';
