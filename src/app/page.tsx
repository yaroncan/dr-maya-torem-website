import Link from "next/link";
import content from "@/content/site-content.json";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            {content.siteTitle}
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              {content.nav.home}
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              {content.nav.about}
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              {content.nav.services}
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              {content.nav.contact}
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {content.nav.cta}
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-surface py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            {content.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-medium mb-6">
            {content.hero.subtitle}
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            {content.hero.description}
          </p>
          <Link
            href={content.hero.ctaLink}
            className="inline-block bg-primary text-white text-lg px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {content.hero.ctaText}
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            {content.about.title}
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            {content.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {content.services.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.services.items.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl">✦</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {content.whyChooseMe.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {content.whyChooseMe.items.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-secondary text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {content.testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.testimonials.items.map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-primary font-bold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.contact.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">{content.contact.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href={`tel:${content.contact.phone}`}
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              📞 {content.contact.phone}
            </a>
            <Link
              href="/contact"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary-light transition-colors text-lg"
            >
              ✉️ {content.nav.contact}
            </Link>
          </div>
          <p className="text-gray-500">{content.contact.hours}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg font-bold mb-2">{content.siteTitle}</p>
          <p className="text-gray-300 mb-4">{content.siteDescription}</p>
          <p className="text-gray-400 text-sm mb-2">{content.footer.copyright}</p>
          <p className="text-gray-500 text-xs">{content.footer.disclaimer}</p>
        </div>
      </footer>
    </div>
  );
}
