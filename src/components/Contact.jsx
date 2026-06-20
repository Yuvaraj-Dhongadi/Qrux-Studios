import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, phone, email, projectType, description } = formData;
    
    const emailTo = 'yuvarajdhongadi@gmail.com';
    const subject = encodeURIComponent(`Project Inquiry - ${name} (${projectType})`);
    const emailBody = `Name: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}
Project Type: ${projectType}

Project Description:
${description || 'Not provided'}

---
Sent from Qrux Studios Homepage`;

    const body = encodeURIComponent(emailBody);
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-layout">
          {/* Left Details Column */}
          <div className="contact-info reveal-zoom-out">
            <span className="uppercase-label">Connect</span>
            <h2 className="contact-title">Let’s Build Something Great Together</h2>
            <p className="contact-subtext">
              Whether you need a new website, a redesign, or a custom web application, we’d love to hear about your project.
            </p>
            
            <div className="contact-details-list">
              {/* Phone */}
              <div className="detail-item">
                <div className="detail-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="detail-content">
                  <span className="detail-label">Phone</span>
                  <a href="tel:+917892653131" className="detail-value" aria-label="Call Qrux Studios at +91 7892653131">+91 7892653131</a>
                </div>
              </div>
              {/* Email */}
              <div className="detail-item">
                <div className="detail-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="detail-content">
                  <span className="detail-label">Email</span>
                  <a href="mailto:yuvarajdhongadi@gmail.com" className="detail-value" aria-label="Email Qrux Studios at yuvarajdhongadi@gmail.com">yuvarajdhongadi@gmail.com</a>
                </div>
              </div>
              {/* Location */}
              <div className="detail-item">
                <div className="detail-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="detail-content">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">Bangalore, India</span>
                </div>
              </div>
            </div>
            
            <a 
              href="https://wa.me/917892653131?text=Hi,%20I'm%20interested%20in%20your%20services.%20Could%20you%20please%20tell%20me%20more%20about%20how%20Qrux%20Studios%20can%20help%20my%20business?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary" 
              style={{ alignSelf: 'flex-start', backgroundColor: '#25D366', color: '#ffffff', border: 'none' }}
              aria-label="Chat with Qrux Studios on WhatsApp"
            >
              <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: 'currentColor', marginRight: '8px' }} aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.325 5.328 0 11.94 0c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.618-5.33 11.943-11.943 11.943-2.005-.001-3.975-.502-5.733-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.436.002 9.85-4.411 9.853-9.852.002-2.634-1.02-5.11-2.883-6.975C16.447 1.91 13.98 1.085 11.94 1.085c-5.432 0-9.843 4.411-9.847 9.85-.001 1.785.49 3.52 1.42 5.081L2.525 21.5l5.525-1.452c1.558.85 3.09 1.106 6.59 1.106zM17.91 14.542c-.326-.163-1.93-.952-2.228-1.062-.299-.11-.517-.163-.734.163-.218.326-.844 1.062-1.034 1.28-.19.217-.38.244-.707.081-3.155-1.572-4.148-2.633-5.69-5.282-.19-.326-.19-.564-.027-.727.147-.147.326-.38.49-.571.163-.19.217-.326.326-.543.11-.217.054-.408-.027-.571-.081-.163-.734-1.766-1.006-2.418-.266-.636-.537-.55-.734-.56-.19-.01-.408-.012-.625-.012-.218 0-.571.081-.87.408-.299.326-1.143 1.114-1.143 2.718s1.17 3.152 1.332 3.37c.163.217 2.3 3.511 5.572 4.924.778.336 1.385.537 1.859.687.781.248 1.492.213 2.054.129.627-.094 1.93-.789 2.2-1.55.27-.762.27-1.414.19-1.551-.08-.137-.299-.218-.625-.381z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
          
          {/* Right Form Column */}
          <div className="contact-form-card glass-effect reveal-zoom-in reveal-delay-2">
            <form onSubmit={handleSubmit} id="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="form-name">Name</label>
                <input 
                  type="text" 
                  id="form-name" 
                  name="name" 
                  className="form-control" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="form-phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="form-phone" 
                  name="phone" 
                  className="form-control" 
                  placeholder="Your Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="form-email">Email <span style={{ opacity: 0.5 }}>(Optional)</span></label>
                <input 
                  type="email" 
                  id="form-email" 
                  name="email" 
                  className="form-control" 
                  placeholder="Your Email Address" 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="form-project">Project Type</label>
                <select 
                  id="form-project" 
                  name="projectType" 
                  className="form-control" 
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Project Type</option>
                  <option value="New Website">New Website</option>
                  <option value="Website Redesign">Website Redesign</option>
                  <option value="Custom Web Application">Custom Web Application</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="form-description">Project Description <span style={{ opacity: 0.5 }}>(Optional)</span></label>
                <textarea 
                  id="form-description" 
                  name="description" 
                  className="form-control" 
                  placeholder="Describe your project goals..."
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            
            <div className="trust-line-row">
              <div className="trust-item">
                <span className="trust-icon" aria-hidden="true"></span>
                <span>Free Consultation</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon" aria-hidden="true"></span>
                <span>No Obligation</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon" aria-hidden="true"></span>
                <span>Response within 24 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
