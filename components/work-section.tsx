"use client"

import { ProjectCard } from "@/components/project-card"
import Image from "next/image"

const allProjects = [
  // Row 1: shopify, shipit, gordon
  {
    title: "shopify",
    company: "shopify",
    role: "machine learning engineer",
    category: "internship",
    year: "2025",
    description: "working on ad recomendation and campaign estimates model improvements",
    image: "/work-1.png",
    hoverImage: "/shopify-2.png",
    link: "https://shopify.engineering/machine-learning-at-shopify",
    isWork: true,
  },
  {
    title: "/shipit",
    category: "open source",
    year: "2025",
    description: "built tab to complete and suggestion agents as a figma plugin",
    image: "/shipit.jpeg",
    hoverImage: "/shipit-2.png",
    link: "https://www.youtube.com/watch?v=g6rRfPKCgV4",
    isWork: false,
  },
  {
    title: "gordon",
    category: "open source",
    year: "2025",
    description:
      "created an ai cooking assistant that sees what you see and gives advice in real time, he's also british",
    image: "/gordon.png",
    hoverImage: "/gordon-2.png",
    link: "https://github.com/HarrisonFulford/Gordon",
    isWork: false,
  },
  // Row 2: spur, cacheout, uwaft
  {
    title: "spur innovation centre",
    company: "spur innovation centre",
    role: "software engineer",
    category: "internship",
    year: "2025",
    description: "built an internal platform for spot gpu usage from multiple company data centers",
    image: "/work-2.png",
    hoverImage: "/spur-2.png",
    link: "https://innovation.spuric.com/",
    isWork: true,
  },
  {
    title: "cacheout",
    category: "pitch",
    year: "2025",
    description: "designed a platform to rent compute power from community providers",
    image: "/cacheout-primary.png",
    hoverImage: "/cacheout-2.png",
    link: "https://www.cacheout.ca/",
    isWork: false,
  },
  {
    title: "uwaft",
    company: "uwaft",
    role: "firmware engineer",
    category: "design team",
    year: "2024",
    description:
      "configured radio's to help a converted electric car talk to traffic lights, also tested level 2 self driving models",
    image: "/work-4.png",
    hoverImage: "/uwaft-2.png",
    link: "https://www.uwaft.ca/",
    isWork: true,
  },
  // Row 3: the local reach, noscroll (centered)
  {
    title: "the local reach",
    company: "the local reach",
    role: "machine learning engineer",
    category: "internship",
    year: "2024",
    description: "helped steal ad space with real time classification and overlay of ads during sports broadcasts",
    image: "/work-3.png",
    hoverImage: "/localreach-2.png",
    link: "https://www.thelocalreach.ca/",
    isWork: true,
  },
  {
    title: "noscroll",
    category: "open source",
    year: "2024",
    description: "developed a chrome extension that proactively keeps you off distracting sites",
    image: "/noscroll.jpeg",
    hoverImage: "/noscroll-2.png",
    link: "https://www.youtube.com/watch?v=-LHBkAw3PC8",
    isWork: false,
  },
]

export function WorkSection() {
  return (
    <section>
      <div className="mb-8">
        <div className="mb-2">
          <Image
            src="/work-and-projects-nobg.png"
            alt="work & projects"
            width={400}
            height={60}
            className="h-[60px] w-auto"
          />
        </div>
        <p className="text-sm text-muted-foreground">professional experience, research, and applications</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {allProjects.slice(0, 6).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-6">
        {allProjects.slice(6).map((project, index) => (
          <div key={index} className="w-full md:w-[calc(33.333%-0.75rem)]">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  )
}
