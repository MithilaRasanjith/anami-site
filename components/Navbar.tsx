"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const courseLinks = [
  { label: "Special Group Class – N5", href: "/courses/special-group-n5" },
  { label: "Online Class – N5", href: "/courses/online-n5" },
  { label: "Visa Guidance", href: "/visa-guidance" },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Teachers", href: "/teachers" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const coursesBtnRef = useRef<HTMLButtonElement | null>(null);
  const coursesPanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setCoursesOpen(false);
        setMobileOpen(false);
      }
    }

    function onMouseDown(e: MouseEvent) {
      const t = e.target as Node;
      if (
        coursesOpen &&
        coursesPanelRef.current &&
        coursesBtnRef.current &&
        !coursesPanelRef.current.contains(t) &&
        !coursesBtnRef.current.contains(t)
      ) {
        setCoursesOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [coursesOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-light bg-bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* BRAND */}
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border-light bg-bg-white text-sm font-semibold">
            AN
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-text-primary">ANAMI</div>
            <div className="text-xs text-text-muted">Japanese Language School</div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-6 md:flex">
          {/* COURSES DROPDOWN */}
          <div className="relative">
            <button
              ref={coursesBtnRef}
              type="button"
              onClick={() => setCoursesOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-medium text-text-primary hover:text-brand"
              aria-haspopup="menu"
              aria-expanded={coursesOpen}
            >
              Courses
              <span className="text-text-muted">▾</span>
            </button>

            {coursesOpen && (
              <div
                ref={coursesPanelRef}
                role="menu"
                className="absolute left-0 mt-3 w-72 overflow-hidden rounded-2xl border border-border-light bg-bg-white shadow-md"
              >
                <div className="px-4 py-3 text-xs font-semibold text-text-muted">
                  Current offerings
                </div>

                <div className="flex flex-col">
                  {courseLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      className="px-4 py-3 text-sm text-text-primary hover:bg-bg-soft"
                      onClick={() => setCoursesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="border-t border-border-light bg-bg-soft px-4 py-3">
                  <Link
                    href="/courses"
                    className="text-sm font-semibold text-text-primary hover:text-brand"
                    onClick={() => setCoursesOpen(false)}
                  >
                    View all options →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-primary hover:text-brand"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="rounded-2xl border border-border-light bg-bg-white px-4 py-2 text-sm font-semibold text-text-primary hover:bg-bg-soft"
          >
            WhatsApp / Call
          </Link>
          <Link
            href="/register"
            className="rounded-2xl bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-hover"
          >
            Register
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          className="rounded-2xl border border-border-light bg-bg-white px-3 py-2 text-sm font-semibold text-text-primary hover:bg-bg-soft md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="border-t border-border-light bg-bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="flex flex-col gap-2">
              <div className="rounded-2xl border border-border-light bg-bg-white p-3 shadow-md">
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-sm font-semibold text-text-primary"
                  onClick={() => setCoursesOpen((v) => !v)}
                >
                  Courses <span className="text-text-muted">▾</span>
                </button>

                {coursesOpen && (
                  <div className="mt-3 flex flex-col">
                    {courseLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-xl px-2 py-2 text-sm text-text-primary hover:bg-bg-soft"
                        onClick={() => {
                          setMobileOpen(false);
                          setCoursesOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href="/courses"
                      className="mt-1 rounded-xl px-2 py-2 text-sm font-semibold text-text-primary hover:bg-bg-soft"
                      onClick={() => {
                        setMobileOpen(false);
                        setCoursesOpen(false);
                      }}
                    >
                      View all options →
                    </Link>
                  </div>
                )}
              </div>

              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-2xl border border-border-light bg-bg-white px-4 py-3 text-sm font-semibold text-text-primary hover:bg-bg-soft"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              ))}

              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  href="/contact"
                  className="rounded-2xl border border-border-light bg-bg-white px-4 py-3 text-center text-sm font-semibold text-text-primary hover:bg-bg-soft"
                  onClick={() => setMobileOpen(false)}
                >
                  WhatsApp
                </Link>
                <Link
                  href="/register"
                  className="rounded-2xl bg-brand px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-hover"
                  onClick={() => setMobileOpen(false)}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
