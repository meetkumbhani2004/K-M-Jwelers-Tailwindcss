import HomePageHeader from '../../Header/Header';
import './contact.css';
import HomePageFooter from '../../Footer/Footer';

import React, { useEffect, useRef } from "react";

const Contact = () => {
  const formRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          formRef.current.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>    
        <HomePageHeader/>
        <div className="contact-page">
           <div className="about-title">
          <h1>CONTACT US</h1>
          <p>Home • Contact Us</p>
        </div>
        {/* Map Section */}
      <div className="map-container">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9282113157233!2d72.86688927246645!3d21.2346951372961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f960c0bdf89%3A0xb5c2b9d554e970c8!2sRealloc%20Infotech%20PVT%20LTD!5e0!3m2!1sen!2sca!4v1751346466154!5m2!1sen!2sca"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          alt='map'
        ></iframe>
      </div>

      {/* Form Section */}
      <div className="contact-form-section" ref={formRef}>
        <div className="form-left">
          <h2>GET IN TOUCH</h2>
          <p>
            Please enter the details of your request. A member of our support
            staff will respond as soon as possible.
          </p>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Your Message" rows={5}></textarea>
            <button type="submit">Submit Now</button>
          </form>
        </div>

        <div className="form-right">
          <p><strong>Address:</strong> IT Park, B-801 to 804, opp. Gajera International School Digital Valley, Uttran, Surat, Gujarat 394101 </p>
          <p><strong>Email:</strong> https://www.reallocinfotech.com/</p>
          <p><strong>Call Us:</strong> 09726514624</p>
          <p><strong>Opening time:</strong> Our store has re-opened for shopping, exchanges every day <strong>11am to 7pm</strong></p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-tiktok"></i>
          </div>
        </div>
      </div>
    </div>
    < HomePageFooter />
    </div>

  );
};

export default Contact;
