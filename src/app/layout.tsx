import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ד״ר מאיה טורם | גינקולוגית ומומחית למנופאוזה",
    template: "%s | ד״ר מאיה טורם",
  },
  description:
    "ד״ר מאיה טורם - רופאה מומחית בגינקולוגיה ובמנופאוזה. טיפול מקצועי, אישי ומותאם לכל אישה.",
  keywords: [
    "גינקולוגית",
    "מנופאוזה",
    "רופאת נשים",
    "ד״ר מאיה טורם",
    "גיל המעבר",
    "בריאות האישה",
    "gynecologist",
    "menopause specialist",
  ],
  authors: [{ name: "ד״ר מאיה טורם" }],
  openGraph: {
    title: "ד״ר מאיה טורם | גינקולוגית ומומחית למנופאוזה",
    description:
      "טיפול מקצועי, אישי ומותאם לכל אישה. ליווי רפואי בגישה חמה ומכבדת.",
    locale: "he_IL",
    type: "website",
    siteName: "ד״ר מאיה טורם",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Schema.org structured data for Physician
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "ד״ר מאיה טורם",
  description:
    "רופאה מומחית בגינקולוגיה ובמנופאוזה. טיפול מקצועי, אישי ומותאם לכל אישה.",
  medicalSpecialty: ["Gynecology", "Menopause Medicine"],
  availableService: [
    { "@type": "MedicalProcedure", name: "גינקולוגיה" },
    { "@type": "MedicalProcedure", name: "טיפול במנופאוזה" },
    { "@type": "MedicalProcedure", name: "בריאות האישה" },
  ],
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
