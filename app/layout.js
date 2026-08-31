import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionDock from "@/components/layout/SectionDock";
import SmoothScroll from "@/components/ui/SmoothScroll";

const displayFont = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dr. Ashfaq ul Hassan — Professor & Head, Clinical Anatomy, SKIMS",
  description:
    "Dr. Ashfaq ul Hassan, Professor and Head of Clinical Anatomy & Histology at SKIMS — 16+ years of teaching, research and clinical anatomy. Book a consultation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body className="min-h-screen bg-mint text-ink antialiased">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
          <SectionDock />
        </SmoothScroll>
      </body>
    </html>
  );
}
