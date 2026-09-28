export interface Product {
  id: string;
  name: string;
  seoTitle: string;
  module: ProductModule;
  tagline: string;
  heroImage?: string;
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
    seoTitle: "AI Gateway for China and Global Models",
    module: "AI",
    heroImage: "/images/products/ai-gateway-hero-v3.svg",
    tagline: "Managed API access to Chinese and global AI models, with routing and usage controls",
    description:
      "AI Gateway brings access to supported Chinese and global models through a managed API layer. The service can centralize routing, usage controls, billing, and provider support. Available models, commercial terms, and data-handling requirements are confirmed for the proposed deployment.",
    features: [
      "China-native: ByteDance (Doubao, Seedance), Alibaba (Tongyi), Tencent (Hunyuan), Moonshot (Kimi), DeepSeek, Zhipu (GLM), and more",
      "Global: OpenAI (GPT), Anthropic (Claude), Google (Gemini) — text and image generation",
      "Model-specific discount structures through aggregated procurement across our partner network",
      "Centralized billing, rate limiting, token-level usage analytics, and cost allocation",
      "Automatic model failover across provider networks — if one degrades, traffic reroutes",
      "Encryption and provider security controls reviewed for the selected deployment",
      "Single support team for all models — no juggling multiple vendor relationships",
    ],
    benefits: [
      "One management layer for the supported models and usage controls",
      "Model-specific pricing advantages — different discount structures for different providers",
      "Lower latency than public API endpoints by routing through carrier-optimized paths",
      "Review data location and handling requirements for each model route",
      "Pay-as-you-go with volume discounts from aggregated purchasing power",
      "Deployment plan and supported model routes confirmed before cutover",
    ],
    useCases: [
      "Global SaaS companies serving Chinese users with localized AI features",
      "AI startups needing reliable access to China's model ecosystem for R&D",
      "Enterprise teams building multi-model pipelines across Chinese and global LLMs for text and image generation",
      "Gaming companies integrating real-time AI translation and moderation for China markets",
    ],
    seoKeywords: ["DeepSeek API access China", "Claude API relay China", "AI gateway China", "Qwen API proxy", "Doubao API China", "Kimi API access", "Zhipu GLM API"],
  },
  {
    id: "edge-acceleration",
    name: "Edge Acceleration",
    seoTitle: "Edge Delivery for Users in China",
    module: "EDGE",
    heroImage: "/images/products/edge-acceleration-hero-v6.webp",
    tagline: "Near-shore edge delivery for users in China while keeping your application origin overseas",
    description:
      "Edge Acceleration places a managed delivery layer near mainland China users while the application origin remains overseas. Cacheable responses can be served at the edge; dynamic requests continue to the origin over the configured path. We assess traffic, certificates, DNS, security controls, and any applicable hosting or filing requirements before a cutover. The expected performance gain depends on the application's cacheability and the user's network path.",
    features: [
      "Assess hosting and ICP filing requirements for the exact delivery setup before launch",
      "DNS-based onboarding plan that preserves the existing origin where the application supports it",
      "Mainland China network optimization — overseas sites are served to users in mainland China over an optimized cross-border path, not the default public-internet route",
      "Low-latency, stable access from the mainland — path and protocol optimization into near-shore nodes in Hong Kong that removes the latency, jitter, and packet loss of a direct connection to an overseas origin",
      "Reverse proxy delivery layer — your origin server, IP addresses, and hosting provider stay exactly as they are",
      "TLS terminated at the edge on your own hostname — bring your own certificate, or use a free certificate issued and auto-renewed on a 90-day cycle, plus HTTP/2 and HTTP/3",
      "WAF, DDoS mitigation, bot control, and rate limiting enforced before traffic reaches origin, with response headers normalized to strip proxy fingerprints",
      "Your own gateway domain, routing policy, cache rules, and firewall settings — configured for your service alone",
    ],
    benefits: [
      "Keep the origin overseas while evaluating the filing requirements of the proposed service",
      "Document DNS, certificate, cache, and rollback steps before cutover",
      "Cut cross-border latency and packet loss for Chinese users without building anything inside the mainland",
      "We manage the certificates, routing rules, cache policy, and WAF configuration — you keep one origin and one deployment pipeline",
      "Configure origin access controls and edge filtering to reduce direct exposure",
      "Purpose-built for mainland China users reaching an overseas-hosted site — the cross-border case this product exists to make fast and stable",
    ],
    useCases: [
      "Overseas SaaS platforms whose customers bind custom domains and then find them slow or unreachable from the mainland",
      "Marketing, e-commerce, and corporate sites serving users in China from an overseas origin",
      "APIs and applications whose origin must stay overseas for compliance or operational reasons, with a Chinese user base that feels every slow response",
      "Teams that need WAF, DDoS, and bot protection in front of a China-facing service without deploying into the mainland",
    ],
    seoKeywords: ["China acceleration without ICP filing", "mainland China network optimization", "no ICP filing CDN", "one CNAME China acceleration", "custom domain China acceleration", "accelerate website in China", "China edge delivery", "China reverse proxy", "Cloudflare slow in China", "overseas origin China acceleration"],
  },
  {
    id: "elastic-cloud-servers",
    name: "Elastic Cloud Servers",
    seoTitle: "Cloud Servers in China",
    module: "COMPUTE",
    tagline: "Virtual machines in China matched to your region, compute, storage, and network needs",
    heroImage: "/images/products/elastic-cloud-servers-hero-v8.webp",
    description:
      "We source virtual machine capacity from partner providers in China. Share your region, vCPU, memory, storage, network, and support requirements, and we compare available configurations and commercial terms. Provider availability and the division of operating responsibilities are confirmed in the proposal.",
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
      "Choose data location and access controls for the selected region",
      "Support coverage and OS responsibility defined in the service agreement",
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
    seoTitle: "Bare Metal Servers in China",
    module: "COMPUTE",
    tagline: "Single-tenant physical servers selected for your hardware, location, and network needs",
    heroImage: "/images/products/bare-metal-hero-v5.webp",
    description:
      "Bare Metal provides a dedicated physical server without a shared virtualization layer. We compare partner options for processor, memory, storage, network, facility location, and support. Hardware choices and on-site services depend on the selected provider and agreed service scope.",
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
    seoTitle: "GPU Instances in China",
    module: "COMPUTE",
    tagline: "GPU compute in China for model training and inference, sourced from partner capacity",
    heroImage: "/images/products/gpu-instances-hero-v6.webp",
    description:
      "We source GPU capacity for training, fine-tuning, and inference from partner facilities in China. Options may include single nodes or multi-node clusters, depending on current hardware availability and interconnect needs. The proposal specifies the GPU model, software environment, data location, and operating responsibilities for your workload.",
    features: [
      "NVIDIA H100, H200, A100, and L40S GPUs sourced across multiple provider partners",
      "Multi-node configurations with high-speed interconnects for distributed training",
      "Pre-configured ML stacks: CUDA, PyTorch, TensorFlow, vLLM, DeepSpeed",
      "Choice of 1-GPU, 4-GPU, and 8-GPU node configurations from our partner pool",
      "High-bandwidth networking with RDMA support for gradient synchronization",
      "China-based deployment options for workloads with location requirements",
    ],
    benefits: [
      "Aggregated capacity: we find available GPUs when individual providers are sold out",
      "Better pricing through volume relationships across multiple hardware partners",
      "Dedicated allocation — no shared GPU virtualization overhead",
      "Provider switching: if one partner's pricing or availability changes, we migrate you",
      "Sourcing timeline confirmed against current GPU availability",
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
    seoTitle: "Dedicated Internet Access in China",
    module: "NETWORK",
    heroImage: "/images/products/dia-hero-v5-labeled.webp",
    tagline: "Dedicated internet access in China and selected overseas markets, sourced across carriers",
    description:
      "Dedicated Internet Access gives a site a contracted internet circuit with defined capacity and service terms. We compare carrier options for the building, route, bandwidth, IP addressing, and support needs. Availability, performance commitments, and price are specific to the selected location and carrier.",
    features: [
      "Multi-carrier DIA sourcing: China Telecom, China Unicom, China Mobile, and regional ISPs",
      "Same aggressive pricing model available overseas through international carrier partnerships",
      "Circuit capacity and contention terms specified in the carrier proposal",
      "Included DDoS mitigation through our carrier partnerships",
      "Static IP allocation with reverse DNS and RDAP/WHOIS management",
      "Uptime and performance commitments documented for the selected circuit",
    ],
    benefits: [
      "Defined circuit capacity with measurable service commitments",
      "Compare commercial terms from available carriers for the location",
      "Compare carrier coverage and route options for your location",
      "Simple, no-BGP dedicated internet — no routing complexity, just a premium pipe",
      "One support team for all carrier relationships — no calling different providers for outages",
    ],
    useCases: [
      "Enterprise office internet access with documented service targets",
      "SaaS and gaming platforms hosting servers that need consistent, low-jitter connectivity",
      "Global enterprise offices requiring consistent, premium internet across China and overseas locations",
      "SD-WAN hub sites requiring premium underlay circuits for branch office aggregation",
    ],
    seoKeywords: ["China DIA", "dedicated internet access China", "China enterprise internet", "China dedicated bandwidth", "China BGP internet"],
  },
  {
    id: "ip-transit",
    name: "IP Transit",
    seoTitle: "Multi-Homed BGP IP Transit",
    module: "NETWORK",
    heroImage: "/images/products/ip-transit-hero-v3.webp",
    tagline: "Multi-homed BGP transit with upstream diversity and traffic-engineering controls",
    description:
      "IP Transit gives networks a BGP-connected path to the wider internet. We compare upstream carriers and exchange connectivity for the required locations, capacity, routing controls, and resilience. Features such as full-route delivery, traffic engineering, and DDoS mitigation depend on the selected service design and provider.",
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
    seoTitle: "Private Lines for China Sites",
    module: "NETWORK",
    heroImage: "/images/products/private-connect-hero-v5.webp",
    tagline: "Private point-to-point circuits linking offices, data centers, and cloud locations",
    description:
      "Private Connect is for traffic between known endpoints that needs a private transport service rather than the public internet. We compare Ethernet private line, IEPL, and other suitable carrier options for the route, bandwidth, handoff, and support needs. The transport layer and service commitments are documented for each proposed circuit.",
    features: [
      "MPLS, IEPL, and Ethernet private line — the full range of Layer 2 connectivity options",
      "Multi-carrier sourcing: China Telecom, China Unicom, China Mobile, and regional alternative providers",
      "Cross-city routes via non-carrier alternatives — better pricing than traditional operator circuits",
      "10 Mbps to 100 Gbps bandwidth with flexible burst, committed, and usage-based rate options",
      "Layer 2 transparency — run BGP, OSPF, or any routing protocol of your choice",
      "Available between all major China business hubs, APAC, and global interconnection points",
      "Self-service portal for monitoring, modifying, and managing your circuits",
    ],
    benefits: [
      "Compare carrier pricing and terms before selecting a route",
      "Alternative routing for cross-city: cheaper non-carrier paths where traditional operators are overpriced",
      "One partner across China and overseas — same pricing model, same SLA, same support",
      "Flexible bandwidth — adjust commitments as needs change, across carrier boundaries",
      "Provisioning schedule confirmed with each carrier and route",
    ],
    useCases: [
      "Cross-border database replication where the route and data-transfer requirements are suitable",
      "Hybrid cloud backhaul connecting China infrastructure to AWS, Azure, or GCP",
      "Real-time financial data feeds requiring deterministic, low-jitter connectivity",
      "Global CDN origin shielding with private links between China and APAC edge nodes",
    ],
    seoKeywords: ["China private line", "P2P circuit China", "Layer 2 connectivity China", "cross-border private network"],
  },
  {
    id: "cloud-connect",
    name: "Cloud Connect",
    seoTitle: "Cloud Connectivity from China",
    module: "NETWORK",
    heroImage: "/images/products/cloud-connect-hero-v14.webp",
    tagline: "Managed and dedicated connections between China infrastructure and cloud regions",
    description:
      "Cloud Connect links China-based infrastructure with supported cloud regions through managed virtual connections or dedicated physical connectivity. We compare available platforms and carrier routes against the cloud endpoints, required capacity, redundancy, and operating model. Cross-border design and data-transfer obligations are reviewed for the specific deployment.",
    features: [
      "Managed virtual connections (50 Mbps - 1 Gbps) via Megaport and Equinix Fabric — cost-effective, fast to provision",
      "Dedicated physical cross-connects (1-100 Gbps) to AWS Direct Connect, Azure ExpressRoute, GCP Interconnect",
      "China-to-cloud route options reviewed against the cloud endpoint and applicable requirements",
      "Multi-carrier routing from major China hubs to APAC, US, and European cloud regions with full BGP support",
      "Document the cross-border design and identify required data-transfer reviews",
      "Carrier-diverse backup paths with automatic failover for production reliability",
    ],
    benefits: [
      "Right-sized connectivity: 50 Mbps-1 Gbps managed through Megaport/Equinix, or 1 Gbps+ dedicated — you choose",
      "Compare multiple provider paths for China-to-cloud connectivity",
      "Managed option eliminates hardware cross-connect complexity — simpler, faster to provision",
      "Include applicable documentation needs in the project scope",
      "Design capacity and resilience around the production workload",
    ],
    useCases: [
      "Hybrid cloud architectures with China-based compute and global cloud services (APAC, US, Europe)",
      "Moderate-bandwidth managed virtual links for development, staging, and cost-sensitive production",
      "High-bandwidth dedicated links for data-heavy production workloads and cross-continent DR replication",
      "SaaS platforms needing dedicated, low-latency connectivity to China customer environments worldwide",
    ],
    seoKeywords: ["AWS Direct Connect China", "Azure ExpressRoute China", "GCP Interconnect China", "China cloud connectivity", "Megaport China", "Equinix Fabric China", "China to US cloud", "China to Europe cloud", "dedicated cloud interconnect China", "cloud cross-connect China"],
  },
  {
    id: "dark-fiber",
    name: "Dark Fiber",
    seoTitle: "Dark Fiber Between China Sites",
    module: "NETWORK",
    heroImage: "/images/products/dark-fiber-hero-v4.webp",
    tagline: "Leased fiber pairs for high-capacity connections between sites you control",
    description:
      "Dark fiber gives you control of the optical equipment and protocols on a leased fiber pair between two sites. We check route availability with specialist operators, then compare the lease, optics, maintenance, and fault response against a managed circuit. The economics depend on distance, required capacity, route diversity, and how long you expect to use the path.",
    features: [
      "Dark fiber pairs sourced from operators with capacity on the required route",
      "Priced by distance rather than by bandwidth: capacity upgrades are optics, not contracts",
      "Connects two of your own sites — data centre to data centre, data centre to office, or office to office",
      "Metro routes as standard, with inter-city long-haul available through our operator network",
      "Complete optical-layer control: your transceivers, your DWDM, your choice of protocol",
      "Physically diverse paths sourced from multiple independent fiber operators",
      "Full lifecycle management: operator sourcing, contract negotiation, IRU or monthly terms, SLA enforcement, fault resolution",
    ],
    benefits: [
      "Compare specialist fiber operators for the route and handoff points",
      "Separate fiber lease costs from optics, equipment, and maintenance costs",
      "Compare total cost against a managed circuit at the planned capacity and term",
      "Complete protocol freedom — nothing is imposed on what runs over the fiber",
      "Control the optical equipment and access policy at both endpoints",
      "One provider across both legs — domestic fiber plus the DPLC/IEPL segment that carries traffic out of the country",
    ],
    useCases: [
      "Data centre interconnects at 100 Gbps+ where leased line costs become prohibitive",
      "Two offices or campus buildings with sustained high-capacity demand",
      "High-frequency trading platforms requiring deterministic latency at the physical layer",
      "Research and education networks needing dedicated, high-bandwidth optical infrastructure",
      "Content delivery and media production moving large datasets between facilities",
    ],
    seoKeywords: ["dark fiber China", "bare fiber China", "dark fiber pricing China", "dark fiber per km", "China fiber lease", "private fiber China"],
  },
  {
    id: "virtual-edge",
    name: "Virtual Edge",
    seoTitle: "Managed Virtual Network Edge in China",
    module: "NETWORK",
    heroImage: "/images/products/virtual-edge-hero-v4.webp",
    tagline: "Managed virtual routers and firewalls placed where your network needs them",
    description:
      "Virtual Edge places routing or security software on suitable partner infrastructure. We assess platform compatibility, licensing, placement, and the underlying connectivity, then define which configuration, update, monitoring, and support tasks we will manage. Your administrative access and operational handoffs are agreed before deployment.",
    features: [
      "Managed deployment and configuration for FortiGate VM, VyOS, MikroTik RouterOS, Zscaler VSE",
      "Custom image support: bring any compatible virtual appliance image, we'll deploy it",
      "Ongoing management: policy updates, OS patching, performance tuning — handled by our team",
      "Full visibility retained — you get administrative access and monitoring dashboards",
      "Underlying connectivity sourced across our multi-carrier partner network",
      "Bring your own license (BYOL) or lease monthly with full support included",
    ],
    benefits: [
      "Beyond hosting: we actively manage and configure — not just rack-and-forget",
      "Select a supported appliance image after compatibility and licensing review",
      "Reduce operational burden: our team handles the day-to-day network device management",
      "Compare underlying circuit options for the proposed topology",
      "Virtual deployment avoids appliance shipping when suitable hosting is available",
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
    seoTitle: "Data Center Colocation in China",
    module: "DATA CENTER",
    heroImage: "/images/products/colocation-hero-v4.webp",
    tagline: "Rack and cage options in China matched to power, connectivity, and location needs",
    description:
      "Colocation places your equipment in a partner data center. We compare facilities in the target city against rack space, power density, network access, physical security, and support requirements. Certifications, capacity, and commercial terms are verified for the specific facility proposed.",
    features: [
      "Multiple facility options across Shanghai, Beijing, Shenzhen, and Guangzhou",
      "1/4, 1/2, full rack, and private cage configurations — we find the right facility",
      "Power density from 3 kW to 50 kW per rack across our partner facilities",
      "Carrier-neutral facilities with cross-connects to all major Chinese and global carriers",
      "Review each facility's access controls, monitoring, and on-site coverage",
      "APAC and global locations also available through our extended partner network",
    ],
    benefits: [
      "Compare facilities against your power, location, and connectivity requirements",
      "Better pricing through aggregated rack purchasing across our partner network",
      "Carrier-neutral — choose your network providers freely, no facility lock-in",
      "Request current certification documents for the specific facility under review",
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
    seoTitle: "Smart Hands at China Data Centers",
    module: "DATA CENTER",
    heroImage: "/images/products/smart-hands-hero-v3.webp",
    tagline: "On-site tasks at partner facilities, coordinated remotely with documented handoffs",
    description:
      "Smart Hands covers physical tasks such as racking, cabling, inspections, and hardware replacement at supported facilities. We scope the work, coordinate the local technician, and document the result for your team. Coverage hours, response targets, and pricing depend on the site and agreed service terms.",
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
      "Agree response targets for the facility and task priority",
      "Task reports with available photos and timestamps for operational records",
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

export const productModules = ["AI", "EDGE", "COMPUTE", "NETWORK", "DATA CENTER"] as const;

export type ProductModule = (typeof productModules)[number];

/** Anchor ids used by the /products sections, and by every link that points at them. */
export const moduleAnchors: Record<ProductModule, string> = {
  AI: "ai",
  EDGE: "edge",
  COMPUTE: "compute",
  NETWORK: "network",
  "DATA CENTER": "data-center",
};
