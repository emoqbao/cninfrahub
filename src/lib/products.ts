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
    tagline: "Compliant API relay for DeepSeek, Claude, and China''s AI ecosystem — zero latency overhead",
    description:
      "A managed API gateway that provides compliant, low-latency access to China''s leading AI models through optimized relay infrastructure. Route inference traffic to DeepSeek, Qwen, and other China-native LLMs without VPNs, regulatory headaches, or unreliable public endpoints. Centralized billing, rate limiting, and usage analytics give your team full control.",
    features: [
      "Direct relay for DeepSeek, Qwen, Kimi, and other China-native LLMs",
      "Claude, GPT-4o, and Gemini API proxy with China-optimized routing",
      "Centralized billing, rate limiting, token-level usage analytics, and cost allocation",
      "Automatic model failover — if one endpoint degrades, traffic routes to the next best option",
      "99.9% uptime SLA with real-time health monitoring dashboard",
      "TLS 1.3 encryption end-to-end, SOC 2 compliant infrastructure",
    ],
    benefits: [
      "Deploy in days, not months — pre-configured relays eliminate setup complexity",
      "40-60% lower latency vs. public API endpoints from outside China",
      "Single API key for all models — no credential sprawl across providers",
      "Full compliance with China''s data regulations — no data leaves jurisdiction without approval",
      "Pay-as-you-go pricing with volume discounts at scale",
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
    tagline: "On-demand VMs in China — provision in minutes, scale to thousands",
    description:
      "High-performance virtual machines deployed in our Tier III+ Chinese data centers. Spin up instances in under 5 minutes with full root access, flexible vCPU/RAM configurations (1-96 vCPUs, 1-384 GB RAM), and integrated networking. Purpose-built for workloads that need to run inside China with predictable performance and no hypervisor surprises.",
    features: [
      "Deploy in Shanghai, Beijing, Shenzhen, and Guangzhou within 5 minutes",
      "1-96 vCPUs, 1-384 GB RAM, NVMe SSD or HDD storage options",
      "Full root access with custom ISO, bring-your-own-image support",
      "Integrated with Private Connect and Cloud Connect for hybrid architectures",
      "Pay-as-you-go (hourly), monthly reserved, or annual committed pricing",
      "API-driven provisioning with Terraform and Pulumi provider support",
    ],
    benefits: [
      "No upfront hardware investment — scale compute on demand",
      "Predictable performance with dedicated vCPU allocation, no noisy neighbors",
      "Seamless hybrid cloud — bridge to AWS, Azure, or GCP via Cloud Connect",
      "Compliance-ready: data stays in China under full customer control",
      "24/7 bilingual support for both infrastructure and OS-level issues",
    ],
    useCases: [
      "Web applications and APIs serving Chinese end users with low-latency requirements",
      "Development and staging environments that mirror China production infrastructure",
      "Data processing and ETL workloads that must run in-region for compliance",
      "Microservices architectures that need elastic scaling during traffic spikes",
    ],
    seoKeywords: ["China cloud server", "China VPS hosting", "elastic compute China", "China virtual machine"],
  },
  {
    id: "bare-metal",
    name: "Bare Metal",
    module: "COMPUTE",
    tagline: "Single-tenant physical servers — your OS, your rules, our data center",
    description:
      "Dedicated physical servers for performance-sensitive, compliance-heavy, and high-throughput workloads. Zero hypervisor overhead, full hardware isolation, and complete OS control. Choose from latest-gen Intel Xeon Scalable and AMD EPYC processors with custom RAID, NVMe SSD, and GPU configurations. Includes IPMI/KVM remote management and 24/7 Smart Hands support on the ground in China.",
    features: [
      "Latest-gen Intel Xeon Scalable (4th/5th Gen) and AMD EPYC (9004/9005 Series)",
      "Custom RAID (0/1/5/10), up to 8× NVMe SSDs, GPU expansion slots",
      "IPMI/KVM remote management with virtual media and console redirection",
      "10 Gbps to 100 Gbps network uplinks with bonded interfaces",
      "Bundled with Private Connect for secure, SLA-backed cross-border backhaul",
      "24/7 Smart Hands support for hardware replacement, cabling, and visual inspections",
    ],
    benefits: [
      "100% hardware isolation — no shared resources, predictable performance",
      "Full OS control — install any Linux distribution, Windows Server, or hypervisor",
      "Compliance-ready for regulated industries (finance, healthcare, government)",
      "Lower TCO than equivalent cloud VM at sustained high utilization",
      "Flexible terms: monthly, annual, or multi-year with volume discounts",
    ],
    useCases: [
      "Database servers (Oracle, SQL Server, PostgreSQL) requiring consistent I/O performance",
      "Virtualization hosts running VMware, Proxmox, or KVM for internal private clouds",
      "High-frequency trading and financial modeling workloads sensitive to microsecond latency",
      "SAP HANA, ERP systems, and legacy enterprise applications requiring physical infrastructure",
    ],
    seoKeywords: ["China bare metal server", "dedicated server China", "physical server hosting China", "China colocation server"],
  },
  {
    id: "gpu-instances",
    name: "GPU Instances",
    module: "COMPUTE",
    tagline: "NVIDIA H100, A100, L40S — training and inference infrastructure in China",
    description:
      "High-density GPU compute for AI training, fine-tuning, and inference workloads hosted inside China. Access NVIDIA H100, H200, A100, and L40S clusters with NVLink and InfiniBand interconnects for multi-node distributed training — all compliant with China''s data residency requirements. Pre-configured ML environments with CUDA, PyTorch, TensorFlow, and vLLM get you from zero to training in hours.",
    features: [
      "NVIDIA H100 (80 GB HBM3), H200 (141 GB HBM3e), A100 (80 GB), and L40S (48 GB) GPUs",
      "NVLink + InfiniBand NDR400 interconnects for multi-node distributed training",
      "Pre-configured ML stacks: CUDA 12.x, PyTorch 2.x, TensorFlow 2.x, vLLM, DeepSpeed",
      "Choice of 1-GPU, 4-GPU, and 8-GPU node configurations",
      "100 Gbps network uplinks with RDMA support for gradient synchronization",
      "Full compliance with China data residency and cross-border data transfer regulations",
    ],
    benefits: [
      "40-70% lower cost than equivalent cloud GPU instances for sustained workloads",
      "No quota limits or availability uncertainty — reserved capacity guaranteed",
      "Dedicated hardware — no shared GPU virtualization overhead",
      "China-based infrastructure meets data sovereignty requirements for regulated AI",
      "Rapid provisioning: nodes typically available within 24-48 hours of order",
    ],
    useCases: [
      "Large language model training and fine-tuning (LoRA, QLoRA, full fine-tune)",
      "Production inference serving for AI applications with latency SLAs",
      "Computer vision model training for autonomous systems and medical imaging",
      "Scientific computing, molecular dynamics, and computational fluid dynamics",
    ],
    seoKeywords: ["GPU hosting China", "H100 China hosting", "A100 China data center", "NVIDIA GPU China", "AI training China"],
  },
  {
    id: "private-connect",
    name: "Private Connect",
    module: "NETWORK",
    tagline: "MPLS-grade Layer 2 circuits — any-to-any, provisioned in minutes",
    description:
      "Dedicated, private Layer 2 point-to-point circuits between any two locations in our network footprint. Zero internet exposure, fixed latency, guaranteed bandwidth from 1 Gbps to 100 Gbps. Ideal for data replication, hybrid cloud backhaul, latency-sensitive trading infrastructure, and secure cross-border connectivity. Provision new circuits in minutes through our self-service portal — no weeks-long carrier negotiations.",
    features: [
      "1 Gbps to 100 Gbps bandwidth with flexible burst and committed rates",
      "Sub-5ms intra-city, sub-20ms inter-city, sub-50ms cross-border latency (Asia-Pacific)",
      "99.99% uptime SLA with automatic path redundancy and sub-50ms failover",
      "Available between all China PoPs (Shanghai, Beijing, Shenzhen, Guangzhou) and APAC hubs",
      "Layer 2 transparency — run any routing protocol (BGP, OSPF) or VLAN tagging",
      "Self-service portal: provision, monitor, and modify circuits in real time",
    ],
    benefits: [
      "Reduce latency by up to 80% compared to public internet routing",
      "Eliminate VPN complexity — direct, private connections that behave like local links",
      "Predictable monthly pricing with no data transfer or egress fees",
      "One provider, one SLA — no finger-pointing between multiple carriers",
      "Instant bandwidth adjustments without physical circuit changes",
    ],
    useCases: [
      "Cross-border database replication (MySQL, PostgreSQL, Oracle) with guaranteed throughput",
      "Hybrid cloud backhaul connecting China infrastructure to AWS, Azure, or GCP regions",
      "Real-time financial data feeds requiring deterministic sub-millisecond jitter",
      "Global CDN origin shielding with private links between China and APAC edge nodes",
    ],
    seoKeywords: ["China private line", "P2P circuit China", "Layer 2 connectivity China", "China MPLS alternative", "cross-border private network"],
  },
  {
    id: "cloud-connect",
    name: "Cloud Connect",
    module: "NETWORK",
    tagline: "Direct cross-border links to AWS, Azure, GCP — from any China data center",
    description:
      "Dedicated, physical cross-connects from your China infrastructure to global cloud regions. Direct links to AWS Direct Connect, Azure ExpressRoute, and Google Cloud Interconnect with all cross-border compliance documentation handled by our team. Available from Shanghai, Beijing, Shenzhen, and Guangzhou to AWS Tokyo/Singapore, Azure Hong Kong/Singapore, and GCP Taiwan/Singapore.",
    features: [
      "Physical cross-connects to AWS Direct Connect, Azure ExpressRoute, GCP Cloud Interconnect",
      "Available from Shanghai, Beijing, Shenzhen → AWS Tokyo, Singapore, Seoul",
      "Available from Shanghai, Beijing, Shenzhen → Azure Hong Kong, Singapore, Tokyo",
      "Available from Shanghai, Beijing, Shenzhen → GCP Taiwan, Singapore, Tokyo",
      "Full BGP support with your own ASN and public/private VIFs",
      "Compliance documentation package for China cross-border data regulations",
    ],
    benefits: [
      "40-60% lower data transfer costs vs. internet-based VPN to cloud regions",
      "5-10x lower latency than public internet routes to same cloud endpoints",
      "SLA-backed, 99.99% uptime with redundant physical paths",
      "One partner for connectivity + compliance — no separate legal and network vendors",
      "Provisioned in 5-10 business days, not months",
    ],
    useCases: [
      "Hybrid cloud architectures with China-based compute and global cloud services",
      "Disaster recovery: replicate from China data centers to cloud regions for geo-redundancy",
      "SaaS platforms needing dedicated, low-latency connectivity to China customer environments",
      "Big data pipelines moving processed results from China processing clusters to global analytics platforms",
    ],
    seoKeywords: ["AWS Direct Connect China", "Azure ExpressRoute China", "GCP Interconnect China", "China cloud connectivity", "cross-border cloud link"],
  },
  {
    id: "ip-transit",
    name: "IP Transit",
    module: "NETWORK",
    tagline: "Multi-homed BGP bandwidth — direct peering with China''s Tier 1 carriers",
    description:
      "Premium IP transit with direct peering to China Telecom (AS4134), China Unicom (AS4837), China Mobile (AS9808), and global Tier 1 networks. Full BGP table with prefix filtering, included volumetric DDoS mitigation up to 2 Tbps, and flexible commits from 100 Mbps to 100 Gbps. Optimized routing ensures the best path for both inbound and outbound China traffic.",
    features: [
      "Multi-homed peering: China Telecom (AS4134), China Unicom (AS4837), China Mobile (AS9808)",
      "Plus Tier 1 global peers: NTT, Cogent, GTT, Tata, and 10,000+ additional peerings",
      "Full BGP table with community-based traffic engineering and prefix filtering",
      "Included volumetric DDoS mitigation up to 2 Tbps scrubbing capacity",
      "Bandwidth commits from 100 Mbps to 100 Gbps with 95th percentile or flat-rate billing",
      "Available at all China and APAC PoPs with burst capacity up to 200% of commit",
    ],
    benefits: [
      "Optimized China routing — avoid congested peering points between Chinese carriers",
      "Single provider, multiple upstreams — no multi-carrier management complexity",
      "DDoS protection included at no additional cost — no separate scrubbing service needed",
      "Bring your own IP space (BYOIP) or use our provider-independent (PI) space",
      "Real-time traffic analytics and BGP monitoring via self-service portal",
    ],
    useCases: [
      "Content providers and CDNs delivering video, gaming, and web content to Chinese audiences",
      "SaaS platforms hosting multi-tenant applications requiring China-optimized ingress",
      "Gaming companies needing low-jitter, high-throughput connectivity for real-time multiplayer",
      "Enterprises operating SD-WAN hubs in China for branch office connectivity",
    ],
    seoKeywords: ["China IP transit", "BGP China", "China bandwidth provider", "China dedicated internet access", "China DIA"],
  },
  {
    id: "virtual-edge",
    name: "Virtual Edge",
    module: "NETWORK",
    tagline: "FortiGate, VyOS, RouterOS, VSE — deploy your virtual network appliance in hours",
    description:
      "Run your choice of virtual router, firewall, or SD-WAN appliance on our infrastructure with full administrative control. Deploy FortiGate VM, VyOS, MikroTik RouterOS, or Aruba Virtual Security Edge in our China data centers with underlying physical connectivity (Private Connect, Cloud Connect, IP Transit) fully managed by us. Bring your own license or lease from us — operational in hours, not weeks.",
    features: [
      "Certified support: FortiGate VM, VyOS, MikroTik RouterOS v7, Aruba VSE",
      "Full root/administrative access — complete control over routing, firewall, and VPN policies",
      "Deploy in hours: upload your image or choose from our pre-built templates",
      "Underlying physical connectivity (Private Connect, Cloud Connect, IP Transit) fully managed",
      "Bring your own license (BYOL) or lease monthly from us with support included",
      "99.99% infrastructure uptime SLA covering compute, power, and network underlay",
    ],
    benefits: [
      "No hardware procurement, shipping, or customs — fully virtual deployment",
      "Maintain your existing network tooling, configs, and operational workflows",
      "Flexible licensing — BYOL for existing investments, lease for new deployments",
      "Seamless integration with your global SD-WAN fabric using your preferred vendor",
      "24/7 Smart Hands available for physical connectivity and hardware issues",
    ],
    useCases: [
      "Extending existing global SD-WAN fabric into China without deploying physical appliances",
      "Running site-to-site IPsec VPNs between China locations and global offices",
      "Deploying NGFW for China branch offices with IPS, AV, and web filtering",
      "BGP edge routing for companies managing their own IP space and ASN in China",
    ],
    seoKeywords: ["virtual FortiGate China", "VyOS hosting China", "virtual router China", "SD-WAN China", "NGFW China"],
  },
  {
    id: "colocation",
    name: "Colocation",
    module: "DATA CENTER",
    tagline: "Tier III+ rack space in Shanghai, Beijing, Shenzhen — power, cooling, security included",
    description:
      "Carrier-neutral, Tier III+ data center colocation across China''s primary business hubs. Flexible rack configurations from quarter-rack to private cages with 2N power redundancy, N+1 precision cooling, and multi-layer physical security including biometric access control. All facilities are ISO 27001, ISO 9001, and SOC 2 certified. APAC and global locations also available through our partner network.",
    features: [
      "1/4, 1/2, full rack, and private cage options — scale from 2U to 200+ racks",
      "Power density: 3-20 kW per rack standard, up to 50 kW for high-density GPU deployments",
      "2N power redundancy with diverse utility feeds and on-site diesel generators (72-hour runtime)",
      "N+1 precision cooling with hot/cold aisle containment — ASHRAE TC 9.9 compliant",
      "24/7 on-site security with biometric access, mantrap entry, and CCTV with 90-day retention",
      "Cross-connects available to 50+ carriers and cloud on-ramps within each facility",
    ],
    benefits: [
      "Carrier-neutral — choose your network providers, no vendor lock-in",
      "Compliance-ready facilities: ISO 27001, ISO 9001, SOC 2 Type II certified",
      "Transparent pricing with no hidden cross-connect or remote-hands fees",
      "Bilingual facility management — English and Mandarin reporting and support",
      "Flexible terms from 12 to 60 months with expansion rights built into contracts",
    ],
    useCases: [
      "Primary production infrastructure for companies entering or expanding in China",
      "Disaster recovery site within China with cross-region Private Connect backbones",
      "High-density GPU clusters for AI/ML requiring 20-50 kW per rack power delivery",
      "Financial services infrastructure requiring physical isolation and regulatory compliance",
    ],
    seoKeywords: ["China colocation", "data center China", "rack hosting China", "Shanghai data center", "Beijing colocation"],
  },
  {
    id: "smart-hands",
    name: "Smart Hands",
    module: "DATA CENTER",
    tagline: "Remote operations — your eyes and hands on the ground, 24/7, bilingual",
    description:
      "On-demand remote hands services across all our data center locations. From server racking and cabling to hardware diagnostics, RMAs, and visual inspections — our local engineers execute precisely and report back in English within your business hours. Standard response within 30 minutes, emergency response within 15 minutes. No minimum commitment: pay per task or subscribe to monthly blocks for predictable budgeting.",
    features: [
      "Server and network equipment racking, stacking, and structured cabling (copper and fiber)",
      "Hardware replacement, RMAs, and spare part management with vendor coordination",
      "Visual inspections: LED status, cable integrity, physical damage assessment",
      "Power cycling, console access, and remote KVM session facilitation",
      "Inventory management: asset tagging, auditing, and lifecycle tracking",
      "Bilingual documentation: all reports available in English and Mandarin",
    ],
    benefits: [
      "Eliminate travel costs and delays — no need to fly engineers to China for routine tasks",
      "Standard response in 30 minutes, emergency in 15 minutes — faster than on-call rotations",
      "Detailed task reports with photos and timestamps for audit and compliance records",
      "Monthly task blocks available for predictable budgeting at 15-25% discount vs. ad-hoc",
      "Same engineering team assigned to your account for continuity and familiarity",
    ],
    useCases: [
      "Global enterprises without China-based IT staff needing physical infrastructure management",
      "Hardware refresh cycles: rack new servers, decommission old equipment, manage cabling",
      "Emergency response: failed component replacement, power issues, connectivity troubleshooting",
      "Ongoing maintenance: quarterly visual inspections, firmware updates, cable management",
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