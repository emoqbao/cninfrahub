export const trustStats = [
  { value: "Multiple", label: "Carrier partners across China" },
  { value: "Tier III+", label: "Data center facilities in our network" },
  { value: "Aggregated", label: "Pricing below direct enterprise rates" },
  { value: "24/7", label: "Bilingual support and operations" },
];

export function TrustStatItem({ stat }: { stat: typeof trustStats[number] }) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <p className="text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
        {stat.value}
      </p>
      <p className="mt-1 text-sm text-[#737373]">{stat.label}</p>
    </div>
  );
}
