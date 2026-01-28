import { ExternalLink, Github } from "lucide-react";
import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300">
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

        {/* overlay buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient p-3 rounded-full hover:scale-110  transition-transform glow-purple"
            >
              <ExternalLink size={20} className="text-foreground" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full hover:scale-110 transition-transform"
            >
              <Github size={20} className="text-foreground" />
            </a>
          )}
        </div>
      </div>

      {/* project info */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3 ">
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
            {project.category}
          </span>
          {project.isClient && (
            <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">
              Client Project
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action button */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient px-4 py-2 rounded-lg text-foreground text-sm font-medium flex items-center gap-2  hover:scale-105 transition-transform"
            >
              Live Demo
              <ExternalLink size={14} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-4 py-2 rounded -lg text-foreground text-sm flex items-center gap-2 hover:bg-muted transition-colors"
            >
              View Code
              <Github size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
