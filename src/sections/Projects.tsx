import React from 'react';

interface Project {
    title: string;
    description: string;
    color: string;
    tech: string[];
    gradient: string;
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            title: "Responsive Portfolio",
            description: "A modern portfolio website with horizontal scrolling, responsive design, and smooth animations built with React and TypeScript",
            color: "from-blue-500 to-purple-600",
            tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
            gradient: "bg-gradient-to-br from-blue-500/20 to-purple-600/20"
        },
        {
            title: "POS System",
            description: "Complete point-of-sale system with inventory management, real-time analytics, and customer management features",
            color: "from-green-500 to-teal-600",
            tech: ["Node.js", "React", "MongoDB", "Express"],
            gradient: "bg-gradient-to-br from-green-500/20 to-teal-600/20"
        },
        {
            title: "Custom ORM",
            description: "Lightweight ORM framework for simplified database operations with TypeScript support and query optimization",
            color: "from-red-500 to-pink-600",
            tech: ["JavaScript", "TypeScript", "SQL", "Node.js"],
            gradient: "bg-gradient-to-br from-red-500/20 to-pink-600/20"
        }
    ];

    return (
        <div className="w-full h-full flex items-center bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 text-white overflow-hidden">
            <div className="w-full px-4 md:px-8 lg:px-16">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className={`group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer hover:scale-105 ${project.gradient}`}
                        >
                            <div className="p-6 md:p-8 h-full flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`} />
                                    <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                                </div>

                                <p className="text-gray-300 mb-6 flex-grow text-sm md:text-base leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(tech => (
                                            <span key={tech} className="bg-white/10 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                        {tech}
                      </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3">
                                        <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Demo
                                        </button>
                                        <button className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors font-medium text-sm">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                            GitHub
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;