import { useState } from 'react';
import { Icon } from '@triadui/icons';
import { IconBrowser } from './components/IconBrowser';

type TabType = 'home' | 'docs';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'var(--m3-sys-color-surface-container-low, #F7F2FA)' 
    }}>
      {/* Header with Navigation Tabs */}
      <header style={{
        backgroundColor: 'var(--m3-sys-color-surface, #FFFBFE)',
        borderBottom: '1px solid var(--m3-sys-color-outline-variant, #CAC4D0)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 24px' 
        }}>
          {/* Brand/Logo */}
          <div style={{
            padding: '24px 0 16px 0',
            textAlign: 'center'
          }}>
            <h1 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: 'var(--m3-sys-color-primary, #6750A4)', 
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}>
              <Icon name="auto_awesome" fontSize={32} variant="rounded" />
              TriadUI Icons
            </h1>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            paddingBottom: '24px'
          }}>
            <button
              onClick={() => window.open('https://github.com/triadui/triadui-icons', '_blank')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                backgroundColor: 'transparent',
                color: '#8450A4',
                border: '1px solid #8450A4',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8450A4';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#8450A4';
              }}
            >
              <Icon name="code" fontSize="small" />
              GitHub
            </button>
            <button
              onClick={() => window.open('https://www.npmjs.com/package/@triadui/icons', '_blank')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                backgroundColor: 'transparent',
                color: '#8450A4',
                border: '1px solid #8450A4',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8450A4';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#8450A4';
              }}
            >
              <Icon name="description" fontSize="small" />
              NPM
            </button>
            <button
              onClick={() => setActiveTab('docs')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                backgroundColor: activeTab === 'docs' ? '#8450A4' : 'transparent',
                color: activeTab === 'docs' ? 'white' : '#8450A4',
                border: '1px solid #8450A4',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'docs') {
                  e.currentTarget.style.backgroundColor = '#8450A4';
                  e.currentTarget.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'docs') {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#8450A4';
                }
              }}
            >
              <Icon name="description" fontSize="small" />
              Docs
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main>
        {activeTab === 'home' && <IconBrowser />}
        
        {activeTab === 'docs' && (
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '48px 24px',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: 'var(--m3-sys-color-on-surface, #1C1B1F)', 
              marginBottom: '16px' 
            }}>
              Documentation
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: 'var(--m3-sys-color-on-surface-variant, #49454F)' 
            }}>
              Documentation coming soon...
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;