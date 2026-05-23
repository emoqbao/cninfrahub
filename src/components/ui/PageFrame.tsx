export default function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="rounded-2xl border border-[#e8eaed] bg-white overflow-hidden">
        {children}
      </div>
    </div>
  );
}