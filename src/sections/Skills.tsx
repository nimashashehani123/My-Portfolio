import React from "react";
import { motion } from "framer-motion";
import {
    FaReact, FaNodeJs, FaDatabase, FaJava, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub
} from "react-icons/fa";
import {
    SiTailwindcss, SiPython, SiSpringboot, SiNextdotjs,
    SiReact, SiExpress, SiFigma, SiIntellijidea, SiJavascript, SiMongodb
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

interface Skill {
    name: string;
    icon: React.ReactNode;
}

const skills: Skill[] = [
    { name: "Java", icon: <FaJava size={28} /> },
    { name: "Python", icon: <SiPython size={28} /> },
    { name: "JavaScript", icon: <SiJavascript size={28} /> },
    { name: "TypeScript", icon: <SiJavascript size={28} /> },
    { name: "HTML", icon: <FaHtml5 size={28} /> },
    { name: "CSS", icon: <FaCss3Alt size={28} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={28} /> },
    { name: "React", icon: <FaReact size={28} /> },
    { name: "React Native", icon: <SiReact size={28} /> },
    { name: "Next.js", icon: <SiNextdotjs size={28} /> },
    { name: "Node.js", icon: <FaNodeJs size={28} /> },
    { name: "Express.js", icon: <SiExpress size={28} /> },
    { name: "Spring Boot", icon: <SiSpringboot size={28} /> },
    { name: "Java EE", icon: <FaJava size={28} /> },
    { name: "SQL", icon: <FaDatabase size={28} /> },
    { name: "NoSQL", icon: <SiMongodb size={28} /> },
    { name: "Bootstrap", icon: <FaBootstrap size={28} /> },
    { name: "Figma", icon: <SiFigma size={28} /> },
    { name: "VS Code", icon: <VscCode size={28} /> },
    { name: "IntelliJ IDEA", icon: <SiIntellijidea size={28} /> },
    { name: "GitHub", icon: <FaGithub size={28} /> },
];

const Skills: React.FC = () => {
    return (
        <section
            id="skills"
            className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center mb-40"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-clip-text">
                My Skills
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 mb-20 gap-6 max-w-6xl w-full">
                {skills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        className="flex flex-col items-center justify-center p-4 rounded-xl shadow-lg text-center
                                   bg-gradient-to-br from-cyan-500/20 to-white/10 border border-white/10
                                   hover:scale-110 hover:border-cyan-400/40 transition-transform duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                    >
                        <div className="text-cyan-300">{skill.icon}</div>
                        <span className="mt-3 font-medium text-white/90">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
