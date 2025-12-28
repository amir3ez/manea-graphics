
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'أعمالنا', href: '#portfolio' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/gMSZKtTZ/2.png" alt="Manea Graphics Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold gradient-text">مانع للجرافيكس</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/967772655825"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full gradient-bg font-bold shadow-lg shadow-purple-500/20 hover:scale-105 hover:brightness-125 hover:shadow-purple-500/40 transition-all duration-300 group"
            >
              <MessageCircle size={20} className="group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
              <span>واتساب</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#110a1f] border-t border-white/10 transition-all duration-300 ${isOpen ? 'opacity-100 visible h-screen' : 'opacity-0 invisible h-0'}`}>
        <div className="px-4 pt-4 pb-10 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-xl text-gray-300 hover:text-purple-400 py-3 border-b border-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/967772655825"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl gradient-bg font-bold text-lg hover:brightness-125 transition-all duration-300 group"
          >
            <MessageCircle size={22} className="group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
            واتساب
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
