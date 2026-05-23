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
    id: "hybrid-cloud-china-entry",
    name: "Hybrid Cloud China Entry",
    tags: ["Multi-Cloud", "Compliance", "Enterprise"],
    description:
      "Launch and scale workloads in China without building infrastructure from scratch. Our turnkey hybrid cloud architecture combines physical colocation for regulated data, dedicated Cloud Connect links to your existing AWS/Azure/GCP estate, and elastic compute for dynamic workloads — all delivered as one managed package with full compliance advisory. Go from zero to operational in under 30 days with a single partner, one SLA, and no regulatory surprises.",
    benefits: [
      "Single partner, single SLA — eliminate multi-vendor coordination and finger-pointing",
      "Full compliance advisory included: data residency, cross-border transfer, and industry-specific regulations",
      "Go live in under 30 days vs. 6-12 months with DIY approaches",
      "Seamless integration with existing AWS, Azure, or GCP infrastructure via dedicated Cloud Connect",
      "Flexible scaling: start small with colocation, expand to bare metal and elastic compute as you grow",
    ],
    whoItsFor: "Global enterprises entering the Chinese market who need compliant, production-ready infrastructure without building a local team from scratch. Ideal for SaaS companies, financial services, and e-commerce platforms expanding into China.",
    approach: "We start with a compliance and architecture workshop to map your data flows, then design a colocation + connectivity + compute blueprint. Physical infrastructure is provisioned within 2-3 weeks, Cloud Connect links are established in parallel, and your workloads are live within 30 days — with ongoing compliance monitoring and 24/7 support.",
    products: ["colocation", "cloud-connect", "bare-metal", "elastic-cloud-servers", "smart-hands"],
    seoKeywords: ["hybrid cloud China", "China cloud entry", "multi-cloud China", "enter China infrastructure", "China market entry IT"],
  },
  {
    id: "ai-inference-edge",
    name: "AI Inference at the Edge",
    tags: ["AI/ML", "GPU Compute", "Low Latency"],
    description:
      "Deploy and scale AI inference workloads on dedicated GPU infrastructure in China, connected via Private Connect to your global application layer. Run models on NVIDIA H100, A100, and L40S clusters with full AI Gateway integration for unified routing to both China-native models (DeepSeek, Qwen) and international models (Claude, GPT-4o) through a single API endpoint. Achieve sub-20ms inference latency for end users in China while maintaining global architectural consistency.",
    benefits: [
      "Sub-20ms inference latency to end users across China — 3-5x faster than cloud GPU regions outside China",
      "Unified API surface: one endpoint routes to the optimal model regardless of geography",
      "Zero data egress costs between GPU nodes and inference endpoints — all within China",
      "Dedicated GPU allocation eliminates cold starts and capacity uncertainty of shared cloud GPU services",
      "Compliance-ready: all inference data remains within China under full customer control",
    ],
    whoItsFor: "AI-native companies and enterprise AI teams running production inference workloads that serve Chinese end users. Perfect for LLM-powered applications, real-time computer vision, recommendation engines, and conversational AI platforms.",
    approach: "We deploy GPU clusters in your chosen China region, configure Private Connect backhaul to your global API layer, and set up AI Gateway for unified model routing. Pre-configured inference stacks (vLLM, TGI, Triton) ship with optimized kernels for NVIDIA hardware. We handle GPU node health monitoring, model deployment orchestration, and auto-scaling policies.",
    products: ["gpu-instances", "ai-gateway", "private-connect", "cloud-connect"],
    seoKeywords: ["AI inference China", "GPU inference hosting China", "LLM hosting China", "DeepSeek hosting China", "AI deployment China"],
  },
  {
    id: "cross-border-data-compliance",
    name: "Cross-Border Data Compliance",
    tags: ["Compliance", "Network", "Regulated Industries"],
    description:
      "Navigate China''s evolving data regulations with a practical, architecture-first approach. We design and operate dedicated connectivity for compliant cross-border data transfer, implement local storage architectures that satisfy data residency requirements, and provide ongoing regulatory monitoring and advisory. Built for financial services, healthcare, automotive, and enterprise customers who cannot afford compliance gaps in their China operations.",
    benefits: [
      "Architecture designed for compliance from day one — not retrofitted after deployment",
      "Dedicated private connectivity eliminates public-internet data exposure risks",
      "Compliance documentation package maintained and updated as regulations evolve",
      "Data classification and flow mapping included in initial architecture assessment",
      "Regulatory monitoring service keeps you ahead of changes to CSL, DSL, PIPL, and MLPS 2.0",
    ],
    whoItsFor: "Organizations in regulated industries — banking, insurance, healthcare, automotive, and critical infrastructure — that must demonstrate compliance with China''s data protection laws. Also ideal for multinational corporations undergoing compliance audits for their China operations.",
    approach: "We begin with a data flow audit to map all cross-border data movements, then design a connectivity architecture using Private Connect and Cloud Connect that physically segments regulated data. Local storage is provisioned in compliant colocation facilities, and we establish a compliance monitoring program with quarterly reviews and regulatory update briefings.",
    products: ["private-connect", "cloud-connect", "colocation", "bare-metal"],
    seoKeywords: ["China data compliance", "cross-border data China", "China data residency", "PIPL compliance China", "China CSL compliance"],
  },
  {
    id: "disaster-recovery-china",
    name: "Disaster Recovery in China",
    tags: ["Resiliency", "Multi-Region", "Business Continuity"],
    description:
      "Multi-site disaster recovery architecture spanning Shanghai, Beijing, and Shenzhen with cross-region Private Connect backbones, sub-20ms inter-site latency, and automated failover tooling. Support for both active-passive (warm standby) and active-active topologies with data replication managed at the infrastructure layer. Achieve RPO under 60 seconds and RTO under 5 minutes for critical workloads — without the complexity of managing DR across multiple Chinese carriers.",
    benefits: [
      "RPO < 60 seconds, RTO < 5 minutes for critical workloads with automated failover",
      "Cross-region Private Connect backbones eliminate reliance on public internet for replication",
      "Three geographically diverse regions (> 800 km separation) for true disaster isolation",
      "Single provider for all three sites — consistent infrastructure, monitoring, and support",
      "DR testing included: quarterly failover drills with documented procedures and post-test reports",
    ],
    whoItsFor: "Enterprises running business-critical applications in China that require formal disaster recovery capabilities. Essential for financial services meeting regulatory DR mandates, e-commerce platforms that cannot tolerate downtime, and SaaS providers with customer-facing SLAs.",
    approach: "We assess your RPO/RTO requirements and application dependencies, then design a multi-site topology. Primary and DR sites are provisioned with matching compute and storage, cross-region Private Connect links are established for sub-20ms replication, and automated failover tooling is configured and tested. Quarterly DR drills are included for ongoing validation.",
    products: ["bare-metal", "elastic-cloud-servers", "private-connect", "colocation"],
    seoKeywords: ["disaster recovery China", "China DR site", "multi-region DR China", "China business continuity", "China failover infrastructure"],
  },
];

export function getSolutionById(id: string): Solution | undefined {
  return solutions.find((s) => s.id === id);
}