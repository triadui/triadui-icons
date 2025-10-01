import { useState } from 'react';
import { GetStarted } from './components/GetStarted';
import { IconBrowser } from './components/IconBrowser';

function App() {
  const [currentPage, setCurrentPage] = useState<'get-started' | 'icon-browser'>('get-started');

  const handleGetStarted = () => {
    setCurrentPage('icon-browser');
  };

  const handleBackToHome = () => {
    setCurrentPage('get-started');
  };

  return (
    <>
      {currentPage === 'get-started' ? (
        <GetStarted onGetStarted={handleGetStarted} />
      ) : (
        <div>
          <button
            onClick={handleBackToHome}
            style={{
              position: 'fixed',
              top: '24px',
              right: '24px',
              backgroundColor: '#6750A4',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
              zIndex: 1000
            }}
          >
            ← Back to Home
          </button>
          <IconBrowser />
        </div>
      )}
    </>
  );
}

export default App;