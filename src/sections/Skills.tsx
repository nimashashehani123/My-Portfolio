import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiPython } from "react-icons/si";

interface Skill {
    name: string;
    level: number;
    icon: React.ReactNode;
}

const Skills: React.FC = () => {
    const [inView, setInView] = useState(false);
    const [, setMousePos] = useState({ x: 50, y: 50 });

    const skills: Skill[] = [
        { name: "React", level: 90, icon: <FaReact size={24} /> },
        { name: "TypeScript", level: 85, icon: <SiTypescript size={24} /> },
        { name: "TailwindCSS", level: 95, icon: <SiTailwindcss size={24} /> },
        { name: "Node.js", level: 80, icon: <FaNodeJs size={24} /> },
        { name: "Python", level: 75, icon: <SiPython size={24} /> },
        { name: "Database", level: 85, icon: <FaDatabase size={24} /> },
    ];

    // IntersectionObserver for progress bars
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.3 }
        );
        const element = document.getElementById("skills");
        if (element) observer.observe(element);
        return () => observer.disconnect();
    }, []);

    // Mouse position for floating icons
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Floating icons
    const icons = [
        { Icon: FaReact },
        { Icon: SiTypescript },
        { Icon: SiTailwindcss },
        { Icon: FaNodeJs },
        { Icon: SiPython },
        { Icon: FaDatabase },
    ];

    return (
        <section
            id="skills"
            className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden"
        >
            {/* Floating Background Icons */}
            {icons.map(({ Icon }, idx) => (
                <motion.div
                    key={idx}
                    className="absolute text-white/10 text-4xl md:text-5xl"
                    style={{
                        left: `${Math.random() * 90}%`,
                        top: `${Math.random() * 80}%`,
                    }}
                    animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 4 + idx * 0.5,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                >
                    <Icon />
                </motion.div>
            ))}

            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white/90 z-10 relative">
                My Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full z-10 relative">
                {skills.map((skill, idx) => (
                    <motion.div
                        key={skill.name}
                        className="p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:scale-105 hover:border-white/20 transition-transform duration-300 shadow-md flex items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.15 }}
                    >
                        <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full shadow-sm">
                            {skill.icon}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between mb-2">
                                <span className="font-medium text-lg">{skill.name}</span>
                                <span className="font-semibold text-sm text-white/80">{skill.level}%</span>
                            </div>
                            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-cyan-500 rounded-full shadow-sm"
                                    style={{ width: inView ? `${skill.level}%` : "0%" }}
                                    transition={{ duration: 1, delay: idx * 0.15 }}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
