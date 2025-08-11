import React from 'react';
import './shipingfeature.css';

const features = [
  {
    img: '/icon1.webp',
    title: 'Free Shipping',
    desc: 'Enjoy the convenience of free shipping on all orders over $50',
  },
  {
    img: '/icon2.webp',
    title: 'Buy Now. Pay Later',
    desc: 'Shop now, pay later - access your favorite jewelry and pay in installments!',
  },
  {
    img: '/icon3.webp',
    title: 'Cashback Reward',
    desc: 'Earn cashback rewards on every purchase and enjoy savings on future jewelry!',
  },
  {
    img: '/icon4.webp',
    title: 'Secure Payments',
    desc: 'Shop confidently with secure payments that protect your information!',
  },
];

const ShippingFeatures = () => {
  return (
    <div className="shipping-section">
      {features.map((item, index) => (
        <div className="shipping-box" key={index}>
          <div className="icon-img">
            <img src={item.img} alt={item.title} />
          </div>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ShippingFeatures;
