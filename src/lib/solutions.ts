export interface Solution {
  id: string;
  name: string;
  tags: string[];
  description: string;
  products: string[];
  seoKeywords: string[];
}

export const solutions: Solution[] = [
  {
    id: "hybrid-cloud-china-entry",
    name: "Hybrid Cloud China Entry",
    tags: ["Multi-Cloud", "Compliance"],
    description:
      "A turnkey architecture for launching workloads in China. Physical colocation for regulated data, Cloud Connect for seamless integration with your existing AWS/Azure/GCP estate, and full compliance advisory — delivered as one managed package.",
    products: ["colocation", "cloud-connect", "bare-metal", "private-connect"],
    seoKeywords: ["hybrid cloud China", "China cloud entry", "multi-cloud China"],
  },
  {
    id: "ai-inference-edge",
    name: "AI Inference at the Edge",
    tags: ["AI/ML", "GPU Compute"],
    description:
      "Deploy inference workloads on GPU Instances in China, connected via Private Connect to your global application layer. Full AI Gateway integration for routing requests to China-native and international models through a single endpoint.",
    products: ["gpu-instances", "ai-gateway", "private-connect", "cloud-connect"],
    seoKeywords: ["AI inference China", "GPU inference hosting China", "LLM hosting China"],
  },
  {
    id: "cross-border-data-compliance",
    name: "Cross-Border Data Compliance",
    tags: ["Compliance", "Network"],
    description:
      "China''s data regulations made practical. Dedicated connectivity for compliant data transfer, local storage architecture advisory, and ongoing regulatory monitoring — built for financial services, healthcare, and enterprise customers operating across borders.",
    products: ["private-connect", "cloud-connect", "colocation", "bare-metal"],
    seoKeywords: ["China data compliance", "cross-border data China", "China data residency"],
  },
  {
    id: "disaster-recovery-china",
    name: "Disaster Recovery in China",
    tags: ["Resiliency", "Multi-Region"],
    description:
      "Multi-site DR architecture spanning Shanghai, Beijing, and Shenzhen. Active-passive and active-active topologies with cross-region Private Connect backbones, sub-20ms inter-site latency, and automated failover tooling.",
    products: ["bare-metal", "elastic-cloud-servers", "private-connect", "colocation"],
    seoKeywords: ["disaster recovery China", "China DR site", "multi-region DR China"],
  },
];

export function getSolutionById(id: string): Solution | undefined {
  return solutions.find((s) => s.id === id);
}
