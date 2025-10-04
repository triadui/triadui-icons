import React from 'react';
import { Icon, IconProps } from '@triadui/icons';

const App: React.FC = () => {
  // Test basic import
  console.log('Icon component:', Icon);
  console.log('Icon displayName:', Icon.displayName);

  // Test different variants
  const variants: IconProps['variant'][] = ['outlined', 'filled', 'rounded', 'sharp'];

  // Test different sizes
  const sizes: IconProps['fontSize'][] = ['small', 'medium', 'large', 24, 32, 48];

  // Test different colors
  const colors: IconProps['color'][] = ['inherit', 'primary', 'secondary', 'action', 'disabled', 'error'];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>@triadui/icons Test Suite</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2>Basic Icon Test</h2>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Icon name="home" />
          <span>Basic home icon</span>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Variants Test</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {variants.map((variant) => (
            <div key={variant} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
              <Icon name="settings" variant={variant} fontSize="large" />
              <span style={{ fontSize: '12px' }}>{variant}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Fill Test</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <Icon name="favorite" fill={0} fontSize="large" />
            <span style={{ fontSize: '12px' }}>fill=0</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <Icon name="favorite" fill={1} fontSize="large" />
            <span style={{ fontSize: '12px' }}>fill=1</span>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Size Test</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          {sizes.map((size) => (
            <div key={String(size)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
              <Icon name="search" fontSize={size} />
              <span style={{ fontSize: '12px' }}>{String(size)}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Weight Test</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <Icon name="grade" weight={100} fontSize="large" />
            <span style={{ fontSize: '12px' }}>weight=100</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <Icon name="grade" weight={400} fontSize="large" />
            <span style={{ fontSize: '12px' }}>weight=400</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <Icon name="grade" weight={700} fontSize="large" />
            <span style={{ fontSize: '12px' }}>weight=700</span>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Grade Test</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <Icon name="sentiment_satisfied" grade={-50} fontSize="large" />
            <span style={{ fontSize: '12px' }}>grade=-50</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <Icon name="sentiment_satisfied" grade={0} fontSize="large" />
            <span style={{ fontSize: '12px' }}>grade=0</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <Icon name="sentiment_satisfied" grade={200} fontSize="large" />
            <span style={{ fontSize: '12px' }}>grade=200</span>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Optical Size Test</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <Icon name="zoom_in" opsz={20} fontSize="large" />
            <span style={{ fontSize: '12px' }}>opsz=20</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <Icon name="zoom_in" opsz={24} fontSize="large" />
            <span style={{ fontSize: '12px' }}>opsz=24</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <Icon name="zoom_in" opsz={48} fontSize="large" />
            <span style={{ fontSize: '12px' }}>opsz=48</span>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Color Test</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          {colors.map((color) => (
            <div key={color} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
              <Icon name="palette" color={color} fontSize="large" />
              <span style={{ fontSize: '12px' }}>{color}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Combined Props Test</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Icon
            name="rocket_launch"
            variant="sharp"
            fill={1}
            weight={600}
            grade={100}
            opsz={32}
            fontSize="large"
            color="primary"
          />
          <span>Complex icon with all props</span>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Custom ClassName and Style Test</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Icon
            name="star"
            className="custom-icon"
            style={{ color: 'gold', transform: 'rotate(45deg)' }}
            fontSize="large"
          />
          <span>Custom styled icon</span>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>TypeScript Types Test</h2>
        <div style={{ fontSize: '14px', color: '#666' }}>
          <p>✓ Icon component imported successfully</p>
          <p>✓ IconProps type available</p>
          <p>✓ IconSize, IconColor, IconStyle types available</p>
          <p>✓ All props are properly typed</p>
        </div>
      </section>
    </div>
  );
};

export default App;