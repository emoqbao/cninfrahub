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
      "We aggregate API access to China''s top AI models — ByteDance (Doubao), Alibaba (Tongyi/Qwen), Tencent (Hunyuan), Kimi (Moonshot), DeepSeek, Zhipu (GLM), and more — alongside global leaders OpenAI (GPT-4o, o1), Anthropic (Claude), and Google (Gemini). Text generation, image generation, embeddings — we cover the full spectrum. Different models carry different discount structures through our aggregated procurement, and we route each request to the optimal provider. One API key, one support contact, every model.",
    features: [
      "China-native LLMs: ByteDance Doubao, Alibaba Tongyi/Qwen, Tencent Hunyuan, Kimi, DeepSeek, Zhipu GLM, and more",
      "Global models: OpenAI GPT-4o/o1, Anthropic Claude, Google Gemini — text and image generation",
      "Model-specific discount structures through aggregated procurement across our partner network",
      "Centralized billing, rate limiting, token-level usage analytics, and cost allocation",
      "Automatic model failover across provider networks — if one degrades, traffic reroutes",
      "TLS 1.3 encryption end-to-end with SOC 2 compliant partner infrastructure",
      "Single support team for all models — no juggling multiple vendor relationships",
    ],
    benefits: [
      "One partner, every model — China-native and global, text and image, all through one endpoint",
      "Model-specific pricing advantages — different discount structures for different providers",
      "Lower latency than public API endpoints by routing through carrier-optimized paths",
      "Full compliance with China''s data regulations — we handle the legal complexity",
      "Pay-as-you-go with volume discounts from aggregated purchasing power",
      "Deploy in days with pre-configured relays — no infrastructure to build",
    ],
    useCases: [
      "Global SaaS companies serving Chinese users with localized AI features",
      "AI startups needing reliable access to China''s model ecosystem for R&D",
      "Enterprise teams building multi-model pipelines across Chinese and global LLMs for text and image generation",
      "Gaming companies integrating real-time AI translation and moderation for China markets",
    ],
    seoKeywords: ["DeepSeek API access China", "Claude API relay China", "AI gateway China", "Qwen API proxy", "Doubao API China", "Kimi API access", "Zhipu GLM API"],
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
    id: "dia",
    name: "Dedicated Internet Access",
    module: "NETWORK",
    tagline: "Premium dedicated internet — China and overseas, carrier-grade, uncontended, at pricing enterprises can't get directly",
    description:
      "Dedicated Internet Access (DIA) delivers guaranteed, uncontended bandwidth for businesses that cannot tolerate the variability of shared broadband. We source DIA circuits across China Telecom, China Unicom, China Mobile, and regional providers — and through our international carrier partnerships, we deliver the same aggressive pricing model overseas. At highly competitive pricing below standard enterprise rates through our aggregated purchasing. Pure dedicated internet access: guaranteed, uncontended bandwidth from 10 Mbps to 10 Gbps. No BGP, no complexity — just a premium, dedicated pipe. Available in China and key global markets.",
    features: [
      "Multi-carrier DIA sourcing: China Telecom, China Unicom, China Mobile, and regional ISPs",
      "Same aggressive pricing model available overseas through international carrier partnerships",
      "10 Mbps to 10 Gbps guaranteed, uncontended bandwidth — no oversubscription, no shared capacity",
      "Included DDoS mitigation through our carrier partnerships",
      "Static IP allocation with reverse DNS and RDAP/WHOIS management",
      "SLA-backed with guaranteed uptime, latency, and packet delivery commitments",
    ],
    benefits: [
      "Guaranteed, uncontended bandwidth — consistent performance, no peak-hour degradation",
      "Highly competitive pricing below standard enterprise DIA rates through our carrier relationships — in China and overseas",
      "Multi-carrier flexibility: we select the best-performing carrier for your location",
      "Simple, no-BGP dedicated internet — no routing complexity, just a premium pipe",
      "One support team for all carrier relationships — no calling different providers for outages",
    ],
    useCases: [
      "Enterprise office internet access for China locations requiring guaranteed uptime",
      "SaaS and gaming platforms hosting servers that need consistent, low-jitter connectivity",
      "Global enterprise offices requiring consistent, premium internet across China and overseas locations",
      "SD-WAN hub sites requiring premium underlay circuits for branch office aggregation",
    ],
    seoKeywords: ["China DIA", "dedicated internet access China", "China enterprise internet", "China dedicated bandwidth", "China BGP internet"],
  },
  {
    id: "ip-transit",
    name: "IP Transit",
    module: "NETWORK",
    tagline: "Multi-homed BGP IP transit — blend China''s Tier 1 carriers with global peers at wholesale pricing",
    description:
      "Full-table BGP IP transit through our global carrier and Internet Exchange (IX) partnerships. In China, direct BGP peering with the big three carriers is not available to third parties — but through our international network, we deliver multi-homed BGP transit with competitive pricing across key global markets and major IX points. Community-based traffic engineering, prefix filtering, and included DDoS mitigation. Bandwidth from 10 Gbps to 100 Gbps. Built for ISPs, CDNs, cloud providers, and content platforms that need carrier-diverse, wholesale-level IP transit.",
    features: [
      "Full BGP table via global Tier 1 carriers and Internet Exchange (IX) peering — multi-homed and carrier-diverse",
      "Community-based traffic engineering: control inbound and outbound paths with BGP communities",
      "10 Gbps to 100 Gbps with 95th percentile or flat-rate billing — wholesale pricing across multiple regions",
      "Competitive pricing in key global markets with regional price advantages through our carrier relationships",
      "Bring your own IP space (BYOIP) or use provider-independent (PI) space",
      "Real-time traffic analytics, BGP monitoring, and route optimization via self-service portal",
    ],
    benefits: [
      "Wholesale pricing model — built for organizations consuming 10 Gbps+ of IP transit",
      "Single BGP session, multiple Tier 1 upstreams and IX peers — we manage the complexity",
      "Regional price advantages: our carrier relationships deliver competitive rates across key global markets",
      "Carrier switching: if one upstream degrades, we reroute to better-performing peers or IX paths",
      "DDoS protection included through carrier-level scrubbing — no separate service cost",
    ],
    useCases: [
      "Content delivery networks and streaming platforms needing multi-homed, carrier-diverse upstream",
      "Cloud and hosting providers requiring redundant, wholesale-level IP transit across global markets",
      "Gaming companies with massive concurrent player bases requiring high-throughput, low-jitter ingress",
      "ISPs and MSPs building Points of Presence seeking carrier-diverse IP transit with competitive regional pricing",
    ],
    seoKeywords: ["IP transit", "BGP IP transit", "wholesale IP transit", "global IP transit", "IX peering", "carrier transit", "IP upstream"],
  },
  {
    id: "private-connect",
    name: "Private Connect",
    module: "NETWORK",
    tagline: "Layer 2 P2P circuits at pricing enterprises can''t get on their own — cross-city and cross-border",
    description:
      "We source dedicated Layer 2 point-to-point circuits — MPLS, IEPL (International Ethernet Private Line), and standard Ethernet private line — across China Telecom, China Unicom, China Mobile, and specialized regional providers. Through deep carrier relationships and aggregated demand, we consistently secure highly competitive pricing below direct enterprise rates. For cross-city routes, we also leverage alternative non-carrier providers for even more competitive options. Bandwidth from 1 Gbps to 100 Gbps with flexible terms. Same aggressive pricing model applies overseas through our international carrier partnerships.",
    features: [
      "MPLS, IEPL, and Ethernet private line — the full range of Layer 2 connectivity options",
      "Multi-carrier sourcing: China Telecom, China Unicom, China Mobile, and regional alternative providers",
      "Cross-city routes via non-carrier alternatives — better pricing than traditional operator circuits",
      "1 Gbps to 100 Gbps bandwidth with flexible burst, committed, and usage-based rate options",
      "Layer 2 transparency — run BGP, OSPF, or any routing protocol of your choice",
      "Available between all major China business hubs, APAC, and global interconnection points",
      "Self-service portal for monitoring, modifying, and managing your circuits",
    ],
    benefits: [
      "Bulk pricing advantage: our carrier relationships secure rates well below enterprise direct pricing",
      "Alternative routing for cross-city: cheaper non-carrier paths where traditional operators are overpriced",
      "One partner across China and overseas — same pricing model, same SLA, same support",
      "Flexible bandwidth — adjust commitments as needs change, across carrier boundaries",
      "Provisioned in days through established relationships, not weeks of direct carrier negotiation",
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
    tagline: "Direct China-to-cloud links — from 1 Gbps managed to 100 Gbps dedicated, including Megaport and Equinix",
    description:
      "We provide the full spectrum of China-to-cloud connectivity — from cost-effective 50 Mbps - 1 Gbps managed virtual connections via Megaport and Equinix Fabric, to dedicated 1-100 Gbps physical cross-connects to AWS Direct Connect, Azure ExpressRoute, and Google Cloud Interconnect (GCP). Not just China to APAC — we deliver the same compliant connectivity to US (AWS us-east/west, Azure US regions) and Europe (AWS eu-west/central, Azure Europe regions). Standard cloud provider partners cannot establish compliant cross-border links from China to overseas cloud regions. We can. Multiple enterprise customers running production workloads on these links today.",
    features: [
      "Managed virtual connections (50 Mbps - 1 Gbps) via Megaport and Equinix Fabric — cost-effective, fast to provision",
      "Dedicated physical cross-connects (1-100 Gbps) to AWS Direct Connect, Azure ExpressRoute, GCP Interconnect",
      "China-to-cloud connectivity that standard AWS/Azure/GCP partners cannot legally provide",
      "Multi-carrier routing from major China hubs to APAC, US, and European cloud regions with full BGP support",
      "Full compliance documentation package for China cross-border data regulations",
      "Carrier-diverse backup paths with automatic failover for production reliability",
    ],
    benefits: [
      "Right-sized connectivity: 50 Mbps-1 Gbps managed through Megaport/Equinix, or 1 Gbps+ dedicated — you choose",
      "Access connectivity your cloud provider''s own partners can''t deliver for China routes",
      "Managed option eliminates hardware cross-connect complexity — simpler, faster to provision",
      "Compliance built in: cross-border data regulation documentation as standard, not an add-on",
      "Production-proven — actively used by multiple enterprise customers today",
    ],
    useCases: [
      "Hybrid cloud architectures with China-based compute and global cloud services (APAC, US, Europe)",
      "Moderate-bandwidth managed virtual links for development, staging, and cost-sensitive production",
      "High-bandwidth dedicated links for data-heavy production workloads and cross-continent DR replication",
      "SaaS platforms needing dedicated, low-latency connectivity to China customer environments worldwide",
    ],
    seoKeywords: ["AWS Direct Connect China", "Azure ExpressRoute China", "GCP Interconnect China", "China cloud connectivity", "Megaport China", "Equinix Fabric China", "China to US cloud", "China to Europe cloud"],
  },
  {
    id: "dark-fiber",
    name: "Dark Fiber",
    module: "NETWORK",
    tagline: "Dark fiber in China — the product the big three carriers won''t sell you",
    description:
      "China Telecom, China Unicom, and China Mobile don''t lease dark fiber. Full stop. But we work with specialized regional fiber operators who do — and for high-bandwidth scenarios, dark fiber beats P2P leased lines on both cost and control. You get dedicated fiber pairs with complete optical-layer freedom: your transceivers, your DWDM equipment, your protocol. We handle the partner sourcing, contract negotiation, and ongoing management. Cheaper than traditional circuits at scale, with none of the carrier restrictions.",
    features: [
      "Dark fiber pairs from specialist operators — a product category unavailable through direct carrier negotiation",
      "Complete optical-layer control: your transceivers, your DWDM, your choice of protocol",
      "Metro (intra-city) and long-haul (inter-city) routes available through our operator network",
      "Unlimited bandwidth potential — upgrade capacity by swapping optics, not renegotiating contracts",
      "Physically diverse path options sourced from multiple independent fiber operators",
      "Full lifecycle management: operator sourcing, contract negotiation, SLA enforcement, fault resolution",
    ],
    benefits: [
      "Access a product the big three carriers don''t offer — our operator relationships make this possible",
      "Significantly lower TCO than P2P leased lines at high bandwidth (100 Gbps+) — you''re leasing glass, not a service",
      "Complete protocol freedom — no carrier-imposed restrictions on what runs over the fiber",
      "Physical-layer security — dedicated fiber, no shared infrastructure, no carrier equipment inline",
      "Scale bandwidth independently: upgrade optics when you need more, don''t wait for carrier approval",
    ],
    useCases: [
      "Data center interconnects at 100 Gbps+ where leased line costs become prohibitive",
      "High-frequency trading platforms requiring deterministic latency at the physical layer",
      "Research and education networks needing dedicated, high-bandwidth optical infrastructure",
      "Content delivery and media production transferring massive datasets between facilities",
    ],
    seoKeywords: ["dark fiber China", "bare fiber China", "China fiber lease", "China dark fiber providers", "private fiber China"],
  },
  {
    id: "virtual-edge",
    name: "Virtual Edge",
    module: "NETWORK",
    tagline: "Your virtual appliance, our managed infrastructure — we deploy, configure, and support",
    description:
      "We''re not just hosting your virtual router or firewall — we actively manage and configure it. Deploy FortiGate VM, VyOS, MikroTik RouterOS (ROS), or Zscaler Virtual Security Edge (VSE) on infrastructure we source and manage. We handle the initial configuration, ongoing policy management, OS updates, and the underlying physical connectivity across whichever carriers best serve your topology. Bring your own license or lease from us. Think of it as NaaS — Network as a Service — with you retaining full visibility and control.",
    features: [
      "Managed deployment and configuration for FortiGate VM, VyOS, MikroTik RouterOS, Zscaler VSE",
      "Custom image support: bring any compatible virtual appliance image, we''ll deploy it",
      "Ongoing management: policy updates, OS patching, performance tuning — handled by our team",
      "Full visibility retained — you get administrative access and monitoring dashboards",
      "Underlying connectivity sourced across our multi-carrier partner network",
      "Bring your own license (BYOL) or lease monthly with full support included",
    ],
    benefits: [
      "Beyond hosting: we actively manage and configure — not just rack-and-forget",
      "Any image, any vendor — RouterOS, VyOS, FortiGate, Zscaler VSE, or your custom appliance",
      "Reduce operational burden: our team handles the day-to-day network device management",
      "Carrier-agnostic connectivity — we source the best underlying circuits for your topology",
      "No hardware, no shipping, no customs — fully virtual, deployed in hours",
    ],
    useCases: [
      "Extending global SD-WAN fabric into China without deploying physical appliances",
      "Managed NGFW for China branch offices with IPS, AV, web filtering, and SSL inspection",
      "BGP edge routing with full route control for companies managing their own IP space in China",
      "Zscaler VSE deployment for Zero Trust network access across China locations",
    ],
    seoKeywords: ["virtual FortiGate China", "VyOS hosting China", "MikroTik RouterOS China", "SD-WAN China", "Zscaler VSE China", "managed virtual firewall China"],
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