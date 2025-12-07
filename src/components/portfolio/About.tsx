import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Coffee, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { icon: Code, value: "10+", label: "Projects Completed" },
    { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
    { icon: Lightbulb, value: "1", label: "Year Freelance Experience" },
    { icon: Rocket, value: "99%", label: "Client Satisfaction" }
  ];

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-syntax-keyword">function</span>{" "}
              <span className="text-syntax-function">aboutMe</span>
              <span className="text-foreground">()</span>{" "}
              <span className="text-foreground">{'{'}</span>
            </h2>
          </div>

          {/* JSON-style About Info */}
          <motion.div
            className="terminal-window mb-12"
            initial={{ opacity: 0, x: -50, rotateY: -20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ 
              duration: 1, 
              delay: 0.2,
              type: "spring",
              stiffness: 80
            }}
            whileHover={{
              scale: 1.02,
              rotateY: 2,
              boxShadow: "0 25px 50px hsl(var(--matrix-green) / 0.2)"
            }}
          >
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="text-muted-foreground font-mono text-xs ml-4">
                about.json
              </span>
            </div>
            <div className="terminal-content">
              <pre className="text-sm leading-relaxed whitespace-pre-wrap break-words overflow-x-auto">
                <span className="text-foreground">{'{'}</span>
                <br />
                <span className="ml-4 text-syntax-string">"passion"</span>
                <span className="text-foreground">:</span>{" "}
                <span className="text-syntax-string">"Building digital solutions that matter"</span>
                <span className="text-foreground">,</span>
                <br />
                <span className="ml-4 text-syntax-string">"specialty"</span>
                <span className="text-foreground">:</span>{" "}
                <span className="text-foreground">[</span>
                <br />
                <span className="ml-8 text-syntax-string">"Full Stack Development"</span>
                <span className="text-foreground">,</span>
                <br />
                <span className="ml-8 text-syntax-string">"Machine Learning"</span>
                <span className="text-foreground">,</span>
                <br />
                <span className="ml-8 text-syntax-string">"Problem Solving"</span>
                <span className="text-foreground">,</span>
                <br />
                <span className="ml-8 text-syntax-string">"Data Science"</span>
                <br />
                <span className="ml-4 text-foreground">],</span>
                <br />
                <span className="ml-4 text-syntax-string">"philosophy"</span>
                <span className="text-foreground">:</span>{" "}
                <span className="text-syntax-string">"Clean code is not written by following rules. Clean code is written by developers who care."</span>
                <span className="text-foreground">,</span>
                <br />
                <span className="ml-4 text-syntax-string">"currentFocus"</span>
                <span className="text-foreground">:</span>{" "}
                <span className="text-syntax-string">"Exploring AI integration in web apps"</span>
                <br />
                <span className="text-foreground">{'}'}</span>
              </pre>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-lg border border-terminal-border code-glow"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="h-8 w-8 text-matrix-green mx-auto mb-4 animate-float" />
                <div className="text-2xl font-bold text-matrix-green mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Personal Story */}
          <motion.div
            className="bg-card/50 rounded-lg p-8 border border-terminal-border"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My journey into technology began with curiosity and a desire to turn ideas into impactful digital solutions. 
              What started with building simple web pages using HTML and CSS grew into a deep passion for full-stack 
              development with the MERN stack and exploring the world of Machine Learning to solve real-world problems.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether it's designing scalable web applications or developing intelligent models that learn from data, 
              I believe in crafting solutions that are both efficient and elegant. When I'm not coding, you’ll find me 
              experimenting with new frameworks, training ML models, contributing to open source, or sharing knowledge 
              within the developer community.
            </p>
          </motion.div>

          {/* Closing Brace */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-4xl text-foreground font-mono">{'}'}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;