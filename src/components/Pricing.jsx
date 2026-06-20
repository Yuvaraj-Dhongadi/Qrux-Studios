import React from 'react';

const pricingPlans = [
  {
    name: 'Starter',
    tagline: 'Early-stage ideas',
    price: '₹5,000+',
    period: '/project',
    features: [
      'Discovery & Roadmap',
      'Up to 3 Pages Included',
      'Basic Frontend Setup',
      '2 Rounds of Revisions'
    ],
    featured: false,
    cta: 'Get Started'
  },
  {
    name: 'Growth',
    badge: 'POPULAR',
    tagline: 'Qrux Foundation Package',
    price: '₹15,000',
    period: '/project',
    features: [
      'Complete Website Redesign',
      'Mobile Responsive Design',
      'Up to 5 Pages Included',
      'WhatsApp Integration',
      'Contact Form',
      'Click-to-Call Actions',
      'Google Maps Integration',
      'SSL Setup',
      'Domain & Hosting Assistance',
      'Website Launch Support',
      'SEO-Friendly Page Titles',
      'Meta Descriptions & Sitemap',
      'Google Search Console Setup',
      'Mobile Optimization',
      'Social Media Integration'
    ],
    featured: true,
    cta: 'Request Quote',
    note: 'Extra pages: ₹500 per page'
  },
  {
    name: 'Custom',
    tagline: 'Complex products',
    price: 'Quote',
    period: '/bespoke',
    features: [
      'Full Product Dev',
      'Backend Integration',
      'Custom Web Applications',
      'Dedicated Launch Support',
      'Unlimited Revisions'
    ],
    featured: false,
    cta: "Let's Talk"
  }
];

function Pricing() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pricing" id="package">
      <div className="container">
        <div className="pricing-header reveal-zoom-out">
          <span className="uppercase-label">Pricing Plans</span>
          <h2 className="section-title" style={{ marginTop: '16px' }}>Plans That Scale</h2>
          <p className="pricing-header-desc">
            Whether you're launching a startup or growing a product, we’ve got a plan that fits your stage.
          </p>
        </div>
        
        <div className="pricing-grid">
          {pricingPlans.map((plan, i) => (
            <div 
              className={`pricing-card glass-effect ${plan.featured ? 'featured reveal-zoom-out' : 'reveal-zoom-in'} reveal-delay-${i + 1}`} 
              key={plan.name}
            >
              {plan.badge && <span className="pricing-badge">{plan.badge}</span>}
              
              <div className="pricing-card-header">
                <h3 className="pricing-name">{plan.name}</h3>
                <p className="pricing-desc">{plan.tagline}</p>
                <div className="pricing-price-wrap">
                  <span className="pricing-price">{plan.price}</span>
                  <span className="pricing-period">{plan.period}</span>
                </div>
              </div>
              
              <div className="pricing-features">
                {plan.features.map((feature) => (
                  <div className="pricing-feature-item" key={feature}>
                    <span className="pricing-feature-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              {plan.note && <span className="package-note" style={{ marginBottom: '24px', display: 'block' }}>{plan.note}</span>}
              
              <a 
                href="#contact" 
                className={`btn ${plan.featured ? 'btn-primary float-animate' : 'btn-secondary'}`}
                onClick={handleScrollToContact}
                aria-label={`Request quote for the ${plan.name} Package`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
