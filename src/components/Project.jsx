import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web App", "E-Commerce", "Dashboard", "Mobile"];
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with cart management, payment integration, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      category: "E-Commerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      category: "Web App",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description:
        "A comprehensive analytics dashboard with real-time data visualization and reporting features.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Dashboard",
      technologies: ["Next.js", "D3.js", "PostgreSQL", "GraphQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 4,
      title: "Social Media App",
      description:
        "A modern social media application with posts, stories, messaging, and real-time notifications.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      category: "Mobile",
      technologies: ["React Native", "Node.js", "Socket.io", "AWS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A stunning portfolio website with smooth animations and a modern, clean design.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      category: "Web App",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description:
        "A comprehensive fitness tracking app with workout plans, progress charts, and goal setting.",
      image:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
      category: "Mobile",
      technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];
  const filteredProjects =
    activeFilter == "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  return (
    <section id="project" className="py-20 lg:py-32 px-4 realtive">
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
            A collection of my recent work showcasing my skills and expertise
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
