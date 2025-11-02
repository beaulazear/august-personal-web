import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, FileText, PawPrint, Menu, X } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Work', path: '/', icon: null },
    { label: 'Resume', path: '/resume', icon: FileText },
    { label: 'Animal Care', path: '/beaus-animal-care', icon: PawPrint },
    { label: 'Contact', path: '/contact', icon: Mail },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '';
    }
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-brand-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Name/Logo */}
          <button
            onClick={() => handleNavigation('/')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative">
              <span className="text-2xl sm:text-3xl font-heading font-bold text-gradient hover:scale-105 transition-transform duration-300">
                Beau Lazear
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-500 to-brand-pink-500 group-hover:w-full transition-all duration-300" />
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);

              return (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`
                    relative px-4 py-2 rounded-xl font-medium text-base
                    transition-all duration-300 flex items-center gap-1.5
                    ${
                      active
                        ? 'text-brand-600 bg-brand-100'
                        : 'text-gray-700 hover:text-brand-600 hover:bg-brand-50'
                    }
                  `}
                >
                  {Icon && <Icon size={16} />}
                  <span>{link.label}</span>
                  {active && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500 to-brand-pink-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-700 hover:text-brand-600 hover:bg-brand-50 transition-all duration-300 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white/95 backdrop-blur-xl -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);

              return (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-base
                    transition-all duration-300
                    ${
                      active
                        ? 'text-brand-600 bg-brand-100'
                        : 'text-gray-700 hover:text-brand-600 hover:bg-brand-50'
                    }
                  `}
                >
                  {Icon && <Icon size={20} />}
                  <span>{link.label}</span>
                  {active && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-pink-500" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
