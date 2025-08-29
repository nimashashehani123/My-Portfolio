import { useEffect } from "react";

const useHorizontalScroll = () => {
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            window.scrollBy({ left: e.deltaY, behavior: "smooth" });
        };
        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => window.removeEventListener("wheel", handleWheel);
    }, []);
};

export default useHorizontalScroll;
