import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GrainOverlay from "./components/GrainOverlay";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ItProjects from "./components/ItProjects";
import ArtGallery from "./components/ArtGallery";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useReveal from "./lib/useReveal";

const Home = () => {
    useReveal();
    return (
        <main data-testid="home-main">
            <GrainOverlay />
            <Navbar />
            <Hero />
            <ItProjects />
            <ArtGallery />
            <About />
            <Skills />
            <Contact />
            <Footer />
        </main>
    );
};

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
