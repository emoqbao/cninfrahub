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
    "Why direct connections to a China audience degrade, the four deployment patterns that fix it, and the trade-offs between them.",
  updated: "2026-09-17",
  readingTime: "12 min read",
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
    "Most China-facing performance problems are not capacity problems. They are path problems: requests travel further than they need to, across a link that is congested for part of every day, and every extra round trip multiplies the cost. This guide covers the patterns that fix it and what each one asks of you.",
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
          text: "A user in Shanghai opening a page hosted in Virginia is not waiting on your application. They are waiting on a path. Every request crosses the international gateway, and that hop is shared by all traffic entering and leaving the mainland. It behaves well for most of the day and degrades predictably in the evening peak, when latency climbs and packet loss appears.",
        },
        {
          kind: "ul",
          items: [
            "Round trips cost 150-300 ms, so a page that needs eight of them pays over a second before your application does any work.",
            "Packet loss is more damaging than latency. One lost packet stalls the whole TCP stream until it is retransmitted, which is why these sites feel unpredictable rather than merely slow.",
            "TLS handshakes are the first thing to fail. When a connection is reset mid-handshake the user gets an error page, not a slow page.",
            "DNS adds round trips of its own, and answers pointing at distant addresses make everything downstream worse.",
          ],
        },
        {
          kind: "p",
          text: "The result is a pattern most teams recognise: fine in the morning, unusable at 21:00, with error rates that never show up in your own monitoring, because your monitoring sits next to the origin.",
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
  title: "ICP Filing, Explained: What Needs It and What Does Not",
  excerpt:
    "The single rule that decides whether a China-facing site needs an ICP filing, who is allowed to file, and the legitimate alternative when you cannot.",
  updated: "2026-09-17",
  readingTime: "8 min read",
  seoKeywords: [
    "ICP filing",
    "ICP 备案",
    "China hosting filing",
    "no ICP filing",
    "China website compliance",
    "mainland hosting requirements",
  ],
  relatedProducts: ["edge-acceleration", "colocation", "cloud-connect"],
  intro:
    "The ICP filing is the biggest gating decision on a China-facing project. It decides where your servers can live, how long the launch takes, and whether the whole thing needs a mainland entity. This guide covers what actually triggers the requirement, and what does not.",
  takeaways: [
    "What an ICP filing is, and how it differs from an ICP licence",
    "The one rule that decides whether you need one",
    "Who is allowed to file, and why many foreign companies cannot",
    "What the process costs in time",
    "The legitimate alternative when you cannot or will not file",
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
      heading: "The rule that decides it",
      blocks: [
        {
          kind: "p",
          text: "The requirement follows the server, not the user.",
        },
        {
          kind: "ul",
          items: [
            "Servers inside the mainland serving the public: filing required.",
            "Servers outside the mainland, including Hong Kong, serving mainland users: no filing required.",
            "Servers inside the mainland on a private network for internal use: different rules apply, so confirm with your provider.",
          ],
        },
        {
          kind: "p",
          text: "This is why so many China-facing sites run from Hong Kong. It is the nearest place to serve mainland users without triggering the requirement.",
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
              "You need one to host inside the mainland. Serving mainland users from outside it does not require one.",
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
          text: "If you have no mainland entity, or no appetite for the process, the workable pattern is to serve mainland users from near-shore edge nodes outside the mainland and leave your origin where it is.",
        },
        {
          kind: "ul",
          items: [
            "No filing, because no mainland hosting is involved.",
            "One DNS record to change, and the same record to roll back.",
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
            "Does the data legally have to stay inside the mainland? If yes, a filing is on the critical path, so start it now.",
            "Do you have a mainland entity, or a partner who does? Without one, filing is usually not available to you.",
            "Is the domain eligible? Check before you plan anything else.",
            "Is the timeline acceptable? If you need to be live next month, plan around not having one.",
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
    "Three ways to put a China-facing site in front of users, compared on filing, latency, failure behaviour, and how hard each one is to leave.",
  updated: "2026-09-17",
  readingTime: "8 min read",
  seoKeywords: [
    "near-shore edge vs mainland hosting",
    "China hosting comparison",
    "Hong Kong edge nodes",
    "China hosting options",
    "China latency comparison",
  ],
  relatedProducts: ["edge-acceleration", "colocation", "elastic-cloud-servers"],
  intro:
    "There are three practical ways to put a site in front of mainland users. They differ in filing, latency, failure behaviour, and how hard they are to leave. Here is what each one is actually good at.",
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
            ["Filing required", "No", "No", "Yes"],
            ["Time to launch", "None", "Hours", "Weeks"],
            [
              "Typical round trip from major mainland cities",
              "150-300 ms",
              "20-60 ms to the edge",
              "10-40 ms",
            ],
            [
              "Evening peak behaviour",
              "Degrades, with loss and handshake failures",
              "Mostly unaffected, because cache hits never cross the border",
              "Unaffected",
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
          text: "Near-shore edge. The best ratio of improvement to effort. Most requests never leave the edge, so the cross-border path stops being on the critical path for the common case, and it works with the origin you already run.",
        },
        {
          kind: "p",
          text: "Mainland hosting. The best latency available, and the only option when data has to stay in the country. It also carries the most work that is not technical: the filing, ongoing compliance, and a provider relationship you cannot avoid.",
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
            "Your regulatory posture. If your sector carries data residency obligations, the decision is already made and only one column is available.",
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
          text: "If the hostname stays the same and the DNS record is one CNAME, changing your mind is a DNS change. If moving means a new domain, new certificates, and a redirect from the old one, then the first choice you make becomes permanent, which is a good argument for keeping the hostname independent of the infrastructure underneath it.",
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
            "China users are a real segment and you have no mainland entity: near-shore edge.",
            "China users are the primary segment, or data must stay in-country: mainland hosting with a filing.",
            "You are not sure yet: near-shore edge now, with the migration path kept open.",
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
    "Enterprise circuits and public web traffic need different answers. What each cross-border option is good at, and where the cost actually scales.",
  updated: "2026-09-17",
  readingTime: "9 min read",
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
    "Two different problems both get called connecting to China. One is getting your network into a mainland one, or your staff onto an overseas network. The other is getting a public website in front of mainland users. The right answer is different for each, and mixing them up is expensive.",
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
            "Public traffic: unpredictable volume, unknown users, largely cacheable, and delivered over the open internet. It benefits from being terminated close to the user.",
          ],
        },
        {
          kind: "p",
          text: "Buying a dedicated circuit to speed up a public website is expensive and mostly wasted, because it cannot help users you have never met. Conversely, an edge network cannot give your engineers a private tunnel into a mainland data centre, since that is a different product entirely.",
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
              "Predictable latency and loss, unaffected by internet congestion",
              "Priced by bandwidth and distance; weeks to provision; fixed endpoints",
            ],
            [
              "MPLS VPN",
              "Carrier-managed private network with quality of service",
              "Multi-site with contractual SLAs; predictable across many destinations",
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
          text: "The pattern is that everything except a dedicated circuit inherits the behaviour of the public path underneath it. SD-WAN makes better use of bad paths; it does not create a good one.",
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
              "Public sites and APIs with a mainland audience and no filing",
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
            "Provisioning time is a cost too. A circuit that takes six weeks to install is six weeks of lost business.",
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
            "Public website or API for mainland users: near-shore edge.",
            "Private access into a mainland network: dedicated line or MPLS, with SD-WAN as a cheaper approximation.",
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
    "A practical order of operations for finding which part of the path is slow, when your own monitoring sits next to the origin and cannot see the problem.",
  updated: "2026-09-17",
  readingTime: "9 min read",
  seoKeywords: [
    "cross-border latency troubleshooting",
    "packet loss China",
    "jitter China network",
    "TLS handshake failures",
    "network triage playbook",
  ],
  relatedProducts: ["edge-acceleration", "private-connect", "dia"],
  intro:
    "When users in China report that the site is slow, the useful question is which part of the path is slow, and the monitoring you already have probably cannot tell you. This is an order of operations for finding out.",
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
          text: "If the first three dominate while your application time looks fine, the problem is the network, and no amount of application tuning will fix it.",
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
            "Origin-side monitoring sits at the origin and cannot see the cross-border hop, which is exactly where the problem is.",
            "Regional probes from several mainland cities give you a baseline, and separate a path-wide problem from a city-specific one.",
            "Real user monitoring captures what real sessions experienced, including failures that never reached your origin.",
            "Sample during the evening peak. A test at 10:00 can look perfect on a path that collapses at 21:00.",
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
  title: "China Dark Fiber: When Leasing Glass Beats Leasing Bandwidth",
  excerpt:
    "Dark fiber is the one way to buy bandwidth that does not get more expensive as you use more of it. Where it applies in China, how it is priced, and where it stops making sense.",
  updated: "2026-09-18",
  readingTime: "10 min read",
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
    "Past a certain bandwidth the interesting question stops being which circuit to buy and becomes whether to buy a circuit at all. Dark fiber is the second option: you lease the glass between two of your own sites, light it yourself, and stop paying per megabit. Here is where that applies in China, how it is priced, and where it stops making sense.",
  takeaways: [
    "Why China's three carriers do not sell dark fiber, and why it is not a technical limit",
    "How per-kilometre pricing changes the economics of high bandwidth",
    "The route types where it works, and the ones where it does not",
    "Why the cross-border leg is always a circuit, never bare fiber",
    "What you need in-house before dark fiber is the cheaper option",
  ],
  sections: [
    {
      id: "why-carriers-dont-sell-it",
      heading: "Why the big three do not sell it",
      blocks: [
        {
          kind: "p",
          text: "China Telecom, China Unicom, and China Mobile will sell you almost any circuit you can describe, but not bare glass. The reason is commercial rather than technical. A carrier's product is a circuit: priced by bandwidth, billed every month, and resellable at every step up the range. Leasing dark fiber hands over the physical layer itself, and with it capacity the carrier could otherwise sell many times over. There is no incentive to do that, so the product does not appear on their price lists.",
        },
        {
          kind: "p",
          text: "The supply comes from specialist fiber operators instead: regional resource holders, data centre operators, and organisations that own their own ducts and wayleave. What they sell is a fiber pair on a specific route, between two named addresses. They are not built around selling bandwidth as a service — they rent infrastructure.",
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
          text: "Circuits are priced by bandwidth. Dark fiber is priced by distance. A route is quoted either as a recurring cost per kilometre per month, or as a one-off IRU payment for a long term — commonly ten to twenty years — plus an annual maintenance fee. Both forms are normal; the choice usually comes down to how long you expect to be there.",
        },
        {
          kind: "ul",
          items: [
            "Distance sets the cost, bandwidth does not. Going from 10G to 100G to 400G is a transceiver change at each end, not a new contract.",
            "Metro routes are the easiest to justify, because the distance is short and the wayleave is usually already in place.",
            "Inter-city long-haul works on the same principle: the distance goes up, so the price goes up, but it stays independent of how much you push through the fiber.",
            "The quote is not the whole cost. Add transceivers, DWDM if you need more than one wavelength, ODF and patching at both ends, and the engineering time to run it.",
            "Maintenance and fault response are separate line items. Fiber gets cut by construction work, and somebody has to find out where.",
          ],
        },
        {
          kind: "p",
          text: "Put those numbers together and the economics are easy to read: a leased circuit has one price at 10G and a different price at 100G, while a fiber pair has a single price that does not care.",
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
              "Dark fiber. This is the case it was built for.",
            ],
            [
              "Two offices, or two buildings on one campus, needing guaranteed bandwidth",
              "Dark fiber on a metro route, provided both ends can host your equipment.",
            ],
            [
              "Inter-city between Chinese hubs at very high bandwidth",
              "Dark fiber, after comparing it against the circuit price for the same distance.",
            ],
            [
              "Under 10 Gbps, or bandwidth that swings a lot",
              "A circuit. Paying for capacity you are not using is worse than paying per megabit.",
            ],
            [
              "It has to be live in two weeks",
              "A circuit. Fiber has to be surveyed, built, and spliced, which takes far longer.",
            ],
          ],
        },
        {
          kind: "p",
          text: "The practical test is not bandwidth alone. Dark fiber needs both ends to be places you control, a route you expect to keep, and somebody able to work at the optical layer. Miss any one of those and a circuit is the better answer, even at 100 Gbps.",
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
      heading: "Why the cross-border leg is never bare fiber",
      blocks: [
        {
          kind: "p",
          text: "Dark fiber in China is a domestic resource. It connects two of your own sites inside the country: two data centres, two offices, or a data centre and an office. It does not reach an overseas node.",
        },
        {
          kind: "p",
          text: "Cross-border capacity sits with a small number of operators who hold the international transmission licences and the cable capacity, and it is not retailed as fiber by the kilometre. In practice the cross-border leg is DPLC for the domestic run to the border or to Hong Kong, joined to IEPL for the international segment, and the combination is normally referred to simply as an IEPL line.",
        },
        {
          kind: "p",
          text: "So a complete path from China to an overseas node is two technologies end to end: whatever you run inside the country — dark fiber, DPLC, or a standard circuit — handed to an IEPL segment that carries it out. We source both halves, which is why the contract stays single and the escalation path stays single, including for faults that land exactly on the seam between the two.",
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
