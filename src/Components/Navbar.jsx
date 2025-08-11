import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import '../style/style.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, [lastScrollY]);

  const navLinks = [
    { label: 'Demos', href: '#Demos' },
    { label: 'Feature', href: '#Feature' },
    { label: 'Testimonia', href: '#Testimonia' },
    { label: 'FAQs', href: '#FAQs' },
    { label: 'Online Documentation', href: '/' },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-[999] bg-white/80 backdrop-blur-md shadow-md transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center justify-between px-4 py-2 h-[120px]">
        <img src="/meet-logo.png" alt="Logo" className="w-[150px] h-[150px] max-[576px]:w-[120px] max-[576px]:h-[120px]" />

        <div className="hidden md:flex gap-6 font-semibold text-black text-[16px]">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-green-600 transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-3xl">
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="flex flex-col items-center gap-3 py-4 bg-white shadow-inner md:hidden animate-slideDown">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-semibold text-black hover:text-green-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
