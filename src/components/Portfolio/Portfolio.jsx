import React from 'react';
// Importing an external link icon to make the "View Live" buttons pop
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  // Array containing your projects, ordered strictly by technical importance
  // We prioritize React 19, APIs, and Full Stack PHP architectures first
  const projects = [
    {
      id: 1,
      title: 'Marquee Planner',
      image: '/images/marquee.JPG',
      overlayText: 'React 19 + Headless PHP',
      description: 'A complex dinner and calendar planning application. Integrates with the TMDB API to calculate "watch time" for shows and automatically blocks out calendar slots. Features a veto system and timeline views.',
      tags: [
        { name: 'React 19', bg: 'bg-cyan-100', text: 'text-cyan-700' },
        { name: 'Vite', bg: 'bg-purple-100', text: 'text-purple-700' },
        { name: 'TMDB API', bg: 'bg-yellow-100', text: 'text-yellow-700' }
      ],
      link: 'https://marquee.chrisandemmashow.com'
    },
    {
      id: 2,
      title: 'The Pantry',
      image: '/images/pantry-home-page.JPG',
      overlayText: 'Full Stack PHP',
      description: 'A robust nutritional ecosystem. Features a custom "Remix" recipe system, automated macro/micro calculations, and a secure admin portal for content moderation.',
      tags: [
        { name: 'PHP', bg: 'bg-indigo-100', text: 'text-indigo-700' },
        { name: 'MySQL', bg: 'bg-blue-100', text: 'text-blue-700' },
        { name: 'Auth', bg: 'bg-yellow-100', text: 'text-yellow-700' }
      ],
      link: 'https://pantry.chrisandemmashow.com'
    },
    {
      id: 3,
      title: 'Hilltop Welding & Maintenance',
      image: '/images/hilltop.JPG',
      overlayText: 'PHP + Tailwind (Build)',
      description: 'A full-service digital transformation for a local Ohio Valley business. Features a mobile-optimized responsive design, custom branding, and a high-performance CSS build for lightning-fast load times.',
      tags: [
        { name: 'PHP', bg: 'bg-blue-100', text: 'text-blue-700' },
        { name: 'Tailwind CLI', bg: 'bg-teal-100', text: 'text-teal-700' },
        { name: 'Branding', bg: 'bg-orange-100', text: 'text-orange-700' }
      ],
      link: 'https://hilltopweldingandmaintenancellc.com'
    },
    {
      id: 4,
      title: 'Photos UI & API',
      image: '/images/mara-central-api-image1.JPG',
      overlayText: 'React 19 + REST API',
      description: 'A decoupled photography platform. A custom PHP REST API serves JSON envelopes with metadata, consumed by a React 19 frontend with custom hooks.',
      tags: [
        { name: 'React 19', bg: 'bg-cyan-100', text: 'text-cyan-700' },
        { name: 'REST API', bg: 'bg-indigo-100', text: 'text-indigo-700' }
      ],
      link: 'https://photos.maracentral.com'
    },
    {
      id: 5,
      title: 'Custom React Portfolio Gallery',
      image: '/images/tier1-portfolio1.JPG', 
      overlayText: 'React SPA + Upwork Package',
      description: 'A premium, lightning-fast React portfolio designed specifically for artists, writers, and creatives. This is my flagship Tier One package, currently available for commission on Upwork.',
      tags: [
        { name: 'React 19', bg: 'bg-cyan-100', text: 'text-cyan-700' },
        { name: 'Tailwind CSS', bg: 'bg-teal-100', text: 'text-teal-700' },
        { name: 'Upwork Service', bg: 'bg-green-100', text: 'text-green-700' }
      ],
      link: 'https://tier-one.maracentral.com'
    },
    {
      id: 6,
      title: 'Wellness Dashboard',
      image: '/images/wellness-calculator.JPG',
      overlayText: 'PHP + Math Logic',
      description: 'A health tracking suite featuring a BMI Calculator, Caloric Needs Engine (calculating BMR & TDEE), and a custom Macronutrient Planner.',
      tags: [
        { name: 'PHP', bg: 'bg-indigo-100', text: 'text-indigo-700' },
        { name: 'Math Logic', bg: 'bg-green-100', text: 'text-green-700' }
      ],
      link: 'https://wellness.chrisandemmashow.com'
    },
    {
      id: 7,
      title: 'Sketchy',
      image: '/images/sketchy.JPG',
      overlayText: 'React + Canvas API',
      description: 'A browser-based drawing application using the HTML5 Canvas API. Users can draw, save sketches as images, and utilize template backgrounds.',
      tags: [
        { name: 'React', bg: 'bg-cyan-100', text: 'text-cyan-700' },
        { name: 'Canvas API', bg: 'bg-orange-100', text: 'text-orange-700' }
      ],
      link: 'https://sketchy.maracentral.com'
    },
    {
      id: 8,
      title: 'Podcast Platform',
      image: '/images/ce1.JPG',
      overlayText: 'PHP + MySQL',
      description: 'Official website for the podcast. Built with a custom PHP/MySQL backend to manage episodes, show notes, and RSS feeds.',
      tags: [
        { name: 'PHP', bg: 'bg-indigo-100', text: 'text-indigo-700' },
        { name: 'MySQL', bg: 'bg-blue-100', text: 'text-blue-700' }
      ],
      link: 'https://chrisandemmashow.com'
    },
    {
      id: 9,
      title: 'Ruby Roo\'s BBQ',
      image: '/images/ruby-roos.JPG',
      overlayText: 'React + CSS Themes',
      description: 'A themed restaurant website featuring a custom dark/light mode toggle and responsive menu layouts.',
      tags: [
        { name: 'React', bg: 'bg-cyan-100', text: 'text-cyan-700' },
        { name: 'CSS Themes', bg: 'bg-purple-100', text: 'text-purple-700' }
      ],
      link: 'https://bbq.maracentral.com'
    }
  ];

  return (
    // Portfolio section wrapper with custom background and padding
    <section id="projects" className="py-20 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-main mb-4">Featured Work</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            A selection of my best architectural builds, ranging from Headless React applications to full-stack PHP ecosystems.
          </p>
        </div>

        {/* Dynamic Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Mapping through our prioritized projects array */}
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
              
              {/* Image Container with hover overlay effect */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                {/* Dark overlay that fades in on hover to show the primary tech stack */}
                <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white font-bold text-lg tracking-wide">{project.overlayText}</span>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-6 grow flex flex-col">
                <h3 className="text-xl font-bold text-text-main mb-2">{project.title}</h3>
                <p className="text-text-muted text-sm mb-6 grow leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.map((tag, index) => (
                    <span key={index} className={`px-3 py-1 text-xs font-semibold rounded-full ${tag.bg} ${tag.text}`}>
                      {tag.name}
                    </span>
                  ))}
                </div>
                
                {/* Footer / Call to Action */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary font-bold hover:text-orange-500 transition-colors flex items-center gap-1 group/link"
                  >
                    View Live Project
                    <ExternalLink className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}