import React, { useState } from "react";

const Navbar: React.FC = () => {
    const sections = ["hero", "about", "skills", "projects", "contact"];
    const [open, setOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth", inline: "start" });
        setOpen(false);
    };

    return (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/20 backdrop-blur-md rounded-xl p-3 flex gap-4">
            {sections.map((sec) => (
                <button
                    key={sec}
                    onClick={() => scrollToSection(sec)}
                    className="px-3 py-1 rounded hover:bg-white/30 transition"
                >
                    {sec.toUpperCase()}
                </button>
            ))}
        </nav>
    );
};

export default Navbar;
