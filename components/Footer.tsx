export default function Footer({ year }: { year: number }) {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold">ANAMI Japanese Language School</div>
            <p className="mt-2 text-sm text-gray-600">
              Exam-focused Japanese learning (JLPT / NAT) with speaking practice and guidance.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Quick Links</div>
            <div className="mt-2 flex flex-col gap-2 text-sm text-gray-600">
              <a className="hover:underline" href="/courses">Courses</a>
              <a className="hover:underline" href="/teachers">Teachers</a>
              <a className="hover:underline" href="/news">News</a>
              <a className="hover:underline" href="/contact">Contact</a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Contact</div>
            <div className="mt-2 text-sm text-gray-600">
              <div>WhatsApp: +8180 3944 5160</div>
              <div>Email: info@anamijls.lk</div>
              <div className="mt-2">Sri Lanka / Online via Zoom</div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-gray-500">
          © {year} ANAMI Japanese Language School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
