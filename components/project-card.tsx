import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  category: string
  year: string
  description: string
  image: string
  spanFull?: boolean
  link?: string
}

export function ProjectCard({ title, category, year, description, image, spanFull, link }: ProjectCardProps) {
  const CardContent = (
    <article className="group cursor-pointer">
      <div className="mb-4 overflow-hidden rounded-lg bg-card">
        <div className={`relative w-full ${spanFull ? "aspect-[12/3]" : "aspect-[4/3]"}`}>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-medium text-foreground group-hover:text-muted-foreground transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground whitespace-nowrap">
            <span>{category}</span>
            <span>·</span>
            <span>{year}</span>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </article>
  )

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {CardContent}
      </Link>
    )
  }

  return CardContent
}
