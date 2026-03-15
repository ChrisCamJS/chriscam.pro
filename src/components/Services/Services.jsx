import { 
  Search, 
  LayoutTemplate, 
  Briefcase, 
  ArrowRightLeft, 
  PenTool, 
  ShoppingCart, 
  Database, 
  MonitorSmartphone, 
  Wrench, 
  Rocket 
} from 'lucide-react';

export default function Services() {
  // Array containing our 10 curated service offerings
  // Each object includes a unique Lucide icon component to render in the grid
  const services = [
    { id: 1, title: 'Site Audit & Consultation', price: 'Starts at $49', icon: <Search className="w-8 h-8 text-primary" />, desc: 'A thorough technical review of your current site with actionable fixes.' },
    { id: 2, title: 'Single-Page Landing Site', price: 'Starts at $99', icon: <LayoutTemplate className="w-8 h-8 text-primary" />, desc: 'Perfect for small businesses or new product launches. Fast, responsive, and clean.' },
    { id: 3, title: 'Personal Portfolio / Blog', price: 'Starts at $299', icon: <Briefcase className="w-8 h-8 text-primary" />, desc: 'Showcase your work or writing with a bespoke, lightning-fast setup.' },
    { id: 4, title: 'React Frontend Migration', price: 'Starts at $499', icon: <ArrowRightLeft className="w-8 h-8 text-primary" />, desc: 'Upgrade your dusty old HTML/PHP site to a modern React Single Page Application.' },
    { id: 5, title: 'Custom WordPress Theme', price: 'Starts at $599', icon: <PenTool className="w-8 h-8 text-primary" />, desc: 'Fully tailored WordPress development so you stand out from the generic templates.' },
    { id: 6, title: 'E-Commerce Setup', price: 'Starts at $799', icon: <ShoppingCart className="w-8 h-8 text-primary" />, desc: 'Get selling online with a secure, optimized WooCommerce or Shopify integration.' },
    { id: 7, title: 'Headless CMS Integration', price: 'Starts at $999', icon: <Database className="w-8 h-8 text-primary" />, desc: 'Decoupled backend architecture for ultimate speed and flexibility.' },
    { id: 8, title: 'Full-Stack Web App', price: 'Starts at $1,499', icon: <MonitorSmartphone className="w-8 h-8 text-primary" />, desc: 'React front-end paired with a robust PHP/MySQL backend. (Other Backend Systems Available)' },
    { id: 9, title: 'Ongoing Maintenance', price: 'Starts at $99/mo', icon: <Wrench className="w-8 h-8 text-primary" />, desc: 'Monthly tech support, updates, and backups so you can sleep soundly.' },
    { id: 10, title: 'The Enterprise Solution', price: 'Custom Quote', icon: <Rocket className="w-8 h-8 text-primary" />, desc: 'Fully customizable, complex architecture built to your exact specifications.' }
  ];

  return (
    <section id="services" className="py-20 bg-body">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-main mb-4">Services & Pricing</h2>
          <p className="text-lg text-text-muted">From quick audits to full-stack React applications. Transparent pricing, top-tier results.</p>
        </div>
        
        {/* CSS Grid layout: 1 column on mobile, 2 on tablets, 3 on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Loop through the services array to dynamically render cards */}
          {services.map((service) => (
            <div key={service.id} className="bg-surface p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
              
              {/* Icon Container */}
              <div className="mb-4 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">
                {service.icon}
              </div>
              
              {/* Text Content */}
              <h3 className="text-xl font-bold text-text-main mb-2">{service.title}</h3>
              <p className="text-text-muted mb-4 h-16">{service.desc}</p>
              
              {/* Pricing Display */}
              <div className="text-lg font-semibold text-primary border-t border-border pt-4">
                {service.price}
              </div>

            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}