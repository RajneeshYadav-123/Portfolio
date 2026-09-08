import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--card-border)] bg-[var(--background)] relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-secondary)] font-medium">
        <p>&copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with Next.js &amp; passion for building things.
        </p>
      </div>
    </footer>
  );
}
