import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p
          className="text-muted-foreground mb-12 tracking-widest uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem" }}
        >
          01 — About
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="text-foreground mb-8"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
              }}
            >
              Turning ideas into 
              <br />
              <span className="text-primary">real</span> digital
              <br />
              experiences.
            </h2>

            <div
              className="text-muted-foreground space-y-4"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: 1.8 }}
            >
              <p>
                Based in Riyadh. I’m a software engineering graduate with a strong interest in building modern digital experiences, 
                and I’m currently looking for opportunities to grow and gain real-world experience in the field.
              </p>
              <p>
                My focus is on frontend development and UI/UX, where I enjoy turning ideas into clean and functional interfaces.
                Most of my experience comes from academic and college projects, 
                where I’ve worked on developing mobile and web applications that helped me strengthen both my design thinking and engineering fundamentals.
              </p>
              <p>
                Outside of coding, I spend my time learning new tools, exploring design systems,
                and improving my skills through projects that simulate real-world development work.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Open to full-time"].map((tag) => (
                <span
                  key={tag}
                  className="border border-primary text-primary text-xs px-3 py-1.5 tracking-wide"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: photo + quick facts */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="relative">
              <img
                src="
                
                /areen.png"
                alt="Areen Alateeq,front-end developer"
                className="w-full object-cover"
                style={{ height: "360px", filter: "grayscale(20%)" }}
              />
              {/* Accent border */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full border border-primary pointer-events-none"
                style={{ zIndex: -1 }}
              />
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-px bg-border">
              {[
                { label: "Location", value: "Saudi Arabia, Riyadh" },
                { label: "Timezone", value: "AST / UTC+3" },
                { label: "Education", value: "SWE, King Saud University" },
                { label: "Focus", value: "Flutter, Figma, Xcode" },
              ].map((f) => (
                <div key={f.label} className="bg-card p-4">
                  <p
                    className="text-muted-foreground mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em" }}
                  >
                    {f.label}
                  </p>
                  <p
                    className="text-foreground"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 500 }}
                  >
                    {f.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
