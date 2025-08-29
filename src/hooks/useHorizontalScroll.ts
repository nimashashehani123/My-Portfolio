import { useEffect } from 'react';

const useHorizontalScroll = (): void => {
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            // Only apply horizontal scroll on desktop
            if (window.innerWidth >= 768) {
                e.preventDefault();
                const container = document.querySelector('.horizontal-container') as HTMLElement;
                if (container) {
                    container.scrollLeft += e.deltaY;
                }
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (window.innerWidth >= 768) {
                if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const container = document.querySelector('.horizontal-container') as HTMLElement;
                    if (container) {
                        const direction = e.key === 'ArrowRight' ? 1 : -1;
                        container.scrollBy({
                            left: direction * window.innerWidth,
                            behavior: "smooth"
                        });
                    }
                }
            }
        };

        // Add touch support for mobile horizontal scroll
        let startX = 0;
        let scrollLeft = 0;

        const handleTouchStart = (e: TouchEvent) => {
            if (window.innerWidth >= 768) {
                const container = document.querySelector('.horizontal-container') as HTMLElement;
                if (container) {
                    startX = e.touches[0].pageX - container.offsetLeft;
                    scrollLeft = container.scrollLeft;
                }
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (window.innerWidth >= 768) {
                e.preventDefault();
                const container = document.querySelector('.horizontal-container') as HTMLElement;
                if (container) {
                    const x = e.touches[0].pageX - container.offsetLeft;
                    const walk = (x - startX) * 2;
                    container.scrollLeft = scrollLeft - walk;
                }
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("touchstart", handleTouchStart, { passive: false });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);
};

export default useHorizontalScroll;