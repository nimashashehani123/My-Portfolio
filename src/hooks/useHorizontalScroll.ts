import { useEffect } from "react";

const useHorizontalScroll = () => {
    useEffect(() => {
        const handleWheel = (e : WheelEvent) => {
            // Only apply horizontal scroll on desktop
            if (window.innerWidth >= 768) {
                e.preventDefault();
                const container = document.querySelector('.horizontal-container');
                if (container) {
                    container.scrollLeft += e.deltaY;
                }
            }
        };

        const handleKeyDown = (e: { key: string; preventDefault: () => void; }) => {
            if (window.innerWidth >= 768) {
                if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const container = document.querySelector('.horizontal-container');
                    if (container) {
                        const direction = e.key === 'ArrowRight' ? 1 : -1;
                        container.scrollBy({ left: direction * window.innerWidth, behavior: "smooth" });
                    }
                }
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
};

export default useHorizontalScroll;
