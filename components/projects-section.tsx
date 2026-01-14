import { ProjectCard } from "@/components/project-card"
import Image from "next/image"

const projects = [
  {
    title: "cacheout",
    category: "private",
    year: "2025",
    description: "designed a platform to rent compute power from community providers",
    image: "/cacheout-portfolio.png",
    spanFull: true,
    link: "https://www.cacheout.ca/",
  },
  {
    title: "/shipit",
    category: "open source",
    year: "2025",
    description: "built tab to complete and suggestion agents as a figma plugin",
    image: "/shipit.jpeg",
    link: "https://www.youtube.com/watch?v=g6rRfPKCgV4",
  },
  {
    title: "gordon",
    category: "open source",
    year: "2025",
    description:
      "created an ai cooking assistant that sees what you see and gives advice in real time, he's also british",
    image: "/gordon.png",
    link: "https://github.com/HarrisonFulford/Gordon",
  },
  {
    title: "noscroll",
    category: "open source",
    year: "2024",
    description: "developed a chrome extension that proactively keeps you off distracting sites",
    image: "/noscroll.jpeg",
    link: "https://www.youtube.com/watch?v=-LHBkAw3PC8",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects-section">
      <div className="mb-8">
        <Image src="/projects.jpg" alt="projects" width={300} height={80} className="mb-2 h-auto w-48" />
        <p className="text-sm text-muted-foreground">research, experiments, and applications.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className={project.spanFull ? "md:col-span-3" : ""}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  )
}
