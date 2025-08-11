import React, { useEffect,useState} from 'react';
import './Brand.css';

const logos = [
  './brand1.png',
  './brand2.png',
  './brand3.png',
  './brand4.png',
  './brand5.png',
  './brand6.png',
  './brand7.png',
  './brand8.png',
];

const BrandCarousel = () => {
  const [visibleLogos, setVisibleLogos] = useState(logos.slice(0, 5));
  const [startIndex, setStartIndex] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLogos((prev) => {
        const nextLogo = logos[startIndex % logos.length];
        setStartIndex((prevIndex) => prevIndex + 1);
        return [...prev.slice(1), nextLogo];
      });
    }, 5000); // <-- 5 seconds

    return () => clearInterval(interval);
  }, [startIndex]);

  return (
    <div className="brand-carousel-wrapper">
      <div className="brand-carousel">
        {visibleLogos.map((logo, index) => (
          <div className="brand-carousel-item" key={index}>
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;
