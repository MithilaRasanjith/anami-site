import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter, Noto_Sans_JP } from "next/font/google";
import type { Metadata } from "next";

const SITE_URL = "https://anamijls.com";
const SITE_NAME = "ANAMI Japanese Language School";
const DEFAULT_TITLE = "ANAMI Japanese Language School";
const DEFAULT_DESC =
  "Structured Japanese learning for beginners (JLPT / NAT N5) with speaking practice and supportive guidance. Special Group & Online (Zoom) classes.";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const notoJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESC,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [
      {
        url: "/og.png", // add later in /public (optional)
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className={`${inter.variable} ${notoJP.variable}`}>
      <body className="min-h-screen font-sans text-gray-900">
        {/* 🔹 Background image layer (always behind) */}
        <div
          className="fixed inset-0 -z-20 bg-[url('/bg/bg-image.png')] bg-cover bg-center"
          aria-hidden="true"
        />

        {/* 🔹 App content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />

          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
            {children}
          </main>

          <Footer year={year} />
        </div>
      </body>
    </html>
  );
}
