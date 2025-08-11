import HomePageHeader from '../../Header/Header';
import './about.css';
import HomePageFooter from '../../Footer/Footer';

import React, { useEffect, useRef } from 'react';

const AboutUs = () => {
  const aboutImageRef = useRef();
  const testimonialImageRef = useRef();

  useEffect(() => {
    const observeFadeIn = (ref) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ref.current.classList.add('show');
          } else {
            ref.current.classList.remove('show');
          }
        },
        { threshold: 0.3 }
      );
      if (ref.current) observer.observe(ref.current);
    };

    observeFadeIn(aboutImageRef);
    observeFadeIn(testimonialImageRef);
  }, []);

  const WhyChooseUs = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('visible');
        } else {
          sectionRef.current.classList.remove('visible');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <div ref={sectionRef} className="why-choose-wrapper">
      <div className="why-choose-content">
        <h2>Why choose us ?</h2>
        <p>
          Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut
          ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus
          Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum,
          lobortis sed mauris. Integer congue, sem elementum varius tristique.
        </p>
      </div>
      <div className="why-choose-image">
        <img src="/shop-card-load.webp" alt="Why Choose Us" />
      </div>
    </div>
  );
};

 const TrustSection = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('visible');
        } else {
          sectionRef.current.classList.remove('visible');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <div ref={sectionRef} className="trusted-wrapper">
      <div className='trusted-image'>
        <img src="/swipe-for-shopping.gif" alt="Shopping App" />
      </div>
      <div className="trusted-content">
        <h2>Trusted online shopping</h2>
        <p>
          Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut
          ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus
          Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum,
          lobortis sed mauris. Integer congue, sem elementum varius tristique.
        </p>
      </div>
    </div>
  );
};

  return (
    <div>
      <HomePageHeader />
      <div className="about-container">
        <div className="about-title">
          <h1>ABOUT US</h1>
          <p>Home • About Us</p>
        </div>

        <div ref={aboutImageRef} className="about-image-container">
          <img
            src="about-img.webp"
            alt="About Us Visual"
            className="about-image"
          />
        </div>

        <div className='image-Head'>
          <h5>Lorem ipsum dolor sit am et, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus. Fusce imperdiet pulvinar est, eget fermentum nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</h5>
        </div>

        <div className='image-p'>
          <p>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.</p>
          <p>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris.</p>
        </div>
      </div>

      <div className="testimonial-wrapper">
        <div className="testimonial-box">
          <div ref={testimonialImageRef} className="testimonial-image">
            <img src="/page_inner_avatar.avif" alt="Testimonial" />
          </div>

          <div className="testimonial-content">
            <p>
              <img src='cooma.png' alt='cooma' /> Best purchase I’ve made this winter! The color and knitting are exquisite and it's so comfy! Went from NYC to Miami without ever taking it off. Super cute!!
            </p>
            <strong>Kwang Shang. - CEO Vinovathemes</strong>
          </div>
        </div>
      </div>
      < WhyChooseUs />
      < TrustSection />
      <HomePageFooter />

    </div>
  );
};

export default AboutUs;
