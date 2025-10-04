import React, { useState } from 'react';
import { Icon } from '@triadui/icons';
import type { IconName } from '../../../icons';
import type { IconStyle, IconFill, IconWeight, IconGrade, IconOpticalSize } from '@triadui/icons';
import { generateIconCode, copyToClipboard } from '../utils';

interface IconDetailsProps {
  iconName: IconName | null;
  onClose: () => void;
  className?: string;
}

type CodeFormat = 'jsx' | 'html' | 'css';

/**
 * Detailed view of a selected icon with code examples and customization options
 * Provides code generation and copying functionality with all Material Symbols properties
 */
export const IconDetails: React.FC<IconDetailsProps> = ({
  iconName,
  onClose,
  className,
}) => {
  const [codeFormat, setCodeFormat] = useState<CodeFormat>('jsx');
  const [iconVariant, setIconVariant] = useState<IconStyle>('rounded');
  const [iconSize, setIconSize] = useState<number>(48);
  const [iconFill, setIconFill] = useState<IconFill>(0);
  const [iconWeight, setIconWeight] = useState<IconWeight>(400);
  const [iconGrade, setIconGrade] = useState<IconGrade>(0);
  const [iconOpticalSize, setIconOpticalSize] = useState<IconOpticalSize>(48);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!iconName) {
    return null;
  }

  const handleCopyCode = async (format: CodeFormat) => {
    const code = generateIconCode({
      iconName,
      variant: iconVariant,
      fill: iconFill,
      weight: iconWeight,
      grade: iconGrade,
      opsz: iconOpticalSize,
      fontSize: iconSize,
      includeImport: true
    });

    try {
      await copyToClipboard(code);
      setCopiedCode(format);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  const codeExample = generateIconCode({
    iconName,
    variant: iconVariant,
    fill: iconFill,
    weight: iconWeight,
    grade: iconGrade,
    opsz: iconOpticalSize,
    fontSize: iconSize,
    includeImport: true
  });

  return (
    <div style={{
      padding: '24px',
      backgroundColor: 'var(--m3-sys-color-surface, #FFFBFE)',
      borderRadius: '12px',
      border: '1px solid var(--m3-sys-color-outline-variant, #CAC4D0)',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      ...className && { className }
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
          margin: 0
        }}>
          Icon Details
        </h2>
        <button
          onClick={onClose}
          style={{
            padding: '8px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: 'transparent',
            color: 'var(--m3-sys-color-on-surface-variant, #49454F)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--m3-sys-color-surface-container, #F3EDF7)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <Icon name="close" fontSize="small" />
        </button>
      </div>

      {/* Icon Preview - Large Icon Display */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '64px',
          backgroundColor: 'var(--m3-sys-color-surface-container, #F3EDF7)',
          borderRadius: '16px',
          minHeight: '280px'
        }}>
          <Icon
            name={iconName}
            variant={iconVariant}
            fill={iconFill}
            weight={iconWeight}
            grade={iconGrade}
            opsz={iconOpticalSize}
            fontSize={iconSize}
            style={{ 
              color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
              fontSize: `${iconSize}px`
            }}
          />
        </div>

        {/* Current Props Display */}
        <div style={{
          padding: '16px',
          backgroundColor: 'var(--m3-sys-color-surface-container-low, #F7F2FA)',
          borderRadius: '12px',
          border: '1px solid var(--m3-sys-color-outline-variant, #CAC4D0)'
        }}>
          <div style={{
            fontSize: '0.875rem',
            fontWeight: '600',
            color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
            marginBottom: '8px'
          }}>
            Current Properties:
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '8px',
            fontSize: '0.75rem',
            color: 'var(--m3-sys-color-on-surface-variant, #49454F)'
          }}>
            <div><strong>Variant:</strong> {iconVariant}</div>
            <div><strong>Size:</strong> {iconSize}px</div>
            <div><strong>Fill:</strong> {iconFill}</div>
            <div><strong>Weight:</strong> {iconWeight}</div>
            <div><strong>Grade:</strong> {iconGrade}</div>
            <div><strong>Optical Size:</strong> {iconOpticalSize}</div>
          </div>
        </div>
      </div>

      {/* Icon Information */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: '600',
            color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
            margin: '0 0 8px 0'
          }}>
            {iconName}
          </h3>
          <p style={{
            fontSize: '0.875rem',
            color: 'var(--m3-sys-color-on-surface-variant, #49454F)',
            margin: 0
          }}>
            Material Design 3 icon from the TriadUI Icons collection
          </p>
        </div>

        {/* Customization Options - Material Symbols Properties */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px'
        }}>
          {/* Variant */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
              marginBottom: '8px'
            }}>
              Variant
            </label>
            <select
              value={iconVariant}
              onChange={(e) => setIconVariant(e.target.value as IconStyle)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid var(--m3-sys-color-outline, #79747E)',
                borderRadius: '6px',
                backgroundColor: 'var(--m3-sys-color-surface-container, #F3EDF7)',
                color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}
            >
              <option value="rounded">Rounded</option>
              <option value="outlined">Outlined</option>
              <option value="filled">Filled</option>
              <option value="sharp">Sharp</option>
            </select>
          </div>

          {/* Size (px) */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
              marginBottom: '8px'
            }}>
              Size (px): {iconSize}
            </label>
            <input
              type="range"
              min="20"
              max="96"
              value={iconSize}
              onChange={(e) => setIconSize(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: 'var(--m3-sys-color-primary, #6750A4)'
              }}
            />
          </div>

          {/* Fill */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
              marginBottom: '8px'
            }}>
              Fill
            </label>
            <select
              value={iconFill}
              onChange={(e) => setIconFill(Number(e.target.value) as IconFill)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid var(--m3-sys-color-outline, #79747E)',
                borderRadius: '6px',
                backgroundColor: 'var(--m3-sys-color-surface-container, #F3EDF7)',
                color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}
            >
              <option value={0}>0 - Outlined</option>
              <option value={1}>1 - Filled</option>
            </select>
          </div>

          {/* Weight */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
              marginBottom: '8px'
            }}>
              Weight: {iconWeight}
            </label>
            <input
              type="range"
              min="100"
              max="700"
              step="100"
              value={iconWeight}
              onChange={(e) => setIconWeight(Number(e.target.value) as IconWeight)}
              style={{
                width: '100%',
                accentColor: 'var(--m3-sys-color-primary, #6750A4)'
              }}
            />
          </div>

          {/* Grade */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
              marginBottom: '8px'
            }}>
              Grade: {iconGrade}
            </label>
            <input
              type="range"
              min="-50"
              max="200"
              step="25"
              value={iconGrade}
              onChange={(e) => setIconGrade(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: 'var(--m3-sys-color-primary, #6750A4)'
              }}
            />
          </div>

          {/* Optical Size */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
              marginBottom: '8px'
            }}>
              Optical Size: {iconOpticalSize}
            </label>
            <input
              type="range"
              min="20"
              max="48"
              value={iconOpticalSize}
              onChange={(e) => setIconOpticalSize(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: 'var(--m3-sys-color-primary, #6750A4)'
              }}
            />
          </div>
        </div>

        {/* Code Format Selector */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
            marginBottom: '8px'
          }}>
            Code Format
          </label>
          <select
            value={codeFormat}
            onChange={(e) => setCodeFormat(e.target.value as CodeFormat)}
            style={{
              width: '100%',
              maxWidth: '300px',
              padding: '8px 12px',
              border: '1px solid var(--m3-sys-color-outline, #79747E)',
              borderRadius: '6px',
              backgroundColor: 'var(--m3-sys-color-surface-container, #F3EDF7)',
              color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
              fontSize: '0.875rem',
              cursor: 'pointer'
            }}
          >
            <option value="jsx">React JSX</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
          </select>
        </div>

        {/* Code Example */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '8px'
          }}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
              margin: 0
            }}>
              Code Example
            </h4>
            <button
              onClick={() => handleCopyCode(codeFormat)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: '6px',
                border: copiedCode === codeFormat ? '1px solid var(--m3-sys-color-primary, #6750A4)' : '1px solid var(--m3-sys-color-outline, #79747E)',
                backgroundColor: copiedCode === codeFormat ? 'var(--m3-sys-color-primary, #6750A4)' : 'transparent',
                color: copiedCode === codeFormat ? 'var(--m3-sys-color-on-primary, #FFFFFF)' : 'var(--m3-sys-color-on-surface, #1C1B1F)',
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (copiedCode !== codeFormat) {
                  e.currentTarget.style.backgroundColor = 'var(--m3-sys-color-surface-container, #F3EDF7)';
                }
              }}
              onMouseLeave={(e) => {
                if (copiedCode !== codeFormat) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <Icon
                name={copiedCode === codeFormat ? "check" : "content_copy"}
                fontSize="small"
              />
              {copiedCode === codeFormat ? "Copied!" : "Copy"}
            </button>
          </div>
          <pre style={{
            padding: '16px',
            backgroundColor: 'var(--m3-sys-color-surface-container-high, #ECE6F0)',
            borderRadius: '6px',
            overflowX: 'auto',
            fontSize: '0.875rem',
            color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
            margin: 0
          }}>
            <code>
              {codeExample}
            </code>
          </pre>
        </div>

        {/* Quick Actions */}
        <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => handleCopyCode('jsx')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid var(--m3-sys-color-outline, #79747E)',
              backgroundColor: 'transparent',
              color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--m3-sys-color-surface-container, #F3EDF7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <Icon name="code" fontSize="small" />
            Copy JSX
          </button>
          <button
            onClick={() => handleCopyCode('html')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid var(--m3-sys-color-outline, #79747E)',
              backgroundColor: 'transparent',
              color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--m3-sys-color-surface-container, #F3EDF7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <Icon name="html" fontSize="small" />
            Copy HTML
          </button>
          <button
            onClick={() => handleCopyCode('css')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid var(--m3-sys-color-outline, #79747E)',
              backgroundColor: 'transparent',
              color: 'var(--m3-sys-color-on-surface, #1C1B1F)',
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--m3-sys-color-surface-container, #F3EDF7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <Icon name="css" fontSize="small" />
            Copy CSS
          </button>
        </div>
      </div>
    </div>
  );
};