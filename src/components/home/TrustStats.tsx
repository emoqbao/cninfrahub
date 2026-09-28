export const trustStats = [
  { title: "One Invoice", desc: "Bring supported network, cloud, and data center services together under one commercial relationship." },
  { title: "Below-Market Pricing", desc: "Agency-channel rates on many services can beat direct-purchase pricing; quotes vary by route, capacity, and terms." },
  { title: "Neutral & Independent", desc: "Compare carriers and providers against your requirements, without being tied to a single network." },
  { title: "Compliance by Default", desc: "Factor local filing and licensing requirements into planning, with responsibilities agreed for each service." },
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
