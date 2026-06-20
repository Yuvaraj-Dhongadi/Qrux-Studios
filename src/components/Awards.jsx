import React from 'react';

const awardsData = [
  {
    org: 'AWWWARDS',
    title: 'SOTY 2025 - 1ST WINNER',
    project: 'AI CAR LANDING PAGE'
  },
  {
    org: 'CSS AWARDS',
    title: 'TOP 5 BEST ECOMMERCE 2024',
    project: 'THEO AGENCY BRANDING'
  },
  {
    org: 'BEHANCE',
    title: 'PORTFOLIO REVIEW WINNER',
    project: 'VIRTUAL REALITY SHOWCASE'
  }
];

function Awards() {
  return (
    <section className="awards" id="recognition">
      <div className="container">
        <div className="section-header reveal">
          <span className="uppercase-label">Recognition</span>
          <h2 className="section-title" style={{ marginTop: '16px' }}>Awards</h2>
        </div>
        
        <div className="awards-list">
          {awardsData.map((award, i) => (
            <div className={`award-row reveal reveal-delay-${i + 1}`} key={award.title}>
              <span className="award-org">{award.org}</span>
              <h3 className="award-title">{award.title}</h3>
              <span className="award-project">{award.project}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
