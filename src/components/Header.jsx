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
        <nav className="hidden items-center gap-8 md:flex">
          <Link 
            to="/" 
            className={`text-sm font-medium hover:text-primary ${isActive('/') ? 'text-primary font-bold' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium hover:text-primary ${isActive('/about') ? 'text-primary font-bold' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/courses" 
            className={`text-sm font-medium hover:text-primary ${isActive('/courses') ? 'text-primary font-bold' : ''}`}
          >
            Courses
          </Link>
          <Link 
            to="/fees" 
            className={`text-sm font-medium hover:text-primary ${isActive('/fees') ? 'text-primary font-bold' : ''}`}
          >
            Fees
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm font-medium hover:text-primary ${isActive('/contact') ? 'text-primary font-bold' : ''}`}
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
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary/20 text-primary">
            <span className="material-symbols-outlined">call</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
