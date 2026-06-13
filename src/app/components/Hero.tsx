import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 px-6 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Accent glow */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(184,255,87,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Index label */}
          <p
            className="text-muted-foreground mb-8 tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem" }}
          >
            00 — Portfolio 2026
          </p>

          {/* Name */}
          <h1
            className="text-foreground mb-4"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
            }}
          >
            Areen Alateeq
          </h1>

          {/* Role */}
          <div className="flex flex-wrap items-baseline gap-3 mb-12">
            <span
              className="text-primary"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(1.5rem, 4vw, 3rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Software Engineer Graduate 
            </span>
            <span className="text-muted-foreground" style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>
              &amp; Front-end/Mobile Developer
            </span>
          </div>

          {/* Tagline */}
          <p
            className="text-muted-foreground max-w-xl mb-14"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            I’m a software engineer passionate about creating beautiful, intuitive,
            and meaningful digital experiences through code and design.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary text-primary-foreground px-7 py-3.5 hover:opacity-90 transition-opacity"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, border: "none", cursor: "pointer" }}
            >
              View projects
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-foreground border border-border px-7 py-3.5 hover:border-primary hover:text-primary transition-colors"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, background: "none", cursor: "pointer" }}
            >
              Get in touch
            </button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-0 right-0 flex flex-col items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span
            className="tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <ArrowDown size={12} />
        </motion.div>
      </div>
    </section>
  );
}
