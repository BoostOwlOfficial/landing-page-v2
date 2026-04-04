import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <Logo className="h-8" variant="light" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              BoostOwl helps businesses streamline operations and connect with customers through smart technology and seamless automation.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/boostowl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-boost-accent transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="https://facebook.com/boostowl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-boost-accent transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="https://instagram.com/boostowl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-boost-accent transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://linkedin.com/company/boostowl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-boost-accent transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Product</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/#features" className="hover:text-boost-accent transition-colors">CRM Features</Link></li>
              <li><Link to="/#features" className="hover:text-boost-accent transition-colors">Inventory Management</Link></li>
              <li><Link to="/#customer-experience" className="hover:text-boost-accent transition-colors">WhatsApp Chatbot</Link></li>
              <li><Link to="/api-docs" className="hover:text-boost-accent transition-colors">API Documentation</Link></li>
              <li><Link to="/get-started" className="hover:text-boost-accent transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/contact" className="hover:text-boost-accent transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-boost-accent transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-boost-accent transition-colors">Blog</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-boost-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-usage" className="hover:text-boost-accent transition-colors">Terms of Usage</Link></li>
              <li><Link to="/data-deletion" className="hover:text-boost-accent transition-colors">Data Deletion</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-boost-accent flex-shrink-0" />
                <a href="mailto:admin@boostowl.io" className="hover:text-boost-accent transition-colors">admin@boostowl.io</a>
              </li>
              <li className="text-xs text-gray-500 mt-4">
                Bangalore, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} BoostOwl Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-usage" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
