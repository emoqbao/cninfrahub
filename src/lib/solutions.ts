export interface Solution {
  id: string;
  name: string;
  tags: string[];
  summary: string;
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
    id: "hybrid-multi-cloud-connectivity",
    name: "Hybrid & Multi-Cloud Connectivity",
    tags: ["Multi-Cloud", "AWS", "Azure", "GCP"],
    summary: "Connect China-based cloud and private infrastructure to domestic and overseas cloud regions using managed virtual links or dedicated connections, selected for your route and capacity needs.",
    description:
      "A hybrid cloud design may need domestic cloud-to-cloud links, private connectivity from your sites, and access to overseas cloud regions. We compare managed virtual connections and dedicated physical links against the endpoints, bandwidth, resilience, and operational requirements of each route. Cross-border connectivity and data transfer requirements are assessed for the proposed service and jurisdictions before deployment.",
    benefits: [
      "Right-size your connectivity: managed 50 Mbps-1 Gbps (Megaport/Equinix) or dedicated 1-100 Gbps — you decide",
      "Compare available China-to-cloud routes across partner networks",
      "Identify the documentation and review needed for the proposed cross-border design",
      "One provider for both domestic cloud-to-cloud links and China-to-overseas links — consistent pricing, consistent SLA, consistent support",
      "Choose capacity and redundancy to suit the workload rather than a fixed package",
    ],
    whoItsFor: "Enterprises connecting China-based infrastructure with domestic clouds or overseas cloud regions. The design is suited to teams that need to compare route, capacity, redundancy, and operational requirements across multiple providers.",
    approach: "We map cloud endpoints and bandwidth requirements, compare managed and dedicated links, and document the routing, resilience, and handoff design. Provisioning dates and any regulatory review are confirmed for the chosen route and service.",
    products: ["cloud-connect", "private-connect"],
    seoKeywords: ["cross-border cloud connectivity", "China cloud interconnect", "domestic cloud interconnect China", "hybrid cloud architecture China", "multi-cloud strategy China", "China to AWS connectivity", "China to Azure connectivity", "China to GCP connectivity"],
  },
  {
    id: "site-to-site-connectivity",
    name: "Private Site-to-Site Connectivity",
    tags: ["DPLC", "IEPL", "MPLS", "Layer 2"],
    summary: "Link offices, data centers, and cloud locations with private circuits. Domestic and international segments are designed together around the required route, bandwidth, and handoff points.",
    description:
      "Private site-to-site connectivity can combine domestic point-to-point circuits with an international segment, or connect two locations within the same market. We map the endpoints and traffic requirements, compare carrier options, and design the handoffs between segments. The available transport, bandwidth, service levels, and routing options depend on the selected route and provider. Our role is to coordinate the design, provisioning, and support path across the participating providers.",
    benefits: [
      "Domestic DPLC and cross-border IEPL/MPLS from one provider — an end-to-end circuit rather than two contracts stitched together",
      "Private capacity and documented service levels for the selected route",
      "Agree the transport layer and routing handoff for each segment before provisioning",
      "Multi-carrier sourcing across China Telecom, China Unicom, China Mobile, and alternative operators — we compare the routes, you get the price",
      "Compare alternative operator paths between Chinese cities when available",
      "Overseas point-to-point as well as China routes — the same Layer 2 circuit between two sites that never touch the mainland",
      "10 Mbps to 100 Gbps with committed, burst, and usage-based rate options",
      "Compare a dark fiber option with a managed circuit for sustained high-capacity domestic routes",
    ],
    whoItsFor: "Enterprises linking China offices, factories, or data centres to a regional headquarters, a cloud region, or to each other — and overseas site pairs that never touch the mainland. Typically any team that has outgrown VPN or SD-WAN over the public internet but does not want to negotiate with three carriers across two countries.",
    approach: "We map your sites and traffic profile, then compare domestic and international transport options. The chosen handoffs and routing design determine what can be retained from your existing addressing plan. We coordinate provisioning and document the escalation path across the participating providers.",
    products: ["private-connect", "dia", "colocation", "dark-fiber"],
    seoKeywords: ["China DPLC", "IEPL China", "cross-border MPLS", "China private line", "China to Hong Kong private line", "Layer 2 connectivity China"],
  },
  {
    id: "hardware-free-managed-network",
    name: "Hardware-Free Managed Network",
    tags: ["RouterOS", "VyOS", "FortiGate", "Virtual Edge"],
    summary: "Run routing and security functions on virtual appliances, with deployment and ongoing management coordinated across the locations and connectivity services you use.",
    description:
      "Virtual routers and firewalls can provide routing and security functions without a dedicated appliance at every location. We assess placement, platform compatibility, licensing, and the connectivity underlay before proposing a design. Deployment and management can cover initial configuration, policy changes, updates, and monitoring according to the agreed service scope, while your team retains the access needed for oversight.",
    benefits: [
      "Zero hardware: we deploy virtual appliances only — no shipping, customs, or physical installation",
      "Define configuration, policy, update, and monitoring responsibilities in the service scope",
      "Your choice of platform: FortiGate, VyOS, RouterOS, Zscaler VSE, or bring your own image",
      "Multi-carrier underlay options: DIA for internet and private circuits for backhaul",
      "Complete visibility retained — administrative access, monitoring dashboards, and regular reporting",
      "One routed topology across every site, cloud region, and office — not a set of unrelated point links",
    ],
    whoItsFor: "Enterprises that need a fully operational China network but don't want to build or manage it themselves. Companies extending global SD-WAN into China, deploying Zero Trust access, or replacing legacy MPLS with managed virtual infrastructure.",
    approach: "We design the topology around traffic and security requirements, choose suitable virtual appliances and connectivity, and document the policy handoffs. The ongoing plan defines monitoring, updates, change management, and incident response for each location.",
    products: ["virtual-edge", "dia", "private-connect"],
    seoKeywords: ["virtual router China", "RouterOS China", "VyOS China", "FortiGate China", "managed firewall China", "virtual network appliances China", "China virtual network"],
  },
  {
    id: "china-access-for-overseas-sites",
    name: "China Access for Overseas Sites",
    tags: ["Overseas Origin", "Edge", "WAF", "China Access"],
    summary: "Improve delivery to users in mainland China while keeping the application origin overseas, using a near-shore edge for caching, TLS, security controls, and origin routing.",
    description:
      "For an application hosted overseas, a near-shore edge can serve cacheable content closer to users in mainland China and manage the path back to the origin for dynamic requests. We review the traffic profile, cache rules, security controls, and DNS cutover before deployment. Hosting and filing requirements depend on where the service is delivered and on the application itself, so they should be checked for the proposed design.",
    benefits: [
      "Keep the origin overseas while assessing filing and service requirements for the chosen delivery design",
      "Plan the DNS cutover and rollback around the application's existing hostname and certificate setup",
      "Delivered as a combination of Edge Acceleration and Cloud Connect, with one provider owning the edge, the certificates, and the cross-border path",
      "Chinese-user traffic is reported against the metrics that matter there — load time, cache hit ratio, and origin fetch latency — rather than a global average",
      "Apply available WAF, bot, and rate-limit controls at the edge before requests reach the origin",
    ],
    whoItsFor: "Global SaaS platforms, e-commerce sites, and application teams with a material mainland Chinese user base whose origin is hosted overseas. Companies that are not ready to build mainland infrastructure but need China traffic to perform properly.",
    approach: "We map your application's traffic profile, separate cacheable from dynamic paths, and design the edge configuration around it. An alias domain is provisioned for your service so end users stay on your brand. Cutover happens by DNS, which means rollback is a single record change. We tune caching, WAF, and routing against live traffic and report on load time, cache hit ratio, and origin fetch latency throughout.",
    products: ["edge-acceleration", "cloud-connect"],
    seoKeywords: ["overseas origin China performance", "China access optimization", "accelerate site for China users", "China edge acceleration", "China application delivery"],
  },
];

export function getSolutionById(id: string): Solution | undefined {
  return solutions.find((s) => s.id === id);
}
