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

const sections = ['hero', 'about', 'skills', 'projects', 'contact'];

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
    const [loading, setLoading] = useState(true);

    // Detect mobile
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (loading) return; // wait until content is visible

        const handleScroll = () => {
            if (isMobile) {
                const scrollPos = window.scrollY + window.innerHeight / 2;
                for (const section of sections) {
                    const el = document.getElementById(section);
                    if (el) {
                        const { offsetTop, offsetHeight } = el;
                        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                            setActiveSection(section);
                            break;
                        }
                    }
                }
            } else {
                const container = document.querySelector('.horizontal-container') as HTMLElement;
                if (container) {
                    const sectionIndex = Math.floor(container.scrollLeft / window.innerWidth);
                    setActiveSection(sections[sectionIndex] || 'hero');
                }
            }
        };

        if (isMobile) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        } else {
            const container = document.querySelector('.horizontal-container');
            container?.addEventListener('scroll', handleScroll);
            return () => container?.removeEventListener('scroll', handleScroll);
        }
    }, [isMobile, loading]);


    const handleNavClick = (sectionId: string) => {
        if (isMobile) {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            const container = document.querySelector('.horizontal-container') as HTMLElement;
            const index = sections.indexOf(sectionId);
            container?.scrollTo({ left: index * window.innerWidth, behavior: 'smooth' });
        }
    };

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />

            {loading ? (
                <Preloader
                    imageUrl={profileImg}
                    onFinish={() => setLoading(false)}
                />
            ) : (
                <div className="relative w-screen h-screen overflow-y-auto">
                    <Navbar activeSection={activeSection} onNavClick={handleNavClick} isMobile={isMobile} />

                    <main
                        className={
                            isMobile
                                ? 'flex flex-col h-auto overflow-y-auto hide-scrollbar'
                                : 'horizontal-container flex flex-nowrap h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth hide-scrollbar'
                        }
                    >
                        <section className={isMobile ? 'min-h-screen' : 'min-w-full h-full snap-start'} id="hero">
                            <Hero />
                        </section>
                        <section className={isMobile ? 'min-h-screen' : 'min-w-full h-full snap-start'} id="about">
                            <About />
                        </section>
                        <section className={isMobile ? 'min-h-screen' : 'min-w-full h-full snap-start'} id="skills">
                            <Skills />
                        </section>
                        <section className={isMobile ? 'min-h-screen' : 'min-w-full h-full snap-start'} id="projects">
                            <Projects />
                        </section>
                        <section className={isMobile ? 'min-h-screen' : 'min-w-full h-full snap-start'} id="contact">
                            <Contact />
                        </section>
                    </main>

                    {!isMobile && (
                        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
                            {sections.map((section) => (
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
