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
}

export const solutions: Solution[] = [
  {
    id: "cross-border-cloud-connectivity",
    name: "Cross-Border Cloud Connectivity",
    tags: ["Multi-Cloud", "AWS", "Azure", "GCP"],
    description:
      "Connect your China infrastructure directly to AWS, Azure, and GCP — at the bandwidth and price point that fits your workload. We offer the full spectrum: managed 50 Mbps-1 Gbps virtual connections through Megaport and Equinix Fabric for cost-sensitive or moderate-traffic environments, and dedicated 1-100 Gbps physical cross-connects for data-heavy production workloads. Standard cloud provider partners cannot legally establish these China-to-overseas links. We can — with full compliance documentation and multiple active enterprise customers running production today.",
    benefits: [
      "Right-size your connectivity: managed 50 Mbps-1 Gbps (Megaport/Equinix) or dedicated 1-100 Gbps — you decide",
      "Access China-to-cloud links that your cloud provider''s own partners cannot deliver",
      "Full compliance documentation included — cross-border data regulations handled as standard",
      "Single partner for all three clouds — consistent pricing, consistent SLA, consistent support",
      "Production-proven with multiple enterprise customers running live workloads today",
    ],
    whoItsFor: "Enterprises running hybrid cloud architectures that need to connect China-based infrastructure to AWS, Azure, or GCP. SaaS platforms, financial services, and any organization requiring compliant, production-grade cloud connectivity from China.",
    approach: "We assess your cloud architecture and bandwidth requirements, then recommend managed (Megaport/Equinix) or dedicated (physical cross-connect) based on your needs. Circuits are provisioned through our compliant partner network with full BGP configuration. Compliance documentation is prepared in parallel. Typical deployment: managed links in 5-7 business days, dedicated links in 10-15 business days.",
    products: ["cloud-connect", "private-connect"],
    seoKeywords: ["AWS Direct Connect China", "Azure ExpressRoute China", "GCP Interconnect China", "Megaport China", "Equinix Fabric China", "China cloud connectivity"],
  },
  {
    id: "high-bandwidth-interconnect",
    name: "High-Bandwidth Data Center Interconnect",
    tags: ["Dark Fiber", "100Gbps+", "DCI"],
    description:
      "When you need to move massive amounts of data between data centers at the lowest possible cost-per-bit, traditional leased lines stop making financial sense. We design high-bandwidth interconnect solutions using dark fiber — a product the big three Chinese carriers won''t sell — combined with Private Connect circuits for path diversity. For the highest bandwidth demands (100 Gbps+), dark fiber provides superior economics: you lease glass, not a service, and scale by upgrading optics on your schedule.",
    benefits: [
      "Dark fiber at 100 Gbps+ costs less than equivalent P2P leased line bandwidth — fundamentally different economics",
      "Complete optical-layer control — your transceivers, your DWDM, your protocol, no carrier restrictions",
      "Access dark fiber in China — a product category the big three carriers simply do not offer",
      "Physically diverse paths: combine dark fiber from one operator with Private Connect from another",
      "Single partner for dark fiber sourcing + Private Connect provisioning + colocation cross-connects",
    ],
    whoItsFor: "Content delivery networks, cloud providers, financial trading platforms, and large enterprises running data center interconnects at 100 Gbps+ where leased line costs become prohibitive. Organizations that need full control over their optical layer.",
    approach: "We map your inter-data center topology, identify available dark fiber routes through our specialist operator network, and design a multi-path architecture combining dark fiber (for primary high-bandwidth links) with Private Connect circuits (for diverse backup paths). Colocation cross-connects are coordinated across facilities. We manage all operator relationships and SLA enforcement.",
    products: ["dark-fiber", "private-connect", "colocation"],
    seoKeywords: ["China data center interconnect", "China DCI", "100Gbps China", "dark fiber interconnect China", "China fiber backbone"],
  },
  {
    id: "regulated-industry-infrastructure",
    name: "Regulated Industry Infrastructure",
    tags: ["Compliance", "Finance", "Healthcare", "Automotive"],
    description:
      "Financial services, healthcare, and automotive companies operating in China face a triple challenge: they need physically isolated infrastructure, compliant cross-border connectivity, and local operational support — all while navigating CSL, DSL, PIPL, and MLPS 2.0 regulations. We design and deliver complete infrastructure packages: dedicated colocation for regulated data, Private Connect and Cloud Connect for compliant data transfer, and 24/7 bilingual operations with full compliance documentation.",
    benefits: [
      "End-to-end compliance architecture — physical infrastructure designed for regulation from day one",
      "Physically isolated colocation and bare metal for regulated data — no shared infrastructure",
      "Compliant cross-border connectivity via Private Connect and Cloud Connect with full documentation",
      "Ongoing regulatory monitoring — quarterly briefings on CSL, DSL, PIPL, and MLPS 2.0 changes",
      "Bilingual operations team provides audit-ready documentation in both English and Mandarin",
    ],
    whoItsFor: "Organizations in regulated industries — banking, insurance, healthcare, automotive, and critical infrastructure — that must demonstrate compliance with China''s data protection and cybersecurity laws. Multinational corporations undergoing compliance audits for their China operations.",
    approach: "We start with a comprehensive data flow audit to classify regulated vs. non-regulated data, then design a segmented architecture. Regulated data stays in dedicated colocation and bare metal environments with physical isolation. Cross-border data transfers flow exclusively through Private Connect and Cloud Connect with documented compliance paths. We establish a compliance monitoring program with quarterly reviews.",
    products: ["colocation", "bare-metal", "private-connect", "cloud-connect", "smart-hands"],
    seoKeywords: ["China data compliance", "cross-border data China", "PIPL compliance China", "China financial infrastructure", "China healthcare hosting"],
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
    whoItsFor: "Enterprises that need a fully operational China network but don''t want to build or manage it themselves. Companies extending global SD-WAN into China, deploying Zero Trust access, or replacing legacy MPLS with managed virtual infrastructure.",
    approach: "We design your China network topology based on traffic patterns and security requirements, then deploy Virtual Edge appliances at strategic locations connected via DIA (for internet-facing workloads) and Private Connect (for private backhaul). Initial configuration is handled by our engineering team. Ongoing management includes policy updates, OS patching, performance monitoring, and 24/7 incident response.",
    products: ["virtual-edge", "dia", "private-connect"],
    seoKeywords: ["China NaaS", "network as a service China", "managed SD-WAN China", "China virtual network", "managed firewall China", "Zscaler China"],
  },
];

export function getSolutionById(id: string): Solution | undefined {
  return solutions.find((s) => s.id === id);
}