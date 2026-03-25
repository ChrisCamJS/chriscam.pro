// File: src/components/Services/Services.jsx
// Description: Renders a responsive grid of services and pricing packages.

import React from 'react';
import { 
  Search, 
  LayoutTemplate, 
  Briefcase, 
  ArrowRightLeft, 
  Cpu, // Swapped PenTool for Cpu to represent AI/API integrations
  ShoppingCart, 
  Database, 
  MonitorSmartphone, 
  Wrench, 
  Rocket 
} from 'lucide-react';

export default function Services() {
  // Array containing 10 curated service offerings.
  // Each object includes a unique Lucide icon component to render dynamically in the grid.
  const services = [
    { 
      id: 1, 
      title: 'Site Audit & Consultation', 
      price: 'Starts at $49', 
      icon: <Search className="w-8 h-8 text-primary" />, 
      desc: 'A comprehensive technical tear-down of your current site, delivered with a prioritized, actionable fix list.' 
    },
    { 
      id: 2, 
      title: 'Single-Page Landing Site', 
      price: 'Starts at $99', 
      icon: <LayoutTemplate className="w-8 h-8 text-primary" />, 
      desc: 'High-converting, lightning-fast, and mobile-responsive. Perfect for local shops or new product launches.' 
    },
    { 
      id: 3, 
      title: 'Personal Portfolio / Blog', 
      price: 'Starts at $299', 
      icon: <Briefcase className="w-8 h-8 text-primary" />, 
      desc: 'Showcase your creative work or writing with a bespoke, effortlessly elegant digital presence.' 
    },
    { 
      id: 4, 
      title: 'React Frontend Migration', 
      price: 'Starts at $499', 
      icon: <ArrowRightLeft className="w-8 h-8 text-primary" />, 
      desc: 'Rescue your dusty legacy site and upgrade it to a blazing-fast, modern React Single Page Application.' 
    },
    { 
      id: 5, 
      title: 'AI & API Integrations', 
      price: 'Starts at $599', 
      icon: <Cpu className="w-8 h-8 text-primary" />, 
      desc: 'Automate workflows or add smart functionality using cutting-edge tools like the Gemini API.' 
    },
    { 
      id: 6, 
      title: 'E-Commerce Setup', 
      price: 'Starts at $799', 
      icon: <ShoppingCart className="w-8 h-8 text-primary" />, 
      desc: 'Secure, conversion-optimized digital storefronts designed to scale with your growing revenue.' 
    },
    { 
      id: 7, 
      title: 'Headless Architecture', 
      price: 'Starts at $999', 
      icon: <Database className="w-8 h-8 text-primary" />, 
      desc: 'Decoupled front-end and back-end environments (like a headless PHP API) for ultimate speed and flexibility.' 
    },
    { 
      id: 8, 
      title: 'Full-Stack Web App', 
      price: 'Starts at $1,499', 
      icon: <MonitorSmartphone className="w-8 h-8 text-primary" />, 
      desc: 'A heavy-hitting, custom React front-end seamlessly paired with a robust PHP/MySQL backend.' 
    },
    { 
      id: 9, 
      title: 'Ongoing Maintenance', 
      price: 'Starts at $99/mo', 
      icon: <Wrench className="w-8 h-8 text-primary" />, 
      desc: 'Monthly technical support, security patches, and database backups so you can sleep soundly.' 
    },
    { 
      id: 10, 
      title: 'The Enterprise Solution', 
      price: 'Custom Quote', 
      icon: <Rocket className="w-8 h-8 text-primary" />, 
      desc: 'Sprawling, complex digital infrastructure engineered strictly to your exact, uncompromising specifications.' 
    }
  ];

  return (
    // Main wrapper with vertical padding and background color from your Tailwind config
    <section id="services" className="py-20 bg-body">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header: Highlight credentials to build immediate authority */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-main mb-4">Services & Pricing</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            From targeted audits to massive full-stack applications. Transparent pricing, pristine code, 
            and scalable solutions engineered by a Meta & Google Certified Developer.
          </p>
        </div>
        
        {/* CSS Grid layout: 1 column on mobile, 2 on tablets, 3 on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Loop through the services array to dynamically render the pricing cards */}
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-surface p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              
              {/* Icon Container with a subtle background pop */}
              <div className="mb-6 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">
                {service.icon}
              </div>
              
              {/* Text Content */}
              <h3 className="text-xl font-bold text-text-main mb-3">{service.title}</h3>
              {/* Using flex-grow on the description ensures the price always sits at the bottom of the card, even if text lengths vary */}
              <p className="text-text-muted mb-6 grow">{service.desc}</p>
              
              {/* Pricing Display */}
              <div className="text-lg font-semibold text-primary border-t border-border pt-4 mt-auto">
                {service.price}
              </div>

            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}