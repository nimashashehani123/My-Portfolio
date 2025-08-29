import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "Responsive Portfolio",
        description:
            "A modern portfolio website with smooth animations built with React and TypeScript.",
        image: "/images/project1.jpg",
        tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    },
    {
        id: 2,
        title: "POS System",
        description:
            "Complete point-of-sale system with inventory management and analytics.",
        image: "/images/project2.jpg",
        tech: ["Node.js", "React", "MongoDB", "Express"],
    },
    {
        id: 3,
        title: "Custom ORM",
        description: "Lightweight ORM framework for simplified database operations.",
        image: "/images/project3.jpg",
        tech: ["JavaScript", "TypeScript", "SQL", "Node.js"],
    },
    {
        id: 4,
        title: "E-commerce App",
        description: "Full-stack e-commerce application with cart and payment system.",
        image: "/images/project4.jpg",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
        id: 5,
        title: "Blog Platform",
        description:
            "Modern blogging platform with Markdown editor and comments.",
        image: "/images/project5.jpg",
        tech: ["Next.js", "Tailwind CSS", "Firebase"],
    },
    {
        id: 6,
        title: "Chat App",
        description:
            "Real-time chat application with rooms and notifications.",
        image: "/images/project6.jpg",
        tech: ["React", "Socket.io", "Node.js"],
    },
    {
        id: 7,
        title: "Task Manager",
        description:
            "Task management app with drag & drop and progress tracking.",
        image: "/images/project7.jpg",
        tech: ["React", "TypeScript", "Redux"],
    },
    {
        id: 8,
        title: "Weather Dashboard",
        description:
            "Weather forecast app with API integration and responsive UI.",
        image: "/images/project8.jpg",
        tech: ["React", "API", "Tailwind CSS"],
    },
    {
        id: 9,
        title: "Fitness Tracker",
        description: "Track workouts, calories, and progress over time.",
        image: "/images/project9.jpg",
        tech: ["React Native", "Expo", "Firebase"],
    },
];

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

    return (
        <section className="w-full min-h-screen bg-gray-900 text-white py-20 px-6 flex flex-col md:flex-row mx-auto gap-8">
            {/* Left Side - Project Display */}
            <div className="md:w-2/3">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedProject.id}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg"
                    >
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="rounded-xl mb-4 w-full object-cover h-64 md:h-80"
                        />
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedProject.title}</h3>
                        <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {selectedProject.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-white/10 px-3 py-1 rounded-full text-sm"
                                >
              {tech}
            </span>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Right Side - Project List */}
            <div className="md:w-1/3 flex flex-col gap-4 max-h-[80vh] overflow-y-auto hide-scrollbar pr-2">
                {projects.map((project) => (
                    <button
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className={`text-left p-4 rounded-xl transition-all duration-300 ${
                            project.id === selectedProject.id
                                ? "bg-cyan-500/30 text-white"
                                : "bg-white/5 text-gray-300 hover:bg-white/10"
                        }`}
                    >
                        <h4 className="font-semibold text-lg">{project.title}</h4>
                        <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                    </button>
                ))}
            </div>
        </section>

    );
};

export default Projects;
