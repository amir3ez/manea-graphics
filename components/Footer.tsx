
import React from 'react';
import { Instagram, Facebook, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07030e] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-2 text-right">
            <div className="flex items-center gap-3 mb-6 justify-end">
              <span className="text-2xl font-black gradient-text">مانع للجرافيكس</span>
              <img src="https://i.ibb.co/gMSZKtTZ/2.png" alt="Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md ml-auto">
              وجهتك الأولى للإبداع البصري في اليمن. نحول الأحلام إلى تصاميم ملموسة والهويات إلى علامات تجارية خالدة.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h4 className="text-white font-black text-xl mb-6">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-purple-400 transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">خدماتنا</a></li>
              <li><a href="#portfolio" className="hover:text-purple-400 transition-colors">أعمالنا</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-right">
            <h4 className="text-white font-black text-xl mb-6">تابعني</h4>
            <div className="flex gap-4 justify-end">
              <a href="https://www.instagram.com/9l7iz" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center hover:bg-purple-600 transition-all"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/9l7iz" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center hover:bg-blue-600 transition-all"><Facebook size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center hover:bg-sky-700 transition-all"><Linkedin size={20} /></a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-medium text-center md:text-right">
            حقوق النشر © 2025 مانع للجرافيكس. جميع الحقوق محفوظة
          </p>
          <div className="flex items-center gap-2 text-gray-500 font-medium">
            صنع بكل <Heart size={16} className="text-red-500 animate-pulse" /> في اليمن
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
