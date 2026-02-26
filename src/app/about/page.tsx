import Link from "next/link";
import content from "@/content/site-content.json";
import { Header, Footer } from "@/components/layout";

export const metadata = {
  title: "אודות",
  description: content.about.paragraphs[0],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            {content.about.title}
          </h1>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {content.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
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

      {/* CTA */}
      <section className="bg-primary-light py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">רוצה לקבוע תור?</h2>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white text-lg px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {content.nav.cta}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
