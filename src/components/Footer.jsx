import React from 'react';

function Footer() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1 */}
          <div className="footer-col">
            <span className="footer-brand">Qrux Studios</span>
            <p className="footer-brand-subtext">
              Websites & Web Applications for Modern Businesses
            </p>
          </div>
          
          {/* Col 2 */}
          <div className="footer-col">
            <span className="footer-heading">Quick Links</span>
            <ul className="footer-links">
              <li>
                <a href="#work" className="footer-link" onClick={(e) => handleScrollTo(e, 'work')}>
                  Work
                </a>
              </li>
              <li>
                <a href="#package" className="footer-link" onClick={(e) => handleScrollTo(e, 'package')}>
                  Package
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link" onClick={(e) => handleScrollTo(e, 'contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Col 3 */}
          <div className="footer-col">
            <span className="footer-heading">Contact</span>
            <ul className="footer-links">
              <li>
                <a href="tel:+917892653131" className="footer-link" aria-label="Call +91 7892653131">
                  +91 7892653131
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/917892653131" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label="Chat on WhatsApp"
                >
                  WhatsApp Chat
                </a>
              </li>
              <li>
                <a href="mailto:yuvarajdhongadi@gmail.com" className="footer-link" aria-label="Email yuvarajdhongadi@gmail.com">
                  yuvarajdhongadi@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Col 4 */}
          <div className="footer-col">
            <span className="footer-heading">Location</span>
            <p className="footer-text">
              Bangalore, India<br />
              Available for projects across India
            </p>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <span className="copyright">© 2026 QRUX STUDIOS. ALL RIGHTS RESERVED.</span>
          <a 
            href="#hero" 
            className="back-to-top"
            onClick={(e) => handleScrollTo(e, 'hero')}
            aria-label="Scroll back to top of the page"
          >
            Back to top
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
