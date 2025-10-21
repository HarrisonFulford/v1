"use client"

import { ProjectCard } from "@/components/project-card"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

const workProjects = [
  {
    title: "machine learning engineer",
    category: "internship",
    year: "2025",
    description: "working on ad recomendation and campaign estimates model improvements",
    image: "/work-1.png",
    spanFull: true,
    link: "https://www.shopify.com/ca",
  },
  {
    title: "software engineer",
    category: "internship",
    year: "2025",
    description: "built an internal platform for spot gpu usage from multiple company data centers",
    image: "/work-2.png",
    link: "https://innovation.spuric.com/",
  },
  {
    title: "machine learning engineer",
    category: "internship",
    year: "2024",
    description: "helped steal ad space with real time classification and overlay of ads during sports broadcasts",
    image: "/work-3.png",
    link: "https://www.thelocalreach.ca/",
  },
  {
    title: "firmware engineer",
    category: "design team",
    year: "2024",
    description:
      "configured radio's to help a converted electric car talk to traffic lights, also tested level 2 self driving models",
    image: "/work-4.png",
    link: "https://www.uwaft.ca/",
  },
]

export function WorkSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section")
    if (projectsSection) {
      const elementPosition = projectsSection.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - window.innerHeight * 0.25

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section>
      <div className="mb-8">
        <div className="mb-2">
          <Image src="/work.jpg" alt="work" width={200} height={60} className="h-8 w-56" />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">professional experience</p>
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            skip to projects
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {workProjects.map((project, index) => (
          <div key={index} className={project.spanFull ? "md:col-span-3" : ""}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  )
}
