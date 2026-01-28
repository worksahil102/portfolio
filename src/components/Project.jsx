import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Himage from "../assets/Hotel-Dashboard.png";
import Pimage from "../assets/Portfolio-image.png";

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web App", "Client Project"];
  const projects = [
    {
      id: 1,
      title: "Hotel Management System (Freelance Project)",
      description:
        "A responsive web application built for a real client to manage hotel bookings, rooms, and customer details. Focused on clean UI, smooth user experience, and reusable React components.",
      image: Himage, // use your real screenshot
      category: "Web App",
      isClient: true,
      technologies: ["React", "JavaScript", "Material UI", "Tailwind CSS"],
      liveUrl: "", // keep empty if client project is private
      githubUrl: "", // optional or private
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description:
        "A modern and fully responsive portfolio website to showcase my skills, projects, and experience. Built with smooth animations and a clean developer-focused UI.",
      image: Pimage,
      isClient: false,
      category: "Web App",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://your-portfolio-link.com",
      githubUrl: "https://github.com/yourusername/portfolio",
    },
  ];
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Client Project") return project.isClient;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 lg:py-32 px-4 realtive">
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 " />
      <div className="max-w-7xl mx-auto">
        {/* section header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold  text-foreground mt-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Real-world projects and personal work showcasing my frontend skills
          </p>
        </div>

        {/* filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium  transition-all duration-300 ${
                activeFilter === filter
                  ? "btn-gradient text-foreground glow-purple"
                  : "glass-card text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/*  project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
