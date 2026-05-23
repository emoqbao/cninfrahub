export default function TrustStats() {
  const stats = [
    { value: "50+", label: "PoPs in China" },
    { value: "99.99%", label: "Uptime SLA" },
    { value: "<10ms", label: "Cross-border Latency" },
    { value: "24/7", label: "Smart Hands Support" },
  ];

  return (
    <section className="">
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
