import React from "react";
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#Education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/worksahil102", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sahil-khedekar-9b0b642b9/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:worksahil@gmail.com", label: "Email" },
  ];
  return (
    <footer className="relative py-12 px-4 border-t border-border">
      <div className="absolute bottom-0 left-1/2 w-98 h-32 bg-primary/10 rounded-full blur-[80px] pointer-events-none transform -translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
          {/*  logo & description */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg btn-gradient flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">SK</span>
              </div>
              <span className="text-foreground font-semibold text-xl">
                Sahil
              </span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto md:mx-0">
              Frontend Developer passionate about creating beautiful digital
              experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <nav className="flex flex-wrap justify-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* social links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-2.5 rounded-full hover:bg-muted transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} className="text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>

        {/* divider  */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {new Date().getFullYear()} Sahil. Made with
              <Heart size={14} className="text-primary fill-primary" /> in India
            </p>

            {/* scroll to top */}
            <button
              onClick={scrollToTop}
              className="glass-card p-3 rounded-full hover:bg-primary hover:glow-purple transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} className="text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
