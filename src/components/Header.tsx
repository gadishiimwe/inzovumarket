import { Phone, MapPin, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <header>
        {/* Contact Bar */}
        <div className="bg-white text-red-600 py-2 border-b border-red-100 shadow-sm">
          <div className="container mx-auto px-2 flex flex-col sm:flex-row justify-between items-center text-xs md:text-sm animate-fade-in-down gap-1 sm:gap-0">
            {/* Hide contact info on mobile, show only slogan */}
            <div className="hidden sm:flex flex-row items-center gap-6 mb-1 sm:mb-0 w-full sm:w-auto text-[15px]">
              <a href="tel:0795303013" className="flex items-center gap-2 hover:underline transition whitespace-nowrap">
                <Phone size={20} className="opacity-80" />
                <span className="font-semibold">Call:</span>
                <span className="tracking-wide">0791 954 988</span>
              </a>
              <span className="hidden sm:inline-block h-6 border-l border-red-200 mx-3"></span>
              <a href="https://maps.google.com/?q=Saint+Ignatius+Primary+School,+KG+19+Ave,+Kigali" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline transition whitespace-nowrap">
                <MapPin size={20} className="opacity-80" />
                <span className="font-semibold">Visit:</span>
                <span className="tracking-wide">Opp. Saint Ignatius Primary School, KG 19 Ave, Kigali</span>
              </a>
            </div>
            <div className="flex items-center gap-2 font-semibold bg-red-50 rounded-full px-5 py-1 shadow border border-red-100 text-sm mt-1 sm:mt-0 w-full justify-center sm:w-auto">
              <span className="text-red-600 drop-shadow-sm">We Make Shopping</span>
              <span className="underline decoration-red-600 decoration-2 underline-offset-4 text-yellow-600 font-bold">Easy</span>
            </div>
          </div>
        </div>
      </header>
      {/* Main Navigation - sticky at top */}
      <nav className="bg-red-600 shadow-md sticky top-0 z-50 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group transition-transform duration-300 hover:scale-105 text-white">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-green-500 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">INZOVU</h1>
                <p className="text-xs text-gray-600">SUPERMARKET</p>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/products", label: "Products & Services" },
                { path: "/gallery", label: "Gallery" },
                { path: "/contact", label: "Contact" },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    location.pathname === path
                      ? "bg-white/20 shadow-inner text-white"
                      : "text-white hover:bg-white/10 hover:text-yellow-200"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                className="text-white hover:text-yellow-200 transition-transform hover:scale-110 focus:outline-none"
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu size={24} />
              </button>
            </div>

          </div>
        </div>
      </nav>
      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/40" onClick={() => setMobileMenuOpen(false)}></div>
      )}
      <div
        className={`md:hidden fixed top-[56px] right-0 w-[90vw] max-w-xs z-50 transition-all duration-300 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 pointer-events-none'} bg-white shadow-lg rounded-l-xl border border-red-200`}
        style={{ minHeight: mobileMenuOpen ? 'auto' : 0 }}
      >
        <div className="flex flex-col items-center py-2 gap-1">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About Us" },
            { path: "/products", label: "Products & Services" },
            { path: "/gallery", label: "Gallery" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`w-full text-center px-2 py-2 rounded-md text-[15px] font-medium transition-all duration-200 ${
                location.pathname === path
                  ? "bg-red-100 shadow-inner text-red-600"
                  : "text-black hover:bg-red-50 hover:text-red-600"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
