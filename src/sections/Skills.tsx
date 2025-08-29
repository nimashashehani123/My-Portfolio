import React from "react";
import { motion } from "framer-motion";

const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "TailwindCSS", level: 95 },
    { name: "JavaScript", level: 95 },
];

const Skills: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-24 bg-gray-700 text-white gap-6">
            <h2 className="text-4xl mb-4">Skills</h2>
            {skills.map((skill) => (
                <div key={skill.name} className="w-full">
                    <span className="text-xl">{skill.name}</span>
                    <div className="w-full h-4 bg-gray-500 rounded-full mt-1 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5 }}
                            className="h-4 bg-blue-500 rounded-full"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
