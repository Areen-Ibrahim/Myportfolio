import { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, Linkedin, Github } from "lucide-react";
const XIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width="14"
    height="14"
    {...props}
  >
    <path d="M18.244 2H21l-6.52 7.47L22 22h-6.79l-4.88-6.41L5.01 22H2.25l6.99-8.01L2 2h6.91l4.43 5.83L18.244 2z" />
  </svg>
);
const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Areen-Ibrahim" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/areen-alateeq-289678378" },
  { icon: XIcon, label: "", href: "https://x.com/rvarepurple" },
  { icon: Mail, label: "Email", href: "mailto:Areenalateeq@gmail.com" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1400);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-muted-foreground mb-12 tracking-widest uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem" }}
        >
          04 — Contact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-foreground mb-6"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
              }}
            >
              Let's build
              <br />
              something
              <br />
              <span className="text-primary">great.</span>
            </h2>

           

            <div className="flex gap-4 flex-wrap">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors px-4 py-2.5"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", fontWeight: 500 }}
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {sent ? (
              <div className="flex flex-col items-start justify-center h-full gap-4">
                <span
                  className="text-primary"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: "3rem", fontWeight: 700 }}
                >
                  Message sent.
                </span>
                <p className="text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Thanks — I'll get back to you soon.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors px-5 py-2.5 text-sm mt-2"
                  style={{ fontFamily: "'Inter', sans-serif", background: "none", cursor: "pointer" }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "You@example.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-muted-foreground mb-2"
                      style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={form[field.id as "name" | "email"]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      className="w-full bg-card border border-border text-foreground px-4 py-3 focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-muted-foreground mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Share your ideas, questions, or opportunities..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-card border border-border text-foreground px-4 py-3 focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground resize-none"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 hover:opacity-90 transition-opacity self-start disabled:opacity-60"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, border: "none", cursor: "pointer" }}
                >
                  {sending ? "Sending…" : "Send message"}
                  {!sending && <Send size={15} />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
