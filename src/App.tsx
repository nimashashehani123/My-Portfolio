import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import About from "./sections/About.tsx";
import Skills from "./sections/Skills.tsx";
import Projects from "./sections/Projects.tsx";
import Contact from "./sections/Contact.tsx";
import useHorizontalScroll from "./hooks/useHorizontalScroll";


const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isMobile, setIsMobile] = useState(false);

    // Use horizontal scroll hook
    useHorizontalScroll();

    // Check if mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Track active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'skills', 'projects', 'contact'];

            if (isMobile) {
                // Vertical scroll detection for mobile
                const scrollPosition = window.scrollY + window.innerHeight / 2;

                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const { offsetTop, offsetHeight } = element;
                        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                            setActiveSection(section);
                            break;
                        }
                    }
                }
            } else {
                // Horizontal scroll detection for desktop
                const container = document.querySelector('.horizontal-container');
                if (container) {
                    const scrollLeft = container.scrollLeft;
                    const sectionIndex = Math.round(scrollLeft / window.innerWidth);
                    if (sections[sectionIndex]) {
                        setActiveSection(sections[sectionIndex]);
                    }
                }
            }
        };

        const container = document.querySelector('.horizontal-container');
        if (isMobile) {
            window.addEventListener('scroll', handleScroll);
        } else if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [isMobile]);

    const handleNavClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            if (isMobile) {
                // Vertical scroll for mobile
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Horizontal scroll for desktop
                const container = document.querySelector('.horizontal-container');
                if (container) {
                    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
                    const sectionIndex = sections.indexOf(sectionId);
                    container.scrollTo({
                        left: sectionIndex * window.innerWidth,
                        behavior: 'smooth'
                    });
                }
            }
        }
    };

    return (
        <div className="relative">
            <Navbar
                activeSection={activeSection}
                onNavClick={handleNavClick}
                isMobile={isMobile}
            />

            <main className={isMobile ? 'flex flex-col' : 'horizontal-container flex flex-nowrap h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth'}>
                <div className={isMobile ? '' : 'min-w-full h-full snap-start'}><Hero /></div>
                <div className={isMobile ? '' : 'min-w-full h-full snap-start'}><About /></div>
                <div className={isMobile ? '' : 'min-w-full h-full snap-start'}><Skills /></div>
                <div className={isMobile ? '' : 'min-w-full h-full snap-start'}><Projects /></div>
                <div className={isMobile ? '' : 'min-w-full h-full snap-start'}><Contact /></div>
            </main>

            {/* Scroll Indicator for Desktop */}
            {!isMobile && (
                <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
                    {['hero', 'about', 'skills', 'projects', 'contact'].map((section, idx) => (
                        <div
                            key={section}
                            className={`w-2 h-8 rounded-full transition-all cursor-pointer ${
                                activeSection === section ? 'bg-blue-500' : 'bg-white/30 hover:bg-white/50'
                            }`}
                            onClick={() => handleNavClick(section)}
                        />
                    ))}
                </div>
            )}

            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        /* Custom scrollbar for desktop horizontal scroll */
        @media (min-width: 768px) {
          .horizontal-container {
            scrollbar-width: thin;
            scrollbar-color: rgba(59, 130, 246, 0.5) rgba(255, 255, 255, 0.1);
          }
          
          .horizontal-container::-webkit-scrollbar {
            height: 8px;
          }
          
          .horizontal-container::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
          }
          
          .horizontal-container::-webkit-scrollbar-thumb {
            background: rgba(59, 130, 246, 0.5);
            border-radius: 4px;
          }
          
          .horizontal-container::-webkit-scrollbar-thumb:hover {
            background: rgba(59, 130, 246, 0.8);
          }
        }
      `}</style>
        </div>
    );
};

export default App;
