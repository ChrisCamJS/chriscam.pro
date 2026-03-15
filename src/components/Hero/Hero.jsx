import React from 'react';
// Importing our crisp Lucide icons for the buttons and badges
import { ArrowRight, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    // The main wrapper with plenty of padding so the nav bar doesn't cover the content
    <section className="relative bg-surface pt-16 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Copy & Calls to Action */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            
            {/* The Certification Badge - Instant credibility */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-6 border border-blue-100 shadow-sm">
              <Code2 className="w-4 h-4" />
              <span>Meta Certified Front-End Developer</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-text-main tracking-tight mb-6 leading-tight">
              Building digital <span className="text-orange-500">solutions</span> that scale.
            </h1>
            
            <p className="text-lg lg:text-xl text-text-muted mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I engineer high-performance web applications, from pixel-perfect React frontends to robust headless PHP architectures. Let's turn your complex problems into elegant logic.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#projects" 
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-slate-800 text-white font-bold hover:bg-orange-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-slate-800 font-bold border-2 border-slate-200 hover:border-slate-800 transition-all duration-300 flex items-center justify-center"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="w-full lg:w-1/2 relative">
            
            {/* Decorative background blur to make the image pop off the page */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-linear-to-tr from-blue-100 to-orange-50 rounded-full blur-3xl -z-10 opacity-70"></div>
            
            {/* Image Container with a slight rotation that straightens out when hovered */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/myself3.jpg" 
                alt="Chris Cameron" 
                className="w-full h-auto object-cover"
              />
              {/* Subtle dark gradient at the bottom for a premium studio feel */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}