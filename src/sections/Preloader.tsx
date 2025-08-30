import React, { useState, useRef, useEffect } from "react";

interface PreloaderProps {
    onFinish: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
    const [started, setStarted] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    const typingSound = useRef<HTMLAudioElement | null>(null);
    const typingText = "Welcome to my Portfolio";
    const typingSpeed = 120;
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleStart = () => {
        if (started) return;
        setStarted(true);

        typingSound.current = new Audio("src/assets/sounds/keyboard-typing-one-short-292592.mp3");

        let index = 0;
        const typingInterval = setInterval(() => {
            const currentChar = typingText.charAt(index);
            setDisplayedText(prev => prev + currentChar);

            if (currentChar !== " " && typingSound.current) {
                const soundClone = typingSound.current.cloneNode(true) as HTMLAudioElement;
                soundClone.play().catch(() => {});
            }

            index++;
            if (index >= typingText.length) {
                clearInterval(typingInterval);
                setTimeout(() => {
                    if (typingSound.current) {
                        const finalSound = typingSound.current.cloneNode(true) as HTMLAudioElement;
                        finalSound.play().catch(() => {});
                    }
                }, 1000);
            }
        }, typingSpeed);

        setTimeout(() => onFinish(), typingSpeed * typingText.length + 1500);
    };

    return (
        <div
            onClick={handleStart}
            className="w-full h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 overflow-hidden"
        >
            {/* Floating Blob */}
            <div
                className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
                style={{ transform: `translate(-50%, -50%) translate(${mousePos.x - 50}%, ${mousePos.y - 50}%)` }}
            />

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                    style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s` }}
                />
            ))}

            {/* Typing Text */}
            <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent tracking-wide font-mono drop-shadow-[0_0_15px_rgba(0,255,255,0.7)] text-center">
                {displayedText}
            </h1>

            {!started && (
                <p className="mt-6 text-gray-400 text-lg text-center animate-pulse">
                    Click anywhere to start...
                </p>
            )}
        </div>
    );
};

export default Preloader;
