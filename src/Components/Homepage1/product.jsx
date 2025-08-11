import React, {useEffect,useState} from 'react';
import './product.css';
import { FaStar } from 'react-icons/fa';
import { PiStarThin } from 'react-icons/pi';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../features/product/cart/cartSlice';
import { addToWishlist } from '../../features/product/wishlist/wishlistSlice';
import { useCart } from '../HomePage/CartContext';
import { useWishlist } from '../HomePage/WhishlistContext';


const ProductGrid = () => {
  const products = useSelector((state) => state.product);

  return (
    <div className="product-grid1">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

  const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.image1);
  const dispatch = useDispatch();

  const cartContext = useCart?.();
  const wishlistContext = useWishlist?.();

    const cart = useSelector((state) => state.cart)
    
    useEffect(() => {
      fetch('https://k-m-jwelers-default-rtdb.firebaseio.com//cart.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart),
      })
    }, [cart]);


  
const wishlist = useSelector((state) => state.whislist); // typo fixed from 'whishlist'

useEffect(() => {
    fetch('https://k-m-jwelers-default-rtdb.firebaseio.com//wishlist.json', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wishlist),
    });
}, [wishlist]);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    cartContext.addToCart(product);
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    dispatch(addToWishlist(product));
    wishlistContext.addToWishlist(product);
  };


  return (
    <div className="product-card">
      <div
        className="image-container"
        onMouseEnter={() => setCurrentImage(product.image2)}
        onMouseLeave={() => setCurrentImage(product.image1)}
      >
        <img src={currentImage} alt={product.name} />
        <button className="add-to-cart" onClick={handleAddToCart}>
          ADD TO CART
        </button>
        <div className="top-icons">
          <PiStarThin className="cart-ico" onClick={handleAddToWishlist} />
          <span onClick={handleAddToWishlist} style={{ cursor: 'pointer' }}>
            Wishlist
          </span>
        </div>
      </div>
      <div className="product-info">
        <p className="category">{product.category}</p>
        <h4>{product.name}</h4>
        <div className="price">
          <span>${product.price}</span>
          {product.oldPrice && <del>${product.oldPrice}</del>}
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="star" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;


