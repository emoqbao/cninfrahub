export default function TrustStats() {
  const stats = [
    { value: "Multiple", label: "Carrier partners across China" },
    { value: "Tier III+", label: "Data center facilities in our network" },
    { value: "Aggregated", label: "Pricing below direct enterprise rates" },
    { value: "24/7", label: "Bilingual support and operations" },
  ];

  return (
    <section className="border-t border-b border-[#e8eaed]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-[#737373]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}