import React, { useState, useEffect } from 'react';

function Loader({ onComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Lock body scroll on mount, unlock on unmount
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Display loader overlay for 2 seconds, then transition out
  useEffect(() => {
    let fadeTimeout;
    const loaderTimeout = setTimeout(() => {
      setIsFadingOut(true);
      fadeTimeout = setTimeout(() => {
        onComplete();
      }, 600); // Matches the 0.6s CSS transition duration
    }, 2000); // Show loader for exactly 2 seconds

    return () => {
      clearTimeout(loaderTimeout);
      if (fadeTimeout) clearTimeout(fadeTimeout);
    };
  }, [onComplete]);

  return (
    <div className={`loader-overlay ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-brand-wrapper">
          <span className="loader-brand">QRUX STUDIOS</span>
          <span className="loader-tagline">Websites & Web Applications</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
