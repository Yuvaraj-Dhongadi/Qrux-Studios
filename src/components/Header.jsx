import React, { useState, useEffect } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for highlighting current nav link
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.getAttribute('id')}`);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Work', target: 'work' },
    { label: 'Services', target: 'services' },
    { label: 'Package', target: 'package' },
    { label: 'Contact', target: 'contact' }
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="container">
          <a href="#" className="logo" id="logo" onClick={(e) => handleLinkClick(e, 'hero')}>
            QRUX STUDIOS
          </a>
          
          <nav className="nav">
            {navItems.map((item) => (
              <a 
                key={item.target}
                href={`#${item.target}`} 
                className={`nav-link ${activeLink === `#${item.target}` ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, item.target)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="header-right">
            <a href="#contact" className="btn btn-primary" onClick={(e) => handleLinkClick(e, 'contact')}>
              Request Quote
            </a>
            
            <button 
              className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`} 
              id="menu-toggle" 
              aria-label="Open Menu"
              onClick={() => setMobileMenuOpen(prev => !prev)}
            >
              <span style={mobileMenuOpen ? { transform: 'rotate(45deg) translate(6px, 6px)' } : {}}></span>
              <span style={mobileMenuOpen ? { opacity: 0 } : {}}></span>
              <span style={mobileMenuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`} id="mobile-nav-overlay">
        {navItems.map((item) => (
          <a 
            key={item.target}
            href={`#${item.target}`} 
            className="mobile-link" 
            onClick={(e) => handleLinkClick(e, item.target)}
          >
            {item.label}
          </a>
        ))}
        <a 
          href="#contact" 
          className="btn btn-primary" 
          style={{ marginTop: '16px' }}
          onClick={(e) => handleLinkClick(e, 'contact')}
        >
          Request Quote
        </a>
      </div>
    </>
  );
}

export default Header;
