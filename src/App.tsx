import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";


const App: React.FC = () => {
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
}

export default App;
