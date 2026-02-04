import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import heroImage from "../assets/hero-developer.png";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiMui } from "react-icons/si";
import Sahilcv from "../assets/SahilResumeFD.pdf";

function Hero() {
  const floatingCards = [
    {
      icon: <FaHtml5 size={24} className="text-orange-500" />,
      text: "HTML", // Kept text for accessibility, but we can hide it visually if you want
      top: "15%",
      right: "70%",
      delay: "0s",
    },
    {
      icon: <FaCss3Alt size={24} className="text-blue-500" />,

      text: "CSS",
      bottom: "30%",
      right: "77%",
      delay: "1s",
    },
    {
      icon: <FaBootstrap size={24} className="text-purple-600" />,
      text: "Bootstrap",
      top: "35%",
      right: "77%",
      delay: "1s",
    },
    {
      icon: <FaReact size={24} className="text-cyan-400 animate-spin-slow" />, // Added spin for React
      text: "React.js",
      top: "15%",
      right: "0%",
      delay: "0s",
    },
    {
      icon: <SiJavascript size={24} className="text-yellow-400" />,
      text: "JavaScript",
      top: "35%",
      right: "-8%",
      delay: "1s",
    },
    {
      icon: <SiMui size={24} className="text-blue-500" />,
      text: "Material UI",
      bottom: "30%",
      right: "-5%",
      delay: "2s",
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 relative overflow-hidden bg-grid"
    >
      {/* ... (Keep your background effects and Left Content exactly the same) ... */}
      <div className="absolute top-1/4 left-1/4 w-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 bg-sccondary/20  rounded-full blur-[128px] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* left content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-muted-foreground text-sm">
                Open to Frontend Internship & Junior Roles
              </span>
            </div>

            <h1 className=" text-3xl sm:text-5xl lg:text-3xl xl:text-5xl font-bold mb-6 leading-tight ">
              Hi, I'm <span className="text-gradient">Sahil</span>
              <br />
              <span className="text-foreground"> Frontend React Developer</span>
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I build responsive and interactive web applications with a strong
              focus on clean UI, performance, and user experience using React,
              JavaScript, and Material UI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="btn-gradient px-8 py-4 rounded-full text-foreground font-semibold text-base transition-all duration-300 hover:bg-muted flex items-center justify-center gap-2 "
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href={Sahilcv}
                download={Sahilcv}
                className="glass-card px-8 py-4 rounded-full text-foreground  font-semibold text-base transition-all duration-300 hover:bg-muted flex items-center justify-center gap-2"
              >
                <Download size={18} /> Download cv
              </a>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-muted-foreground text-sm">Follow me:</span>
              <a
                href="https://github.com/worksahil102"
                className="glass-card p-3 rounded-full hover:bg-muted transition-colors"
              >
                <Github size={20} className="text-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/sahil-khedekar-9b0b642b9/"
                className="glass-card p-3 rounded-full hover:bg-muted transition-colors "
              >
                <Linkedin size={20} className="text-foreground" />
              </a>
            </div>
          </div>

          {/* right content - Image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* developer Image */}
              <div className="relative z-10 w-[350px] sm:w-[520px] lg:w-[600px] h-[380px] sm:h-[500px] lg:h-[580px] overflow-hidden">
                <img
                  src={heroImage}
                  alt="Sahil- Mearn Developer"
                  className="w-full h-full object-cover object-[90%_15%]"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 15%, black 90%, transparent)",

                    WebkitMaskImage:
                      "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 15%, black 90%, transparent)",

                    maskComposite: "intersect",

                    WebkitMaskComposite: "source-in",
                  }}
                />
              </div>
              {/* updated floating card logic  */}
              {floatingCards.map((card, index) => (
                <div
                  key={index}
                  className="absolute z-20 glass-card p-3 rounded-full floating-card flex items-center gap-2 mx-8"
                  style={{
                    top: card.top,
                    right: card.right,
                    bottom: card.bottom,
                    animationDelay: card.delay,
                  }}
                >
                  {card.icon}
                  <span className="text-foreground text-sm font-medium hidden sm:block">
                    {card.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
