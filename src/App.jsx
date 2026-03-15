import React from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/Hero/Hero'; 
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-body text-text-main flex flex-col">
      
      {/* Top Navigation Bar */}
      <Nav />
      
      {/* Main Content Area */}
      <main className="grow">
        
        {/* We will build the proper Hero section next to replace this Header */}
        <Header />
        
        {/* The shiny new Services grid component */}
        <Services />
        
        {/* Portfolio */}
        <Portfolio />
        
        {/* Contact Form */}
        <ContactForm />
        
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Our scroll-to-top button hovering in the corner */}
      <ScrollToTop />
      
    </div>
  );
}

export default App;