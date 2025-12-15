import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [language, setLanguage] = useState('EN');
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center border-b border-primary/20 px-4 py-3 backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
      <div className="flex w-full max-w-7xl items-center justify-between">
        {/* Logo with Icon */}
        <Link to="/" className="flex items-center gap-3 text-navy">
          <span className="material-symbols-outlined text-primary text-3xl">menu_book</span>
          <h2 className="text-xl font-bold">Quran Academy</h2>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link 
            to="/" 
            className={`text-sm font-medium px-4 py-2 rounded-sm transition-all duration-200 ${
              isActive('/') 
                ? 'bg-primary text-white font-bold shadow-md' 
                : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium px-4 py-2 rounded-sm transition-all duration-200 ${
              isActive('/about') 
                ? 'bg-primary text-white font-bold shadow-md' 
                : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
            }`}
          >
            About
          </Link>
          <Link 
            to="/courses" 
            className={`text-sm font-medium px-4 py-2 rounded-sm transition-all duration-200 ${
              isActive('/courses') 
                ? 'bg-primary text-white font-bold shadow-md' 
                : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
            }`}
          >
            Courses
          </Link>
          <Link 
            to="/fees" 
            className={`text-sm font-medium px-4 py-2 rounded-sm transition-all duration-200 ${
              isActive('/fees') 
                ? 'bg-primary text-white font-bold shadow-md' 
                : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
            }`}
          >
            Fees
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm font-medium px-4 py-2 rounded-sm transition-all duration-200 ${
              isActive('/contact') 
                ? 'bg-primary text-white font-bold shadow-md' 
                : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <div className="flex items-center rounded-full border border-primary/30 p-1 text-sm font-bold">
            <button 
              className={`rounded-full px-3 py-1 ${language === 'EN' ? 'bg-primary text-white' : ''}`}
              onClick={() => setLanguage('EN')}
            >
              EN
            </button>
            <button 
              className={`rounded-full px-3 py-1 ${language === 'UR' ? 'bg-primary text-white' : ''}`}
              onClick={() => setLanguage('UR')}
            >
              UR
            </button>
          </div>

          {/* Login Button */}
          <Link 
            to="/login"
            className="hidden sm:flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary/20 px-4 text-sm font-bold text-primary hover:bg-primary/30 transition-colors"
          >
            Login
          </Link>

          {/* Book Demo Button */}
          <Link
            to="/registration"
            className="hidden sm:flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105"
          >
            <span className="truncate">Book Free Demo</span>
          </Link>

          {/* Call Button */}
          <a 
            href="tel:+919866763270"
            className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
            title="Call: +91 98667 63270"
          >
            <span className="material-symbols-outlined">call</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
