import React from 'react';

function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-animate" aria-hidden="true"></div>
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="container">
        <h1 className="hero-title reveal-zoom-out">
          Your Business Deserves<br />
          <span className="italic-serif">better</span> than an<br />
          Outdated Website
        </h1>
        <p className="hero-subtext reveal-zoom-in reveal-delay-1">
          We design modern, professional websites for local businesses that want to look credible, convert better, and feel current on every device.
        </p>
        <div className="hero-cta reveal-zoom-in reveal-delay-2">
          <a 
            href="https://wa.me/917892653131?text=Hi,%20I'm%20interested%20in%20your%20services.%20Could%20you%20please%20tell%20me%20more%20about%20how%20Qrux%20Studios%20can%20help%20my%20business?" 
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's talk
          </a>
          <a href="#work" className="btn btn-secondary" onClick={(e) => handleScrollTo(e, 'work')}>
            See Our Work
          </a>
        </div>
        <div 
          className="scroll-indicator reveal reveal-delay-3" 
          id="scroll-indicator"
          onClick={(e) => handleScrollTo(e, 'work')}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
          <span>Scroll to Explore</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
