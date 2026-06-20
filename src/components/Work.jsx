import React from 'react';

const projects = [
  {
    name: 'landing-page-shrid.vercel.app',
    url: 'https://landing-page-shrid.vercel.app',
    title: 'Single Focus landing page',
    category: 'Landing Page / Marketing',
    description: 'A focused landing page built to present one clear message and drive action. Features a minimal structure optimized for conversion.',
    year: '2026',
    image: '/project1.png'
  },
  {
    name: 'projects.shrid.in',
    url: 'https://projects.shrid.in',
    title: 'Product-style showcase',
    category: 'Showcase / Portfolio',
    description: 'A clean project showcase with a structured, product-style presentation. Perfect for presenting clean lines and visual systems.',
    year: '2026',
    image: '/project2.png'
  },
  {
    name: 'grocery.shrid.in',
    url: 'https://grocery.shrid.in',
    title: 'Practical business portal',
    category: 'E-Commerce / Business Site',
    description: 'A practical business site designed for simple browsing and straightforward user flow. Tailored for local browsing and high-speed page loading.',
    year: '2025',
    image: '/project3.png'
  },
  {
    name: 'oviguide.in',
    url: 'https://oviguide.in',
    title: 'Polished information layout',
    category: 'Directory / Information Site',
    description: 'A polished, organized website with a clean information-first layout. Optimized for quick readability and structural clarity.',
    year: '2024',
    image: '/project5.jpg'
  }
];

function Work() {
  return (
    <section className="work" id="work">
      <div className="container">
        <div className="section-header reveal">
          <span className="uppercase-label">Portfolio</span>
          <h2 className="section-title" style={{ marginTop: '16px' }}>Selected Work</h2>
        </div>
        
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project-card reveal-zoom-in" key={project.name}>
              <div 
                className="project-image-wrapper" 
                onClick={() => window.open(project.url, '_blank')}
                title={`Visit ${project.name} (Opens in a new tab)`}
                aria-label={`Visit project mockup for ${project.name}`}
              >
                <div className="project-mockup">
                  <div className="mockup-header"></div>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`Screenshot of ${project.name}`} 
                      className="project-screenshot-img"
                      loading="lazy"
                    />
                  ) : (
                    <div className="mockup-body">
                      <div className="mockup-grid"></div>
                      <span className="mockup-title">{project.name}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="project-details">
                <span className="uppercase-label project-label">{project.category}</span>
                <h3 className="project-title">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-title-link">
                    {project.title}
                  </a>
                </h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
