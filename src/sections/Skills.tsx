import React, { useState, useEffect } from 'react';

interface Skill {
    name: string;
    level: number;
    color: string;
    category: string;
}

const Skills: React.FC = () => {
    const [inView, setInView] = useState(false);

    const skills: Skill[] = [
        {
            name: "React",
            level: 90,
            color: "from-blue-400 to-blue-600",
            category: "Frontend"
        },
        {
            name: "TypeScript",
            level: 85,
            color: "from-blue-500 to-indigo-600",
            category: "Language"
        },
        {
            name: "TailwindCSS",
            level: 95,
            color: "from-cyan-400 to-teal-600",
            category: "Styling"
        },
        {
            name: "JavaScript",
            level: 95,
            color: "from-yellow-400 to-orange-500",
            category: "Language"
        },
        {
            name: "Node.js",
            level: 80,
            color: "from-green-400 to-green-600",
            category: "Backend"
        },
        {
            name: "Python",
            level: 75,
            color: "from-purple-400 to-pink-500",
            category: "Language"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.3 }
        );

        const element = document.getElementById('skills');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full h-full flex items-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 text-white">
            <div className="w-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    My Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {skills.map((skill, idx) => (
                        <div
                            key={skill.name}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 group"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <span className="text-lg md:text-xl font-semibold">{skill.name}</span>
                                    <div className="text-gray-400 text-sm">{skill.category}</div>
                                </div>
                                <span className="text-blue-400 font-bold text-sm md:text-base">{skill.level}%</span>
                            </div>

                            <div className="w-full h-2 md:h-3 bg-gray-600 rounded-full overflow-hidden">
                                <div
                                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                                    style={{
                                        width: inView ? `${skill.level}%` : '0%',
                                        transitionDelay: `${idx * 150}ms`
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 md:mt-12 text-center">
                    <div className="inline-flex flex-wrap gap-3 justify-center">
                        {['Full Stack Development', 'Responsive Design', 'API Development', 'Database Design'].map(skill => (
                            <span key={skill} className="bg-white/10 px-4 py-2 rounded-full text-sm border border-white/20">
                {skill}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;