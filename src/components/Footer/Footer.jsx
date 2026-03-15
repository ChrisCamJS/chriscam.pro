import React from 'react';
// Keeping Lucide for your non-brand UI icons
import { Code2 } from 'lucide-react';
// Importing the heavy hitters from react-icons for our brand logos
import { FaGithub, FaYoutube, FaLinkedin, FaUpwork, FaInstagram, FaFacebook } from 'react-icons/fa6';

export default function Footer() {
  // Snagging the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    // A dark, high-contrast footer to anchor the bottom of the page
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand and Copyright Area */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <Code2 className="w-6 h-6 text-orange-500" />
              <span className="font-bold text-white text-xl">Chris Cameron</span>
            </div>
            <span className="text-sm">© {currentYear}. All rights reserved.</span>
          </div>

          {/* Social Links Grid - Ready for your URLs! */}
          <div className="flex flex-wrap justify-center gap-5">
            <a href="https://github.com/ChrisCamJS" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:-translate-y-1 transform duration-300" aria-label="GitHub">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@ChrisThePlantBased" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:-translate-y-1 transform duration-300" aria-label="YouTube">
              <FaYoutube className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/christopher-cameron-382b2992/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:-translate-y-1 transform duration-300" aria-label="LinkedIn">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://www.upwork.com/freelancers/~01b5d53ca88901397e?mp_source=share" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:-translate-y-1 transform duration-300" aria-label="Upwork">
              <FaUpwork className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/chris_cameron_503/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:-translate-y-1 transform duration-300" aria-label="Instagram">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Tech Stack & Personal Touch */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            Engineered in the Ohio Valley. Fueled by plants and pure logic.
          </p>
          <p>
            Built with <span className="text-cyan-400 font-semibold">React 19</span> & <span className="text-teal-400 font-semibold">Tailwind v4</span>
          </p>
        </div>

      </div>
    </footer>
  );
}