import React from "react";
import { motion } from "framer-motion";

const projects = [
    { title: "Portfolio", color: "from-blue-500 to-purple-500" },
    { title: "POS System", color: "from-green-500 to-teal-500" },
    { title: "ORM Project", color: "from-red-500 to-pink-500" },
];

const Projects: React.FC = () => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-gray-600 text-white px-24 overflow-x-auto gap-8">
            {projects.map((proj) => (
                <motion.div
                    key={proj.title}
                    className={`flex-none w-80 h-60 rounded-xl bg-gradient-to-r ${proj.color} flex items-center justify-center text-2xl font-bold`}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {proj.title}
                </motion.div>
            ))}
        </div>
    );
};

export default Projects;
