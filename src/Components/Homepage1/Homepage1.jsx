import React, { useEffect, useState } from 'react';
import './Homepage1.css';
import Header from '../HomePage/Header';
import ShippingFeatures from '../HomePage/ShipingFeature';
import ProductGrid from './product';
import Testimonials from '../HomePage/Testimonial';
import FAQList from '../HomePage/Faqs';
import HomePageFooter from '../Footer/Footer';
import BrandCarousel from '../HomePage/Brand';
//import { useCart } from '../HomePage/CartContext';

const slides = [
  {
    subtitle: 'THE ULTIMATE STYLE STATEMENT',
    title: 'Transform Your Look With Fashion Bracelet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspe tristique ullamcorper ex, vitae consequat nisl ultrices.',
    bg: './s-1-1.jpg'
  },
  {
    subtitle: 'WHERE HERITAGE MEETS MODERN DESIGN',
    title: 'Discover Our Exquisite Jewelry Collection Today',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique ullamcorper ex, vitae consequat nisl ultrices',
    bg: './s-1-2.jpg'
  },
  {
    subtitle: 'EMBRACE YOUR STYLE WITH EVERY SPARKLE',
    title: 'Unveiling The Unmatched Beauty Of Fine Jewelry',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique ullamcorper ex, vitae consequat nisl ultrices',
    bg: './s-1-3.jpg'
  }
];

// CategoryCards.jsx

const categories = [
  {
    title: 'NECKLACE',
    img: './img-1-1.jpg',
  },
  {
    title: 'EARRINGS',
    img: './img-1-2.jpg',
  },
  {
    title: 'BRACELET',
    img: './img-1-3.jpg',
  },
  {
    title: 'RINGS',
    img: './img-1-4.jpg',
  }
];

const CategoryCards = () => {
  return (
    <div className="category-section">
      {categories.map((cat, index) => (
        <div key={index} className="category-card">
          <img src={cat.img} alt={cat.title} />
          <div className="category-overlay">
            <h2>{cat.title}</h2>
            <p className="shop-now">SHOP NOW</p>
          </div>
        </div>
      ))}
    </div>
  );
};



const items = [
  {
    label: 'Necklaces',
    desc: 'Explore our exquisite necklace collection, designed to elevate any outfit with delicate chains and bold pieces, all crafted with quality',
    image: './nec.webp'
  },
  {
    label: 'Bracelets',
    desc: 'Stylish accessories that enhance outfits, available in various materials and designs. Perfect for expressing style or as meaningful gifts.',
    image: './brac.jpg'
  },
  {
    label: 'Rings',
    desc: 'Elegant pieces of jewelry that symbolize love or personal style. Available in diverse designs, they add sophistication to any look.',
    image: './rings.webp'
  },
  {
    label: 'Earrings',
    desc: 'Stylish adornments that elevate your look. Available in numerous designs from minimalist to bold ideal for showcasing personal taste and creativity.',
    image: './earning.webp'
  }
];

const Gallery = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState('up');

  const handleClick = (index) => {
    setDirection(index > active ? 'up' : 'down');
    setActive(index);
  };

  return (
    <div className="gallery-section">
      <div className={`gallery-image ${direction === 'up' ? 'slide-up' : 'slide-down'}`}>
        <img src={items[active].image} alt={items[active].label} />
      </div>

      <div className="gallery-info">
        <span className="collection-label">COLLECTION</span>
        <h2 className='gellary-to'>Discover The Beauty In Our Gallery</h2>

        {items.map((item, index) => (
          <div
            key={index}
            className={`gallery-tab ${index === active ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <div className="indicator-wrapper">
              <span className={`indicator-fill ${index === active ? 'fill-animate' : ''}`}></span>
            </div>
            <div>
              <h4>{item.label}</h4>
              {index === active && <p>{item.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// main sec
export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const { title, subtitle, description, bg } = slides[current];



  return (
    <div>
        <div className="hero-slider-wrapper">
            <div>
                < Header />

            </div>
                
                <div
                    className={`hero-slider zoom-animate`}
                    key={current}
                    style={{ backgroundImage: `url(${bg})` }}
                ></div>

                <div className="overlay" key={current}>
                <p className="animate-top text-3xl mb-11 font-semibold" >{subtitle}</p>
                <h1 className="animate-left text-2xl mb-9">{title}</h1>
                <p className="animate-bottom">{description}</p>
                <button className="shop-btn px-20 animate-button">Shop Now →</button>
                </div>
        </div>
        <ShippingFeatures />
        < CategoryCards />
        <Gallery/>
        < ProductGrid />
      <div>

        
        <div className='Upgrade' style={{
          backgroundImage: `url('./acces.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '400px',
          width: '100%',
        }}>
          
          <div className='intro'>
          <h6>THE PERFECT ACCESSORY UPGRADE</h6>
          </div>
          <div className='head'>
            <h2>
              Revamp Your Outfit With Statment Rings
            </h2>
          </div>
          <div className='mid-p'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique ullamcorper ex, vitae consequat nisl ultrices</p>
          </div>
            <button className='shop-btn'>Shop Now</button>
        </div>
      </div>
      < Testimonials />
      < FAQList />
      < BrandCarousel />
      < HomePageFooter />
    </div>
  );
}
