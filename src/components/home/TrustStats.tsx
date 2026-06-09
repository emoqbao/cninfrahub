export const trustStats = [
  { title: "One Invoice", desc: "All providers, all services — unified billing and SLA" },
  { title: "Below-Market Pricing", desc: "Aggregated procurement beats direct enterprise rates" },
  { title: "Neutral & Independent", desc: "Carrier-agnostic; we always pick the best fit for you" },
  { title: "Compliance by Default", desc: "Regulatory complexity stays on our side, not yours" },
];

export function TrustStatItem({ stat }: { stat: (typeof trustStats)[number] }) {
  return (
    <div className="flex flex-col items-start justify-center p-8">
      <p className="text-base font-semibold tracking-[-0.01em] text-brand">
        {stat.title}
      </p>
      <p className="mt-1 text-sm text-muted leading-relaxed">{stat.desc}</p>
    </div>
  );
}
