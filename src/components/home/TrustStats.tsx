export const trustStats = [
  { title: "One Invoice", desc: "All providers, all services — unified billing and SLA" },
  { title: "Better Value", desc: "Channel procurement can be more cost-effective than direct enterprise purchasing. Quotes vary by route, capacity, and terms." },
  { title: "Neutral & Independent", desc: "Carrier-agnostic; we always pick the best fit for you" },
  { title: "Compliance by Default", desc: "Regulatory complexity stays on our side, not yours" },
];

export function TrustStatItem({ stat }: { stat: (typeof trustStats)[number] }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <p className="text-lg font-semibold tracking-[-0.01em] text-brand">
        {stat.title}
      </p>
      <p className="mt-1 text-sm text-muted leading-relaxed">{stat.desc}</p>
    </div>
  );
}
