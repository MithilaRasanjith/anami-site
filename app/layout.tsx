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
