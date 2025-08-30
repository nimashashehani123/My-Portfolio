import React, { useState, useRef } from "react";

interface PreloaderProps {
    onFinish: () => void;
    imageUrl: string;
}

const Preloader: React.FC<PreloaderProps> = ({ onFinish, imageUrl }) => {
    const [started, setStarted] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    const typingSound = useRef<HTMLAudioElement | null>(null);
    const typingText = " Welcome to my Portfolio";
    const typingSpeed = 150;

    const handleStart = () => {
        if (started) return; // prevent multiple starts
        setStarted(true);

        // Initialize audio
        typingSound.current = new Audio("src/assets/sounds/keyboard-typing-one-short-292592.mp3");

        // Typing effect
        let index = 0;
        const typingInterval = setInterval(() => {
            const currentChar = typingText.charAt(index);
            setDisplayedText((prev) => prev + currentChar);

            if (currentChar !== " " && typingSound.current) {
                // Clone the existing audio and play the clone
                const soundClone = typingSound.current.cloneNode(true) as HTMLAudioElement;
                soundClone.play().catch(() => {});
            }

            index++;
            if (index >= typingText.length) {
                clearInterval(typingInterval);

                // Play the final sound after a delay (1000ms)
                setTimeout(() => {
                    if (typingSound.current) {
                        const finalSound = typingSound.current.cloneNode(true) as HTMLAudioElement;
                        finalSound.play().catch(() => {});
                    }
                }, 1000); // 1 second delay
            }
        }, typingSpeed);

        // Fade out / finish callback
        setTimeout(() => {
            onFinish();
        }, typingSpeed * typingText.length + 1500); // small extra delay to include final sound
    };


    return (
        <div
            onClick={handleStart} // click anywhere to start
            className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 cursor-pointer"
        >
            <h1 className="text-3xl md:text-5xl font-extrabold text-cyan-400 mb-6 tracking-wide font-mono drop-shadow-lg">
                {displayedText || "Click anywhere to start..."}
            </h1>

            {/* Profile Image */}
            <div className="relative w-40 h-40 md:w-60 md:h-60 mb-4">
                <img
                    src={imageUrl}
                    alt="Profile"
                    className="absolute w-full h-full rounded-full border-4 border-cyan-400 shadow-2xl object-cover"
                />
            </div>
        </div>
    );
};

export default Preloader;
