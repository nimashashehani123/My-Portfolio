import React, { useState } from 'react';

interface NavbarProps {
    activeSection: string;
    onNavClick: (sectionId: string) => void;
    isMobile: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavClick, isMobile }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const sections = [
        { id: 'hero', label: 'HOME' },
        { id: 'about', label: 'ABOUT' },
        { id: 'skills', label: 'SKILLS' },
        { id: 'projects', label: 'PROJECTS' },
        { id: 'contact', label: 'CONTACT' }
    ];

    if (isMobile) {
        return (
            <nav className="fixed top-4 right-4 z-50">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="bg-white/20 backdrop-blur-md rounded-lg p-3 text-white hover:bg-white/30 transition-all duration-300"
                >
                    {isMenuOpen ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {isMenuOpen && (
                    <div className="absolute top-14 right-0 bg-white/20 backdrop-blur-md rounded-xl p-4 flex flex-col gap-2 min-w-[150px] border border-white/10">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => {
                                    onNavClick(section.id);
                                    setIsMenuOpen(false);
                                }}
                                className={`px-4 py-2 rounded-lg transition-all text-left font-medium ${
                                    activeSection === section.id
                                        ? 'bg-blue-500 text-white transform scale-105'
                                        : 'text-white hover:bg-white/30'
                                }`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                )}
            </nav>
        );
    }

    return (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/20 backdrop-blur-md rounded-xl p-3 flex gap-2 border border-white/20">
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => onNavClick(section.id)}
                    className={`px-3 py-2 rounded-lg transition-all text-sm font-medium ${
                        activeSection === section.id
                            ? 'bg-blue-500 text-white transform scale-105 shadow-lg'
                            : 'text-white hover:bg-white/30 hover:scale-105'
                    }`}
                >
                    {section.label}
                </button>
            ))}
        </nav>
    );
};

export default Navbar;