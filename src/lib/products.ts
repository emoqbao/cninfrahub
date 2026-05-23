export interface Product {
  id: string;
  name: string;
  module: "AI" | "COMPUTE" | "NETWORK" | "DATA CENTER";
  tagline: string;
  description: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  seoKeywords: string[];
}

export const products: Product[] = [
  {
    id: "ai-gateway",
    name: "AI Gateway",
    module: "AI",
    tagline: "Compliant API relay for DeepSeek, Claude, and China''s AI ecosystem",
    description:
      "We aggregate API access to China''s leading AI models through partnerships with local infrastructure providers. Route inference traffic to DeepSeek, Qwen, Kimi, and other China-native LLMs — as well as Claude, GPT-4o, and Gemini through optimized proxy — all through a single managed endpoint. We handle provider selection, compliance, and performance optimization, so your team gets one API key and one support contact for every model.",
    features: [
      "Direct relay for DeepSeek, Qwen, Kimi, and other China-native LLMs through partner infrastructure",
      "Claude, GPT-4o, and Gemini proxy with China-optimized routing across multiple carrier backbones",
      "Centralized billing, rate limiting, token-level usage analytics, and cost allocation",
      "Automatic model failover across provider networks — if one degrades, traffic reroutes",
      "TLS 1.3 encryption end-to-end with SOC 2 compliant partner infrastructure",
      "Single support team for all models — no juggling multiple vendor relationships",
    ],
    benefits: [
      "One partner, every model — we source and manage the underlying provider relationships",
      "Lower latency than public API endpoints by routing through carrier-optimized paths",
      "Full compliance with China''s data regulations — we handle the legal complexity",
      "Pay-as-you-go with volume discounts from aggregated purchasing power",
      "Deploy in days with pre-configured relays — no infrastructure to build",
    ],
    useCases: [
      "Global SaaS companies serving Chinese users with localized AI features",
      "AI startups needing reliable access to China''s model ecosystem for R&D",
      "Enterprise teams building multi-model pipelines across Western and Chinese LLMs",
      "Gaming companies integrating real-time AI translation and moderation for China markets",
    ],
    seoKeywords: ["DeepSeek API access China", "Claude API relay China", "AI gateway China", "Qwen API proxy"],
  },
  {
    id: "elastic-cloud-servers",
    name: "Elastic Cloud Servers",
    module: "COMPUTE",
    tagline: "On-demand VMs across China — we source the best provider for your workload",
    description:
      "We aggregate virtual machine capacity from multiple Tier III+ data center operators across China. You tell us your requirements — vCPU, RAM, storage, region — and we select the optimal provider from our partner network based on price, performance, and availability. Full root access, flexible configurations (1-96 vCPUs, 1-384 GB RAM), and integrated networking. We manage the provider relationship; you manage your servers.",
    features: [
      "Multiple provider options across Shanghai, Beijing, Shenzhen, and Guangzhou",
      "1-96 vCPUs, 1-384 GB RAM, NVMe SSD or HDD — we match specs to the right provider",
      "Full root access with custom ISO and bring-your-own-image support",
      "Integrated with Private Connect and Cloud Connect for hybrid architectures",
      "Pay-as-you-go, monthly reserved, or annual committed pricing across our partner network",
      "API-driven provisioning with Terraform and Pulumi support",
    ],
    benefits: [
      "Provider-agnostic: we switch you to better options as pricing and capacity change",
      "Competitive pricing through aggregated purchasing across our partner network",
      "Single support contact regardless of which provider runs your infrastructure",
      "Compliance-ready: we ensure data stays in-region under full customer control",
      "24/7 bilingual support covering both infrastructure and OS-level issues",
    ],
    useCases: [
      "Web applications and APIs serving Chinese end users",
      "Development and staging environments mirroring China production",
      "Data processing and ETL workloads requiring in-region compliance",
      "Microservices architectures that need elastic scaling",
    ],
    seoKeywords: ["China cloud server", "China VPS hosting", "elastic compute China", "China virtual machine"],
  },
  {
    id: "bare-metal",
    name: "Bare Metal",
    module: "COMPUTE",
    tagline: "Dedicated physical servers — we find the right hardware at the right price",
    description:
      "We source single-tenant physical servers from our network of data center and hardware partners. Latest-generation Intel Xeon and AMD EPYC processors, custom RAID configurations, NVMe SSD storage, and GPU expansion — we match your exact specs to the provider that gives you the best combination of price, location, and support. Zero hypervisor overhead, full OS control, and 24/7 Smart Hands included.",
    features: [
      "Latest-gen Intel Xeon Scalable and AMD EPYC processors sourced across our partner network",
      "Custom RAID (0/1/5/10), NVMe SSDs, GPU expansion — we find the provider that fits",
      "IPMI/KVM remote management with virtual media and console redirection",
      "High-bandwidth network uplinks with bonded interfaces through multiple carrier options",
      "Bundled with Private Connect for secure, SLA-backed cross-border backhaul",
      "Smart Hands support included for hardware replacement, cabling, and inspections",
    ],
    benefits: [
      "Hardware-agnostic: we compare providers to find your optimal price-performance ratio",
      "100% hardware isolation — no shared resources, no noisy neighbors",
      "Full OS control — install any Linux distribution, Windows Server, or hypervisor",
      "Competitive pricing through aggregated purchasing across our partner network",
      "Flexible terms: monthly, annual, or multi-year with volume discounts",
    ],
    useCases: [
      "Database servers (Oracle, SQL Server, PostgreSQL) requiring consistent I/O",
      "Virtualization hosts running VMware, Proxmox, or KVM",
      "High-frequency trading and latency-sensitive financial workloads",
      "SAP HANA, ERP systems, and legacy applications requiring physical infrastructure",
    ],
    seoKeywords: ["China bare metal server", "dedicated server China", "physical server hosting China"],
  },
  {
    id: "gpu-instances",
    name: "GPU Instances",
    module: "COMPUTE",
    tagline: "NVIDIA GPU compute in China — aggregated capacity from multiple partners",
    description:
      "We aggregate GPU compute across our partner network to provide NVIDIA H100, H200, A100, and L40S capacity for AI training, fine-tuning, and inference. Whether you need a single GPU or a multi-node cluster with high-speed interconnects, we find the provider with available capacity at the best rate. Pre-configured ML environments (CUDA, PyTorch, TensorFlow, vLLM) come standard. All deployments comply with China''s data residency requirements.",
    features: [
      "NVIDIA H100, H200, A100, and L40S GPUs sourced across multiple provider partners",
      "Multi-node configurations with high-speed interconnects for distributed training",
      "Pre-configured ML stacks: CUDA, PyTorch, TensorFlow, vLLM, DeepSpeed",
      "Choice of 1-GPU, 4-GPU, and 8-GPU node configurations from our partner pool",
      "High-bandwidth networking with RDMA support for gradient synchronization",
      "China-based infrastructure meeting data sovereignty requirements",
    ],
    benefits: [
      "Aggregated capacity: we find available GPUs when individual providers are sold out",
      "Better pricing through volume relationships across multiple hardware partners",
      "Dedicated allocation — no shared GPU virtualization overhead",
      "Provider switching: if one partner''s pricing or availability changes, we migrate you",
      "Rapid sourcing: typical deployment within 24-48 hours across our partner network",
    ],
    useCases: [
      "Large language model training and fine-tuning (LoRA, QLoRA, full fine-tune)",
      "Production inference serving for AI applications with latency requirements",
      "Computer vision model training for autonomous systems and medical imaging",
      "Scientific computing, molecular dynamics, and simulation workloads",
    ],
    seoKeywords: ["GPU hosting China", "H100 China hosting", "A100 China data center", "NVIDIA GPU China", "AI training China"],
  },
  {
    id: "private-connect",
    name: "Private Connect",
    module: "NETWORK",
    tagline: "Dedicated Layer 2 circuits — we negotiate the best carrier pricing for you",
    description:
      "We source and manage dedicated private Layer 2 circuits across China''s major carriers — China Telecom, China Unicom, China Mobile, and specialized regional providers. By aggregating demand, we secure pricing that individual enterprises cannot negotiate directly. Bandwidth from 1 Gbps to 100 Gbps, fixed latency, zero internet exposure. We handle carrier selection, contract negotiation, provisioning, and ongoing management — you get a single point of accountability.",
    features: [
      "Multi-carrier sourcing: China Telecom, China Unicom, China Mobile, and regional specialists",
      "1 Gbps to 100 Gbps bandwidth with flexible burst and committed rate options",
      "Layer 2 transparency — run BGP, OSPF, or any routing protocol of your choice",
      "Available between all major China business hubs and APAC interconnection points",
      "Self-service portal for monitoring, modifying, and managing your circuits",
      "Automatic path redundancy with carrier-diverse backup routes",
    ],
    benefits: [
      "Carrier-agnostic: we select the best provider for each route, not the one we''re locked into",
      "Significantly better pricing than enterprises can negotiate directly with carriers",
      "Eliminate multi-carrier management — one contract, one SLA, one support team",
      "Flexible bandwidth — adjust commitments as your needs change, across carrier boundaries",
      "Provisioned in days through our carrier relationships, not weeks of direct negotiation",
    ],
    useCases: [
      "Cross-border database replication with guaranteed throughput between China and APAC",
      "Hybrid cloud backhaul connecting China infrastructure to AWS, Azure, or GCP",
      "Real-time financial data feeds requiring deterministic, low-jitter connectivity",
      "Global CDN origin shielding with private links between China and APAC edge nodes",
    ],
    seoKeywords: ["China private line", "P2P circuit China", "Layer 2 connectivity China", "cross-border private network"],
  },
  {
    id: "cloud-connect",
    name: "Cloud Connect",
    module: "NETWORK",
    tagline: "Direct links to AWS, Azure, GCP — we handle the carrier and the compliance",
    description:
      "We establish dedicated physical cross-connects from your China infrastructure to global cloud regions — AWS Direct Connect, Azure ExpressRoute, and Google Cloud Interconnect. We select the optimal carrier for each route, negotiate pricing on your behalf, and manage all cross-border compliance documentation. Available from Shanghai, Beijing, Shenzhen, and Guangzhou to major cloud regions in Tokyo, Singapore, Hong Kong, and Seoul.",
    features: [
      "Physical cross-connects to AWS Direct Connect, Azure ExpressRoute, GCP Cloud Interconnect",
      "Multi-carrier routing options from major China hubs to Asia-Pacific cloud regions",
      "Full BGP support with your own ASN and public/private VIFs",
      "Carrier-diverse backup paths for automatic failover",
      "Complete compliance documentation package for China cross-border data regulations",
      "Single point of contact for carrier management, cloud provider coordination, and compliance",
    ],
    benefits: [
      "Better pricing: we aggregate demand across clients to negotiate with multiple carriers",
      "Multi-carrier flexibility: we select the best route, not the only route we have",
      "Compliance handled: cross-border data regulation documentation included as standard",
      "One partner for connectivity + cloud + compliance — no separate vendors to coordinate",
      "Provisioned in days through established carrier relationships",
    ],
    useCases: [
      "Hybrid cloud architectures with China-based compute and global cloud services",
      "Disaster recovery: replicate from China data centers to cloud regions for geo-redundancy",
      "SaaS platforms needing dedicated connectivity to China customer environments",
      "Big data pipelines moving results from China processing to global analytics platforms",
    ],
    seoKeywords: ["AWS Direct Connect China", "Azure ExpressRoute China", "GCP Interconnect China", "China cloud connectivity"],
  },
  {
    id: "ip-transit",
    name: "IP Transit",
    module: "NETWORK",
    tagline: "Multi-carrier BGP bandwidth — we find the best blend of price and performance",
    description:
      "We aggregate IP transit across China''s major carriers — China Telecom, China Unicom, China Mobile — plus global Tier 1 networks. We design the optimal carrier mix for your traffic patterns, negotiate pricing that individual buyers cannot access, and manage all carrier relationships. Full BGP table, DDoS protection included, and flexible commits from 100 Mbps to 100 Gbps. One invoice, one support team, multiple carriers.",
    features: [
      "Multi-carrier peering across China Telecom, China Unicom, China Mobile, and Tier 1 global networks",
      "Full BGP table with community-based traffic engineering and prefix filtering",
      "Volumetric DDoS mitigation included through our carrier partnerships",
      "Flexible bandwidth commits from 100 Mbps to 100 Gbps",
      "Bring your own IP space (BYOIP) or use provider-independent space",
      "Real-time traffic analytics and BGP monitoring via self-service portal",
    ],
    benefits: [
      "Carrier-agnostic: we blend multiple providers for optimal price and routing",
      "Aggregated pricing: our combined client volume secures rates below direct enterprise pricing",
      "DDoS protection included — no separate scrubbing service or additional cost",
      "Single BGP session, multiple upstreams — we handle the complexity underneath",
      "Carrier switching: if performance degrades on one path, we reroute to another",
    ],
    useCases: [
      "Content providers and CDNs delivering video, gaming, and web content to Chinese audiences",
      "SaaS platforms hosting multi-tenant applications requiring China-optimized ingress",
      "Gaming companies needing low-jitter, high-throughput connectivity for real-time multiplayer",
      "Enterprises operating SD-WAN hubs in China for branch office connectivity",
    ],
    seoKeywords: ["China IP transit", "BGP China", "China bandwidth provider", "China dedicated internet access"],
  },
  {
    id: "virtual-edge",
    name: "Virtual Edge",
    module: "NETWORK",
    tagline: "FortiGate, VyOS, RouterOS, VSE — we host it, you control it",
    description:
      "Run your choice of virtual router, firewall, or SD-WAN appliance on infrastructure we source and manage. Deploy FortiGate VM, VyOS, MikroTik RouterOS, or Aruba Virtual Security Edge with full administrative control. We handle the underlying physical connectivity — Private Connect, Cloud Connect, IP Transit — across whichever carriers and providers best serve your topology. Bring your own license or lease from us. Operational in hours.",
    features: [
      "Certified support for FortiGate VM, VyOS, MikroTik RouterOS v7, and Aruba VSE",
      "Full root/administrative access — complete control over routing, firewall, and VPN policies",
      "Deploy in hours with pre-built templates or bring your own image",
      "Underlying connectivity sourced and managed across our carrier partner network",
      "Bring your own license (BYOL) or lease monthly with support included",
      "SLA-backed infrastructure covering compute, power, and network underlay",
    ],
    benefits: [
      "No hardware procurement, shipping, or customs — fully virtual deployment",
      "Maintain your existing network tooling, configurations, and operational workflows",
      "Flexible licensing — BYOL for existing investments, lease for new deployments",
      "Carrier-agnostic connectivity underlay — we source the best path for your topology",
      "24/7 Smart Hands available for any physical-layer issues",
    ],
    useCases: [
      "Extending global SD-WAN fabric into China without deploying physical appliances",
      "Running site-to-site IPsec VPNs between China locations and global offices",
      "Deploying next-gen firewalls for China branch offices with IPS, AV, and web filtering",
      "BGP edge routing for companies managing their own IP space and ASN in China",
    ],
    seoKeywords: ["virtual FortiGate China", "VyOS hosting China", "virtual router China", "SD-WAN China", "NGFW China"],
  },
  {
    id: "bare-fiber",
    name: "Bare Fiber",
    module: "NETWORK",
    tagline: "Dark fiber in China — sourced through specialist partners the big carriers don''t work with",
    description:
      "China''s three major carriers don''t offer bare fiber leasing directly — but we work with specialized regional fiber operators who do. We source dark fiber pairs between your locations, giving you complete control over the optical layer: choose your own transceivers, DWDM equipment, and protocol. We handle the partner selection, contract negotiation, and ongoing management. Ideal for organizations that need full physical-layer control and the highest possible bandwidth density.",
    features: [
      "Dark fiber pairs sourced through specialist regional operators unavailable to direct buyers",
      "Complete optical-layer control: your transceivers, your DWDM, your protocol",
      "Available in metro (intra-city) and long-haul (inter-city) configurations",
      "Unlimited bandwidth potential — scale by upgrading optics, not renegotiating contracts",
      "Physical diversity options: we can source geographically diverse paths from multiple operators",
      "Full management: we handle operator relationships, SLAs, and issue resolution",
    ],
    benefits: [
      "Access dark fiber in China — a product the big three carriers simply don''t offer",
      "Full control: run any protocol at any bandwidth your optics support",
      "Long-term cost advantage for high-bandwidth, steady-state connectivity needs",
      "Physical layer security: no shared infrastructure, no carrier equipment in the path",
      "Single partner for fiber sourcing + colocation + cross-connects + management",
    ],
    useCases: [
      "Data center interconnects between colocation facilities for replication and backup",
      "High-frequency trading networks requiring the lowest possible latency at the physical layer",
      "Research and education networks needing dedicated, high-bandwidth optical paths",
      "Content and media companies transferring massive datasets between production facilities",
    ],
    seoKeywords: ["dark fiber China", "bare fiber China", "China fiber lease", "China dark fiber providers", "private fiber China"],
  },
  {
    id: "colocation",
    name: "Colocation",
    module: "DATA CENTER",
    tagline: "Tier III+ rack space across China — we find the facility that fits your needs",
    description:
      "We aggregate colocation capacity across multiple carrier-neutral, Tier III+ data centers in Shanghai, Beijing, Shenzhen, and Guangzhou. From quarter-rack to private cages, we match your power density, connectivity, and compliance requirements to the right facility — at pricing secured through our aggregated purchasing. All facilities are ISO 27001 and SOC 2 certified. We manage the facility relationship; you focus on your infrastructure.",
    features: [
      "Multiple facility options across Shanghai, Beijing, Shenzhen, and Guangzhou",
      "1/4, 1/2, full rack, and private cage configurations — we find the right facility",
      "Power density from 3 kW to 50 kW per rack across our partner facilities",
      "Carrier-neutral facilities with cross-connects to all major Chinese and global carriers",
      "24/7 on-site security with biometric access, CCTV, and multi-layer physical controls",
      "APAC and global locations also available through our extended partner network",
    ],
    benefits: [
      "Facility-agnostic: we match your requirements to the best data center, not one we own",
      "Better pricing through aggregated rack purchasing across our partner network",
      "Carrier-neutral — choose your network providers freely, no facility lock-in",
      "Compliance-ready: ISO 27001, ISO 9001, SOC 2 certified partner facilities",
      "Flexible terms from 12 to 60 months with expansion rights",
    ],
    useCases: [
      "Primary production infrastructure for companies entering or expanding in China",
      "Disaster recovery site with cross-region connectivity backbones",
      "High-density GPU clusters for AI/ML workloads",
      "Financial services infrastructure requiring physical isolation and regulatory compliance",
    ],
    seoKeywords: ["China colocation", "data center China", "rack hosting China", "Shanghai data center", "Beijing colocation"],
  },
  {
    id: "smart-hands",
    name: "Smart Hands",
    module: "DATA CENTER",
    tagline: "Remote operations across any facility — your eyes and hands on the ground, 24/7",
    description:
      "On-demand remote hands services covering every facility in our partner network. Server racking, cabling, hardware diagnostics, RMAs, visual inspections — executed by trained local engineers and reported in English within your business hours. We don''t just dispatch a technician; we manage the entire task lifecycle from ticket to resolution. Pay per task or subscribe to monthly blocks. Standard response within 30 minutes.",
    features: [
      "Server and network equipment racking, stacking, and structured cabling (copper and fiber)",
      "Hardware replacement, RMAs, and spare part management with vendor coordination",
      "Visual inspections: LED status, cable integrity, physical damage assessment",
      "Power cycling, console access, and remote KVM session facilitation",
      "Inventory management: asset tagging, auditing, and lifecycle tracking",
      "Bilingual documentation: all reports available in English and Mandarin",
    ],
    benefits: [
      "Coverage across our entire partner facility network — one provider for all locations",
      "Eliminate travel — no need to fly engineers to China for routine physical tasks",
      "Standard response in 30 minutes, emergency in 15 minutes",
      "Detailed task reports with photos and timestamps for audit and compliance",
      "Monthly task blocks available for predictable budgeting",
    ],
    useCases: [
      "Global enterprises without China-based IT staff needing physical infrastructure management",
      "Hardware refresh cycles: rack new servers, decommission old equipment",
      "Emergency response: failed component replacement, power issues, troubleshooting",
      "Ongoing maintenance: quarterly inspections, firmware updates, cable management",
    ],
    seoKeywords: ["remote hands China", "smart hands China data center", "China data center operations", "remote IT support China"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByModule(module: Product["module"]): Product[] {
  return products.filter((p) => p.module === module);
}

export const productModules = ["AI", "COMPUTE", "NETWORK", "DATA CENTER"] as const;