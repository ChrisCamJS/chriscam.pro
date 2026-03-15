import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand / Logo Area */}
          <a 
            href="#" 
            className="flex items-center gap-2 text-2xl font-bold text-text-main hover:text-orange-500 transition-colors"
            onClick={() => setIsOpen(false)} // Close menu if clicking home from mobile
          >
            <Code2 className="w-8 h-8 text-primary" />
            <span>ChrisCam.pro</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-text-muted hover:text-primary font-medium transition-colors">
              Services
            </a>
            <a href="#projects" className="text-text-muted hover:text-primary font-medium transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-orange-500 transition-all shadow-sm hover:-translate-y-0.5">
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-main hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {/* Swap between the hamburger menu and the close 'X' based on state */}
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* Conditionally renders only when isOpen is true */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-border shadow-lg absolute w-full left-0">
          <div className="px-6 py-4 space-y-2 flex flex-col">
            <a 
              href="#services" 
              onClick={() => setIsOpen(false)} 
              className="block px-4 py-3 text-text-muted hover:text-primary hover:bg-blue-50 rounded-lg font-medium text-lg transition-colors"
            >
              Services
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-text-muted hover:text-primary hover:bg-blue-50 rounded-lg font-medium text-lg transition-colors"
            >
              Portfolio
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block text-center px-5 py-3 mt-4 rounded-lg bg-primary text-white font-bold hover:bg-orange-500 transition-colors shadow-sm"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}