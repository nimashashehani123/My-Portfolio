import React, {useEffect, useState} from "react";

const Navbar: React.FC = () => {
    const sections = ["hero", "about", "skills", "projects", "contact"];
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            const scrollLeft = window.scrollX;
            const sectionWidths = document.querySelectorAll("section");
            sectionWidths.forEach((sec, idx) => {
                if (scrollLeft >= sec.scrollLeft - 10) setActive(sections[idx]);
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/20 backdrop-blur-md rounded-xl p-3 flex gap-4">
            {sections.map((sec) => (
                <button
                    key={sec}
                    onClick={() => document.getElementById(sec)?.scrollIntoView({ behavior: "smooth", inline: "start" })}
                    className={`px-3 py-1 rounded transition ${
                        active === sec ? "bg-blue-500 text-white" : "hover:bg-white/30"
                    }`}
                >
                    {sec.toUpperCase()}
                </button>
            ))}
        </nav>
    );
};

export default Navbar;
