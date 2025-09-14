import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ScrollSections() {
  const navigate = useNavigate();
  const location = useLocation();

  // Map routes to section IDs
  const sectionMap = {
    "/": "home",
    "/home": "home",
    "/about": "about",
    "/projects": "projects",
    "/skills": "skills",
    "/contact": "contact",
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(sectionMap);
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            current = id;
          }
        }
      });

      // Update URL without reload
      const path = current === "home" ? "/" : `/${current}`;
      if (location.pathname !== path) {
        navigate(path, { replace: true });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, navigate]);

  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />

      <Routes>
        {/* Root path shows scrollable sections */}
        <Route path="/*" element={<ScrollSections />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
