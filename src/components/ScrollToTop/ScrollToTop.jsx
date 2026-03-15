import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
    // Initializing to false prevents the button from flashing on initial page load
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show the button once the user scrolls down 300 pixels
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Passive event listener improves scrolling performance
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Cleanup function to prevent memory leaks if the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        // The fixed positioning keeps it locked to the bottom right of the viewport
        <button 
            type='button' 
            onClick={handleClick}
            aria-label="Scroll to top"
            className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 px-5 py-3 rounded-lg text-white bg-slate-600 shadow-md transition-all duration-300 ease-in-out hover:bg-orange-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-90 visible' : 'opacity-0 invisible pointer-events-none'
            }`}
        >
            <span>Scroll to Top</span>
            <ArrowUp className="w-5 h-5" />
        </button>
    );
};

export default ScrollToTop;