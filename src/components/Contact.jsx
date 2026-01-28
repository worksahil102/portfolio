import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    alert("Button was clicked!"); // ADD THIS LINE
    console.log("Starting send process..."); // ADD THIS LINE
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    const serviceID = "service_tvfgg45";
    const templateID = "template_tdy77rr";
    const publicKey = "VU5GBmV5Bf7DwhNf-";

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSending(false);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Failed to send message. Please try again later.");
        setIsSending(false);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "worksahil102@gmail.com",
      href: "mailto:worksahil102@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 89568 08501",
      href: "tel:+8956808501",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/worksahil102", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sahil-khedekar-9b0b642b9",
      label: "LinkedIn",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 px-4 relative">
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-foreground mt-4">
            Let’s Connect
          </h2>
          <p className="text-muted-foreground lg:text-2xl leading-relaxed mb-8">
            Open to Frontend Developer Opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I’m a frontend developer fresher passionate about building
                clean, responsive, and user-friendly web applications. Currently
                open to frontend developer internships, junior roles, and
                freelance opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-xl flex items-center gap-4 hover:bg-muted/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg btn-gradient flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-foreground" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-foreground font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-3 rounded-full hover:bg-primary hover:glow-purple transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 lg:p-8 rounded-2xl"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  {/* Fixed typo: bloack -> block */}
                  <label className="block text-foreground text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  {/* Fixed typo: bloack -> block */}
                  <label className="block text-foreground text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-foreground text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Hiring / Internship Opportunity"
                />
              </div>
              <div className="mb-6">
                <label className="block text-foreground text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Hi Sahil, We’d like to discuss an opportunity with you.."
                />
              </div>
              {/* Fixed typo: type="sumbit" -> type="submit" */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full btn-gradient px-8 py-4 rounded-lg text-foreground font-semibold text-base transition-all duration-300 hover:scale-[1.02] glow-purple flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? "Sending..." : "Let’s Connect"}
                {!isSending && <Send size={18} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
