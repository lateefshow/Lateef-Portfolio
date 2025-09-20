// App.jsx
import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import Certificate from "./components/Certificate"; // ✅ import new component

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Certificate /> {/* ✅ Display certificate below Home */}
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default App;
