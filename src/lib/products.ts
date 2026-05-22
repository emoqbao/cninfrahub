export interface Product {
  id: string;
  name: string;
  module: "AI" | "COMPUTE" | "NETWORK" | "DATA CENTER";
  tagline: string;
  description: string;
  features: string[];
  seoKeywords: string[];
}

export const products: Product[] = [
  {
    id: "ai-gateway",
    name: "AI Gateway",
    module: "AI",
    tagline: "API relay for DeepSeek, Claude, and China''s AI ecosystem",
    description:
      "A managed API gateway that provides compliant, low-latency access to China''s leading AI models. Route your inference traffic through our optimized relay infrastructure — no VPNs, no regulatory headaches, no unreliable public endpoints.",
    features: [
      "Direct relay for DeepSeek, Qwen, and other China-native LLMs",
      "Claude and GPT API proxy with China-optimized routing",
      "Centralized billing, rate limiting, and usage analytics",
      "99.9% uptime SLA with automatic failover",
    ],
    seoKeywords: ["DeepSeek API access China", "Claude API relay China", "AI gateway China"],
  },
  {
    id: "elastic-cloud-servers",
    name: "Elastic Cloud Servers",
    module: "COMPUTE",
    tagline: "VM-scale compute, fast provision, China-hosted",
    description:
      "On-demand virtual machines deployed in our Tier III+ Chinese data centers. Spin up in minutes with full root access, flexible CPU/RAM configurations, and integrated networking — purpose-built for workloads that need to run inside China.",
    features: [
      "Deploy in Shanghai, Beijing, Shenzhen within minutes",
      "Full root access, custom ISO support",
      "Integrated with Private Connect and Cloud Connect",
      "Pay-as-you-go or reserved instance pricing",
    ],
    seoKeywords: ["China cloud server", "China VPS hosting", "elastic compute China"],
  },
  {
    id: "bare-metal",
    name: "Bare Metal",
    module: "COMPUTE",
    tagline: "Dedicated physical servers — your OS, our data center",
    description:
      "Single-tenant physical servers for performance-sensitive and compliance-heavy workloads. No hypervisor overhead, no noisy neighbors. Full hardware control with 24/7 Smart Hands support on the ground in China.",
    features: [
      "Latest-gen Intel Xeon and AMD EPYC processors",
      "Custom RAID, NVMe SSD, and GPU options",
      "IPMI/KVM remote management included",
      "Bundled with Private Connect for secure backhaul",
    ],
    seoKeywords: ["China bare metal server", "dedicated server China", "physical server hosting China"],
  },
  {
    id: "gpu-instances",
    name: "GPU Instances",
    module: "COMPUTE",
    tagline: "H100 and A100-class GPU compute in China",
    description:
      "High-density GPU infrastructure for training and inference workloads hosted inside China. NVIDIA H100, A100, and L40S clusters with InfiniBand interconnects — available on-demand or via long-term reservation.",
    features: [
      "NVIDIA H100, A100, L40S available in China DCs",
      "InfiniBand and RoCE networking for multi-node training",
      "Pre-configured ML environments (CUDA, PyTorch, TensorFlow)",
      "Compliant with China data residency requirements",
    ],
    seoKeywords: ["GPU hosting China", "H100 China hosting", "A100 China data center"],
  },
  {
    id: "private-connect",
    name: "Private Connect",
    module: "NETWORK",
    tagline: "MPLS-grade point-to-point, any-to-any",
    description:
      "Dedicated, private layer-2 circuits between any two locations in our network footprint. Zero internet exposure, fixed latency, guaranteed bandwidth. Ideal for data replication, hybrid cloud backhaul, and latency-sensitive trading infrastructure.",
    features: [
      "1 Gbps to 100 Gbps bandwidth options",
      "Sub-5ms intra-city, sub-20ms inter-city latency",
      "99.99% SLA with automatic path redundancy",
      "Available between all our China and APAC PoPs",
    ],
    seoKeywords: ["China MPLS provider", "P2P circuit China", "private line China"],
  },
  {
    id: "cloud-connect",
    name: "Cloud Connect",
    module: "NETWORK",
    tagline: "China data center → AWS, Azure, GCP — cross-border",
    description:
      "Direct, dedicated connectivity from your China colocation or compute environment to global cloud regions. Physical cross-connects to AWS Direct Connect, Azure ExpressRoute, and Google Cloud Interconnect — with all cross-border compliance handled.",
    features: [
      "China (Shanghai/Beijing/Shenzhen) → AWS Tokyo, Singapore",
      "China (Shanghai/Beijing/Shenzhen) → Azure Hong Kong",
      "China (Shanghai/Beijing/Shenzhen) → GCP Taiwan",
      "SLA-backed, 99.99% uptime, full BGP support",
    ],
    seoKeywords: ["AWS Direct Connect China", "Azure ExpressRoute China", "GCP Interconnect China"],
  },
  {
    id: "ip-transit",
    name: "IP Transit",
    module: "NETWORK",
    tagline: "BGP, multi-homed bandwidth",
    description:
      "High-quality IP transit with direct peering to China''s major carriers and Tier 1 global networks. Full BGP table, DDoS protection included, and flexible commit levels from 100 Mbps to 100 Gbps.",
    features: [
      "Multi-homed to China Telecom, China Unicom, China Mobile",
      "Full BGP table with prefix filtering",
      "Included volumetric DDoS mitigation",
      "Available at all our China and APAC PoPs",
    ],
    seoKeywords: ["China IP transit", "BGP China", "China bandwidth provider"],
  },
  {
    id: "virtual-edge",
    name: "Virtual Edge",
    module: "NETWORK",
    tagline: "FortiGate, VyOS, RouterOS, VSE — on demand",
    description:
      "Deploy your choice of virtual router or firewall on our infrastructure. Bring your own license or use ours. Full control over routing, firewall policies, and VPN termination — with underlying physical connectivity handled by us.",
    features: [
      "Supported: FortiGate VM, VyOS, MikroTik RouterOS, VSE",
      "Full root/administrative access",
      "Bring your own license or lease from us",
      "Deploy in hours, not weeks",
    ],
    seoKeywords: ["virtual FortiGate China", "VyOS hosting China", "virtual router China"],
  },
  {
    id: "colocation",
    name: "Colocation",
    module: "DATA CENTER",
    tagline: "Rack space, power, cooling — China and beyond",
    description:
      "Tier III+ data center colocation with flexible rack configurations. Deploy your hardware in our Chinese facilities with redundant power, precision cooling, and multi-layer physical security. APAC and global locations also available.",
    features: [
      "1/4, 1/2, and full rack options with flexible power",
      "2N power redundancy, N+1 cooling",
      "24/7 on-site security and biometric access",
      "Available in Shanghai, Beijing, Shenzhen, Singapore",
    ],
    seoKeywords: ["China colocation", "data center China", "rack hosting China"],
  },
  {
    id: "smart-hands",
    name: "Smart Hands",
    module: "DATA CENTER",
    tagline: "Remote ops — your eyes and hands on the ground",
    description:
      "On-demand remote hands services across all our data center locations. Rack-and-stack, cabling, hardware replacement, visual inspection, and troubleshooting — executed by our local engineers, reported back in English within your timezone.",
    features: [
      "Server racking, cabling, and labeling",
      "Hardware replacement and RMAs",
      "Visual inspections and power cycle requests",
      "Bilingual reporting — English and Mandarin",
    ],
    seoKeywords: ["remote hands China", "smart hands China data center"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByModule(module: Product["module"]): Product[] {
  return products.filter((p) => p.module === module);
}

export const productModules = ["AI", "COMPUTE", "NETWORK", "DATA CENTER"] as const;
