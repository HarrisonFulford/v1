import { Header } from "@/components/header"
import { WorkSection } from "@/components/work-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-12 md:py-8">
        <Header />
        <div className="mt-2 space-y-4 md:mt-3 md:space-y-6">
          <WorkSection />
          <ProjectsSection />
          <ContactSection />
        </div>
        <footer className="mt-12 pb-6 text-center">
          <p className="text-sm text-muted-foreground">
            inspired by{" "}
            <Link
              href="https://www.rajan.sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              Rajan Agarwal
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.joshyan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              Joshua Yan
            </Link>
          </p>
        </footer>
      </div>
    </main>
  )
}
