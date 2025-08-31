import React, { useState, useRef, useEffect } from "react";
import audio1 from "./../assets/sounds/computer-keyboard-typing-290582.mp3";
import audio2 from "./../assets/sounds/spacebar-click-keyboard-199448.mp3";

interface PreloaderProps {
    onFinish: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
    const [started, setStarted] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    const typingSound = useRef<HTMLAudioElement | null>(null);
    const finalSound = useRef<HTMLAudioElement | null>(null);
    const typingText = " Welcome to my Portfolio";
    const typingSpeed = 200;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const handleStart = () => {
        if (started) return;
        setStarted(true);

        // Play typing sound loop
        typingSound.current = new Audio(audio1);
        typingSound.current.loop = true;
        typingSound.current.play().catch(() => {});

        // Prepare final sound
        finalSound.current = new Audio(audio2);

        let index = 0;
        const typingInterval = setInterval(() => {
            setDisplayedText(prev => prev + typingText.charAt(index));
            index++;

            if (index >= typingText.length) {
                clearInterval(typingInterval);

                // Stop typing sound
                if (typingSound.current) {
                    typingSound.current.pause();
                    typingSound.current.currentTime = 0;
                }

                // Play final sound while preloader is still visible
                if (finalSound.current) {
                    finalSound.current.play().catch(() => {});
                }

                // Close preloader shortly after final sound starts
                setTimeout(() => {
                    onFinish();
                }, 400); // adjust delay if needed
            }

        }, typingSpeed);
    };

    return (
        <div
            onClick={handleStart}
            className="w-full h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 overflow-hidden"
        >
            {/* Floating Blob */}
            <div
                className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl transition-transform duration-300"
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
