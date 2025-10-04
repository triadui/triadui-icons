import React from 'react';
import { useState } from 'react';
import { Icon } from '@triadui/icons';

interface GetStartedProps {
  onGetStarted: () => void;
}

export const GetStarted: React.FC<GetStartedProps> = ({ onGetStarted }) => {
  const [activeSection, setActiveSection] = useState<'home' | 'search' | 'about'>('home');
  const [searchQuery, setSearchQuery] = useState('');

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: '80px 24px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          marginBottom: '16px',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          TriadUI Icons
        </h1>
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '32px',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto 32px'
        }}>
          The ultimate Material Design 3 icon library with 1738 Material Symbols icons for React applications
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={onGetStarted}
            style={{
              backgroundColor: 'white',
              color: '#667eea',
              padding: '16px 32px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '1.125rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            }}
          >
            Get Started
          </button>
          <button
            onClick={() => setActiveSection('search')}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              border: '2px solid white',
              fontSize: '1.125rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#667eea';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'white';
            }}
          >
            Browse Icons
          </button>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 24px', backgroundColor: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '16px',
            color: '#1E293B'
          }}>
            Why Choose @triadui/icons?
          </h2>
          <p style={{
            fontSize: '1.125rem',
            textAlign: 'center',
            color: '#64748B',
            marginBottom: '48px'
          }}>
            Built for modern React applications with Material Design 3
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#667eea',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <Icon name="palette" fontSize={32} style={{ color: 'white' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px', color: '#1E293B' }}>
                Material Design 3
              </h3>
              <p style={{ color: '#64748B', lineHeight: '1.6' }}>
                Latest Material Symbols with M3 design tokens and variable font support
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#667eea',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <Icon name="code" fontSize={32} style={{ color: 'white' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px', color: '#1E293B' }}>
                TypeScript Ready
              </h3>
              <p style={{ color: '#64748B', lineHeight: '1.6' }}>
                Complete type definitions and IntelliSense support for better development experience
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#667eea',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <Icon name="search" fontSize={32} style={{ color: 'white' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px', color: '#1E293B' }}>
                1738 Icons
              </h3>
              <p style={{ color: '#64748B', lineHeight: '1.6' }}>
                Comprehensive collection of Material Symbols with powerful search and filtering
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UI Examples */}
      <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '16px',
            color: '#1E293B'
          }}>
                      Beautiful Material Design 3 icons for React applications. Part of the TriadUI component ecosystem.
          </h2>
          <p style={{
            fontSize: '1.125rem',
            textAlign: 'center',
            color: '#64748B',
            marginBottom: '48px'
          }}>
            See how @triadui/icons enhances your React components
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px'
          }}>
            {/* Example 1: Navigation */}
            <div style={{
              backgroundColor: '#F8FAFC',
              padding: '32px',
              borderRadius: '16px',
              border: '1px solid #E2E8F0'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px', color: '#1E293B' }}>
                Navigation
              </h3>
              <div style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'center',
                padding: '16px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}>
                <Icon name="home" color="primary" />
                <span style={{ fontWeight: '500', color: '#1E293B' }}>Home</span>
              </div>
              <div style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'center',
                padding: '16px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                marginTop: '8px'
              }}>
                <Icon name="search" />
                <span style={{ color: '#64748B' }}>Search</span>
              </div>
            </div>

            {/* Example 2: Actions */}
            <div style={{
              backgroundColor: '#F8FAFC',
              padding: '32px',
              borderRadius: '16px',
              border: '1px solid #E2E8F0'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px', color: '#1E293B' }}>
                Actions
              </h3>
              <div style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                padding: '24px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}>
                <button style={{
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: '#667eea',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Icon name="add" fontSize={20} />
                  Add
                </button>
                <button style={{
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                  backgroundColor: 'white',
                  color: '#64748B',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Icon name="edit" fontSize={20} />
                  Edit
                </button>
              </div>
            </div>

            {/* Example 3: Status */}
            <div style={{
              backgroundColor: '#F8FAFC',
              padding: '32px',
              borderRadius: '16px',
              border: '1px solid #E2E8F0'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px', color: '#1E293B' }}>
                Status Indicators
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                padding: '24px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Icon name="check_circle" color="primary" />
                  <span style={{ color: '#1E293B', fontWeight: '500' }}>Task completed</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Icon name="warning" color="error" />
                  <span style={{ color: '#64748B' }}>Attention needed</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Icon name="error" color="error" />
                  <span style={{ color: '#DC2626' }}>Error occurred</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 24px',
        backgroundColor: '#1E293B',
        color: 'white',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '16px'
        }}>
          Ready to Get Started?
        </h2>
        <p style={{
          fontSize: '1.125rem',
          marginBottom: '32px',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto 32px'
        }}>
          Join thousands of developers building beautiful React applications with Material Design 3 icons
        </p>
        <button
          onClick={onGetStarted}
          style={{
            backgroundColor: '#667eea',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '12px',
            border: 'none',
            fontSize: '1.125rem',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
          }}
        >
          Explore All Icons
        </button>
      </section>
    </>
  );

  const renderSearch = () => (
    <div style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '16px',
        color: '#1E293B'
      }}>
        Search Icons
      </h2>
      <p style={{
        fontSize: '1.125rem',
        textAlign: 'center',
        color: '#64748B',
        marginBottom: '32px'
      }}>
        Find the perfect icon for your project
      </p>

      <div style={{
        position: 'relative',
        marginBottom: '32px'
      }}>
        <input
          type="text"
          placeholder="Search for icons..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '16px 48px 16px 16px',
            fontSize: '1rem',
            border: '2px solid #E2E8F0',
            borderRadius: '12px',
            outline: 'none',
            transition: 'border-color 0.3s ease'
          }}
          onFocus={(e) => e.target.style.borderColor = '#667eea'}
          onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
        />
        <Icon
          name="search"
          style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#64748B'
          }}
        />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '16px'
      }}>
        {/* Mock search results - in real app, this would filter actual icons */}
        {['home', 'search', 'settings', 'favorite', 'star', 'menu', 'close', 'arrow_back', 'arrow_forward'].map(iconName => (
          <div
            key={iconName}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '16px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Icon name={iconName} fontSize={32} />
            <span style={{
              fontSize: '0.75rem',
              color: '#64748B',
              marginTop: '8px',
              textAlign: 'center'
            }}>
              {iconName}
            </span>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <button
          onClick={onGetStarted}
          style={{
            backgroundColor: '#667eea',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer'
          }}
        >
          View All Icons
        </button>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '16px',
        color: '#1E293B'
      }}>
        About @triadui/icons
      </h2>

      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px', color: '#1E293B' }}>
          What is @triadui/icons?
        </h3>
        <p style={{ color: '#64748B', lineHeight: '1.6', marginBottom: '24px' }}>
          @triadui/icons is a comprehensive React component library that provides easy access to Google's Material Symbols icons.
          Built with Material Design 3 principles, it offers 1738 carefully crafted icons that work seamlessly with modern React applications.
        </p>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px', color: '#1E293B' }}>
          Key Features
        </h3>
        <ul style={{ color: '#64748B', lineHeight: '1.8' }}>
          <li>• <strong>Material Design 3</strong>: Latest design system with variable font support</li>
          <li>• <strong>TypeScript</strong>: Full type safety and IntelliSense support</li>
          <li>• <strong>Tree Shaking</strong>: Optimized bundle size with ES modules</li>
          <li>• <strong>Customizable</strong>: Control fill, weight, grade, and optical size</li>
          <li>• <strong>Accessible</strong>: Built with accessibility best practices</li>
          <li>• <strong>Performant</strong>: Optimized for production use</li>
        </ul>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px', color: '#1E293B' }}>
          Installation
        </h3>
        <div style={{
          backgroundColor: '#F8FAFC',
          padding: '16px',
          borderRadius: '8px',
          fontFamily: 'monospace',
          border: '1px solid #E2E8F0'
        }}>
          npm install @triadui/icons
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={onGetStarted}
          style={{
            backgroundColor: '#667eea',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer'
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        color: '#1E293B',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Navigation */}
      <nav style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #E2E8F0',
        padding: '16px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#667eea',
            cursor: 'pointer'
          }}
          onClick={() => setActiveSection('home')}>
            @triadui/icons
          </div>

          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <button
              onClick={() => setActiveSection('home')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1rem',
                fontWeight: activeSection === 'home' ? '600' : '500',
                color: activeSection === 'home' ? '#667eea' : '#64748B',
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: '6px',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#F8FAFC';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Home
            </button>
            <button
              onClick={() => setActiveSection('search')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1rem',
                fontWeight: activeSection === 'search' ? '600' : '500',
                color: activeSection === 'search' ? '#667eea' : '#64748B',
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: '6px',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#F8FAFC';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Search
            </button>
            <button
              onClick={() => setActiveSection('about')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1rem',
                fontWeight: activeSection === 'about' ? '600' : '500',
                color: activeSection === 'about' ? '#667eea' : '#64748B',
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: '6px',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#F8FAFC';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              About
            </button>
            <button
              onClick={onGetStarted}
              style={{
                backgroundColor: '#667eea',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5a67d8'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#667eea'}
            >
              Browse Icons
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {activeSection === 'home' && renderHome()}
        {activeSection === 'search' && renderSearch()}
        {activeSection === 'about' && renderAbout()}
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1E293B',
        color: 'white',
        padding: '32px 24px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ marginBottom: '16px', fontSize: '1.125rem', fontWeight: 'bold' }}>
            @triadui/icons
          </p>
          <p style={{ color: '#94A3B8', marginBottom: '16px' }}>
            Built with ❤️ for the React and Material Design community
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <a
              href="#"
              style={{ color: '#94A3B8', textDecoration: 'none' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = '#94A3B8'}
            >
              GitHub
            </a>
            <a
              href="#"
              style={{ color: '#94A3B8', textDecoration: 'none' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = '#94A3B8'}
            >
              Documentation
            </a>
            <a
              href="#"
              style={{ color: '#94A3B8', textDecoration: 'none' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = '#94A3B8'}
            >
              NPM
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};