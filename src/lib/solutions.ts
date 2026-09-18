export interface Solution {
  id: string;
  name: string;
  tags: string[];
  description: string;
  benefits: string[];
  whoItsFor: string;
  approach: string;
  products: string[];
  seoKeywords: string[];
  /**
   * Optional architecture diagram for the solution page. Drop the file into
   * public/images/solutions/ and point this at it; without one the page shows
   * an empty diagram slot.
   */
  architectureImage?: string;
}

export const solutions: Solution[] = [
  {
    id: "cross-border-cloud-connectivity",
    name: "Cross-Border Cloud Connectivity",
    tags: ["Multi-Cloud", "AWS", "Azure", "GCP"],
    description:
      "Connect your China infrastructure directly to AWS, Azure, and GCP across APAC, US, and Europe — at the bandwidth and price point that fits your workload. We offer the full spectrum: managed 50 Mbps-1 Gbps virtual connections through Megaport and Equinix Fabric for cost-sensitive or moderate-traffic environments, and dedicated 1-100 Gbps physical cross-connects for data-heavy production workloads. Standard cloud provider partners cannot legally establish these China-to-overseas links. We can — with full compliance documentation and multiple active enterprise customers running production today.",
    benefits: [
      "Right-size your connectivity: managed 50 Mbps-1 Gbps (Megaport/Equinix) or dedicated 1-100 Gbps — you decide",
      "Access China-to-cloud links that your cloud provider's own partners cannot deliver",
      "Full compliance documentation included — cross-border data regulations handled as standard",
      "Single partner for all three clouds — consistent pricing, consistent SLA, consistent support",
      "Production-proven with multiple enterprise customers running live workloads today",
    ],
    whoItsFor: "Enterprises running hybrid cloud architectures that need to connect China-based infrastructure to AWS, Azure, or GCP. SaaS platforms, financial services, and any organization requiring compliant, production-grade cloud connectivity from China.",
    approach: "We assess your cloud architecture and bandwidth requirements, then recommend managed (Megaport/Equinix) or dedicated (physical cross-connect) based on your needs. Circuits are provisioned through our compliant partner network with full BGP configuration. Compliance documentation is prepared in parallel. Typical deployment: managed links in 5-7 business days, dedicated links in 10-15 business days.",
    products: ["cloud-connect", "private-connect"],
    seoKeywords: ["cross-border cloud connectivity", "hybrid cloud architecture China", "multi-cloud strategy China", "China to AWS connectivity", "China to Azure connectivity", "China to GCP connectivity"],
  },
  {
    id: "china-enterprise-private-line",
    name: "China Enterprise Private Line",
    tags: ["DPLC", "IEPL", "MPLS", "Layer 2"],
    description:
      "End-to-end private connectivity between your China sites and the rest of the world, built from two circuit types that work together: DPLC for the domestic point-to-point legs between Chinese cities, and IEPL or MPLS for the cross-border leg. Both are Layer 2, so your own routing runs across the whole path, and both are uncontended, so latency, jitter, and packet loss stay stable through the evening peak instead of degrading with the public internet. We source from China Telecom, China Unicom, China Mobile, and alternative operators, then choose the combination that fits your route, bandwidth, and budget — and we hold the carrier relationships, so you sign one contract and escalate through one path.",
    benefits: [
      "Domestic DPLC and cross-border IEPL/MPLS from one provider — an end-to-end circuit rather than two contracts stitched together",
      "Deterministic latency, jitter, and loss: uncontended Layer 2 capacity, not internet-grade best effort",
      "Layer 2 transparency end to end — run BGP, OSPF, or any protocol your architecture already uses",
      "Multi-carrier sourcing across China Telecom, China Unicom, China Mobile, and alternative operators — we compare the routes, you get the price",
      "Alternative non-carrier paths between Chinese cities where the incumbents are overpriced",
      "10 Mbps to 100 Gbps with committed, burst, and usage-based rate options",
      "For genuinely large domestic bandwidth, the same route can be taken as dark fiber instead of a circuit — priced by distance, with upgrades down to a transceiver swap",
    ],
    whoItsFor: "Enterprises linking China offices, factories, or data centres to a regional headquarters, a cloud region, or to each other — and any team that has outgrown VPN or SD-WAN over the public internet but does not want to negotiate with three carriers across two countries.",
    approach: "We map your sites and traffic profile, then design the path: DPLC for the domestic legs, IEPL or MPLS for the cross-border leg, or a mix of carrier and alternative operators where that is cheaper. Because every segment is Layer 2, your existing addressing and routing plan carries over unchanged. We provision with every carrier involved, coordinate the hand-off points, and remain the single escalation path for faults — including the ones that sit exactly on the boundary between two carriers.",
    products: ["private-connect", "dia", "colocation", "dark-fiber"],
    seoKeywords: ["China DPLC", "IEPL China", "cross-border MPLS", "China private line", "China to Hong Kong private line", "Layer 2 connectivity China"],
  },
  {
    id: "china-ai-infrastructure",
    name: "China AI Infrastructure",
    tags: ["GPU", "H100", "AI Gateway", "Colocation"],
    description:
      "AI work that has to run inside China needs three things that are usually bought from three different vendors: GPU capacity, a place to run it, and compliant access to the models. We aggregate all three. NVIDIA H100, H200, A100, and L40S capacity from our partner pool, as single GPUs or multi-node clusters with RDMA interconnects. Colocation and Smart Hands to house, cable, and maintain it. And AI Gateway in front of the model layer, aggregating China's ecosystem — DeepSeek, Kimi, GLM, Doubao, Tongyi, Hunyuan — alongside the global leaders, behind one key with unified billing, rate limiting, and automatic failover. Compute, hosting, and model access from one partner, inside China's data residency rules.",
    benefits: [
      "Aggregated GPU capacity — we find H100, H200, A100, and L40S when individual providers are sold out",
      "Single GPU or multi-node clusters with RDMA interconnects for distributed training",
      "Pre-configured ML stacks (CUDA, PyTorch, TensorFlow, vLLM, DeepSpeed) provisioned in 24-48 hours rather than weeks",
      "Colocation and Smart Hands for the same footprint, so racking, cabling, and RMAs stay with one partner",
      "Every major model behind one API key — China-native and global — with model-level discount structures and automatic failover",
      "Data residency handled: compute, storage, and model traffic stay inside the mainland",
    ],
    whoItsFor: "Teams training, fine-tuning, or serving models for the China market: AI product teams hedging across China-native and global models, enterprises with data that cannot leave the mainland, and research groups that need GPU capacity without multi-month lead times.",
    approach: "We scope the workload first — training, fine-tuning, or inference — because that decides the GPU shape, the interconnect, and the hosting. Capacity is sourced across our provider pool and provisioned with the ML stack pre-installed, then placed in a facility that matches your power density and compliance requirements, with Smart Hands covering physical operations. On the model side we configure AI Gateway with the providers you choose, set routing and rate limits, and keep billing consolidated.",
    products: ["gpu-instances", "colocation", "smart-hands", "ai-gateway", "bare-metal"],
    seoKeywords: ["AI infrastructure China", "GPU cluster China", "H100 China", "China AI hosting", "LLM inference China", "DeepSeek API China"],
  },
  {
    id: "china-network-as-a-service",
    name: "China Network-as-a-Service",
    tags: ["NaaS", "SD-WAN", "Virtual Edge", "Managed Network"],
    description:
      "Build and operate your entire China network through a single managed service — no hardware procurement, no carrier negotiations, no local IT team required. We deploy and manage Virtual Edge appliances (your choice of FortiGate, VyOS, RouterOS, or Zscaler VSE) connected via our multi-carrier DIA and Private Connect circuits. We handle configuration, policy management, OS updates, and 24/7 monitoring. You get a fully managed China network with complete visibility — one partner, one invoice, one SLA.",
    benefits: [
      "Zero hardware: we deploy virtual appliances only — no shipping, customs, or physical installation",
      "Fully managed: configuration, policy updates, OS patching, and 24/7 monitoring — all handled by our team",
      "Your choice of platform: FortiGate, VyOS, RouterOS, Zscaler VSE, or bring your own image",
      "Multi-carrier underlay: DIA for internet, Private Connect for private backhaul — best carrier for each",
      "Complete visibility retained — administrative access, monitoring dashboards, and regular reporting",
    ],
    whoItsFor: "Enterprises that need a fully operational China network but don't want to build or manage it themselves. Companies extending global SD-WAN into China, deploying Zero Trust access, or replacing legacy MPLS with managed virtual infrastructure.",
    approach: "We design your China network topology based on traffic patterns and security requirements, then deploy Virtual Edge appliances at strategic locations connected via DIA (for internet-facing workloads) and Private Connect (for private backhaul). Initial configuration is handled by our engineering team. Ongoing management includes policy updates, OS patching, performance monitoring, and 24/7 incident response.",
    products: ["virtual-edge", "dia", "private-connect"],
    seoKeywords: ["China NaaS", "network as a service China", "managed SD-WAN China", "China virtual network", "managed firewall China", "Zscaler China"],
  },
  {
    id: "china-application-reachability",
    name: "China Application Reachability",
    tags: ["Edge", "Acceleration", "WAF", "Overseas Origin"],
    description:
      "Your application is hosted outside China and your Chinese users feel it — slow loads, timeouts, and unstable connections across the international border. We put a managed edge layer between your origin and those users: near-shore edge nodes that cache, terminate TLS, and carry traffic back to origin over optimized cross-border paths. Your domain needs no ICP filing and no mainland entity, and onboarding is a single CNAME record — no TXT verification, no nameserver migration. Your infrastructure does not move, your data stays where it already lives, and your team keeps one origin and one deployment pipeline.",
    benefits: [
      "Your domain needs no ICP filing, because traffic terminates on near-shore nodes outside the mainland — no mainland entity required",
      "Cutover is one CNAME record and rollback is a single record update — no TXT verification, no nameserver migration, no code freeze, no migration window, no change to your application",
      "Delivered as a combination of Edge Acceleration and Cloud Connect, with one provider owning the edge, the certificates, and the cross-border path",
      "Chinese-user traffic is reported against the metrics that matter there — load time, cache hit ratio, and origin fetch latency — rather than a global average",
      "WAF, DDoS mitigation, bot control, and rate limiting enforced at the edge, before traffic reaches your origin — your real IP stays unexposed",
    ],
    whoItsFor: "Global SaaS platforms, e-commerce sites, and application teams with a material mainland Chinese user base whose origin is hosted overseas. Companies that are not ready to build mainland infrastructure but need China traffic to perform properly.",
    approach: "We map your application's traffic profile, separate cacheable from dynamic paths, and design the edge configuration around it. An alias domain is provisioned for your service so end users stay on your brand. Cutover happens by DNS, which means rollback is a single record change. We tune caching, WAF, and routing against live traffic and report on load time, cache hit ratio, and origin fetch latency throughout.",
    products: ["edge-acceleration", "cloud-connect"],
    seoKeywords: ["China website reachability", "accelerate site for China users", "China edge acceleration", "overseas origin China performance", "China application delivery"],
  },
];

export function getSolutionById(id: string): Solution | undefined {
  return solutions.find((s) => s.id === id);
}
