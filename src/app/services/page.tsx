import Link from "next/link";
import content from "@/content/site-content.json";
import { Header, Footer } from "@/components/layout";

export const metadata = {
  title: "שירותים",
  description: "גינקולוגיה, מנופאוזה ובריאות האישה - ד״ר מאיה תורם",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            {content.services.title}
          </h1>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            {content.hero.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.services.items.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl">✦</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">רוצה לשמוע עוד?</h2>
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
