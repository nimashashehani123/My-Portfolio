import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 relative overflow-hidden">
            {/* Interactive Background */}
            <div className="absolute inset-0">
                <div
                    className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl transition-transform duration-1000 ease-out"
                    style={{
                        left: `${mousePosition.x}%`,
                        top: `${mousePosition.y}%`,
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {[...Array(40)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 md:w-2 md:h-2 bg-white/30 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center text-white px-4 max-w-5xl">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-6 leading-tight">
                    Hi, I'm{' '}
                    <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Nimasha
          </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed font-light">
                    Full Stack Developer crafting beautiful digital experiences with modern technologies
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
                    >
                        View My Work
                    </button>
                    <button
                        className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all hover:scale-105"
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;