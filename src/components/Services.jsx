import React from 'react';

const servicesData = [
  {
    num: '/01',
    title: 'Web Design',
    text: 'Create user-first, beautiful, and conversion-focused designs that align with your brand identity and look current on every device.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h16V4H4zm2 2h5v5H6V6zm0 7h5v5H6v-5zm7-7h5v5h-5V6zm0 7h5v5h-5v-5z"/>
      </svg>
    )
  },
  {
    num: '/02',
    title: 'Web Development',
    text: 'Build scalable, clean, and high-performance websites and custom web applications optimized for speed, security, and clean code.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
      </svg>
    )
  },
  {
    num: '/03',
    title: 'Local SEO',
    text: 'Optimize your search presence, page speeds, sitemaps, and structure to rank on search engines, get more calls, and win local business.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
      </svg>
    )
  }
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-intro reveal">
          <div>
            <span className="uppercase-label">Our Services</span>
            <h2 className="section-title" style={{ marginTop: '16px' }}>What We Do</h2>
          </div>
          <p className="services-description">
            We craft digital experiences from idea to launch — blending strategy, design, and engineering to build products that perform.
          </p>
        </div>
        
        <div className="services-grid">
          {servicesData.map((service, i) => (
            <div className={`service-card glass-effect reveal-zoom-in reveal-delay-${i + 1}`} key={service.title}>
              <span className="service-num">{service.num}</span>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
