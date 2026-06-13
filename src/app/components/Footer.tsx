export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <span
          className="text-muted-foreground"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem" }}
        >
          © 2026 Areen Alateeq — All rights reserved
        </span>
        <span
          className="text-muted-foreground"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem" }}
        >
          Built with React + Tailwind · Saudi Arabia, Riyadh
        </span>
      </div>
    </footer>
  );
}
