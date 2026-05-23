import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center py-32">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#8c8c8c]">404</p>
        <h1 className="mt-4 text-3xl font-bold text-[#0d0d0d]">Page not found</h1>
        <p className="mt-3 text-[#737373]">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-[#4338ca] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#3730a3] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
