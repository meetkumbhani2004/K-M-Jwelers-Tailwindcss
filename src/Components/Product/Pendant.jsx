import './Product.css';
import React, { useState} from 'react';
import { FaStar } from 'react-icons/fa';
import { useCart } from '../HomePage/CartContext';
import Header from '../HomePage/Header';
import HomePageFooter from '../Footer/Footer';
import ShippingFeatures from '../HomePage/ShipingFeature';
import { useWishlist } from '../HomePage/WhishlistContext';
import { PiStarThin } from 'react-icons/pi';

const allProducts = [
  {
    id:1,
    name: 'Alphabet Chic Pendant',
    category: 'Nacklace',
    price: 78,
    material: "Gold",
    type: "Emillia",
    image1: './Images/1-1.webp',
    image2: './Images/1-2.webp',
  },
  {
    id:2,
    name: 'Black Gemstones Twist',
    category: 'Earrings',
    price: 88,
    material: "Diamond",
    type: "Nova",
    image1: './Images/2-1.webp',
    image2: './Images/2-2.webp',
  },
  {
    id:3,
    name: 'Blossoming Rose Drops',
    category: 'Earrings',
    price: 97,
    material: "Silver",
    type: "Nova",
    image1: './Images/3-1.webp',
    image2: './Images/3-2.webp',
  },
  {
    id:4,
    name: 'Celestial Bunny GLow',
    category: 'Brooches',
    price: 26,
    material: "Titanium",
    type: "Vinova",
    image1: './Images/4-1.webp',
    image2: './Images/4-2.webp',
  },
  {
    id:5,
    name: 'Celestial Charm Loop',
    category: 'Bracelates',
    price: 63,
    material: "Gold",
    type: "Rising",
    image1: './Images/5-1.webp',
    image2: './Images/5-2.webp',
  },
  {
    id:6,
    name: 'Celestial Diamond GLow',
    category: 'Rings',
    price: 50,
    material: "Gold",
    type: "Rising",
    image1: './Images/6-1.webp',
    image2: './Images/6-2.webp',
  },
  {
    id:7,
    name: 'Celestial Love Chain',
    category: 'Nacklace',
    price: 54,
    material: "Diamond",
    type: "Emillia",
    image1: './Images/7-1.webp',
    image2: './Images/7-2.webp',
  },
  {
    id:8,
    name: 'Celestial Moonlight Glow',
    category: 'Anklets',
    price: 49,
    material: "Gold",
    type: "Emillia",
    image1: './Images/8-1.webp',
    image2: './Images/8-2.webp',
  },
  {
    id:9,
    name: 'Celestial Sparkle Chain',
    category: 'Bracelates',
    price: 52,
    material: "Gold",
    type: "Rising",
    image1: './Images/9-1.webp',
    image2: './Images/9-2.webp',
  },
  {
    id:10,
    name: 'Celestial Star Chain',
    category: 'Nova',
    price: 74,
    material: "Gold",
    type: "Emillia",
    image1: './Images/10-1.webp',
    image2: './Images/10-2.webp',
  },
  {
    id:11,
    name: 'Cherry Blossom Delight',
    category: 'Brooches',
    price: 12,
    material: "Gold",
    type: "Vinova",
    image1: './Images/11-1.webp',
    image2: './Images/11-2.webp',
  },
  {
    id:12,
    name: 'Cherry Sparkling Touch',
    category: 'Brooches',
    price: 18,
    material: "Gold",
    type: "Vinova",
    image1: './Images/12-2.webp',
    image2: './Images/12-2.webp',
  },
  {
    id:13,
    name: 'Cowboy Lion Statement',
    category: 'Brooches',
    price: 30,
    material: "Gold",
    type: "Vinova",
    image1: './Images/1-1.webp',
    image2: './Images/13-2.webp',
  },
  {
    id:14,
    name: 'Crystal Crown Spark',
    category: 'Nacklace',
    price: 50,
    material: "Gold",
    type: "Emillia",
    image1: './Images/1-1.webp',
    image2: './Images/14-2.webp',
  },
  {
    id:15,
    name: 'Dainty Moonlight Ring',
    category: 'Rings',
    price: 55,
    material: "Gold",
    type: "Rising",
    image1: './Images/1-1.webp',
    image2: './Images/15-2.webp',
  },
  {
    id:16,
    name: 'Dainty Moonlit Chain',
    category: 'Nacklace',
    price: 50,
    material: "Silver",
    type: "Emillia",
    image1: './Images/1-1.webp',
    image2: './Images/16-2.webp',
  },
  {
    id:17,
    name: 'Delicate Butterfly Link',
    category: 'Bracelates',
    price: 54,
    material: "Gold",
    type: "Rising",
    image1: './Images/1-1.webp',
    image2: './Images/17-2.webp',
  },
  {
    id:18,
    name: 'Delicate Flore Harmony',
    category: 'Anklets',
    price: 78,
    material: "Gold",
    type: "Emillia",
    image1: './Images/1-1.webp',
    image2: './Images/18-2.webp',
  },
  {
    id:19,
    name: 'Elegant Letter Glow',
    category: 'Nacklace',
    price: 48,
    material: "Gold",
    type: "Emillia",
    image1: './Images/1-1.webp',
    image2: './Images/19-2.webp',
  },
  {
    id:20,
    name: 'Emerald Bloom Drops',
    category: 'Earrings',
    price: 76,
    material: "Gold",
    type: "Nova",
    image1: './Images/1-1.webp',
    image2: './Images/20-2.webp',
  },
  {
    id:21,
    name: 'Enchanted Bunny Whisper',
    category: 'Brooches',
    price: 20,
    material: "Gold",
    type: "Vinova",
    image1: './Images/1-1.webp',
    image2: './Images/21-2.webp',
  },
  {
    id:22,
    name: 'Enchanted Floral Loop',
    category: 'Rings',
    price: 52,
    material: "Gold",
    type: "Rising",
    image1: './Images/1-1.webp',
    image2: './Images/22-2.webp',
  },
  {
    id:23,
    name: 'Enchanted Midnight',
    category: 'Earrings',
    price: 76,
    material: "Gold",
    type: "Nova",
    image1: './Images/1-1.webp',
    image2: './Images/23-2.webp',
  },
  {
    id:24,
    name: 'Enchanted Starlit Harmony',
    category: 'Anklets',
    price: 61,
    material: "Gold",
    type: "Emillia",
    image1: './Images/1-1.webp',
    image2: './Images/24-2.webp',
  },
  {
    id:25,
    name: 'Ethereal Gemstone Glow',
    category: 'Bracelates',
    price: 71,
    material: "Gold",
    type: "Rising",
    image1: './Images/1-1.webp',
    image2: './Images/25-2.webp',
  },
  {
    id:26,
    name: 'Ethereal Pearl Halo',
    category: 'Rings',
    price: 65,
    material: "Gold",
    type: "Rising",
    image1: './Images/1-1.webp',
    image2: './Images/26-2.webp',
  },
  {
    id:27,
    name: 'Etheral Sparkling Charm',
    category: 'Nacklace',
    price: 50,
    material: "Gold",
    type: "Nova",
    image1: './Images/1-1.webp',
    image2: './Images/27-2.webp',
  },
  {
    id:28,
    name: 'Gleaming Stralit Band',
    category: 'Bracelates',
    price: 27,
    material: "Gold",
    type: "Rising",
    image1: './Images/1-1.webp',
    image2: './Images/28-2.webp',
  },
  {
    id:29,
    name: 'Golden Elegance Delight',
    category: 'Anklets',
    price: 45,
    material: "Gold",
    type: "Nova",
    image1: './Images/1-1.webp',
    image2: './Images/29-2.webp',
  },
  {
    id:30,
    name: 'Golden Harmony Bangle',
    category: 'Bracelates',
    price: 20,
    material: "Gold",
    type: "Rising",
    image1: './Images/1-1.webp',
    image2: './Images/30-2.webp',
  },
  {
    id:31,
    name: 'Golden Moon Cat Brooch',
    category: 'Brooches',
    price: 15,
    material: "Gold",
    type: "Vinova",
    image1: './Images/1-1.webp',
    image2: './Images/31-2.webp',
  },
  {
    id:32,
    name: 'Golden Star Delight',
    category: 'Nacklace',
    price: 45,
    material: "Gold",
    type: "Emillia",
    image1: './Images/1-1.webp',
    image2: './Images/32-2.webp',
  },
  {
    id:33,
    name: 'Golden Sunbeam Hoops',
    category: 'Earrings',
    price: 88,
    material: "Gold",
    type: "Nova",
    image1: './Images/1-1.webp',
    image2: './Images/33-2.webp',
  },
  {
    id:34,
    name: 'Golden Vintage Charm',
    category: 'Rings',
    price: 81,
    material: "Gold",
    type: "Rising",
    image1: './Images/1-1.webp',
    image2: './Images/34-2.webp',
  },
  {
    id:35,
    name: 'Graceful Butterfly Band',
    category: 'Rings',
    price: 80,
    material: "Gold",
    type: "Rising",
    image1: './Images/1-1.webp',
    image2: './Images/35-2.webp',
  },
  {
    id:36,
    name: 'Graceful Butterfly Chain',
    category: 'Nacklace',
    price: 68,
    material: "Gold",
    type: "Rising",
    image1: './Images/1-1.webp',
    image2: './Images/36-2.webp',
  },
  
];


const Pendant = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [visibleCount, setVisibleCount] = useState(12);
  const [recentViewed, setRecentViewed] = useState([]);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const uniqueCategories = [...new Set(allProducts.map(p => p.category))];
  const uniqueMaterials = [...new Set(allProducts.map(p => p.material))];
  const uniqueTypes = [...new Set(allProducts.map(p => p.type))];

  const handleCheckboxChange = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter(item => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const filteredProducts = allProducts.filter(product => {
    const inCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const inMaterial = selectedMaterials.length === 0 || selectedMaterials.includes(product.material);
    const inType = selectedTypes.length === 0 || selectedTypes.includes(product.type);
    const inPrice = product.price >= priceRange.min && product.price <= priceRange.max;
    return inCategory && inMaterial && inType && inPrice;
  });

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedTypes([]);
    setPriceRange({ min: 0, max: 1000 });
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  const handleProductClick = (product) => {
    setRecentViewed((prev) => {
      const existing = prev.filter(p => p.id !== product.id);
      const updated = [product, ...existing];
      return updated.slice(0, 4);
    });
  };

  return (
    <>
      <Header />
      <div className="product-wrapper">
        <div className='main-head'>
          <h1>PENDANT</h1>
          <p>Home • Pendant</p>
        </div>

        {window.innerWidth <= 768 && (
          <div className="mobile-filter-button">
            <button onClick={() => setShowMobileFilter(true)}>Filter</button>
          </div>
        )}

        {showMobileFilter && (
          <div className="filter-overlay" onClick={() => setShowMobileFilter(false)}></div>
        )}

        <div className="product-page">
          <div className={`sidebar ${showMobileFilter ? 'show' : ''}`}>
            <div className="sidebar-header">
              <h3 className='Filter'>FILTER BY</h3>
              <button className="close-filter" onClick={() => setShowMobileFilter(false)}>×</button>
            </div>

            <button className="clear-button" onClick={clearFilters}>Clear All</button>

            <h4 className='price'>Price</h4>
            <input
              type="number"
              value={priceRange.min}
              onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
              placeholder="Min"
            />
            <input
              type="number"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
              placeholder="Max"
            />

            <h4 className='brand'>Brand</h4>
            {uniqueTypes.map((type, i) => (
              <div key={i}>
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleCheckboxChange(type, selectedTypes, setSelectedTypes)}
                />
                <label style={{ marginLeft: '6px' }}>{type}</label>
              </div>
            ))}

            <h4 className='material'> Material</h4>
            {uniqueMaterials.map((mat, i) => (
              <div key={i}>
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(mat)}
                  onChange={() => handleCheckboxChange(mat, selectedMaterials, setSelectedMaterials)}
                />
                <label style={{ marginLeft: '6px' }}>{mat}</label>
              </div>
            ))}

            <h4 className='all-product'>All Products</h4>
            {uniqueCategories.map((cat, i) => (
              <div key={i}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => handleCheckboxChange(cat, selectedCategories, setSelectedCategories)}
                />
                <label style={{ marginLeft: '6px' }}>{cat}</label>
              </div>
            ))}
          </div>

          <div className="main-content">
            <div className="product-grid">
              {filteredProducts.slice(0, visibleCount).map((product, index) => (
                <ProductCard key={index} product={product} onClick={() => handleProductClick(product)} />
              ))}
            </div>

            {visibleCount < filteredProducts.length && (
              <div className="load-more-section">
                <p className="product-count">
                  Showing {visibleCount} of {filteredProducts.length} products
                </p>
                <button className="load-more-button" onClick={handleLoadMore}>
                  Load More Items
                </button>
              </div>
            )}
          </div>
        </div>

        {recentViewed.length > 0 && (
          <div className="recent-viewed-section">
            <h3>Recently Viewed</h3>
            <div className="product-grid recent-grid">
              {recentViewed.map((product, index) => (
                <ProductCard key={"recent-" + index} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
      <ShippingFeatures />
      <HomePageFooter />
    </>
  );
};

const ProductCard = ({ product, onClick }) => {
  const { addToCart } = useCart();
  const [currentImage, setCurrentImage] = useState(product.image1);
  const { addToWishlist } = useWishlist();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    addToWishlist(product);
  };

  return (
    <div>
      <section onClick={onClick}>
        <div className="product-card">
          <div
            className="image-container"
            onMouseEnter={() => setCurrentImage(product.image2)}
            onMouseLeave={() => setCurrentImage(product.image1)}
          >
            <img src={currentImage} alt={product.name} />
            <button className="add-to-cart" onClick={handleAddToCart}>ADD TO CART</button>
            <div className="top-icons">
              <PiStarThin className='cart-icon' onClick={handleAddToWishlist} style={{ cursor: 'pointer' }} /><span onClick={handleAddToWishlist} style={{ cursor: 'pointer' }}>Wishlist</span>
            </div>
          </div>
          <div className="product-info">
            <p className="category">{product.category}</p>
            <h4>{product.name}</h4>
            <div className="price">
              <span>${product.price}</span>
              {product.oldPrice && <del>${product.oldPrice}</del>}
            </div>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Pendant;
