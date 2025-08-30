import React, {useEffect } from "react";

const Preloader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish(); // Move to Hero page after 3s
        }, 3000);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            {/* Simple animated logo or text */}
            <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 animate-pulse">
                Nimasha Shehani
            </h1>
        </div>
    );
};

export default Preloader;
