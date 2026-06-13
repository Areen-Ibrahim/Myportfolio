import { motion } from "motion/react";

const skillGroups = [
  {
    category: "Frontend",
    items: [
      { name: "Flutter / Dart", level: 95 },
      { name: "React", level: 85 },
      { name: "CSS / Tailwind", level: 75 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "Java", level: 75 },
    ],
  },
  {
    category: "Tools & Design",
    items: [
      { name: "Figma", level: 85 },
      { name: "Xcode", level: 78 },
      { name: "Git", level: 78 },
    ],
  },
];

const tags = [
  "Flutter", "Firebase", "Python", "Figma","React","Tailwind", "Java", "Xcode", "Git",
  "Dart","HTML","CSS"
];

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <motion.div
      className="mb-5"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="flex justify-between items-baseline mb-2">
        <span
          className="text-foreground"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 500 }}
        >
          {name}
        </span>
        <span
          className="text-primary"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem" }}
        >
          {level}%
        </span>
      </div>
      <div className="h-px w-full bg-border relative">
        <motion.div
          className="absolute top-0 left-0 h-px bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: index * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-muted-foreground mb-12 tracking-widest uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem" }}
        >
          02 — Skills
        </p>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
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
            Tools of the
            <br />
            <span className="text-primary">trade.</span>
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p
                className="text-muted-foreground mb-6 tracking-widest uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem" }}
              >
                {group.category}
              </p>
              {group.items.map((item, i) => (
                <SkillBar key={item.name} name={item.name} level={item.level} index={i} />
              ))}
            </div>
          ))}
        </div>

        {/* Tag cloud */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-border text-muted-foreground text-xs px-3 py-1.5 hover:border-primary hover:text-primary transition-colors cursor-default"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
