import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
});

export const metadata: Metadata = {
  title: "ד״ר מאיה תורם | גינקולוגית ומומחית למנופאוזה",
  description:
    "ד״ר מאיה תורם - רופאה מומחית בגינקולוגיה ובמנופאוזה. טיפול מקצועי, אישי ומותאם לכל אישה.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
