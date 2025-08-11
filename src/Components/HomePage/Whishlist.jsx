import './whishlist.css';
import Header from './Header';
import HomePageFooter from '../Footer/Footer';
import { useWishlist } from './WhishlistContext';
import { IoTrashBin } from "react-icons/io5";

const Whishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div>
      <Header />
      <div className='wishlist-page'>
        <div className='cart-title'>
          <h1>Your Wishlist</h1>
          <p>Home • Wishlist</p>
        </div>

        {wishlistItems.length === 0 ? (
          <p style={{ textAlign: 'center' }}>Your wishlist is empty.</p>
        ) : (
          wishlistItems.map((item) => (
            <div className='wishlist-item' key={item.id}>
              <button className="remove-btn" onClick={() => removeFromWishlist(item.id)}>
                <IoTrashBin />
              </button>
              <img src={item.image1} alt={item.name} />
              <div className="wishlist-info">
                <h4>{item.name}</h4>
                <div className="price">
                  <span>${item.price}</span>
                  {item.oldPrice && <del>${item.oldPrice}</del>}
                </div>
                <p>{new Date().toDateString()}</p>
              </div>
              <button className="quick-view">Quick View</button>
            </div>
          ))
        )}
      </div>
      <HomePageFooter />
    </div>
  );
};

export default Whishlist;
