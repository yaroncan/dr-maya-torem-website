import Image from "next/image";
import content from "@/content/site-content.json";
import { Header, Footer } from "@/components/layout";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "צרו קשר",
  description: "צרו קשר עם ד״ר מאיה טורם לקביעת תור או לכל שאלה.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {content.contact.title}
          </h1>
          <p className="text-center text-lg text-gray-600 mb-12">
            {content.contact.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactForm />

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-2">📍 כתובת</h3>
                <p className="text-gray-700 text-lg">{content.contact.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
