import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Education from "../components/Education";

function Index() {
  return (
    <div className="min-h-screen">
      <main>
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default Index;
