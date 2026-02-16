import { Suspense } from "react";
import RegisterClient from "./RegisterClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Register for ANAMI classes in under a minute. Submit your details and continue via WhatsApp for quick confirmation.",
  alternates: { canonical: "/register" },
};

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="py-10 text-text-muted">Loading…</div>}>
      <RegisterClient />
    </Suspense>
  );
}
