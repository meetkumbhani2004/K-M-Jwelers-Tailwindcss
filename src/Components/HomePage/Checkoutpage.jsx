import React, { useEffect, useState } from 'react';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState({
    city: '',
    state: '',
    zip: '',
    email: '',
    firstName: '',
    lastName: '',
    contact: '',
    area: '',
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    setUser(storedUser);
    setCart(storedCart);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
  };

  
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <h2>Nov K M</h2>
      </header>
      <div className='miidel'>
        <div className="checkout-body">

          {/* LEFT SIDE */}
          <div className="checkout-left">
            <section className="account-info">
              <h4>Contact</h4>
              {user ? (
                <>
                  <p>{user.email}</p>
                  <button onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Email or mobile phone number"
                    value={address.contact || ''}
                    onChange={(e) => setAddress({ ...address, contact: e.target.value })}
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => (window.location.href = '/login')}
                    style={{ marginTop: '8px', border: "1px solid #333"  }}
                    
                  >
                    Log In
                  </button>
                </>
              )}
            </section>

            <section className="delivery">
              <h4>Delivery</h4>
              <div className='name-flex '>
                <input
                  placeholder="First Name"
                  value={user?.firstName || address.firstName || ''}
                  onChange={(e) => setAddress({ ...address, firstName: e.target.value })}
                  readOnly={!!user}
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  placeholder="Last Name"
                  value={user?.lastName || address.lastName || ''}
                  onChange={(e) => setAddress({ ...address, lastName: e.target.value })}
                  readOnly={!!user}
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                placeholder="Email"
                value={user?.email || address.email || ''}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
                readOnly={!!user}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />


              <input
                placeholder="City"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                placeholder="State"
                value={address.state}
                onChange={(e) => setAddress({ ...address, state: e.target.value })}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                placeholder="ZIP Code"
                value={address.zip}
                onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </section>

            {/* {isAddressComplete ? ( */}
              <section className="payment">
                <h4>Payment</h4>
                <label><input type="radio" name="pay" /> UPI</label>
                <label><input type="radio" name="pay" /> Card</label>
                <label><input type="radio" name="pay" /> Bank Transfer</label><br />
                <button className="pay-now">Pay Now</button>
              </section>
            {/* ) : (
              <p className="address-warning">Please complete the address to enable payment options.</p>
            )} */}
          </div>

          {/* RIGHT SIDE */}
          <div className="checkout-right">
            <h4>Cart Summary</h4>
            {cart.map((item, i) => (
              <div key={i} className="cart-item">
                <img src={item.image1} alt={item.name} className="checkout-img" />
                <div className='name-card'>
                  <p>{item.name}</p>
                  <p>${item.price} by {item.quantity}</p>
                </div>
              </div>
            ))}
            <h4 className='total'>Total: ${subtotal.toFixed(2)}</h4>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
