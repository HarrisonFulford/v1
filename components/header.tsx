import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="mb-8 md:mb-12">
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1">
          <div className="mb-4">
            <Image
              src="/harrison-fulford-nobg.png"
              alt="Harrison Fulford"
              width={600}
              height={120}
              className="h-auto w-full max-w-md"
              priority
            />
          </div>
          <div className="mb-4 max-w-lg space-y-1">
            <p className="text-sm leading-relaxed text-foreground md:text-base">
              machine learning engineer, currently interested in world models.
            </p>
            <p className="text-sm leading-relaxed text-foreground md:text-base">
              computer science student @ university of waterloo.
            </p>
          </div>
        </div>
        <nav className="flex items-center gap-2 text-sm">
          <Link
            href="https://github.com/HarrisonFulford"
            className="text-foreground hover:text-muted-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </Link>
          <span className="text-foreground">|</span>
          <Link
            href="https://x.com/_harrisonfulfor"
            className="text-foreground hover:text-muted-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </Link>
          <span className="text-foreground">|</span>
          <Link
            href="https://www.linkedin.com/in/harrison-fulford-147a1b2a9/"
            className="text-foreground hover:text-muted-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </Link>
        </nav>
      </div>
    </header>
  )
}
