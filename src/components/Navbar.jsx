import { Menu, X } from "lucide-react";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLink = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Project", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50  glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  items-center justify-between  h-16  lg:h-20">
          {/* logo  */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg btn-gradient flex  items-center justify-center">
              <span className="text-foreground font-bold text-lg">sk</span>
            </div>
            <span className="text-foreground font-semibold text-xl  hidden sm:block">
              Sahil
            </span>
          </a>

          {/*  deskstop navigation */}
          <div className=" hidden md:flex item-center space-x-8">
            {navLink.map((link) => (
              <a
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
                key={link.name}
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* contact button */}
          <div className=" hidden md:block">
            <a
              href="#contact"
              className="btn-gradient px-6 py-2.5 rounded-full text-foreground font-medium text-sm transition-all duration-300 hover:scale-105 glow-purple"
            >
              Contact me
            </a>
          </div>

          {/*  mobile  Menu button */}

          <button
            className=" md:hidden  text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation  */}

        {isOpen && (
          <div className=" md:hidden py-4 boreder-t border-border ">
            <div className="flex flex-col  space-y-4">
              {navLink.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground  transition-colors duration-300 text-sm  font-medium px-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-gradient px-6 py-2.5 rounded-full text-foreground font-medium text-sm text-center mx-2"
              >
                contact Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
