import React, { useState } from "react";
import "./App.css";
import LoadingPage from "./components/LoadingPage";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Education from "./components/Education";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingPage onComplete={() => setIsLoading(false)} />
      )}

      <div className="portfolio-app">
        <Header />

        <main>
          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="education">
            <Education />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
};

export default App;