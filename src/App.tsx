import React from "react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import About from "./sections/About.tsx";
import Skills from "./sections/Skills.tsx";
import Projects from "./sections/Projects.tsx";
import Contact from "./sections/Contact.tsx";
import useHorizontalScroll from "./hooks/useHorizontalScroll";


const App: React.FC = () => {
    useHorizontalScroll();
    return (
        <div className="relative w-screen h-screen overflow-x-auto flex snap-x snap-mandatory scroll-smooth">
            <Navbar />
            <section className="min-w-screen h-screen snap-start"><Hero /></section>
            <section className="min-w-screen h-screen snap-start"><About /></section>
            <section className="min-w-screen h-screen snap-start"><Skills /></section>
            <section className="min-w-screen h-screen snap-start"><Projects /></section>
            <section className="min-w-screen h-screen snap-start"><Contact /></section>
        </div>
    );
};

export default App;
