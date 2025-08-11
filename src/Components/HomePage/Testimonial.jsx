import React from 'react';
import './testimonials.css';

const testimonials = [
  {
    name: 'Candace V. Miller',
    location: 'From Florida',
    text: 'I absolutely love my new bracelet! The quality is exceptional...',
    image: './tes-1-1.avif',
  },
  {
    name: 'Margaret B. Dobbins',
    location: 'From Louisiana',
    text: 'The earrings I purchased are stunning! So many compliments...',
    image: './tes-1-2.avif',
  },
  {
    name: 'Thersa T. Marston',
    location: 'From California',
    text: 'Shopping here has been a fantastic experience from start to finish...',
    image: './tes-1-3.avif',
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial1-wrapper">
      <h2>Our Customers Reviews</h2>
      <div className="testimonial1-flex-row">
        {testimonials.map((item, index) => (
          <div className="testimonial1-card" key={index}>
            <div className="testimonial1-text">
              <p className="stars">★★★★★</p>
              <p className="text">{item.text}</p>
              <p className="name"><strong>{item.name}</strong></p>
              <p className="location">{item.location}</p>
            </div>
            <div className="testimonial1-img">
              <img src={item.image} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
