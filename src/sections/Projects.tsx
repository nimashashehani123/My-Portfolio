import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    github: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Strategic Growth Analysis for UK E-Commerce Retailer",
        description:
            "Data analysis project using Python to extract strategic insights from UK online retail sales data.",
        image: "src/assets/images/data anylist.jpg",
        tech: ["Python"],
        github: "https://github.com/nimashashehani123/Online_retail_project",
    },
    {
        id: 2,
        title: "HomeEase",
        description:
            "HomeEase is a web application that connects customers with verified service providers for home-related tasks such as plumbing, electrical repairs, cleaning, and more.",
        image: "src/assets/images/HomeEase.png",
        tech: ["Java", "Springboot",  "HTML", "CSS", "JavaScript","AJAX", "Google Maps API", "Payhere", "MySQL"],
        github: "https://github.com/nimashashehani123/HomeEase",
    },
    {
        id: 3,
        title: "E-Commerce Web Application",
        description:
            "A fully functional e-commerce web application built using JavaEE, JSP, and JDBC connection pooling.",
        image: "src/assets/images/Vixora.png",
        tech: ["JavaEE", "JSP", "JDBC"],
        github: "https://github.com/nimashashehani123/E-Commerce-Web-Application",
    },
    {
        id: 4,
        title: "Book-Club-Library",
        description:
            "A React web app designed exclusively for library staff to manage the book club’s collection.",
        image: "src/assets/images/book library.jpg",
        tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js"],
        github: "https://github.com/nimashashehani123/Book-Club-Library",
    },
    {
        id: 5,
        title: "Smart Parking Management System",
        description:
            "Smart Parking Management System is a microservices-based system that manages user registration, vehicle entry/exit, parking space allocation, reservations, and payments using a secure and scalable architecture.",
        image: "src/assets/images/parking system.jpg",
        tech: ["Spring Boot", "Spring Cloud", "Eureka", "JWT Security"],
        github: "https://github.com/nimashashehani123/Smart-Parking-Management-System",
    },

    {
        id: 6,
        title: "Culinary Management System",
        description:
            "A platform to manage student details, course enrollments, and payment processes efficiently for culinary schools.",
        image: "https://plus.unsplash.com/premium_photo-1682092170538-9ebcb3a09ac1?w=500&auto=format&fit=crop&q=60",
        tech: ["Java", "MySQL", "HTML", "CSS"],
        github: "https://github.com/nimashashehani123/ORM-Course-Work",
    },
    {
        id: 7,
        title: "Portfolio Website",
        description:
            "A personal portfolio showcasing projects, skills, and experiences in a sleek, responsive design.",
        image: "src/assets/images/portfolio.png",
        tech: ["HTML","JavaScript", "Tailwind CSS"],
        github: "https://github.com/nimashashehani123/Portfolio",
    },
    {
        id: 8,
        title: "Burger Shop POS",
        description:
            "A user-friendly Point-of-Sale system for managing orders, inventory, and customers in a burger café.",
        image: "src/assets/images/burgershop.png",
        tech: ["HTML", "JavaScript", "Bootstrap"],
        github: "https://github.com/nimashashehani123/POS-System",
    },
    {
        id: 9,
        title: "Connect 4 Game",
        description:
            "A digital implementation of the classic Connect 4 strategy game with an interactive UI.",
        image: "src/assets/images/connect 4.jpg",
        tech: ["Java", "OOP Concept", "AI Algorithm"],
        github: "https://github.com/nimashashehani123/connect-four-game-assignment",
    },
    {
        id: 10,
        title: "Accessories Management System",
        description:
            "A tool for tracking, organizing, and managing inventory of fashion accessories effectively.",
        image: "src/assets/images/naturab.png",
        tech: ["Java", "MySQL", "HTML", "CSS"],
        github: "https://github.com/nimashashehani123/Naturab-Serm_FinalProject",
    },
];
const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

    return (
        <section className="min-h-screen bg-gray-900 text-white py-0 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-center py-6 text-white/90">
                Featured Projects
            </h1>

            {/* Content Wrapper */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Side - Project Display */}
                <div className="md:w-2/3 mt-2">
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
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                {selectedProject.title}
                            </h3>
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

                            {/* GitHub Button */}
                            {selectedProject.github && (
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 px-6 py-2 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition-colors duration-300"
                                >
                                    View on GitHub
                                </a>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Side - Project List */}
                <div className="md:w-1/3 flex flex-col gap-4 max-h-[80vh] overflow-y-auto hide-scrollbar pr-2 mt-2">
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
                            <p className="text-gray-400 text-sm line-clamp-2">
                                {project.description}
                            </p>
                        </button>
                    ))}
                </div>
            </div>
        </section>


    );
};

export default Projects;
