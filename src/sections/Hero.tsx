import React from "react";

const Hero: React.FC = () => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-700 to-purple-600">
            <h1 className="text-6xl font-extrabold text-white animate-bounce">
                Welcome!
            </h1>
        </div>
    );
};

export default Hero;
