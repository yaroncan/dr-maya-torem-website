import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drmayatorem.com"),
  title: {
    default: "ד״ר מאיה טורם | רופאת נשים מומחית וייעוץ גיל המעבר | רמת אביב, תל אביב",
    template: "%s | ד״ר מאיה טורם - רופאת נשים",
  },
  description:
    "ד״ר מאיה טורם - רופאת נשים מומחית בגניקולוגיה וגיל המעבר ברמת אביב, תל אביב. מעקב גניקולוגי, ייעוץ מנופאוזה, תכנון הריון והתאמת אמצעי מניעה. קביעת תור: 03-7620620",
  keywords: [
    "רופאת נשים תל אביב",
    "רופאת נשים רמת אביב",
    "גניקולוגית תל אביב",
    "גיל המעבר",
    "מנופאוזה",
    "ייעוץ גיל המעבר",
    "ד״ר מאיה טורם",
    "מאיה טורם",
    "רופאת נשים מומחית",
    "מעקב גניקולוגי",
    "תכנון הריון",
    "התאמת אמצעי מניעה",
    "מעקב הריון",
    "ביקורת אחרי לידה",
    "בריאות האישה",
    "gynecologist tel aviv",
    "menopause specialist",
  ],
  authors: [{ name: "ד״ר מאיה טורם" }],
  openGraph: {
    title: "ד״ר מאיה טורם | רופאת נשים מומחית וייעוץ גיל המעבר",
    description:
      "רופאת נשים מומחית בגניקולוגיה וגיל המעבר ברמת אביב, תל אביב. טיפול מקצועי, אישי ומותאם לכל אישה. קביעת תור: 03-7620620",
    locale: "he_IL",
    type: "website",
    siteName: "ד״ר מאיה טורם",
    images: [
      {
        url: "/dr-mayatorem.jpg",
        width: 400,
        height: 400,
        alt: "ד״ר מאיה טורם - רופאת נשים מומחית",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://drmayatorem.com",
  },
};

// Schema.org structured data for Physician
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "ד״ר מאיה טורם",
  description:
    "רופאת נשים מומחית בגניקולוגיה וגיל המעבר ברמת אביב, תל אביב",
  url: "https://drmayatorem.com",
  telephone: "03-7620620",
  email: "sec101@bri.co.il",
  image: "https://drmayatorem.com/dr-mayatorem.jpg",
  medicalSpecialty: ["Gynecology", "Menopause Medicine", "Obstetrics"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "ברודצקי 43",
    addressLocality: "תל אביב",
    addressRegion: "רמת אביב",
    addressCountry: "IL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.1133,
    longitude: 34.7903,
  },
  availableService: [
    { "@type": "MedicalProcedure", name: "ייעוץ גיל המעבר ומנופאוזה" },
    { "@type": "MedicalProcedure", name: "מעקב גניקולוגי שגרתי" },
    { "@type": "MedicalProcedure", name: "התאמת אמצעי מניעה" },
    { "@type": "MedicalProcedure", name: "תכנון טרום הריון" },
    { "@type": "MedicalProcedure", name: "מעקב הריון בסיכון נמוך" },
    { "@type": "MedicalProcedure", name: "ביקורת לאחר לידה" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "5",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${heebo.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
