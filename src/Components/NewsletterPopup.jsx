import React, { useEffect, useState } from 'react';
import './NewsletterPopup.css';

export default function NewsletterPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [dontShow, setDontShow] = useState(false);

useEffect(() => {
    const now = new Date().getTime();
    const optOutTime = localStorage.getItem('popupOptOutTime');
    const closeTime = localStorage.getItem('popupCloseTime');

    if (optOutTime && now - optOutTime < 20 * 60 * 1000) return;
    if (closeTime && now - closeTime < 2 * 60 * 1000) return;

    setShowPopup(true);
  }, []);


  const handleCheckbox = (e) => {
    setDontShow(e.target.checked);
  };


  const handleClose = () => {
    setShowPopup(false);
    const now = new Date().getTime();

    if (dontShow) {
      localStorage.setItem('popupOptOutTime', now); 
    } else {
      localStorage.setItem('popupCloseTime', now);
    }
  };


  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box animate-slide">
        <button className="close-btn1" onClick={handleClose}>×</button>
        <div className="popup-content">
          <div className="popup-image">
            <img src="Newsletter.webp" alt="Popup" />
          </div>
          <div className="popup-text">
            <h2>NEWSLETTER</h2>
            <p>Get 15% off your first purchase! Plus, be the first to know about sales, new product launches and exclusive offers!</p>
            <input type="email" placeholder="Enter your email" />
            <button className="submit-btn">Submit</button>
            <div className="checkbox-row">
              <input type="checkbox" onChange={handleCheckbox} />
              <label>Don't show this popup again</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
