import content from "@/content/site-content.json";
import { Header, Footer } from "@/components/layout";

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
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {content.contact.formLabels.name}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {content.contact.formLabels.phone}
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {content.contact.formLabels.email}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {content.contact.formLabels.subject}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {content.contact.formLabels.message}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                >
                  {content.contact.formLabels.submit}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-2">📞 טלפון</h3>
                <a
                  href={`tel:${content.contact.phone}`}
                  className="text-primary text-lg hover:underline"
                  dir="ltr"
                >
                  {content.contact.phone}
                </a>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">✉️ אימייל</h3>
                <a
                  href={`mailto:${content.contact.email}`}
                  className="text-primary text-lg hover:underline"
                  dir="ltr"
                >
                  {content.contact.email}
                </a>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">📍 כתובת</h3>
                <p className="text-gray-700 text-lg">{content.contact.address}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">🕐 שעות קבלה</h3>
                <p className="text-gray-700 text-lg">{content.contact.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
