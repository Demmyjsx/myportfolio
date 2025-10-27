import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let’s Connect 👋
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-8 max-w-md">
          I am always open to new opportunities, collaborations, or just a good
          chat about web development and design.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          <Link
            href="mailto:yourname@example.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>ademolaabds@gmail.com</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/ademola-abdul/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </Link>

          <Link
            href="https://github.com/Demmyjsx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </Link>
        </div>

        <div className="border-t border-gray-700 w-full mt-12 pt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} d a — Built with Next.js & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
