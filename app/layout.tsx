import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter, Noto_Sans_JP } from "next/font/google";

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

export const metadata = {
  title: "ANAMI Japanese Language School",
  description: "ANAMI Japanese Language School official website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className={`${inter.variable} ${notoJP.variable}`}>
      <body className="min-h-screen bg-white font-sans text-gray-900">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <Footer year={year} />
      </body>
    </html>
  );
}
