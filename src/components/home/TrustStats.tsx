export const trustStats = [
  { title: "One Point of Contact", desc: "One team coordinates providers and support" },
  { title: "Provider Comparison", desc: "Compare routes, capacity, locations, and commercial terms" },
  { title: "Joined-Up Design", desc: "Connect network, compute, and colocation decisions" },
  { title: "China Operations", desc: "Coordinate delivery and support across local providers" },
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
