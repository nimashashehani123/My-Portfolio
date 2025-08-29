import { Home, User, Sparkles, FolderGit2, Send } from 'lucide-react';

const items = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Sparkles, label: 'Skills' },
    { id: 'projects', icon: FolderGit2, label: 'Projects' },
    { id: 'contact', icon: Send, label: 'Contact' },
] as const;

interface DockProps {
    activeSection: string;
    onNavClick: (id: string) => void;
    isMobile: boolean;
}

export default function Dock({ activeSection, onNavClick, isMobile }: DockProps) {
    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <div className="glass px-3 py-2 flex gap-2 md:gap-4 items-center backdrop-blur-md bg-white/10 border border-white/20 rounded-xl">
                {items.map(({ id, icon: Icon, label }) => (
                    <button
                        key={id}
                        onClick={() => onNavClick(id)}
                        className={`group relative flex items-center justify-center p-2 md:px-3 md:py-2 rounded-xl transition-all duration-300
              ${activeSection === id ? 'bg-cyan-400 text-white scale-110 shadow-lg' : 'text-white hover:bg-white/5 hover:scale-110'}`}
                        aria-label={label}
                        title={label}
                    >
                        <Icon className="w-6 h-6 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-125" />
                        {!isMobile && <span className="hidden md:inline ml-2 text-sm">{label}</span>}
                    </button>
                ))}
            </div>
        </nav>
    );
}
