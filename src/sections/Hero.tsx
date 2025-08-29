import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Hero: React.FC = () => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        controls.start({
            rotateY: [0, 360],
            transition: { duration: 5, repeat: Infinity, ease: "linear" },
        });
    }, [controls]);

    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-700 to-purple-600 perspective-1000">
            <motion.h1
                ref={ref}
                animate={controls}
                className="text-6xl font-extrabold text-white tracking-widest"
            >
                Welcome!
            </motion.h1>
        </div>
    );
};

export default Hero;
