import './Product.css';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { PiStarThin } from 'react-icons/pi';
import { useCart } from '../HomePage/CartContext';
import { useWishlist } from '../HomePage/WhishlistContext';
import Header from '../HomePage/Header';
import HomePageFooter from '../Footer/Footer';
import ShippingFeatures from '../HomePage/ShipingFeature';

// Redux
import { useDispatch } from 'react-redux';
import { addToCart as addToCartRedux } from '../../features/product/cart/cartSlice';
import { addToWishlist as addToWishlistRedux } from '../../features/product/wishlist/wishlistSlice';

//allproduct
import {allProducts} from '../../features/product/Braceletsproduct'; 

const Bracelets = () => {
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
          <h1>BRACELETS</h1>
          <p>Home • Bracelets</p>
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
              <button className="close-filter" onClick={() => setShowMobileFilter(false)}>×</button>

              <h3 className='Filter'>FILTER BY</h3>
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

            <h4 className='material'>Material</h4>
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
  const [currentImage, setCurrentImage] = useState(product.image1);

  const cartContext = useCart?.();
  const wishlistContext = useWishlist?.();
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();
      cartContext.addToCart(product);
      dispatch(addToCartRedux(product));
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
      wishlistContext.addToWishlist(product);
      dispatch(addToWishlistRedux(product));
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
              <PiStarThin className='cart-icon' onClick={handleAddToWishlist} style={{ cursor: 'pointer' }} />
              <span onClick={handleAddToWishlist} style={{ cursor: 'pointer' }}>Wishlist</span>
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

export default Bracelets;
