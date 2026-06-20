import React from 'react';

const statsData = [
  { number: '140+', label: 'Projects Launched' },
  { number: '10+', label: 'Years Experience' },
  { number: '50+', label: 'Happy Clients' }
];

function Stats() {
  return (
    <section className="stats-section" id="about">
      <div className="container">
        <div className="stats-intro reveal-zoom-out">
          <span className="uppercase-label">About Us</span>
          <p className="stats-desc" style={{ marginTop: '24px' }}>
            We help ambitious brands and startups build digital products that stand out and scale. We believe in working smart, building fast, and designing with purpose.
          </p>
        </div>
        
        <div className="stats-grid">
          {statsData.map((stat, i) => (
            <div className={`stat-card glass-effect reveal-zoom-in reveal-delay-${i + 1}`} key={stat.label}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
