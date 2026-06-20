import React from 'react';

const processSteps = [
  {
    num: '/01',
    title: 'Discover',
    desc: 'Understanding your brand, audience, and goals.'
  },
  {
    num: '/02',
    title: 'Design',
    desc: 'Shape powerful experiences with purpose-driven creativity.'
  },
  {
    num: '/03',
    title: 'Develop',
    desc: 'Build scalable solutions with precision and performance.'
  },
  {
    num: '/04',
    title: 'Launch',
    desc: 'Introduce your brand with impact through strategic rollouts.'
  }
];

function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process-intro reveal-zoom-out">
          <span className="uppercase-label">Our Process</span>
          <h2 className="section-title" style={{ marginTop: '16px' }}>
            The Journey <span className="serif-italic">to a</span> Successful Product
          </h2>
        </div>
        
        <div className="process-grid">
          {processSteps.map((step, i) => (
            <div className={`process-card glass-effect reveal-zoom-in reveal-delay-${i + 1}`} key={step.title}>
              <span className="process-num">{step.num}</span>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
              <div className="process-icon" aria-hidden="true">
                <svg viewBox="0 0 174 26">
                  <path d="M0 13h174M164 5l8 8-8 8" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
