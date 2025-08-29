import React, {useEffect, useState} from "react";

const Navbar: React.FC = ({ activeSection, onNavClick, isMobile }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sections = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    if (isMobile) {
        return (
            <nav className="fixed top-4 right-4 z-50">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="bg-white/20 backdrop-blur-md rounded-lg p-3 text-white hover:bg-white/30 transition-all"
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {isMenuOpen && (
                    <div className="absolute top-14 right-0 bg-white/20 backdrop-blur-md rounded-xl p-4 flex flex-col gap-2 min-w-[150px]">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => {
                                    onNavClick(section.id);
                                    setIsMenuOpen(false);
                                }}
                                className={`px-4 py-2 rounded-lg transition-all text-left ${
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
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/20 backdrop-blur-md rounded-xl p-3 flex gap-2">
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => onNavClick(section.id)}
                    className={`px-3 py-2 rounded-lg transition-all text-sm font-medium ${
                        activeSection === section.id
                            ? 'bg-blue-500 text-white transform scale-105'
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
