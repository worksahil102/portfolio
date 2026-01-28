import React from "react";
import { Code, Palette, Zap, Users } from "lucide-react";

function About() {
  const skills = [
    { name: "React.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Node.js", level: 85 },
    { name: "Next.js", level: 88 },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
    },
    {
      icon: Palette,
      title: "Responsive UI",
      description: "Pixel-perfect rendering on all devices.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing load times and API integration.",
    },
    {
      icon: Users,
      title: "Client Collaboration",
      description:
        "Understanding requirements and delivering practical UI solutions",
    },
  ];

  return (
    <section id="about" className=" py-20 lg:py-20 px-4 relative">
      {/* background glow  */}
      <div className="absolute  top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        {/* section header  */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            Passionate Frontend Developer
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Focused on building modern, responsive, and user-friendly web
            applications using React, JavaScript, and modern frontend tools
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-center">
        {/* left - about text */}
        <div className="flex flex-col justify-center items-center ">
          <p className="text-muted-foreground leading-relaxed  lg:w-[65%] mb-1 text-lg">
            I’m a frontend developer based in India, focused on building clean,
            responsive, and interactive web applications using React,
            JavaScript, and modern UI libraries like Material UI.
          </p>
          <p className="text-muted-foreground leading-relaxed lg:w-[65%] mb-8 text-lg">
            I specialize in bridging the gap between design and engineering.
            Through freelance projects, I’ve delivered real-world frontend
            solutions, including a{" "}
            <span className="text-foreground font-semibold">
              Hotel Management Dashboard
            </span>
            , where I focused on scalable UI architecture and efficient data
            handling.
          </p>

          {/* heighlight cards  */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-[90%]">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-xl hover:bg-muted/50 transition-all duration-300  "
              >
                <item.icon className="text-primary mb-3" size={24} />
                <h4 className="text-foreground font-medium mb-1">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Skills */}
        {/* <div className="glass-card p-6 lg:p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Technical Skills
          </h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium">
                    {skill.name}
                  </span>
                  <span className="text-primary font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full btn-gradient rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default About;
