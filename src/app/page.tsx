import Link from "next/link";
import Image from "next/image";
import content from "@/content/site-content.json";
import { Header, Footer } from "@/components/layout";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-surface py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-right">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              {content.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-medium mb-6">
              {content.hero.subtitle}
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl">
              {content.hero.description}
            </p>
            <Link
              href={content.hero.ctaLink}
              className="inline-block bg-primary text-white text-lg px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {content.hero.ctaText}
            </Link>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/dr-mayatorem.jpg"
              alt={content.about.imageAlt}
              width={400}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-[280px] h-[280px] md:w-[400px] md:h-[400px]"
              priority
            />
          </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {content.testimonials.title}
          </h2>
          <p className="text-center text-gray-500 mb-12">
            מבוסס על חוות דעת מ-
            <a
              href={content.testimonials.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              {content.testimonials.source}
            </a>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.testimonials.items.map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-primary font-bold">— {testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href={content.testimonials.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              לכל חוות הדעת ב-MedReviews ←
            </a>
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
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            ✉️ {content.nav.contact}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
