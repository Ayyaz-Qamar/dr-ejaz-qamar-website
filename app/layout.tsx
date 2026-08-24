import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Muhammad Ejaz Qamar | Orthopaedic Surgeon & Specialist",
  description:
    "Dr. Muhammad Ejaz Qamar - Orthopaedic Surgeon & Specialist. Book an appointment today.",
  openGraph: {
    title: "Dr. Muhammad Ejaz Qamar | Orthopaedic Surgeon & Specialist",
    description:
      "PMDC Certified Orthopaedic Surgeon & Specialist. Book your appointment online.",
    url: "https://dr-ejaz-qamar-website.vercel.app",
    siteName: "Dr. Muhammad Ejaz Qamar",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Muhammad Ejaz Qamar - Orthopaedic Surgeon & Specialist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Muhammad Ejaz Qamar | Orthopaedic Surgeon & Specialist",
    description:
      "PMDC Certified Orthopaedic Surgeon & Specialist. Book your appointment online.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
