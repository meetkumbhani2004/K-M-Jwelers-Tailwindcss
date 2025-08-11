import React, { useState, useRef, useEffect } from 'react';
import './homeheader.css';
import { FaChevronDown } from "react-icons/fa";
import { IoMdClose, IoMdSearch } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import { useCart } from './CartContext';
import { PiStarThin } from "react-icons/pi";
import { LuUserRound } from "react-icons/lu";
import { useWishlist } from './WhishlistContext';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showAccountPanel, setShowAccountPanel] = useState(false);
  const [showMobileDrawer, setShowMobileDrawer] = useState(false);
  const [user, setUser] = useState(null);
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeProductSubmenu, setActiveProductSubmenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [activePagesSubmenu, setActivePagesSubmenu] = useState(null);
  const [blogOpen, setBlogOpen] = useState(false);
  const [activeBlogSubmenu, setActiveBlogSubmenu] = useState(null);


  const overlayRef = useRef(null);
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalWishlistItems = wishlistItems.length;

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(currentUser);
  }, []);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(e.target) &&
        !e.target.closest(".nav-right-labeled")
      ) {
        setShowSearch(false);
        setShowAccountPanel(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    setShowAccountPanel(false);
    navigate("/login");
  };

  // Mobile menu data
  const collectionMenu = [
    {
      heading: "Best Sellers",
      items: [
        { title: "New Arrival", link: "/collections/new-arrival" },
        { title: "Top Trending", link: "/collections/top-trending" },
        { title: "Denim Collection", link: "/collections/denim-collection" },
      ]
    },
    {
      heading: "Collection Page",
      items: [
        { title: "Left Sidebar", link: "/collections/left-sidebar" },
        { title: "Right Sidebar", link: "/collections/right-sidebar" },
        { title: "Top Sidebar", link: "/collections/top-sidebar" },
        { title: "Without Sidebar", link: "/collections/without-sidebar" },
      ]
    },
    {
      heading: "Canvas Layout",
      items: [
        { title: "Canvas On Left", link: "/collections/canvas-left" },
        { title: "Canvas On Top", link: "/collections/canvas-top" },
        { title: "Canvas On Bottom", link: "/collections/canvas-bottom" },
        { title: "Full Width", link: "/collections/full-width" },
      ]
    },
    {
      heading: "Pagination",
      items: [
        { title: "Pagination", link: "/collections/pagination" },
        { title: "Load More Button", link: "/collections/load-more" },
        { title: "Infinity Scroll", link: "/collections/infinity-scroll" },
      ]
    }
  ];

  const productMenu = [
  {
    heading: "Product Detail",
    items: [
      { title: "Default", link: "/products/detail-default" },
      { title: "Thumb Left 1", link: "/products/thumb-left-1" },
      { title: "Thumb Left 2", link: "/products/thumb-left-2" },
      { title: "Thumb Right", link: "/products/thumb-right" },
      { title: "Deals Countdown", link: "/products/deals-countdown" },
      { title: "Accordion V1", link: "/products/tab-accordion-v1" },
      { title: "Accordion V2", link: "/products/tab-accordion-v2" },
    ]
  },
  {
    heading: "Image & Grid",
    items: [
      { title: "Thumb Grid 1", link: "/products/thumb-grid-1" },
      { title: "Thumb Grid 2", link: "/products/thumb-grid-2" },
      { title: "Image Grid", link: "/products/image-grid" },
      { title: "Image Scroll", link: "/products/image-scroll" },
      { title: "Image Slider 1", link: "/products/image-slider-1" },
      { title: "Image Slider 2", link: "/products/image-slider-2" },
      { title: "3D AR Models", link: "/products/3d-ar-models" },
    ]
  },
  {
    heading: "Advanced",
    items: [
      { title: "Product Video", link: "/products/video" },
      { title: "Pre-Order", link: "/products/pre-order" },
      { title: "Variant Dropbox", link: "/products/variant-dropbox" },
      { title: "Variant Swatch", link: "/products/variant-swatch" },
      { title: "Variant Pattern", link: "/products/variant-pattern" },
      { title: "Sticky Add to Cart", link: "/products/sticky-add" },
    ]
  },
  {
    heading: "Pagination",
    items: [
      { title: "Pagination", link: "/products/pagination" },
      { title: "Load More", link: "/products/load-more" },
      { title: "Infinity Scroll", link: "/products/infinity-scroll" },
    ]
  }
];

const pagesMenu = [
  {
    heading: "Company Pages",
    items: [
      { title: "404 Error", link: "/error404" },
      { title: "About Us", link: "/about" },
      { title: "Contact Us", link: "/contact" },
      { title: "FAQs Page", link: "/faqs" },
    ]
  },
  {
    heading: "Store Info",
    items: [
      { title: "Store Direction", link: "/store-direction" },
      { title: "Store Location", link: "/store-location" },
      { title: "Testimonials", link: "/testimonials" },
    ]
  }
];

const blogMenu = [
  {
    heading: "Blog Layouts",
    items: [
      { title: "Left Sidebar", link: "/blog/left-sidebar" },
      { title: "Right Sidebar", link: "/blog/right-sidebar" },
      { title: "No Sidebar", link: "/blog/no-sidebar" },
      { title: "List View", link: "/blog/list" },
      { title: "Column View", link: "/blog/columns" },
    ]
  },
  {
    heading: "Blog Detail",
    items: [
      { title: "Left Sidebar", link: "/blog/detail-left" },
      { title: "Right Sidebar", link: "/blog/detail-right" },
      { title: "No Sidebar", link: "/blog/detail-none" },
    ]
  }
];


  return (
    <div className='Header-home'>
      <div className={`Header ${showSearch ? 'blurred' : ''}`}>
        <header className="emillia-header">
          <nav className="nav-bar">
            <div className="nav-left">
              {/* Hamburger menu for mobile */}
              <div className='menubar'>
              <button className="hamburger-menu" onClick={() => setShowMobileDrawer(true)}>
                &#9776;
              </button>
              <IoSearchOutline className="cart-icon1" onClick={() => setShowSearch(true)} />
              </div>

              <ul>
                <li onClick={() => navigate('/')}>Home</li>
                {['Collections', 'Products', 'Pages', 'Blog'].map((item) => (
                  <li
                    key={item}
                    className={activeDropdown === item.toLowerCase() ? 'active' : ''}
                    onMouseEnter={() => toggleDropdown(item.toLowerCase())}
                  >
                    {item}
                    <FaChevronDown className="arrow-icon" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="logo">K M</div>

            <div className="nav-right-labeled">
              <IoSearchOutline className="cart-icon" onClick={() => setShowSearch(true)} />
              <span className='text-h' onClick={() => setShowSearch(true)}>Search</span>

              <LuUserRound className="cart-icon" onClick={() => setShowAccountPanel(true)} />
              <span className='text-h' onClick={() => setShowAccountPanel(true)}>Account</span>

              <PiStarThin className="cart-icon3" onClick={() => navigate('/whislist')} />
              <span className="cart-icon-wrapper" onClick={() => navigate('/whislist')}>
                <span className='text-h'>Wishlist</span>
                {totalWishlistItems > 0 &&  <span className="cart-count-badge1">{totalWishlistItems}</span>
                }
              </span>

              <IoBagHandleOutline className="cart-icon2" onClick={() => navigate('/cart')} />
              <span className="cart-icon-wrapper" onClick={() => navigate('/cart')}>
                <span className='text-h'>Cart</span>
                {totalItems > 0 && <span className="cart-count-badge">{totalItems}</span>}
              </span>
            </div>
          </nav>
          {activeDropdown && (
            <div
              className="dropdown-menu"
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {/* Collections Example */}
          {activeDropdown === 'collections' && (
            <div className="dropdown-content1">
              <div>
                <h4>Best Sellers</h4>
                <p>New Arrival</p>
                <p>Top Trending</p>
                <p>Denim Collection</p>
              </div>
              <div>
                <h4>Collection Page</h4>
                <p>Collection Left Sidebar</p>
                <p>Collection Right Sidebar</p>
                <p>Collection Top Sidebar</p>
                <p>Without Sidebar</p>
              </div>
              <div>
                <h4>Collection Page</h4>
                <p>Canvas On Left</p>
                <p>Canvas On Top</p>
                <p>Canvas On Bottom</p>
                <p>Full Width</p>
              </div>
              <div>
                <h4>Collection Page</h4>
                <p>Pagination</p>
                <p>Load More Button</p>
                <p>Infinity Scroll</p>
              </div>
            </div>
          )}
          {activeDropdown === 'products' && (
            <div className="dropdown-content1">
              <div>
                <h4>Product Detail</h4>
                 <p>Product Detail Default</p>
                <p>Product Detail Thumb Left 1</p>
                <p>Product Detail Thumb Left 2</p>
                <p>Product Detail Thumb Right</p>
                <p>Product Deals Countdown</p>
                <p>Product Detail Tab Accordion V1</p>
                <p>Product Detail Tab Accordion V2</p>
              </div>
              <div>
                <h4>Product Detail</h4>
                <p>Product Detail Thumb Grid 1</p>
                <p>Product Detail Thumb Grid 2</p>
                <p>Product Detail Image Grid</p>
                <p>Product Detail Image Scroll</p>
                <p>Product Detail Image Slider 1</p>
                <p>Product Detail Image Slider 2</p>
                <p>Product 3D, AR Models</p>
              </div>
              <div>
                <h4>Product Detail</h4>
               <p>Product Video</p>
               <p>Product Pre-Order</p>
               <p>Product Variant Dropbox Style</p>
               <p>Product Variant Image Swatch</p>
               <p>Product Variant Pattern</p>
               <p>Product Sticky Add To Cart</p>
              </div>
              <div>
                <h4>Product Detail</h4>
                <p>Pagination</p>
                <p>Load More Button</p>
                <p>Infinity Scroll</p>
              </div>
            </div>
          )}
          {activeDropdown === 'pages' && (
            <div className="dropdown-content1">
              <div>
                
               <p onClick={() => navigate('/error404')} style={{ cursor: 'pointer' }}>404 Error</p>
               <p onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>About Us</p>
               <p onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>Contact us</p>
               <p onClick={() => navigate('/faqs')} style={{ cursor: 'pointer' }}>FAQs Page</p>
               <p>Store Direction Page</p>
               <p>Store Location page</p>
               <p>Testimonials Page</p>
              </div>
            </div>
          )}
          {activeDropdown === 'blog' && (
            <div className="dropdown-content1">
                <div>
               <p>Blog Left Sidebar</p>
               <p>Blog Right Sidebar</p>
               <p>Blog Without Sidebar</p>
               <p>Blog List View</p>
               <p>Blog Column View</p>
               <p>Blog Detail Left Sidebar</p>
               <p>Blog Detail Right Sidebar</p>
               <p>Blog Detail Without Sidebar</p>.
                </div>
            </div>
          )}
            </div>
          )}
        </header>

        {/* 🔍 Search Overlay */}
        {showSearch && (
          <div className="search-overlay-wrapper">
            <div className="search-overlay" ref={overlayRef}>
              <div className="search-top">
                <input type="text" placeholder="Enter Your Keywords" />
                <button className="search-btn"><IoMdSearch /></button>
                
              </div>
              <div className="trending-tags">
                <strong>SEARCH TRENDING :</strong>
                <div className="tags">
                  <span>Gold</span>
                  <span>Silver</span>
                  <span>Anklets</span>
                  <span>Bracelets</span>
                  <button className="close-btn" onClick={() => setShowSearch(false)}><IoMdClose /></button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 👤 Account Panel */}
        {showAccountPanel && (
          <div className="account-panel-wrapper">
            <div className="account-panel">
              <button className="close-panel-btn" onClick={() => setShowAccountPanel(false)}>
                <IoMdClose />
              </button>
              <div className="account-content">
                <h2>K M</h2>
                <hr />
                <div className="section">
                  <h4>CUSTOMER ACCOUNT</h4>
                  {user ? (
                    <>
                      <p className='section1'>{user.firstName} {user.lastName}</p>
                      <p className='section1' onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</p>
                    </>
                  ) : (
                    <>
                      <p className='section1' onClick={() => { setShowAccountPanel(false); navigate('/login'); }} style={{ cursor: 'pointer' }}>Login</p>
                      <p className='section1' onClick={() => { setShowAccountPanel(false); navigate('/register'); }} style={{ cursor: 'pointer' }}>Register</p>
                    </>
                  )}
                  <p>Wishlist</p>
                  <p onClick={() => { setShowAccountPanel(false); navigate('/checkout'); }} style={{ cursor: 'pointer' }}>Check out</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 📱 Mobile Side Drawer */}
        {showMobileDrawer && (
          <div className="mobile-drawer">
             
            <div className="drawer-header">
            <IoSearchOutline className="cart-icon1" onClick={() => setShowSearch(true)} />
              <button className='drawer-close' onClick={() => setShowMobileDrawer(false)}>&times;</button>
            </div>
            <ul className="drawer-links">
              <li onClick={() => { setShowMobileDrawer(false); navigate('/'); }}>Home</li>

              {/* Collections Accordion */}
              <li>
                <div onClick={() => setCollectionOpen(!collectionOpen)} className="drawer-toggle">
                  Collections {collectionOpen ? '▲' : '▼'}
                </div>
                {collectionOpen && (
                  <ul className="submenu">
                    {collectionMenu.map((menu, index) => (
                      <li key={index}>
                        <div
                          className="drawer-toggle"
                          onClick={() =>
                            setActiveSubmenu(activeSubmenu === index ? null : index)
                          }
                        >
                          {menu.heading} {activeSubmenu === index ? '▲' : '▼'}
                        </div>
                        {activeSubmenu === index && (
                          <ul className="nested-submenu">
                            {menu.items.map((item, idx) => (
                              <li key={idx} onClick={() => {
                                setShowMobileDrawer(false);
                                navigate(item.link);
                              }}>
                                {item.title}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* product */}

                <li>
                  <div onClick={() => setProductsOpen(!productsOpen)} className="drawer-toggle">
                    Products {productsOpen ? '▲' : '▼'}
                  </div>
                  {productsOpen && (
                    <ul className="submenu">
                      {productMenu.map((menu, index) => (
                        <li key={index}>
                          <div
                            className="drawer-toggle"
                            onClick={() =>
                              setActiveProductSubmenu(activeProductSubmenu === index ? null : index)
                            }
                          >
                            {menu.heading} {activeProductSubmenu === index ? '▲' : '▼'}
                          </div>
                          {activeProductSubmenu === index && (
                            <ul className="nested-submenu">
                              {menu.items.map((item, idx) => (
                                <li key={idx} onClick={() => {
                                  setShowMobileDrawer(false);
                                  navigate(item.link);
                                }}>
                                  {item.title}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                  
                  {/* pages */}
                  <li>
                    <div onClick={() => setPagesOpen(!pagesOpen)} className="drawer-toggle">
                      Pages {pagesOpen ? '▲' : '▼'}
                    </div>
                    {pagesOpen && (
                      <ul className="submenu">
                        {pagesMenu.map((menu, index) => (
                          <li key={index}>
                            <div
                              className="drawer-toggle"
                              onClick={() =>
                                setActivePagesSubmenu(activePagesSubmenu === index ? null : index)
                              }
                            >
                              {menu.heading} {activePagesSubmenu === index ? '▲' : '▼'}
                            </div>
                            {activePagesSubmenu === index && (
                              <ul className="nested-submenu">
                                {menu.items.map((item, idx) => (
                                  <li key={idx} onClick={() => {
                                    setShowMobileDrawer(false);
                                    navigate(item.link);
                                  }}>
                                    {item.title}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* blog */}
                    <li>
                      <div onClick={() => setBlogOpen(!blogOpen)} className="drawer-toggle">
                        Blog {blogOpen ? '▲' : '▼'}
                      </div>
                      {blogOpen && (
                        <ul className="submenu">
                          {blogMenu.map((menu, index) => (
                            <li key={index}>
                              <div
                                className="drawer-toggle"
                                onClick={() =>
                                  setActiveBlogSubmenu(activeBlogSubmenu === index ? null : index)
                                }
                              >
                                {menu.heading} {activeBlogSubmenu === index ? '▲' : '▼'}
                              </div>
                              {activeBlogSubmenu === index && (
                                <ul className="nested-submenu">
                                  {menu.items.map((item, idx) => (
                                    <li key={idx} onClick={() => {
                                      setShowMobileDrawer(false);
                                      navigate(item.link);
                                    }}>
                                      {item.title}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
            </ul>

           <p> <strong>Call Us:</strong>+123-456-789</p>
           <p><strong>Email:</strong>info@example.com</p>
           <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-tiktok"></i>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
