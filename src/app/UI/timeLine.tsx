import { Topic, RadialFlow } from "@/components/ui/radialflow";



const demoTopics: Topic[] = [
  {
    id: "Sass",
    name: "Sass",
    position: { x: 10, y: 20 },
    color: "oklch(72.3% 0.219 149.579)",
    highlighted: true,
  },
  {
    id: "CSS3 / TailwindCSS",
    name: "CSS3 / TailwindCSS",
    position: { x: 10, y: 35 },
    color: "oklch(72.3% 0.219 149.579)",
    highlighted: true,
  },
  {
    id: "JavaScript (ES6+)",
    name: "JavaScript (ES6+)",
    position: { x: 10, y: 50 },
    color: "oklch(72.3% 0.219 149.579)",
    highlighted: true,
  },
  {
    id: "TypeScript",
    name: "TypeScript",
    position: { x: 10, y: 65 },
    color: "oklch(72.3% 0.219 149.579)",
    highlighted: true,
  },
  {
    id: "Next.js",
    name: "Next.js",
    position: { x: 10, y: 80 },
    color: "oklch(72.3% 0.219 149.579)",
    highlighted: true,
  },
  {
    id: "Framer Motion",
    name: "Framer Motion",
    position: { x: 90, y: 20 },
    color: "oklch(72.3% 0.219 149.579)",
    highlighted: true,
  },
  {
    id: "ShadCN/UI",
    name: "ShadCN/UI",
    position: { x: 90, y: 35 },
    color: "oklch(72.3% 0.219 149.579)",
    highlighted: true,
  },
  {
    id: "VS Code",
    name: "VS Code",
    position: { x: 90, y: 50 },
    color: "oklch(72.3% 0.219 149.579)",
    highlighted: true,
  },
  {
    id: "Git",
    name: "Git",
    position: { x: 90, y: 65 },
    color: "oklch(72.3% 0.219 149.579)",
    highlighted: true,
  },
  {
    id: "React",
    name: "React",
    position: { x: 90, y: 80 },
    color: "oklch(72.3% 0.219 149.579)",
    highlighted: true,
  },
];

export default function TimeLine() {
  return (
    <RadialFlow
      topics={demoTopics}
      badgeName="😂"
      centralDotColor="#328F26FF"
    />
  );
}
