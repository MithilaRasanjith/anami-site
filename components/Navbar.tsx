"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

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

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const coursesBtnRef = useRef<HTMLButtonElement | null>(null);
  const coursesPanelRef = useRef<HTMLDivElement | null>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setCoursesOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu open (micro-UX)
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // ESC to close
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setCoursesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Click outside to close courses dropdown
  useEffect(() => {
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
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [coursesOpen]);

  const coursesIsActive = useMemo(() => {
    return pathname.startsWith("/courses") || pathname.startsWith("/visa-guidance");
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-light bg-bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* BRAND */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border-light bg-bg-white text-sm font-semibold text-text-primary transition group-hover:-translate-y-0.5 group-hover:shadow-sm">
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
              className={cx(
                "flex items-center gap-1 rounded-xl px-2 py-1 text-sm font-medium transition hover:bg-bg-soft focus:outline-none focus:ring-2 focus:ring-border-light",
                coursesIsActive ? "text-brand" : "text-text-primary"
              )}
              aria-haspopup="menu"
              aria-expanded={coursesOpen}
            >
              Courses
              <ChevronDown
                size={16}
                className={cx(
                  "text-text-muted transition",
                  coursesOpen && "rotate-180"
                )}
              />
            </button>

            {/* dropdown panel */}
            <div
              ref={coursesPanelRef}
              role="menu"
              className={cx(
                "absolute left-0 mt-3 w-80 overflow-hidden rounded-2xl border border-border-light bg-bg-white shadow-md",
                "transition-all duration-200 ease-out",
                coursesOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              )}
            >
              <div className="px-4 py-3 text-xs font-semibold text-text-muted">
                Current offerings
              </div>

              <div className="flex flex-col">
                {courseLinks.map((item) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      className={cx(
                        "px-4 py-3 text-sm transition hover:bg-bg-soft focus:outline-none focus:bg-bg-soft",
                        active ? "text-brand" : "text-text-primary"
                      )}
                      onClick={() => setCoursesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="border-t border-border-light bg-bg-soft px-4 py-3">
                <Link
                  href="/courses"
                  className={cx(
                    "text-sm font-semibold transition hover:underline",
                    pathname.startsWith("/courses") ? "text-brand" : "text-text-primary"
                  )}
                  onClick={() => setCoursesOpen(false)}
                >
                  View all options →
                </Link>
              </div>
            </div>
          </div>

          {navLinks.map((l) => {
            const active = isActivePath(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cx(
                  "rounded-xl px-2 py-1 text-sm font-medium transition hover:bg-bg-soft focus:outline-none focus:ring-2 focus:ring-border-light",
                  active ? "text-brand" : "text-text-primary"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className="btn-outline">
            WhatsApp / Call
          </Link>
          <Link href="/register" className="btn-primary">
            Register Now
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-2xl border border-border-light bg-bg-white px-3 py-2 text-sm font-semibold text-text-primary transition hover:bg-bg-soft focus:outline-none focus:ring-2 focus:ring-border-light md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY + PANEL */}
      <div
        className={cx(
          "md:hidden",
          "fixed inset-0 z-50",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        {/* overlay */}
        <div
          className={cx(
            "absolute inset-0 bg-black/20 transition-opacity",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />

        {/* panel */}
        <div
          className={cx(
            "absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-border-light bg-bg-white shadow-xl",
            "transition-transform duration-200 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-border-light px-4 py-4">
            <div className="text-sm font-semibold text-text-primary">Menu</div>
            <button
              type="button"
              className="rounded-xl border border-border-light bg-bg-white p-2 text-text-primary hover:bg-bg-soft"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <div className="px-4 py-4 space-y-3">
            {/* Courses accordion */}
            <div className="rounded-2xl border border-border-light bg-bg-white">
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-text-primary"
                onClick={() => setCoursesOpen((v) => !v)}
                aria-expanded={coursesOpen}
              >
                Courses
                <ChevronDown
                  size={16}
                  className={cx("text-text-muted transition", coursesOpen && "rotate-180")}
                />
              </button>

              <div
                className={cx(
                  "grid overflow-hidden transition-all duration-200 ease-out",
                  coursesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="min-h-0">
                  <div className="border-t border-border-light px-2 py-2">
                    {courseLinks.map((item) => {
                      const active = isActivePath(pathname, item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cx(
                            "block rounded-xl px-3 py-2 text-sm transition hover:bg-bg-soft",
                            active ? "text-brand font-semibold" : "text-text-primary"
                          )}
                          onClick={() => {
                            setMobileOpen(false);
                            setCoursesOpen(false);
                          }}
                        >
                          {item.label}
                        </Link>
                      );
                    })}

                    <Link
                      href="/courses"
                      className={cx(
                        "mt-1 block rounded-xl px-3 py-2 text-sm font-semibold transition hover:bg-bg-soft",
                        pathname.startsWith("/courses") ? "text-brand" : "text-text-primary"
                      )}
                      onClick={() => {
                        setMobileOpen(false);
                        setCoursesOpen(false);
                      }}
                    >
                      View all options →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-2">
              {navLinks.map((l) => {
                const active = isActivePath(pathname, l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cx(
                      "block rounded-2xl border border-border-light bg-bg-white px-4 py-3 text-sm font-semibold transition hover:bg-bg-soft",
                      active && "text-brand"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Link
                href="/contact"
                className="btn-outline w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                WhatsApp
              </Link>
              <Link
                href="/register"
                className="btn-primary w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Register
              </Link>
            </div>

            {/* small helper */}
            <div className="pt-2 text-xs text-text-muted">
              Email:{" "}
              <a className="font-semibold text-text-primary hover:underline" href="mailto:info@anamijls.com">
                info@anamijls.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
