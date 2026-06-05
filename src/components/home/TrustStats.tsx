export const trustStats = [
  {
    title: "One Invoice",
    description: "Every provider, every service — unified billing and a single SLA.",
  },
  {
    title: "Below-Market Pricing",
    description: "Aggregated purchasing power secures rates enterprises can't negotiate on their own.",
  },
  {
    title: "No Carrier Lock-in",
    description: "Provider-neutral by design. We always recommend what's best for your workload.",
  },
  {
    title: "Compliance Built-in",
    description: "We absorb China's regulatory complexity — CSL, PIPL, MLPS 2.0 — so you don't have to.",
  },
];

export function TrustStatItem({ stat }: { stat: typeof trustStats[number] }) {
  return (
    <div className="flex flex-col p-8">
      <p className="text-base font-semibold text-ink">
        {stat.title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{stat.description}</p>
    </div>
  );
}
