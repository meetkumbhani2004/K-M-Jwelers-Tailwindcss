// File: src/Components/CartPage.jsx
import React from 'react';
import { useCart } from './CartContext';
import './cartDrawer.css';
import Header from '../HomePage/Header'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom';
import { FaTruck } from "react-icons/fa";

const CartPage = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem
  } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const progress = Math.min((total / 1000) * 100, 100);
  const navigate = useNavigate();

  return (
    <div>
    < Header />
    <div className="cart-page">
      <div className='cart-title'>
      <h1>YOUR SHOPPING CART</h1>
      <p>Home • Your Shopping Cart</p>
      </div>
      <div className="cart-container">
        <div className="cart-left">
          <table>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QTY</th>
                <th>TOTAL</th>
                <th>REMOVE</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={idx}>
                  <td className="product-detail">
                    <img src={item.image1} alt={item.name} />
                    <span>{item.name}</span>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span style={{ margin: '0 10px' }}>{item.quantity || 1}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </td>
                  <td>${(item.price * (item.quantity || 1)).toFixed(2)}</td>
                  <td>
                    <button onClick={() => removeItem(item.id)} className="delete-btn">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cart-right">
          <p>THERE ARE <strong>{totalQty}</strong> ITEMS IN YOUR CART</p>
          <div className="cart-total">
            <p><strong>TOTAL:</strong> ${total.toFixed(2)}</p>
            <p>SPEND ${Math.max(1000 - total, 0).toFixed(2)} MORE FOR <span className="green">FREE SHIPPING</span></p>
          </div>

          <div className="progress-message">
            <p>SPEND ${1000 - total} MORE FOR <span className="green">FREE SHIPPING</span></p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}>< FaTruck /></div>
            </div>
            <small>Free shipping for any orders above $1,000.00</small>
          </div>

          <div className="cart-buttons">
            <button className="checkout" onClick={() => navigate('/checkout')}>
            Proceed To Checkout
          </button>
            <button className="continue" onClick={() => navigate('/product')}>Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
    < Footer />
    </div>
  );
};

export default CartPage;
