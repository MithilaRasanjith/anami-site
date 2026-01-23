import { Suspense } from "react";
import RegisterClient from "./RegisterClient";

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="py-10 text-text-muted">Loading…</div>}>
      <RegisterClient />
    </Suspense>
  );
}
