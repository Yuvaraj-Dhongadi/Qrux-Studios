import React from 'react';

const testimonialsList = [
  {
    quote: <>“Qrux Studios transformed our outdated site into a professional portal that our clients actually trust. Their attention to detail is <span className="serif-italic">unmatched</span>.”</>,
    author: "Rajesh Varma",
    info: "Varma & Associates (CA Firm)"
  },
  {
    quote: <>“They understood our aesthetic perfectly. Our new portfolio website is <span className="serif-italic">sleek</span>, fast, and has significantly increased our high-end inquiries.”</>,
    author: "Ananya Iyer",
    info: "Studio Ananya (Interior Designers)"
  },
  {
    quote: <>“Simple, fast, and <span className="serif-italic">effective</span>. The WhatsApp integration has made it so easy for patients to book appointments directly.”</>,
    author: "Dr. Karan Mehta",
    info: "Smile Dental Clinic (Dental Clinic)"
  }
];

function Testimonials() {
  const renderTestimonials = () => (
    <>
      {testimonialsList.map((item, index) => (
        <span className="marquee-text" key={index}>
          {item.quote} <span style={{ opacity: 0.6, fontSize: '0.85em', fontWeight: 400 }}> — {item.author}, {item.info}</span>
        </span>
      ))}
    </>
  );

  return (
    <section className="testimonials" id="testimonials">
      <div className="marquee-content">
        {renderTestimonials()}
        {renderTestimonials()}
      </div>
      <div className="marquee-content" aria-hidden="true">
        {renderTestimonials()}
        {renderTestimonials()}
      </div>
    </section>
  );
}

export default Testimonials;
