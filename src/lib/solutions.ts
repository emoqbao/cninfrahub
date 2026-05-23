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
      "Enter the Chinese market with production-ready infrastructure — without building a local team or navigating dozens of providers. We design a hybrid architecture that combines colocation, dedicated connectivity, and elastic compute from our partner network, all integrated with your existing AWS, Azure, or GCP estate. We select the providers, negotiate the contracts, handle compliance, and provide ongoing operations — so you get one partner, one SLA, and zero regulatory surprises.",
    benefits: [
      "Single partner replaces coordinating with multiple carriers, data centers, and cloud providers",
      "Full compliance advisory included: data residency, cross-border transfer regulations, and industry-specific requirements",
      "Go live in weeks, not the 6-12 months typical of DIY market entry approaches",
      "Carrier and provider flexibility: we switch underlying resources as pricing and performance evolve",
      "Seamless integration with existing AWS, Azure, or GCP infrastructure via managed connectivity",
    ],
    whoItsFor: "Global enterprises entering the Chinese market who need compliant, production-ready infrastructure without building a local procurement and operations team. SaaS companies, financial services, and e-commerce platforms expanding into China.",
    approach: "We start with a compliance and architecture workshop to map your requirements, then design a provider-agnostic blueprint covering colocation, connectivity, and compute. We source from our partner network, negotiate pricing on your behalf, and manage provisioning end-to-end. Your workloads are live within 30 days, with ongoing compliance monitoring and 24/7 support.",
    products: ["colocation", "cloud-connect", "bare-metal", "elastic-cloud-servers", "smart-hands"],
    seoKeywords: ["hybrid cloud China", "China cloud entry", "multi-cloud China", "enter China infrastructure", "China market entry IT"],
  },
  {
    id: "ai-inference-edge",
    name: "AI Inference at the Edge",
    tags: ["AI/ML", "GPU Compute", "Low Latency"],
    description:
      "Deploy and scale AI inference in China using GPU capacity aggregated from our hardware partners. We source NVIDIA H100, A100, and L40S clusters, connect them via managed private circuits to your global application layer, and configure AI Gateway for unified routing to both China-native and international models. You get the GPU capacity you need at competitive pricing, with a single support team managing the entire stack.",
    benefits: [
      "Aggregated GPU capacity: we find available hardware when individual providers are sold out",
      "Single endpoint for all models — we route to the optimal provider regardless of geography",
      "Competitive GPU pricing through volume relationships across multiple hardware partners",
      "Compliance-ready: all inference data remains within China under full customer control",
      "Provider flexibility: if pricing or availability shifts, we migrate your workloads",
    ],
    whoItsFor: "AI-native companies and enterprise AI teams running production inference workloads serving Chinese end users. LLM-powered applications, real-time computer vision, recommendation engines, and conversational AI platforms.",
    approach: "We assess your model portfolio and latency requirements, then source GPU capacity from the best-available provider in your target region. Private circuits are provisioned to your global API layer, and AI Gateway is configured for unified model routing. Pre-configured inference stacks ship with optimized kernels. We handle provider management, health monitoring, and auto-scaling policies.",
    products: ["gpu-instances", "ai-gateway", "private-connect", "cloud-connect"],
    seoKeywords: ["AI inference China", "GPU inference hosting China", "LLM hosting China", "DeepSeek hosting China", "AI deployment China"],
  },
  {
    id: "cross-border-data-compliance",
    name: "Cross-Border Data Compliance",
    tags: ["Compliance", "Network", "Regulated Industries"],
    description:
      "Navigate China''s data regulations with a practical, architecture-first approach. We design connectivity using dedicated circuits from our carrier partners, provision compliant local storage through our data center network, and provide ongoing regulatory monitoring. We don''t just tell you what the law says — we build the infrastructure that proves compliance. Built for financial services, healthcare, automotive, and enterprise customers operating across borders.",
    benefits: [
      "Architecture designed for compliance from day one with provider-agnostic flexibility",
      "Dedicated private connectivity across multiple carrier options — no public internet exposure",
      "Compliance documentation maintained and updated as regulations (CSL, DSL, PIPL, MLPS 2.0) evolve",
      "Data classification and flow mapping included in initial architecture assessment",
      "Regulatory monitoring service keeps you ahead of changes — quarterly reviews and briefings",
    ],
    whoItsFor: "Organizations in regulated industries — banking, insurance, healthcare, automotive — that must demonstrate compliance with China''s data protection laws. Multinational corporations undergoing compliance audits for their China operations.",
    approach: "We begin with a data flow audit to map all cross-border movements, then design a multi-carrier connectivity architecture that physically segments regulated data. Local storage is provisioned through compliant partner facilities, and we establish a compliance monitoring program with quarterly reviews and regulatory update briefings.",
    products: ["private-connect", "cloud-connect", "colocation", "bare-metal"],
    seoKeywords: ["China data compliance", "cross-border data China", "China data residency", "PIPL compliance China", "China CSL compliance"],
  },
  {
    id: "disaster-recovery-china",
    name: "Disaster Recovery in China",
    tags: ["Resiliency", "Multi-Region", "Business Continuity"],
    description:
      "Multi-site disaster recovery spanning geographically diverse regions across China — Shanghai, Beijing, and Shenzhen. We design active-passive and active-active topologies using infrastructure sourced from multiple provider partners, with cross-region circuits that ensure physical path diversity. Data replication is managed at the infrastructure layer with automated failover tooling. Quarterly DR drills are included to validate your recovery procedures.",
    benefits: [
      "True physical diversity: we source infrastructure from different providers in different regions",
      "Automated failover with documented RPO and RTO targets tested quarterly",
      "Carrier-diverse cross-region backbones eliminate single points of failure",
      "Single partner managing all three sites — consistent infrastructure and support",
      "DR testing included: quarterly failover drills with documented procedures and post-test reports",
    ],
    whoItsFor: "Enterprises running business-critical applications in China requiring formal disaster recovery capabilities. Financial services meeting regulatory DR mandates, e-commerce platforms intolerant of downtime, and SaaS providers with customer-facing SLAs.",
    approach: "We assess your RPO/RTO requirements and application dependencies, then design a multi-site topology using infrastructure from separate provider partners for genuine diversity. Cross-region circuits are provisioned across multiple carriers, and automated failover tooling is configured and tested. Quarterly DR drills validate ongoing readiness.",
    products: ["bare-metal", "elastic-cloud-servers", "private-connect", "colocation"],
    seoKeywords: ["disaster recovery China", "China DR site", "multi-region DR China", "China business continuity", "China failover infrastructure"],
  },
];

export function getSolutionById(id: string): Solution | undefined {
  return solutions.find((s) => s.id === id);
}