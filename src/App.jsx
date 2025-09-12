import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Education from './components/Education';

const App = () => {
    return (
        <div className="bg-dark-custom text-light min-vh-100">
            {/* Fixed or sticky Header with links to sections */}
            <Header />

            {/* All sections are rendered in order */}
            <main className="container py-5">
                <section id="about"><About /></section>
                <section id="skills"><Skills /></section>
                <section id="projects"><Projects /></section>
                <section id="education"><Education /></section>
                <section id="contact"><Contact /></section>
            </main>

            {/* Footer at the bottom */}
            <Footer />
        </div>
    );
};

export default App;
