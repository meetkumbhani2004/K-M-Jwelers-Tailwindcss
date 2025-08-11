import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import './App.css'
import { CartProvider } from './Components/HomePage/CartContext';
import MainHome from './Components/MainHome';
import HeroSlider from './Components/Homepage1/Homepage1';
import LoginPage from './Components/Account/Login';
import RegisterPage from './Components/Account/Register';
import CheckoutPage from './Components/HomePage/Checkoutpage';
import MainProduct from './Components/Product/Product';
import Bracelets from './Components/Product/Bracelets';
import Necklace from './Components/Product/Necklace';
import CharmJweler from './Components/Product/CharmJweler';
import Pendant from './Components/Product/Pendant';
import Rings from './Components/Product/Rings';
import CartPage from './Components/HomePage/CartPage';
//import NewsletterPopup from './Components/NewsletterPopup';
import Error from './Components/Menu/Pages/Error';
import AboutUs from './Components/Menu/Pages/About-us';
import Contact from './Components/Menu/Pages/Contact Us';
import FAQs from './Components/Menu/Pages/FAQS';
import Whishlist from './Components/HomePage/Whishlist';
import { WishlistProvider } from './Components/HomePage/WhishlistContext';


function App() {
  return (
    <CartProvider>
    <WishlistProvider>
    <Router>
      {/* <NewsletterPopup /> */}
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/Homepage1" element={< HeroSlider />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/whislist" element={<Whishlist />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product" element={<MainProduct />} />
        <Route path="/Bracelets" element={<Bracelets />} />
        <Route path="/Necklace" element={<Necklace />} />
        <Route path="/Charmjweler" element={<CharmJweler />} />
        <Route path="/Rings" element={<Rings />} />
        <Route path="/Pendant" element={<Pendant />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/error404" element={<Error />} />
        <Route path="/homepage" element={<HeroSlider/>} />
        <Route path="/shopping" element={<MainProduct/>} />
        <Route path="/About" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faqs" element={<FAQs/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    </WishlistProvider>
    </CartProvider>
  );
}

export default App;
