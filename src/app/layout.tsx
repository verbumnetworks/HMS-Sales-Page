import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verbum Health – Hospital Management Software",
  description:
    "Verbum Health is an all-in-one hospital management software designed to streamline patient care, records, billing, and hospital operations efficiently and securely.",
  keywords: [
    "hospital management system",
    "Verbum Health",
    "medical software",
    "HMS",
    "clinic management",
    "healthcare software",
    "EMR",
    "EHR",
    "hospital software Nigeria",
    "patient management",
  ],
  authors: [
    { name: "Verbum Networks Limited Enugu", url: "https://verbumnetworksenugu.com" },
  ],
  creator: "Verbum Networks Limited Enugu",
  publisher: "Verbum Networks Limited Enugu",
  metadataBase: new URL("https://verbumhealth.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Verbum Health – Smart Hospital Management Software",
    description:
      "Manage your hospital smarter with Verbum Health. From patient records to billing, appointments, inventory, and staff, everything in one place.",
    url: "https://verbumhealth.com",
    siteName: "Verbum Health",
    images: [
      {
        url: "https://verbumhealth.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Verbum Health Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verbum Health – Hospital Management Software",
    description:
      "Experience efficient hospital administration with Verbum Health – from appointments to billing, all in one secure platform.",
    images: ["https://verbumhealth.com/favicon.ico"],
    creator: "@verbumhealth",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  category: "Healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}bg-[#EAEEFE]`}
      >
        {children}
      </body>
    </html>
  );
}
