// app/contact/_components/ContactClient.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";

type ContactOption = {
  id: string;
  title: string;
  desc: string;
  actionLabel: string;
  href: string;
  note: string;
  isExternal: boolean;
  kind: "whatsapp" | "call" | "email";
};

const CONTACTS: ContactOption[] = [
  {
    id: "whatsapp",
    kind: "whatsapp",
    title: "WhatsApp (Fastest)",
    desc: "Message us anytime. Best for registration and course questions.",
    actionLabel: "Chat on WhatsApp",
    href: "https://wa.me/818039445160",
    note: "Recommended",
    isExternal: true,
  },
  {
    id: "call",
    kind: "call",
    title: "Call",
    desc: "Prefer a call? We can guide you quickly.",
    actionLabel: "Call Now",
    href: "tel:+818039445160",
    note: "Based on schedule",
    isExternal: false,
  },
  {
    id: "email",
    kind: "email",
    title: "Email",
    desc: "Send us detailed questions or documents anytime.",
    actionLabel: "Send Email",
    href: "mailto:info@anamijls.com",
    note: "Formal inquiries",
    isExternal: false,
  },
];

const quickHelp = [
  {
    title: "Course selection",
    desc: "Not sure which class suits you? We’ll recommend the best option.",
  },
  {
    title: "Schedules & fees",
    desc: "Get the latest class time, duration, and payment details.",
  },
  {
    title: "Visa guidance (ANAMI students)",
    desc: "Interview practice + visa documents support (guidance only, not an agency).",
  },
];

const faq = [
  {
    q: "How do I register?",
    a: "Go to the Register page, fill your details, and send the pre-filled WhatsApp message. We’ll confirm the next steps.",
  },
  {
    q: "Do you have online classes?",
    a: "Yes. Online N5 classes happen via Zoom. You can join from anywhere.",
  },
  {
    q: "Is visa guidance available for everyone?",
    a: "Visa guidance is a benefit included for ANAMI students only. Guidance only — ANAMI is not an agency.",
  },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReduced) {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, shown };
}

function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, shown } = useReveal();
  return (
    <div
      ref={ref}
      className={cx(
        "transition-all duration-700 ease-out will-change-transform",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        className
      )}
    >
      {children}
    </div>
  );
}

function IconFor({ kind }: { kind: ContactOption["kind"] }) {
  if (kind === "whatsapp") return <MessageCircle size={16} className="text-text-muted" />;
  if (kind === "call") return <Phone size={16} className="text-text-muted" />;
  return <Mail size={16} className="text-text-muted" />;
}

function ContactRow({
  kind,
  title,
  desc,
  note,
  actionLabel,
  href,
  isExternal,
}: Omit<ContactOption, "id">) {
  return (
    <div className="rounded-2xl border border-border-light bg-bg-white px-5 py-5 transition hover:-translate-y-0.5 hover:shadow-sm sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 text-base font-semibold text-text-primary">
              <IconFor kind={kind} />
              <span>{title}</span>
            </div>

            <span className="rounded-full border border-border-light bg-bg-soft px-3 py-1 text-xs text-text-muted">
              {note}
            </span>
          </div>

          <p className="mt-2 text-sm text-text-muted">{desc}</p>
        </div>

        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-text-primary px-6 py-3 text-sm font-semibold text-white hover:opacity-90 sm:w-auto"
        >
          {actionLabel}
        </a>
      </div>

      <div className="mt-3 text-xs text-text-muted">
        If the button doesn’t work, copy and open:{" "}
        <span className="font-semibold text-text-primary">{href}</span>
      </div>
    </div>
  );
}

export default function ContactClient() {
  return (
    <>
      {/* Better mobile micro-UX: sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border-light bg-bg-white/90 backdrop-blur md:hidden">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex gap-2">
            <a
              href="https://wa.me/818039445160"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full justify-center"
            >
              WhatsApp
            </a>
            <a href="tel:+818039445160" className="btn-primary w-full justify-center">
              Call
            </a>
          </div>
          <div className="mt-2 text-center text-[11px] text-text-muted">
            Prefer email?{" "}
            <a
              className="font-semibold text-text-primary hover:underline"
              href="mailto:info@anamijls.com"
            >
              info@anamijls.com
            </a>
          </div>
        </div>
      </div>

      {/* Section rhythm */}
      <div className="space-y-16 pb-20 md:space-y-20 md:pb-0">
        {/* HERO */}
        <Reveal>
          <section className="rounded-3xl border border-border-light bg-bg-white p-8 shadow-md md:p-10">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-border-light bg-bg-soft px-3 py-1 text-xs text-text-muted">
                Contact
              </span>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
                Talk to ANAMI — we’ll guide you.
              </h1>

              <p className="mt-4 text-base leading-relaxed text-text-muted">
                Ask about courses, schedules, fees, or guidance. The fastest way is WhatsApp.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/register" className="btn-primary">
                  Register / Inquire
                </Link>
                <Link href="/courses" className="btn-outline">
                  View Courses
                </Link>
              </div>

              {/* Where to add the 3-line highlights: right here (below CTA buttons) */}
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-muted">
                <span className="flex items-center gap-1">
                  <MessageCircle size={14} className="text-text-muted" />
                  WhatsApp for quick replies
                </span>
                <span className="flex items-center gap-1">
                  <Phone size={14} className="text-text-muted" />
                  Call for direct guidance
                </span>
                <span className="flex items-center gap-1">
                  <Mail size={14} className="text-text-muted" />
                  Email for detailed inquiries
                </span>
              </div>
            </div>
          </section>
        </Reveal>

        {/* CONTACT OPTIONS */}
        <section className="space-y-6">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold text-text-primary">Contact options</h2>
              <p className="mt-2 text-sm text-text-muted">
                Choose what’s easiest — WhatsApp is recommended for the fastest replies.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-border-light bg-bg-soft p-5 md:p-6">
              <div className="grid gap-4">
                {CONTACTS.map((c) => (
                  <ContactRow key={c.id} {...c} />
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* QUICK HELP */}
        <section className="space-y-6">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold text-text-primary">What we can help with</h2>
              <p className="mt-2 text-sm text-text-muted">
                Send a message and we’ll reply with the best next steps for you.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {quickHelp.map((x) => (
              <Reveal key={x.title}>
                <div className="card p-7 transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="text-sm font-semibold text-text-primary">{x.title}</div>
                  <div className="mt-2 text-sm text-text-muted">{x.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <Reveal>
          <section className="rounded-3xl border border-border-light bg-bg-soft p-8 md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold text-text-primary">Quick answers</h2>
              <p className="mt-2 text-sm text-text-muted">
                Common questions — so you can move faster.
              </p>

              <div className="mt-6 grid gap-3">
                {faq.map((f) => (
                  <div
                    key={f.q}
                    className="rounded-2xl border border-border-light bg-bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <div className="text-sm font-semibold text-text-primary">{f.q}</div>
                    <div className="mt-2 text-sm text-text-muted">{f.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* FINAL CTA */}
        <Reveal>
          <section className="rounded-3xl border border-border-light bg-bg-white p-8 shadow-md md:p-10">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold text-text-primary">Ready to start?</h2>
                <p className="mt-2 text-sm text-text-muted">
                  Register in 1 minute — your details will be filled into WhatsApp automatically.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Link href="/register" className="btn-primary">
                  Register Now
                </Link>
                <Link href="/courses" className="btn-outline">
                  View Courses
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
}
