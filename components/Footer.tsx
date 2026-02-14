import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer({ year }: { year: number }) {
  return (
    <footer className="border-t border-border-light bg-bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-12">

        {/* ✅ ADJUSTED GRID WEIGHT */}
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.9fr_1fr]">

          {/* BRAND */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-text-primary">
              ANAMI Japanese Language School
            </div>

            <p className="text-sm leading-relaxed text-text-muted">
              Exam-focused Japanese learning (JLPT / NAT) with structured lessons,
              speaking practice, and supportive guidance.
            </p>

            <div className="text-xs text-text-muted">
              Sri Lanka / Online via Zoom
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-text-primary">
              Quick Links
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <Link href="/courses" className="text-text-muted hover:text-text-primary">
                Courses
              </Link>
              <Link href="/teachers" className="text-text-muted hover:text-text-primary">
                Teachers
              </Link>
              <Link href="/success-stories" className="text-text-muted hover:text-text-primary">
                Success Stories
              </Link>
              <Link href="/contact" className="text-text-muted hover:text-text-primary">
                Contact
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-text-primary">
              Contact
            </div>

            <div className="flex flex-col gap-2 text-sm">

              <a
                href="https://wa.me/818039445160"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-muted hover:text-text-primary"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>

              <a
                href="tel:+818039445160"
                className="flex items-center gap-2 text-text-muted hover:text-text-primary"
              >
                <Phone size={14} />
                +81 80 3944 5160
              </a>

              <a
                href="mailto:info@anamijls.com"
                className="flex items-center gap-2 text-text-muted hover:text-text-primary"
              >
                <Mail size={14} />
                info@anamijls.com
              </a>
            </div>
          </div>
        </div>

        {/* LOWER BAR */}
        <div className="mt-10 border-t border-border-light pt-6">
          <div className="flex flex-col gap-2 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
            <div>
              © {year} ANAMI Japanese Language School. All rights reserved.
            </div>

            <div>
              Guidance only — ANAMI is not an agency.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
