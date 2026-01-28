import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer (Freelance)",
      company: "Client Project",
      location: "Remote",
      period: "2025 – Present",
      description:
        "Working on a real-world hotel management dashboard, building responsive and interactive user interfaces. Collaborating with the client to convert business requirements into functional UI components with a focus on clean design and performance.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Material UI"],
    },
  ];

  const stats = [
    { value: "1+", label: "Real-world Projects" },
    { value: "1", label: "Active Freelance Client" },
    { value: "100%", label: "Responsive Design" },
    { value: "5+", label: "Frontend Technologies" },
  ];

  return (
    <section id="experience" className="py-20 lg:py-5 px-4 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            Hands-on Experience
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Real-world frontend development through freelance and personal
            projects{" "}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary lg:transform lg:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 lg:left-1/2 w-4 h-4 rounded-full btn-gradient glow-purple lg:transform lg:-translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`lg:w-1/2 pl-8 lg:pl-0 ${
                    index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                  }`}
                >
                  <div className="glass-card p-6 rounded-xl hover:bg-muted/30 transition-all duration-300">
                    <div
                      className={`flex items-center gap-2 mb-3 ${
                        index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                      }`}
                    >
                      <Calendar size={16} className="text-primary" />
                      <span className="text-primary text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {exp.title}
                    </h3>

                    <div
                      className={`flex items-center gap-4 mb-4 text-muted-foreground text-sm ${
                        index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <Briefcase size={14} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                      }`}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for timeline layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
