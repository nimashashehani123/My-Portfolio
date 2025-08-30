import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
    return (
        <section
            id="about"
            className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
        >
            <div className="w-full px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <motion.div
                        className="space-y-6 order-2 md:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                            About Me
                        </h2>

                        <p className="text-base md:text-lg leading-relaxed text-gray-300">
                            I’m a passionate <span className="text-cyan-400">full-stack developer</span> with
                            expertise in modern web technologies. My journey began with
                            curiosity and has grown into a commitment to building{" "}
                            <span className="text-indigo-400">scalable solutions</span> that
                            make a real impact.
                        </p>

                        <p className="text-base md:text-lg leading-relaxed text-gray-300">
                            I specialize in java, Springboot, React, TypeScript, and Node.js, ect. — always staying
                            aligned with the latest trends and best practices. I love turning
                            complex problems into simple, elegant user experiences.
                        </p>

                        {/* Skills Chips */}
                        <div className="space-y-3">
                            <h3 className="text-lg md:text-xl font-semibold text-cyan-400">
                                What I Bring:
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Creative Problem Solving",
                                    "Team Collaboration",
                                    "Continuous Learning",
                                    "User-Focused Design",
                                ].map((trait) => (
                                    <span
                                        key={trait}
                                        className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
                                    >
                    {trait}
                  </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Profile / Illustration Section */}
                    <motion.div
                        className="relative flex justify-center order-1 md:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative group">
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />

                            {/* Main card */}
                            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-700 shadow-xl overflow-hidden">
                <span className="text-4xl md:text-6xl font-bold text-white">
                  <img src = "src/assets/images/hero.JPG"/>
                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
