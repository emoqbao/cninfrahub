/**
 * Long-form resource content. Guides live here rather than in MDX so the index
 * page, the detail route, the sitemap, and the search index all read from one
 * place — the same pattern products and solutions use.
 */
export type ResourceType = "White Paper" | "Guide" | "Comparison" | "Playbook";

export type ResourceBlock =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] };

export interface ResourceSection {
  id: string;
  heading: string;
  blocks: ResourceBlock[];
}

export interface Resource {
  slug: string;
  type: ResourceType;
  title: string;
  /** One-line summary used on the index card and in page metadata. */
  excerpt: string;
  /** ISO date of the last substantive edit. */
  updated: string;
  readingTime: string;
  featured?: boolean;
  seoKeywords: string[];
  /** Product ids cross-linked at the foot of the page. */
  relatedProducts: string[];
  references?: { label: string; url: string }[];
  intro: string;
  takeaways: string[];
  sections: ResourceSection[];
}

const crossBorderNetworkArchitecture: Resource = {
  slug: "cross-border-network-architecture",
  type: "White Paper",
  featured: true,
  title: "China Cross-Border Network Architecture Guide",
  excerpt:
    "Compare four delivery patterns for China-facing sites, including direct overseas access, near-shore edge delivery, and mainland hosting.",
  updated: "2026-09-28",
  readingTime: "7 min read",
  seoKeywords: [
    "cross-border network architecture",
    "China network optimization",
    "near-shore edge",
    "China latency",
    "packet loss China",
    "ICP filing alternative",
  ],
  relatedProducts: ["edge-acceleration", "private-connect", "cloud-connect"],
  intro:
    "A slow China-facing site can have several causes: network path, packet loss, cache behavior, origin response time, or application design. This guide compares four deployment patterns and the measurements that help you choose between them.",
  takeaways: [
    "Why a direct connection degrades even when nothing is down",
    "Four deployment patterns for a China-facing site, and the trade-offs between them",
    "A reference architecture for serving China from near-shore edge nodes",
    "What the edge has to handle beyond caching",
    "How to move onto mainland infrastructure later without changing your hostname",
  ],
  sections: [
    {
      id: "where-the-time-goes",
      heading: "Where the time actually goes",
      blocks: [
        {
          kind: "p",
          text: "A user in Shanghai opening a page hosted overseas may wait on DNS, connection setup, the network path, and the application itself. Measure each part from the user's location before changing the architecture. Cross-border performance can vary by carrier, time, destination, and protocol.",
        },
        {
          kind: "ul",
          items: [
            "Extra round trips add up when a page makes many sequential requests; record the actual timing for your users and routes.",
            "Packet loss is more damaging than latency. One lost packet stalls the whole TCP stream until it is retransmitted, which is why these sites feel unpredictable rather than merely slow.",
            "TLS handshakes are the first thing to fail. When a connection is reset mid-handshake the user gets an error page, not a slow page.",
            "DNS adds round trips of its own, and answers pointing at distant addresses make everything downstream worse.",
          ],
        },
        {
          kind: "p",
          text: "If failures appear only for users in a particular region or at certain times, origin-side monitoring may miss them. Combine real user measurements with probes from the affected networks.",
        },
      ],
    },
    {
      id: "four-patterns",
      heading: "Four patterns for serving China",
      blocks: [
        {
          kind: "table",
          head: ["Pattern", "What it is", "Filing", "Best for"],
          rows: [
            [
              "Overseas origin, direct",
              "Users connect to your existing origin",
              "None",
              "Low-traffic sites where China is not a real market",
            ],
            [
              "Overseas origin behind a near-shore edge",
              "Requests terminate on edge nodes close to the mainland, which fetch from your origin",
              "None",
              "Marketing sites, APIs, and SaaS with a China audience",
            ],
            [
              "Mainland origin, filed",
              "Servers inside the mainland with an ICP filing on the domain",
              "Required",
              "Mainland customers, or data that must stay in-country",
            ],
            [
              "Near-shore edge now, mainland later",
              "Start on the edge, then move the same hostname onto mainland infrastructure when a filing completes",
              "Later",
              "Teams that expect to need mainland presence eventually",
            ],
          ],
        },
        {
          kind: "p",
          text: "These are not mutually exclusive. The last row is a migration path rather than an architecture, and it is the one most teams end up wanting: serve users today, keep the option open.",
        },
      ],
    },
    {
      id: "reference-architecture",
      heading: "Reference architecture: overseas origin behind a near-shore edge",
      blocks: [
        {
          kind: "ul",
          items: [
            "Users resolve your existing hostname. Nothing in the URL changes.",
            "Requests terminate on edge nodes close to the mainland, so the long-haul hop moves from user-to-origin to edge-to-origin.",
            "Static assets and cacheable responses are served from the edge and never cross the border.",
            "Dynamic requests are forwarded over a warm, established connection instead of a cold one opened by every user.",
            "TLS terminates at the edge against a certificate for your own hostname.",
          ],
        },
        {
          kind: "p",
          text: "The effect is that most requests stop crossing the border at all, and the requests that do cross do so once, on a connection that is already warm.",
        },
      ],
    },
    {
      id: "beyond-caching",
      heading: "What the edge has to do beyond caching",
      blocks: [
        {
          kind: "p",
          text: "Caching is the visible half. The rest is what decides whether the architecture holds up under load:",
        },
        {
          kind: "ul",
          items: [
            "Protocol optimisation. Persistent connections, modern congestion control, and HTTP/2 or HTTP/3 multiplexing cut the number of round trips that cross the border.",
            "TLS handling. Issuance and renewal, modern ciphers, and session resumption. Handshake failure is the dominant error mode on a poor cross-border path.",
            "Origin protection. The edge absorbs retries and spikes, so the origin sees steadier, lower-volume traffic.",
            "Cache-hit ratio. The single biggest lever on perceived speed: a response that never leaves the edge is a response that never experiences cross-border loss.",
            "User-side observability. Origin-side monitoring cannot see the cross-border hop, so you need measurements from the regions your users are actually in.",
          ],
        },
      ],
    },
    {
      id: "choosing",
      heading: "Choosing between them",
      blocks: [
        {
          kind: "table",
          head: ["If this is true", "Start here"],
          rows: [
            [
              "China is a small share of traffic and nobody is complaining",
              "Overseas origin, direct",
            ],
            [
              "Chinese users are a real segment and you cannot or will not file",
              "Overseas origin behind a near-shore edge",
            ],
            [
              "Data must stay inside the mainland, or you serve mainland consumers at scale",
              "Mainland origin with an ICP filing",
            ],
            [
              "You will need mainland infrastructure, but not today",
              "Near-shore edge now, with a migration plan that keeps the hostname",
            ],
          ],
        },
      ],
    },
    {
      id: "migration",
      heading: "Making a later move to the mainland cheap",
      blocks: [
        {
          kind: "p",
          text: "The expensive part of moving into the mainland is not the servers. It is rebuilding everything around a new hostname, reissuing certificates, and asking users to change what they type.",
        },
        {
          kind: "ul",
          items: [
            "Keep one hostname. Point it at the edge first and at mainland infrastructure later; users never see the change.",
            "Keep the DNS record simple. A single CNAME is a five-minute change and an equally fast rollback.",
            "Keep certificates on one track. If your provider issues and renews them, the migration does not turn into a certificate project.",
            "Keep the origin where it is until the last moment. The edge can keep serving everyone outside the mainland while mainland users move first.",
          ],
        },
      ],
    },
    {
      id: "checklist",
      heading: "Checklist before you commit",
      blocks: [
        {
          kind: "ul",
          items: [
            "Measure from mainland cities, not from your office, using regional probes or real user monitoring rather than a single ping from HQ.",
            "Measure during the evening peak as well as the morning.",
            "Track error rates separately from latency. They have different causes.",
            "Know your cache-hit ratio before and after. If it does not move, the edge is not earning its place.",
            "Confirm what your provider serves when the origin is unhealthy. A cached error page is worse than a slow one.",
            "Decide now whether you will ever need a mainland filing, because that decision changes the architecture.",
          ],
        },
      ],
    },
  ],
};

const icpFilingExplained: Resource = {
  slug: "icp-filing-explained",
  type: "Guide",
  title: "ICP Filing for China Websites: Hosting, Eligibility, and Alternatives",
  excerpt:
    "Understand when a mainland internet service may need ICP filing, what to check with a hosting provider, and how overseas delivery differs.",
  updated: "2026-09-28",
  readingTime: "6 min read",
  seoKeywords: [
    "ICP filing",
    "ICP 备案",
    "China hosting filing",
    "no ICP filing",
    "China website compliance",
    "mainland hosting requirements",
  ],
  relatedProducts: ["edge-acceleration", "colocation", "cloud-connect"],
  references: [
    { label: "MIIT: Measures for the Record-Filing of Non-Commercial Internet Information Services", url: "https://ynca.miit.gov.cn/zwgk/zcwj/flfg/art/2024/art_2e96227c42924af9b49b7f13b81fd124.html" },
    { label: "MIIT: Internet Information Services Regulation", url: "https://cqca.miit.gov.cn/zwgk/zcwj/flfg/art/2026/art_3aa3d50dbe1648fda74aeab4f39b2db1.html" },
  ],
  intro:
    "ICP filing is a key planning question for an internet service delivered from mainland China. The answer depends on the operator, service type, hosting arrangement, and applicable rules. This guide gives a starting framework and links to the governing rules; confirm the specific deployment with your access provider and qualified advisers.",
  takeaways: [
    "What an ICP filing is, and how it differs from an ICP licence",
    "Which parts of the service and hosting plan affect filing requirements",
    "What the operator and access provider need to confirm",
    "What the process costs in time",
    "How overseas delivery differs from mainland hosting",
  ],
  sections: [
    {
      id: "what-it-is",
      heading: "What the filing actually is",
      blocks: [
        {
          kind: "p",
          text: "An ICP filing is a registration of a domain name and its operator with the mainland authorities, made through the hosting provider that will serve the site. It is not a trademark, and it is not the same thing as an ICP licence, which is a separate commercial permit that certain categories of paid online services require.",
        },
        {
          kind: "p",
          text: "The practical function is simple: mainland hosting providers are not permitted to serve public traffic on an unfiled domain. That is why the hosting provider, rather than a regulator, is the party asking you for it.",
        },
      ],
    },
    {
      id: "the-rule",
      heading: "What to check before deciding",
      blocks: [
        {
          kind: "p",
          text: "Start with where and by whom the internet information service is provided, then review the access and hosting arrangement. Audience location alone does not settle the filing question.",
        },
        {
          kind: "ul",
          items: [
            "A public internet service delivered from mainland infrastructure: review the applicable filing or licensing path with the access provider.",
            "An overseas-hosted service reaching mainland users: assess the actual service, operator, data flows, and any other applicable obligations.",
            "An internal service on a private network: confirm its status and access model rather than assuming the public-site rules apply.",
          ],
        },
        {
          kind: "p",
          text: "Hong Kong is one possible near-shore location for an overseas-hosted service. Its network performance and legal treatment still need to be assessed for the specific service.",
        },
        {
          kind: "p",
          text: "It is worth being precise about what a filing does not do. It is not a licence to disregard Chinese law: content rules, the personal information obligations under PIPL, and the data residency requirements that apply in some sectors all still apply, wherever your servers sit.",
        },
      ],
    },
    {
      id: "who-can-file",
      heading: "Who is allowed to file",
      blocks: [
        {
          kind: "p",
          text: "In practice a filing is made by a mainland legal entity, or by a foreign company through one, and it is tied to a specific domain and hosting arrangement.",
        },
        {
          kind: "ul",
          items: [
            "A mainland-registered company can usually file directly, with its business licence and identity documents.",
            "A foreign company generally cannot file in its own name. It needs a mainland entity, or an arrangement with a partner that has one.",
            "The domain has to be eligible. Not every top-level domain can be filed, and it must be registered through an accredited registrar.",
            "The hosting provider has to support filing, which constrains where the servers physically sit.",
          ],
        },
      ],
    },
    {
      id: "timeline",
      heading: "What it costs in time",
      blocks: [
        {
          kind: "p",
          text: "Filing is a document process with a review queue, not a technical task. The realistic range is measured in weeks rather than days, and it depends on the province, the completeness of the paperwork, and whether anything is returned for correction.",
        },
        {
          kind: "p",
          text: "It also has to be maintained. A new domain, a change of hosting provider, or a significant change of use can mean a fresh filing or an amendment, so the commitment is recurring rather than one-off.",
        },
      ],
    },
    {
      id: "misconceptions",
      heading: "Common misconceptions",
      blocks: [
        {
          kind: "table",
          head: ["Belief", "Reality"],
          rows: [
            [
              "A filing makes the site faster",
              "A filing has no effect on performance. It is a precondition for hosting inside the mainland, nothing more.",
            ],
            [
              "You need a filing to serve mainland users",
              "The filing rules concern services provided within mainland China; confirm the operator and service scope for the proposed arrangement.",
            ],
            [
              "A filing is a licence to operate",
              "A filing is not a licence. Some commercial services need a separate permit.",
            ],
            [
              "The filing covers the company",
              "It is tied to a domain and a hosting arrangement, not to a company in general.",
            ],
            [
              "Once filed, anything can be hosted",
              "Content rules still apply, and some sectors carry data residency or security assessment obligations as well.",
            ],
          ],
        },
      ],
    },
    {
      id: "alternative",
      heading: "The alternative when you cannot file",
      blocks: [
        {
          kind: "p",
          text: "An overseas origin with a near-shore edge may be an option when mainland hosting is not part of the plan. Review the actual service, traffic path, and data handling before treating it as a substitute for a mainland deployment.",
        },
        {
          kind: "ul",
          items: [
            "Confirm the service's filing and licensing position for the selected delivery arrangement.",
            "Plan the DNS, TLS, cache, and rollback changes for the chosen edge service.",
            "Your hostname and your certificates stay yours.",
            "If a filing becomes worthwhile later, the same hostname can move onto mainland infrastructure.",
          ],
        },
      ],
    },
    {
      id: "decision-checklist",
      heading: "Decision checklist",
      blocks: [
        {
          kind: "ul",
          items: [
            "Must the service or data be located in mainland China? If yes, assess the hosting, filing, and sector requirements at the start of the project.",
            "Do you have a mainland entity, or a partner who does? Without one, filing is usually not available to you.",
            "Is the domain eligible? Check before you plan anything else.",
            "What timeline has the access provider confirmed for the required filing or licence?",
            "Can the hostname stay the same either way? If it can, you can serve users now and file in parallel.",
          ],
        },
      ],
    },
  ],
};

const nearShoreVsMainland: Resource = {
  slug: "near-shore-edge-vs-mainland-hosting",
  type: "Comparison",
  title: "Near-Shore Edge vs Mainland Hosting vs Overseas Origin",
  excerpt:
    "Compare overseas origin, near-shore edge, and mainland hosting by cacheability, network path, operational work, and filing review.",
  updated: "2026-09-28",
  readingTime: "4 min read",
  seoKeywords: [
    "near-shore edge vs mainland hosting",
    "China hosting comparison",
    "Hong Kong edge nodes",
    "China hosting options",
    "China latency comparison",
  ],
  relatedProducts: ["edge-acceleration", "colocation", "elastic-cloud-servers"],
  intro:
    "There are three common delivery patterns for a site with users in mainland China. The right choice depends on where the service is provided, how much traffic can be cached, the measured user experience, and the work required to operate or change the design.",
  takeaways: [
    "How each option behaves under evening-peak congestion",
    "What each one requires before it can go live",
    "Which failures each option hides, and which it exposes",
    "How to weigh the cost of changing your mind later",
  ],
  sections: [
    {
      id: "side-by-side",
      heading: "The three options side by side",
      blocks: [
        {
          kind: "table",
          head: [
            "",
            "Overseas origin, direct",
            "Near-shore edge",
            "Mainland hosting, filed",
          ],
          rows: [
            ["Filing review", "Check the service and operator", "Check edge and origin arrangement", "Plan filing or licensing with the provider"],
            ["Launch work", "Measure and tune the existing site", "Configure DNS, TLS, cache, and security", "Arrange hosting, filing, and migration"],
            [
              "Typical round trip from major mainland cities",
              "Measure from target user networks",
              "Measure edge and origin-fetch paths",
              "Measure from target user networks",
            ],
            [
              "Evening peak behaviour",
              "Depends on the route and origin",
              "Cache hits avoid origin fetch; misses still depend on the route",
              "Depends on the facility and local network",
            ],
            [
              "Where the data sits",
              "Your existing origin region",
              "Your existing origin region",
              "Inside the mainland",
            ],
            [
              "Certificates",
              "Yours to manage",
              "Typically issued and renewed by the edge",
              "Yours, with local constraints",
            ],
            [
              "Main failure mode",
              "The cross-border path",
              "Origin reachability from the edge",
              "Provider and filing maintenance",
            ],
          ],
        },
      ],
    },
    {
      id: "what-each-is-good-at",
      heading: "What each option is good at",
      blocks: [
        {
          kind: "p",
          text: "Overseas origin, direct. Cheapest and simplest, and entirely adequate when China is a rounding error in your traffic. If nobody has complained, this is fine, and it is a reasonable place to start.",
        },
        {
          kind: "p",
          text: "Near-shore edge. A useful option when much of the response can be cached near users while the origin stays overseas. Dynamic requests and cache misses still need a reliable path to the origin.",
        },
        {
          kind: "p",
          text: "Mainland hosting. A possible choice when applications or data need to run locally, subject to the service's filing, licensing, and sector requirements. It adds migration and ongoing provider management to the technical work.",
        },
      ],
    },
    {
      id: "where-it-bites",
      heading: "Where the trade-off actually bites",
      blocks: [
        {
          kind: "ul",
          items: [
            "How much of your site is cacheable. The more static the site, the better the edge performs and the less it matters where the origin is.",
            "How much traffic is genuinely dynamic. An API returning unique data on every call gets far less from an edge than a marketing site does.",
            "Whether you have long-lived connections. Sessions and streams are the most exposed to cross-border instability, and where a near-shore edge earns the most.",
            "Your regulatory posture. Confirm the actual data location and service obligations before selecting a hosting pattern.",
            "Organisational cost. A mainland filing is a recurring administrative commitment, not a one-off project.",
          ],
        },
      ],
    },
    {
      id: "switching-cost",
      heading: "The switching-cost question",
      blocks: [
        {
          kind: "p",
          text: "Ask this before choosing: how much work is it to change our mind in a year?",
        },
        {
          kind: "p",
          text: "Keeping the hostname independent of the hosting platform can make a later move easier. Even with the same hostname, plan for DNS, certificates, application behavior, cache rules, and data migration before switching providers.",
        },
      ],
    },
    {
      id: "how-to-decide",
      heading: "How to decide",
      blocks: [
        {
          kind: "ul",
          items: [
            "China traffic is small and nobody is complaining: change nothing.",
            "China users are a significant segment and the origin remains overseas: assess an edge using real traffic measurements.",
            "The application or data must run in the mainland: evaluate local hosting and the required approvals with the provider.",
            "Requirements are still uncertain: keep the hostname portable while testing the available delivery paths.",
          ],
        },
      ],
    },
  ],
};

const crossBorderLinkOptions: Resource = {
  slug: "cross-border-link-options",
  type: "Comparison",
  title: "Cross-Border Link Options: Dedicated Line, MPLS, SD-WAN, VPN",
  excerpt:
    "Compare private circuits, MPLS, SD-WAN, and VPNs for known endpoints, then separate that decision from public website delivery.",
  updated: "2026-09-28",
  readingTime: "5 min read",
  seoKeywords: [
    "IPLC",
    "IEPL",
    "China dedicated line",
    "SD-WAN China",
    "MPLS China",
    "cross-border connectivity options",
  ],
  relatedProducts: ["private-connect", "dia", "ip-transit", "virtual-edge"],
  intro:
    "Connecting known business endpoints and delivering a public site to users in China are different design problems. This comparison explains what each transport option does, which paths it depends on, and when an edge is relevant.",
  takeaways: [
    "Why enterprise links and public web traffic need different solutions",
    "What dedicated lines, MPLS, SD-WAN, and VPNs are each good at",
    "Where cost scales with bandwidth, and where it does not",
    "When an edge network is the wrong tool entirely",
  ],
  sections: [
    {
      id: "two-problems",
      heading: "Two problems, often confused",
      blocks: [
        {
          kind: "p",
          text: "Company traffic and public traffic look similar on a diagram and behave nothing alike.",
        },
        {
          kind: "ul",
          items: [
            "Company traffic: predictable volume, a known set of users, site-to-site or user-to-site, and often sensitive. It benefits from a dedicated private path.",
            "Public traffic: users and volumes may vary, and requests travel over the open internet. Cacheability depends on the application, so test static and dynamic paths separately.",
          ],
        },
        {
          kind: "p",
          text: "A private circuit connects known endpoints; it does not directly connect every public visitor. An edge can improve delivery to visitors, but it does not replace a private path for business systems.",
        },
      ],
    },
    {
      id: "company-traffic",
      heading: "The options for company traffic",
      blocks: [
        {
          kind: "table",
          head: ["Option", "How it works", "Strengths", "Weaknesses"],
          rows: [
            [
              "Dedicated line",
              "Reserved capacity on a private circuit between two fixed points",
              "Reserved capacity and service targets on the contracted path",
              "Priced by bandwidth and distance; weeks to provision; fixed endpoints",
            ],
            [
              "MPLS VPN",
              "Carrier-managed private network with quality of service",
              "Carrier-managed multi-site connectivity with agreed service targets",
              "Cost scales with sites and bandwidth; slower to change",
            ],
            [
              "SD-WAN",
              "Overlay that steers traffic across multiple internet paths",
              "Fast to deploy, uses cheaper links, policy-driven",
              "Inherits the underlying paths, which are the problem it is meant to solve",
            ],
            [
              "Site-to-site or client VPN",
              "Encrypted tunnel over the public internet",
              "Cheap and quick to stand up",
              "Inherits every weakness of the cross-border path it rides on",
            ],
          ],
        },
        {
          kind: "p",
          text: "VPN and SD-WAN performance depend on the underlay links they use. A carrier-managed MPLS VPN or dedicated line can use private transport with different service commitments. Compare the actual path and SLA rather than the product label alone.",
        },
      ],
    },
    {
      id: "public-traffic",
      heading: "The options for public traffic",
      blocks: [
        {
          kind: "p",
          text: "For a website the useful question is not how to build a private path to every user, but how to avoid making every user take the cross-border trip at all.",
        },
        {
          kind: "table",
          head: ["Option", "What it does", "When it fits"],
          rows: [
            [
              "Move the origin closer",
              "Shortens the distance problem",
              "Regional user base, and the data is allowed to move",
            ],
            [
              "Near-shore edge",
              "Terminates requests close to the mainland and caches aggressively",
              "Public sites with overseas origins; assess API cacheability and filing requirements",
            ],
            [
              "Mainland hosting",
              "Serves users from inside the country",
              "Latency must be minimal and a filing is acceptable",
            ],
            [
              "Private backhaul to origin",
              "Carries edge-to-origin traffic over a private circuit",
              "Large, steady, sensitive flows between two fixed points",
            ],
          ],
        },
      ],
    },
    {
      id: "cost",
      heading: "Where the cost bites",
      blocks: [
        {
          kind: "ul",
          items: [
            "Dedicated capacity is priced for peak and billed around the clock. If your peak lasts four hours a day, most of that circuit is idle.",
            "Edge networks are priced on traffic and requests, so cost tracks usage, which cuts both ways: a cache miss costs more than a hit.",
            "Cache-hit ratio is a cost lever as much as a performance lever. Improving it lowers the bill and the latency at the same time.",
            "Provisioning time is a cost too. Ask each provider for the route-specific survey and delivery schedule.",
          ],
        },
      ],
    },
    {
      id: "choosing",
      heading: "Choosing",
      blocks: [
        {
          kind: "ul",
          items: [
            "Public website or API for mainland users: measure direct delivery, then test whether an edge improves the relevant requests.",
            "Private access into a mainland network: compare dedicated line, MPLS, and suitable overlay designs against the route and security requirements.",
            "Both: use the edge for users and a private path for the systems that need one. They are complementary, not competing.",
          ],
        },
      ],
    },
  ],
};

const crossBorderLatencyTriage: Resource = {
  slug: "cross-border-latency-triage",
  type: "Playbook",
  title: "Playbook: Diagnosing Latency, Jitter, and Packet Loss for China Users",
  excerpt:
    "Measure DNS, connection, TLS, server response, and transfer time from affected user networks before choosing a fix.",
  updated: "2026-09-28",
  readingTime: "4 min read",
  seoKeywords: [
    "cross-border latency troubleshooting",
    "packet loss China",
    "jitter China network",
    "TLS handshake failures",
    "network triage playbook",
  ],
  relatedProducts: ["edge-acceleration", "private-connect", "dia"],
  intro:
    "When users in China report slow or failed requests, start by locating the delay or error. Origin metrics alone may miss the user-side path. This playbook orders the measurements so you can distinguish network, cache, and application causes.",
  takeaways: [
    "Why origin-side monitoring cannot see the problem",
    "How to split a request into DNS, connection, TLS, and server time",
    "What loss and jitter look like in the numbers",
    "The order to check things in, and what each finding implies",
  ],
  sections: [
    {
      id: "split-the-timeline",
      heading: "Start with the timeline, not the symptom",
      blocks: [
        {
          kind: "p",
          text: "Break every request into parts you can measure separately: DNS lookup, TCP connection, TLS handshake, time to first byte, and content transfer. Whichever component is slow tells you which layer owns the problem.",
        },
        {
          kind: "table",
          head: ["Slow component", "Usually means"],
          rows: [
            ["DNS lookup", "Resolver latency, or answers pointing at distant addresses"],
            ["TCP connection", "Round-trip time and path quality"],
            ["TLS handshake", "Extra round trips, or handshakes failing under loss"],
            [
              "Time to first byte",
              "Origin processing, origin-to-edge latency, or a cache miss that should have been a hit",
            ],
            [
              "Content transfer",
              "Bandwidth limits, or a connection stalling on retransmission",
            ],
          ],
        },
        {
          kind: "p",
          text: "If DNS, connection, or TLS time dominates while server processing is stable, investigate the user-side path and connection setup before changing the application.",
        },
      ],
    },
    {
      id: "measure-where-users-are",
      heading: "Measure from where the users are",
      blocks: [
        {
          kind: "ul",
          items: [
            "Origin-side monitoring may miss delays or failures before a request reaches the origin.",
            "Regional probes from several mainland cities give you a baseline, and separate a path-wide problem from a city-specific one.",
            "Real user monitoring captures what real sessions experienced, including failures that never reached your origin.",
            "Sample across the day and during reported incident windows; a single test can miss intermittent path problems.",
          ],
        },
      ],
    },
    {
      id: "read-loss-and-jitter",
      heading: "Read loss and jitter correctly",
      blocks: [
        {
          kind: "ul",
          items: [
            "Latency alone is often acceptable. Loss is what breaks connections, because TCP stalls until the missing packet is retransmitted.",
            "Jitter hurts sessions more than page loads. A call degrades on jitter; a web request degrades on loss and on losing its connection entirely.",
            "Intermittent loss produces the worst experience and the least useful reports: sometimes it just spins.",
            "Handshake failures are a loss symptom. When a reset lands mid-handshake the user gets an error page, not a slow one.",
          ],
        },
      ],
    },
    {
      id: "always-check",
      heading: "Things that are always worth checking",
      blocks: [
        {
          kind: "ul",
          items: [
            "Is the connection being reused? A fresh TLS handshake per request multiplies the cost of every round trip.",
            "What is the cache-hit ratio, and did it move? A drop in hit ratio looks exactly like a network problem.",
            "Is the same request failing repeatedly? Client retries can look like a traffic spike.",
            "Is the origin healthy from the edge's point of view? Origin-to-edge distance now matters more than user-to-origin distance.",
            "Did anything change? A certificate renewal, a DNS edit, or an origin move are all more common causes than gradual network decay.",
          ],
        },
      ],
    },
    {
      id: "what-to-do",
      heading: "What each finding implies",
      blocks: [
        {
          kind: "table",
          head: ["Finding", "Typical fix"],
          rows: [
            [
              "Round trips dominate",
              "Terminate closer to the user, and cut round trips with connection reuse and modern protocols",
            ],
            [
              "Most requests are cache misses",
              "Fix cache keys and TTLs before buying anything",
            ],
            [
              "Loss appears in the evening peak",
              "Serve from closer to the user so most requests stop crossing the border",
            ],
            [
              "Handshakes fail",
              "Enable session resumption, and terminate TLS near the user",
            ],
            [
              "Time to first byte is high on cache misses",
              "Investigate origin-to-edge latency rather than user-to-origin",
            ],
          ],
        },
      ],
    },
    {
      id: "checklist",
      heading: "A short checklist",
      blocks: [
        {
          kind: "ul",
          items: [
            "Split the timeline before theorising.",
            "Measure from mainland cities, in the evening.",
            "Track errors and latency separately.",
            "Check the cache-hit ratio before blaming the network.",
            "Fix the path first, then tune the application.",
          ],
        },
      ],
    },
  ],
};

const chinaDarkFiber: Resource = {
  slug: "china-dark-fiber",
  type: "Guide",
  title: "Dark Fiber vs Managed Circuits in China",
  excerpt:
    "Compare dark fiber with managed circuits using route availability, lease terms, optics, maintenance, and expected capacity.",
  updated: "2026-09-28",
  readingTime: "6 min read",
  seoKeywords: [
    "China dark fiber",
    "dark fiber China pricing",
    "bare fiber China",
    "dark fiber vs leased line",
    "China DCI",
    "dark fiber per kilometre",
  ],
  relatedProducts: ["dark-fiber", "private-connect", "colocation", "smart-hands"],
  intro:
    "At high and sustained capacity, a leased fiber pair may be worth comparing with a managed circuit. Dark fiber gives you control of the optical layer but adds equipment, maintenance, and fault responsibilities. This guide walks through the route and cost questions to check before choosing it.",
  takeaways: [
    "Where to look for fiber availability on a specific route",
    "How per-kilometre pricing changes the economics of high bandwidth",
    "The route types where it works, and the ones where it does not",
    "Why cross-border segments need a separate service review",
    "What you need in-house before dark fiber is the cheaper option",
  ],
  sections: [
    {
      id: "why-carriers-dont-sell-it",
      heading: "Where dark fiber is sourced",
      blocks: [
        {
          kind: "p",
          text: "Dark fiber availability is route-specific. A standard carrier circuit quote does not tell you whether a usable fiber pair is available between your two addresses. Compare carrier and specialist operator offerings, the termination points, and who owns the fault response before assuming a route can be leased as bare fiber.",
        },
        {
          kind: "p",
          text: "Specialist fiber operators, data centers, and other route owners may be able to quote a pair between named endpoints. Their terms can differ from a managed circuit because the customer or a service partner must provide the optical equipment and operational model.",
        },
        {
          kind: "p",
          text: "That is the gap we work in. We identify which operators hold fiber on the route you need, compare them, negotiate the terms, and hold the contract. You get a fiber pair, and one party to call when it breaks.",
        },
      ],
    },
    {
      id: "how-it-is-priced",
      heading: "How dark fiber is priced",
      blocks: [
        {
          kind: "p",
          text: "A managed circuit is commonly quoted by capacity and route; a dark fiber quote also reflects route length, availability, access, term, and maintenance. Ask for both recurring lease and longer-term rights-of-use terms when available, then compare the full life-cycle cost.",
        },
        {
          kind: "ul",
          items: [
            "Fiber lease charges are separate from the optics and equipment needed for each capacity upgrade.",
            "Metro routes are the easiest to justify, because the distance is short and the wayleave is usually already in place.",
            "Inter-city long-haul works on the same principle: the distance goes up, so the price goes up, but it stays independent of how much you push through the fiber.",
            "The quote is not the whole cost. Add transceivers, DWDM if you need more than one wavelength, ODF and patching at both ends, and the engineering time to run it.",
            "Maintenance and fault response are separate line items. Fiber gets cut by construction work, and somebody has to find out where.",
          ],
        },
        {
          kind: "p",
          text: "Compare quotes over the same term and capacity plan. Include optical equipment, power, space, maintenance, and repair responsibilities alongside the fiber lease.",
        },
      ],
    },
    {
      id: "where-it-wins",
      heading: "Where it starts to win",
      blocks: [
        {
          kind: "table",
          head: ["Situation", "What usually makes sense"],
          rows: [
            [
              "Two data centres of your own, 100 Gbps or more, a route that will not change",
              "Request dark fiber and managed circuit quotes for the same route and term.",
            ],
            [
              "Two offices, or two buildings on one campus, needing guaranteed bandwidth",
              "Consider dark fiber if a route is available and both ends can host equipment.",
            ],
            [
              "Inter-city between Chinese hubs at very high bandwidth",
              "Compare route availability and total cost with a managed circuit.",
            ],
            [
              "Under 10 Gbps, or bandwidth that swings a lot",
              "A managed circuit may fit better; compare the actual utilization and terms.",
            ],
            [
              "It has to be live in two weeks",
              "Ask providers for delivery dates; a new fiber build may take longer than an available circuit.",
            ],
          ],
        },
        {
          kind: "p",
          text: "The decision depends on more than bandwidth. Check access at both endpoints, expected route life, optical expertise, and who will maintain the pair before comparing costs.",
        },
      ],
    },
    {
      id: "what-you-need",
      heading: "What you need before it is worth doing",
      blocks: [
        {
          kind: "ul",
          items: [
            "Optical capability. Your own transceivers, DWDM if you want more than one wavelength on the pair, and people who can work with ODF and splicing.",
            "Access at both ends. Fiber terminates in two buildings. If neither is a facility you can enter and place equipment in, the fiber has nowhere to land.",
            "A route with a lifespan. Dark fiber is a long-term asset, and an IRU you walk away from early is money spent for nothing.",
            "Somebody to send when it breaks. Fiber faults need hands on site, which is where remote hands coverage matters.",
          ],
        },
      ],
    },
    {
      id: "cross-border-is-different",
      heading: "Cross-border segments need a separate review",
      blocks: [
        {
          kind: "p",
          text: "A domestic fiber pair between sites in China does not by itself provide a service to an overseas node. Treat the international segment as a separate design and procurement question.",
        },
        {
          kind: "p",
          text: "International capacity, handoffs, and applicable licences differ from a domestic fiber lease. Compare the available carrier services and review the end-to-end route, data flows, and support boundaries for the proposed cross-border path.",
        },
        {
          kind: "p",
          text: "A complete path may combine domestic fiber or a circuit with a separate international service. Document each handoff and escalation owner so a fault can be traced across the full route.",
        },
      ],
    },
    {
      id: "checklist",
      heading: "Checklist",
      blocks: [
        {
          kind: "ul",
          items: [
            "Are both ends facilities you control and can place equipment in?",
            "Is the bandwidth genuinely at the 100 Gbps level, and will it stay there?",
            "Will the route still make sense in three to five years?",
            "Do you have optical capability in house, or does DWDM and operations need to be part of the package?",
            "Is the cross-border leg already scoped as an IEPL line?",
            "Have you priced both options properly — the circuit, and the fiber plus optics, DWDM, and maintenance?",
          ],
        },
      ],
    },
  ],
};

export const resources: Resource[] = [
  crossBorderNetworkArchitecture,
  chinaDarkFiber,
  icpFilingExplained,
  nearShoreVsMainland,
  crossBorderLinkOptions,
  crossBorderLatencyTriage,
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

/** The anchor guide, promoted to the featured slot on the index page. */
export const featuredResource = resources.find((r) => r.featured) ?? resources[0];
