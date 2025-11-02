import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, FileText, PawPrint } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative">
              <span className="text-2xl sm:text-3xl font-heading font-bold text-gradient hover:scale-105 transition-transform duration-300">
                Beau Lazear
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-500 to-brand-pink-500 group-hover:w-full transition-all duration-300" />
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);

              return (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className={`
                    relative px-3 sm:px-4 py-2 rounded-xl font-medium text-sm sm:text-base
                    transition-all duration-300 flex items-center gap-1.5
                    ${
                      active
                        ? 'text-brand-600 bg-brand-100'
                        : 'text-gray-700 hover:text-brand-600 hover:bg-brand-50'
                    }
                  `}
                >
                  {Icon && <Icon size={16} className="hidden sm:block" />}
                  <span>{link.label}</span>
                  {active && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500 to-brand-pink-500 rounded-full" />
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
