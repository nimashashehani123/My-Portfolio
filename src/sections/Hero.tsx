import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaReact, FaNodeJs, FaDatabase, FaJava } from 'react-icons/fa';
import { SiSpringboot, SiNestjs, SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';

const Hero: React.FC = () => {
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleScrollTo = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="w-full h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">

            {/* Top-left software icons */}
            <div className="absolute top-4 left-4 flex flex-col gap-3 z-20">
                {[
                    { Icon: FaLaptopCode, label: 'Coding' },
                    { Icon: FaReact, label: 'React' },
                    { Icon: SiTailwindcss, label: 'Tailwind CSS' },
                    { Icon: FaNodeJs, label: 'Node.js' },
                    { Icon: SiExpress, label: 'Express.js' },
                    { Icon: FaJava, label: 'Java' },
                    { Icon: SiSpringboot, label: 'Spring Boot' },
                    { Icon: SiNestjs, label: 'NestJS' },
                    { Icon: FaDatabase, label: 'Database' },
                    { Icon: SiMongodb, label: 'MongoDB' },
                ].map(({ Icon, label }, idx) => (
                    <motion.div
                        key={idx}
                        className="text-white/40 text-2xl md:text-3xl cursor-default"
                        animate={{ y: [0, -6, 0], rotate: [0, 3, -3, 0] }}
                        transition={{ repeat: Infinity, duration: 2 + idx * 0.5, repeatType: 'mirror', ease: 'easeInOut' }}
                        title={label}
                        whileHover={{ color: '#FFF', scale: 1.2 }}
                    >
                        <Icon />
                    </motion.div>
                ))}
            </div>

            {/* Background Floating Blob */}
            <motion.div
                className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
                animate={{ x: mousePos.x - 50, y: mousePos.y - 50 }}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                style={{ transform: 'translate(-50%, -50%)' }}
            />

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                    style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s` }}
                />
            ))}

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-full max-w-5xl mx-auto">
                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Hi, I'm{' '}
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        Nimasha
                    </span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl lg:text-2xl text-white/80 mb-10 font-medium max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    I design and build <span className="text-cyan-400 font-semibold">scalable web applications</span> and <span className="text-blue-400 font-semibold">intuitive digital experiences</span> that solve real-world problems.
                </motion.p>

                <motion.div
                    className="flex flex-row flex-wrap gap-4 justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleScrollTo('projects')} // 🔗 scroll to projects
                        className="bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-cyan-600 transition-all"
                    >
                        Explore My Work
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleScrollTo('contact')}
                        className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-cyan-400 transition-all"
                    >
                        Let’s Connect
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
