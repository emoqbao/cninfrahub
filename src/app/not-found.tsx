import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center py-32">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">404</p>
        <h1 className="mt-4 text-3xl font-bold text-ink">Page not found</h1>
        <p className="mt-3 text-muted">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div className="mt-8">
          <Button href="/" variant="primary" size="md">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
