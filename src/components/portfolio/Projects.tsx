"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Code, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // ---------------- PROJECT LIST -----------------

  const projects = [
    {
      id: 1,
      title: "GiffyDuck Notes",
      description: "A powerful AI-integrated note-taking and creative writing platform",
      longDescription:
        "GiffyDuck is a feature-rich application designed for academic organizations and creative expression. It includes AI-powered insights, tag management, full-text search, and real-time syncing using Supabase.",
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Gemini-2.5-Flash",
        "ShadCN UI"
      ],
      category: "fullstack",
      image: "/Project4.png",
      github: "https://github.com/abhishekmishra28/GiffyDuck-Notes",
      live: "https://www.giffyduck.com",
      features: [
        "AI-powered note enhancements",
        "Creative writing tools",
        "Full-text search engine",
        "Custom tagging system",
        "Real-time database (Supabase)",
        "Beautiful UI with ShadCN + Tailwind"
      ]
    },

    {
      id: 2,
      title: "Crop Recommendation System",
      description:
        "ML system that recommends the best crop based on soil and climate data.",
      longDescription:
        "This machine learning system analyzes soil nutrients and climate parameters to recommend the most suitable crop. It evaluates multiple ML algorithms and deploys the best model using Streamlit for real-time predictions.",
      tech: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Streamlit",
        "Matplotlib",
        "Seaborn"
      ],
      category: "machine-learning",
      image: "/Project5.png",
      github: "https://github.com/abhishekmishra28/Crop-Recommendation-System",
      live: "https://crop-recommendation-system-45.streamlit.app/",
      features: [
        "Real-time crop recommendations",
        "Evaluates 4 ML models",
        "99% accuracy using Random Forest",
        "Feature importance visualization",
        "Interactive Streamlit web UI"
      ]
    },

    {
      id: 3,
      title: "Soni Jewellers",
      description:
        "A real-time, fully responsive e-commerce platform for a jewellery store.",
      longDescription:
        "A production-grade jewellery e-commerce system built with Next.js 14 and Supabase. Includes auth, wishlist, cart, dynamic price calculations, admin dashboard, and order management.",
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "ShadCN UI", "Radix UI"],
      category: "fullstack",
      image: "/Project1.png",
      github: "https://github.com/abhishekmishra28/Soni-Jewellers",
      live: "https://www.soninavratnajewellers.in",
      features: [
        "Google OAuth + Email Authentication",
        "Product catalog with filters",
        "Wishlist & Shopping Cart",
        "Dynamic metal-rate pricing",
        "Order placement + tracking",
        "Admin dashboard with analytics"
      ]
    },

    {
      id: 4,
      title: "Arya Bhumi Seva Sansthan",
      description:
        "A digital platform for a non-profit focused on health, education, and welfare.",
      longDescription:
        "A multilingual donation + welfare website built using Next.js, Supabase Auth, Tailwind CSS, and deployed on a VPS using PM2. Supports program modules, authentication, and responsive pages.",
      tech: ["Next.js 13", "TypeScript", "Tailwind CSS", "Supabase", "CloudPanel + PM2"],
      category: "fullstack",
      image: "/Project2.png",
      github: "https://github.com/abhishekmishra28/AryaBhumiSevaSanathan",
      live: "https://aryabhumisevasansthan.org",
      features: [
        "Multilingual interface",
        "Healthcare & education modules",
        "Supabase authentication",
        "Responsive UI",
        "VPS deployment using PM2"
      ]
    },

    {
      id: 5,
      title: "My Portfolio",
      description: "Motion-rich portfolio built with Next.js 14 and Framer Motion.",
      longDescription:
        "A visually appealing portfolio including animations, custom interactions, terminal-inspired UI, and theme support. Fully responsive and built without backend dependencies.",
      tech: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Rive",
        "ShadCN UI"
      ],
      category: "fullstack",
      image: "/Project3.png",
      github: "https://github.com/abhishekmishra28/MyPortfolio",
      live: "/",
      features: [
        "Framer Motion animations",
        "Rive interactions",
        "Terminal-themed About section",
        "Dark mode support",
        "Interactive project showcase"
      ]
    }
  ];

  // CATEGORY ICONS
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "fullstack":
        return Globe;
      case "frontend":
        return Code;
      case "data":
        return Database;
      default:
        return Code;
    }
  };

  // ---------------- RENDER -----------------

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-syntax-keyword">const</span>{" "}
              <span className="text-syntax-function">projects</span>{" "}
              <span className="text-foreground">=</span>{" "}
              <span className="text-foreground">[</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Some things I've built with code, coffee, and creativity
            </p>
          </div>

          {/* PROJECTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full hover-glow transition-all duration-300 bg-card/50 border-terminal-border">
                    
                    {/* PROJECT IMAGE */}
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover rounded-t-lg border-b border-terminal-border"
                      />
                    )}

                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <CategoryIcon className="h-6 w-6 text-matrix-green" />
                        <div className="flex gap-2">
                          <a href={project.github} className="hover:text-matrix-green transition-colors">
                            <Github className="h-4 w-4" />
                          </a>
                          <a href={project.live} className="hover:text-matrix-green transition-colors">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs border-matrix-green/30 text-matrix-green">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* DIALOG MODAL */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full hover-glow" onClick={() => setSelectedProject(project.id)}>
                            View Details
                          </Button>
                        </DialogTrigger>

                        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">

                          {/* TOP SECTION: IMAGE LEFT + TEXT RIGHT */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* IMAGE LEFT */}
                            <div>
                              {project.image && (
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-auto rounded-lg border border-terminal-border object-contain"
                                />
                              )}
                            </div>

                            {/* TITLE + DESCRIPTION RIGHT */}
                            <div>
                              <DialogHeader>
                                <DialogTitle className="text-2xl flex items-center gap-2 mb-3">
                                  <CategoryIcon className="h-6 w-6 text-matrix-green" />
                                  {project.title}
                                </DialogTitle>

                                <DialogDescription className="text-base leading-relaxed">
                                  {project.longDescription}
                                </DialogDescription>
                              </DialogHeader>
                            </div>

                          </div>

                          {/* DIVIDER */}
                          <div className="border-t border-terminal-border my-6"></div>

                          {/* BOTTOM SECTION: FEATURES + TECH STACK */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">

                            {/* FEATURES */}
                            <div>
                              <h4 className="font-semibold mb-3 text-matrix-green">Key Features</h4>
                              <ul className="space-y-2">
                                {project.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="text-matrix-green mt-1">•</span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* TECH STACK + BUTTONS */}
                            <div>
                              <h4 className="font-semibold mb-3 text-matrix-green">Tech Stack</h4>
                              <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                  <Badge 
                                    key={tech}
                                    variant="outline"
                                    className="border-matrix-green/30 text-matrix-green"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>

                              <div className="flex gap-4">
                                <Button asChild className="flex-1">
                                  <a href={project.github} target="_blank">
                                    <Github className="mr-2 h-4 w-4" />
                                    Code
                                  </a>
                                </Button>

                                <Button asChild variant="outline" className="flex-1">
                                  <a href={project.live} target="_blank">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Live Demo
                                  </a>
                                </Button>
                              </div>
                            </div>

                          </div>

                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* FOOTER BRACKET */}
          <motion.div className="text-center mt-8" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}>
            <span className="text-4xl text-foreground font-mono">]</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
