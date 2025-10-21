import Image from "next/image"

export function ContactSection() {
  return (
    <section id="contact-section">
      <div className="mb-8">
        <Image src="/contact.jpg" alt="contact" width={300} height={80} className="mb-2 h-auto w-48" />
        <p className="text-sm text-muted-foreground">
          happy to chat about anything at harrisonfulford06[at]gmail[dot]com :)
        </p>
      </div>
    </section>
  )
}
