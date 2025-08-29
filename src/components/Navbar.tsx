import { Home, User, Sparkles, FolderGit2,  Send } from 'lucide-react';

const items = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Sparkles, label: 'Skills' },
    { id: 'projects', icon: FolderGit2, label: 'Projects' },
    { id: 'contact', icon: Send, label: 'Contact' },
] as const;

interface DockProps {
    activeSection: string;
}

export default function Dock({ activeSection }: DockProps) {
    const go = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    };

    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <div className="glass px-3 py-2 flex gap-2 md:gap-4 items-center backdrop-blur-md bg-white/10 border border-white/20 rounded-xl">
                {items.map(({ id, icon: Icon, label }) => (
                    <button
                        key={id}
                        onClick={() => go(id)}
                        className={`group px-3 py-2 rounded-xl flex items-center gap-2 transition-all
              ${
                            activeSection === id
                                ? 'bg-blue-500 text-white shadow-lg scale-110'
                                : 'text-white hover:bg-white/5 hover:scale-105'
                        }`}
                        aria-label={label}
                        title={label}
                    >
                        <Icon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                        <span className="hidden md:inline text-sm">{label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
}
