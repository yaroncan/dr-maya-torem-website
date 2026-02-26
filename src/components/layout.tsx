import Link from "next/link";
import content from "@/content/site-content.json";

export function Header() {
  return (
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
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg font-bold mb-2">{content.siteTitle}</p>
        <p className="text-gray-300 mb-4">{content.siteDescription}</p>
        <p className="text-gray-400 text-sm mb-2">{content.footer.copyright}</p>
        <p className="text-gray-500 text-xs">{content.footer.disclaimer}</p>
      </div>
    </footer>
  );
}
