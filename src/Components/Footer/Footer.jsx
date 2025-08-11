import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./footer.css";
import { useNavigate } from 'react-router-dom';

const HomePageFooter = () => {
    const navigate = useNavigate();


  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-top" data-aos="fade-up" data-aos-delay="0">
         <div className="footer-columns">
            <div className="footer-contact">
              <h2>MK</h2>
              <p><img src="pin.png" alt='pin'/> 1093 Hood Avenue, CA</p>
              <p><img src="telephone.png" alt='pin'/> (123)-456-7890</p>
              <p><img src="email.png" alt='pin'/> Km@example.com</p>
              <p><img src="schedule.png" alt='pin'/> All Day: 9:00AM - 22:00PM</p>
            </div>
       
          <div className="footer-column" data-aos="fade-up" data-aos-delay="100">
            <div className="My-acc">
            <h4>My Account</h4>
            <ul>
              <li onClick={() => navigate('/register')} style={{ cursor: 'pointer' }}>Login/Register</li>
              <li>Wishlist</li>
              <li onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }}>Track Your Orders</li>
              <li onClick={() => navigate('/checkout')} style={{ cursor: 'pointer' }}>Checkout</li>
            </ul>
            </div>
          </div>
          <div className="footer-column" data-aos="fade-up" data-aos-delay="200">
            <h4>Our Policies</h4>
            <ul>
              <li onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }}>Shipping & Delivery</li>
              <li>Returns Policy</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-column" data-aos="fade-up" data-aos-delay="300">
            <h4>Customer Care</h4>
            <ul>
              <li onClick={() => navigate('/faqs')} style={{ cursor: 'pointer' }}>FAQs</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Gift Card</li>
            </ul>
          </div>
          <div className="footer-column" data-aos="fade-up" data-aos-delay="400">
            <h4>Subscribe Our Newsletter</h4>
            <p>Join our newsletter for exclusive updates, special offers, and the latest news delivered straight to your inbox!</p>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom" data-aos="fade-up" data-aos-delay="500">
        <div className="footer-payment">
          <p>We Accept Payments</p>
          <img src="payment-footer.avif" alt="Payment Methods" />
        </div>
        <div className="footer-thankyou1">
          <h4 className="footer-thankyou">Thank You For Choosing Us!</h4>
          <p className="footer-thankyou">We appreciate your support and are dedicated to providing you with the best <br />products and service. We look forward to serving you again!</p>
        </div>
        <div className="footer-social">
          <p className="footer-p">Follow Us</p>
          <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-tiktok"></i>
          </div>
        </div>
       
      </div>
      <div className="footer-last">
        <div>
        <p className="copyright">© 2025 Nova Creative. All Rights Reserved.</p>
        </div>
         <div className="footer-language">
          <p>🇺🇸 United States | USD $</p>
          <p>🇬🇧 English</p>
        </div>

      </div>
    </footer>
  );
};

export default HomePageFooter;
