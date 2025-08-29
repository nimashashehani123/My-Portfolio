import React from 'react';

const About: React.FC = () => {
    return (
        <div className="w-full h-full flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="w-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="space-y-6 order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            About Me
                        </h2>

                        <div className="space-y-4">
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300">
                                I'm a passionate full-stack developer with expertise in modern web technologies.
                                My journey began with curiosity and has evolved into a commitment to creating
                                innovative solutions that make a real impact.
                            </p>

                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300">
                                I specialize in React, TypeScript, and Node.js, always staying current with
                                the latest industry trends and best practices. I love turning complex problems
                                into simple, beautiful solutions.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-lg md:text-xl font-semibold text-blue-400">What I Bring:</h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    'Creative Problem Solving',
                                    'Team Collaboration',
                                    'Continuous Learning',
                                    'User-Focused Design'
                                ].map(trait => (
                                    <span
                                        key={trait}
                                        className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                                    >
                    {trait}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative flex justify-center order-1 md:order-2">
                        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
                            <div className="absolute inset-1 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

                            <div className="absolute inset-4 bg-gray-900 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">N</span>
                            </div>

                            <div className="absolute inset-0">
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                                        style={{
                                            left: `${50 + 40 * Math.cos((i * 2 * Math.PI) / 8)}%`,
                                            top: `${50 + 40 * Math.sin((i * 2 * Math.PI) / 8)}%`,
                                            animationDelay: `${i * 0.2}s`
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;