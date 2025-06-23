import { Phone, MapPin, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* Contact Bar */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-green-600 text-white py-2 shadow-md">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-xs md:text-sm animate-fade-in-down">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <a href="tel:0795303013" className="flex items-center gap-1 hover:underline transition">
              <Phone size={18} className="opacity-80" />
              <span className="font-semibold">Call:</span>
              <span className="tracking-wide">0795 303 013</span>
            </a>
            <span className="hidden sm:inline-block h-4 border-l border-white/30 mx-2"></span>
            <a href="https://maps.google.com/?q=Saint+Ignatius+Primary+School,+KG+19+Ave,+Kigali" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline transition">
              <MapPin size={18} className="opacity-80" />
              <span className="font-semibold">Visit:</span>
              <span className="tracking-wide">Opp. Saint Ignatius Primary School, KG 19 Ave, Kigali</span>
            </a>
          </div>
          <div className="flex items-center gap-2 font-semibold bg-white/10 rounded-full px-4 py-1 shadow-sm border border-white/20">
            <span className="text-white drop-shadow-sm">We Make Shopping</span>
            <span className="underline decoration-white decoration-2 underline-offset-4 text-yellow-200 font-bold">Easy</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group transition-transform duration-300 hover:scale-105">
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
                      ? "text-red-600 bg-red-50 shadow-inner"
                      : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-red-600 transition-transform hover:scale-110">
                <Menu size={24} />
              </button>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
