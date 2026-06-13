import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";



const filters = ["All", "Website", "Mobile"];

const projects = [
  {
    id: 1,
    title: "Saout",
    category: "Mobile",
    year: "2024",
    description:
      "A sports technology platform designed to connect young football players with coaches, scouts, and professional clubs in Saudi Arabia.",
    tags: ["Flutter", "Dart", "Firebase", "Figma","Git"],
    image: "/SAOUT.png",
    github: "https://github.com/Areen-Ibrahim/Saout-app.git",
  },
  {
    id: 2,
    title: "Citizen Services Mobile Application",
    category: "Mobile",
    year: "2025",
    description:
      "A secure web application developed during my cooperative training at the Saudi Water Authority that allows authorized staff to query violation-related data using multiple identifiers and retrieve property and ownership information.",
    tags: ["Flutter", "Dart", "Figma","Xcode"],
    image: "/DigitalAssistant.png",
    
  },
  {
    id: 3,
    title: "CareBuddy",
    category: "Mobile",
    year: "2025",
    description:
      "A multilingual mobile application that connects families with trusted babysitters and helps manage childcare services efficiently.",
    tags: ["Flutter", "Dart", "FireBase", "Figma","Git"],
    image: "/CareBuddy.png",
    github: "https://github.com/Areen-Ibrahim/CareBuddy-app.git",
  },
  
  {
    id: 4,
    title: "LinguaMates",
    category: "Website",
    year: "2024",
    description:
      "A web-based language learning platform that connects English learners with teachers for personalized learning and cultural exchange.",
    tags: ["HTML", "CSS", "XAMPP"],
    image: "/Lingumates.png",
    github: "https://github.com/Areen-Ibrahim/LinguaMates-Website.git",
  },
  
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-muted-foreground mb-12 tracking-widest uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem" }}
        >
          03 — Projects
        </p>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <h2
            className="text-foreground"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Selected
            <br />
            <span className="text-primary">work.</span>
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-xs px-4 py-2 border transition-all cursor-pointer ${
                  activeFilter === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-transparent text-muted-foreground"
                }`}
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-card group relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "200px" }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)", filter: "grayscale(30%)" }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to bottom, transparent 40%, rgba(17,17,17,0.9) 100%)",
            opacity: hovered ? 0.95 : 0.7,
          }}
        />
        {/* Hover links */}
        <div
          className="absolute top-4 right-4 flex gap-2 transition-all duration-300"
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(-8px)" }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-card hover:bg-primary hover:text-primary-foreground transition-colors text-foreground"
            aria-label="GitHub"
          >
            <Github size={14} />
          </a>
          
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span
              className="text-primary text-xs tracking-widest uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem" }}
            >
              {project.category} · {project.year}
            </span>
            <h3
              className="text-foreground mt-1"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "1.15rem", letterSpacing: "-0.02em" }}
            >
              {project.title}
            </h3>
          </div>
          <ArrowRight
            size={16}
            className="text-muted-foreground transition-all duration-300 mt-2 flex-shrink-0"
            style={{
              color: hovered ? "var(--primary)" : undefined,
              transform: hovered ? "translate(2px, -2px)" : "none",
            }}
          />
        </div>

        <p
          className="text-muted-foreground mb-4"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", lineHeight: 1.65 }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-border text-muted-foreground text-xs px-2 py-0.5"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
