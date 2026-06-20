import React from 'react';

const teamMembers = [
  {
    name: "Yuvaraj Dhongadi",
    role: "Founder/Manager",
    image: "/team_yuvaraj.png"
  },
  {
    name: "Athish Olety",
    role: "Co-founder",
    image: "/team_athish.png"
  },
  {
    name: "Narendra",
    role: "Designer/Developer",
    image: "/team_narendra.png"
  },
  {
    name: "Shrid Mishra",
    role: "Designer/Developer",
    image: "/team_shrid.png"
  },
  {
    name: "Yash Akarsh",
    role: "Designer/Developer",
    image: "/team_yash.png"
  },
  {
    name: "Mohit Singh",
    role: "Designer/Developer",
    image: "/team_mohit.png"
  }
];

function Team() {
  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="section-header reveal-zoom-out">
          <span className="uppercase-label">Who We Are</span>
          <h2 className="section-title" style={{ marginTop: '16px' }}>Our Team</h2>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <div className={`team-card glass-effect reveal-zoom-in reveal-delay-${(i % 3) + 1}`} key={member.name}>
              <div className="team-image-wrapper">
                <img 
                  src={member.image} 
                  alt={`Sketch portrait of ${member.name}`} 
                  className="team-avatar-img"
                  loading="lazy"
                />
              </div>
              <div className="team-details">
                <h3 className="team-name">{member.name}</h3>
                <span className="uppercase-label team-role">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
