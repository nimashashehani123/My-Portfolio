import React from "react";
import Particles from "react-tsparticles";


const Hero: React.FC = () => {
    return (
        <div className="h-screen w-screen relative flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
            <Particles
                options={{
                    particles: { number: { value: 50 }, size: { value: 3 }, move: { speed: 1 } },
                    interactivity: { events: { onhover: { enable: true, mode: "repulse" } } },
                }}
                className="absolute inset-0"
            />
            <h1 className="text-6xl font-extrabold text-gray-900 relative z-10">
                Hi, I'm Nimasha
            </h1>
        </div>
    );
};

export default Hero;
