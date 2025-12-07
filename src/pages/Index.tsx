import { useEffect } from "react";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Certificates from "@/components/portfolio/Certificates";
import Contact from "@/components/portfolio/Contact";
import Navigation from "@/components/portfolio/Navigation";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import LeetCodeStats from "@/components/portfolio/LeetCodeStats";


const Index = () => {
  useEffect(() => {
    // Force dark mode only
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>

        <section id="leetcode">
          <LeetCodeStats />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="certificates">
          <Certificates />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-terminal-border bg-card/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-xs mt-2">
            © 2025 Abhishek Kr. Mishra | All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
