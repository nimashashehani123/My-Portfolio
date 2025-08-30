import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { Toaster } from "react-hot-toast";
import Preloader from "./sections/Preloader.tsx";
import profileImg from "./assets/react.svg";


const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'skills', 'projects', 'contact'];

            if (isMobile) {
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
                const container = document.querySelector('.horizontal-container') as HTMLElement;
                if (container) {
                    const scrollLeft = container.scrollLeft;
                    const sectionIndex = Math.round(scrollLeft / window.innerWidth);
                    if (sections[sectionIndex]) setActiveSection(sections[sectionIndex]);
                }
            }
        };

        const container = document.querySelector('.horizontal-container');
        if (isMobile) window.addEventListener('scroll', handleScroll);
        else if (container) container.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (container) container.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile]);

    const handleNavClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            if (isMobile) element.scrollIntoView({ behavior: 'smooth' });
            else {
                const container = document.querySelector('.horizontal-container') as HTMLElement;
                const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
                const sectionIndex = sections.indexOf(sectionId);
                if (container) container.scrollTo({ left: sectionIndex * window.innerWidth, behavior: 'smooth' });
            }
        }
    };

    return (
        <>
        <Toaster position="top-right" reverseOrder={false} />
            {loading ? (
                <Preloader imageUrl={profileImg} onFinish={() => setLoading(false)} />
        ) : (
        <div className="relative w-screen h-screen overflow-y-auto">
            <Navbar activeSection={activeSection} onNavClick={handleNavClick} isMobile={isMobile} />

            <main className={isMobile ? 'flex flex-col h-auto overflow-y-auto hide-scrollbar' : 'horizontal-container flex flex-nowrap h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth hide-scrollbar'}>
                <section className={isMobile ? 'min-h-screen' : 'min-w-full h-full snap-start'} id="hero"><Hero /></section>
                <section className={isMobile ? 'min-h-screen' : 'min-w-full h-full snap-start'} id="about"><About /></section>
                <section className={isMobile ? 'min-h-screen' : 'min-w-full h-full snap-start'} id="skills"><Skills /></section>
                <section className={isMobile ? 'min-h-screen' : 'min-w-full h-full snap-start'} id="projects"><Projects /></section>
                <section className={isMobile ? 'min-h-screen' : 'min-w-full h-full snap-start'} id="contact"><Contact /></section>
            </main>

            {!isMobile && (
                <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 overflow-x-auto">
                    {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                        <div
                            key={section}
                            className={`w-2 h-8 rounded-full transition-all cursor-pointer ${
                                activeSection === section ? 'bg-cyan-400' : 'bg-white/30 hover:bg-white/50'
                            }`}
                            onClick={() => handleNavClick(section)}
                        />
                    ))}
                </div>
            )}
        </div>
)}
        </>

    );
};

export default App;
