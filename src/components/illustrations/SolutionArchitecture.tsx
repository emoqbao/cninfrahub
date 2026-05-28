export default function SolutionArchitecture({ solutionId }: { solutionId: string }) {
  return (
    <div className="w-full aspect-[4/3] rounded-2xl border border-[#e8eaed] bg-[#f8f9fb] flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
        {getDiagram(solutionId)}
      </svg>
    </div>
  );
}

const A = "#a48e7a";
const D = "#0d0d0d";
const L = "#d4d4d4";
const BG = "#f8f9fb";

function getDiagram(id: string) {
  switch (id) {
    case "cross-border-cloud-connectivity": return <CrossBorderCloud />;
    case "high-bandwidth-interconnect": return <HighBandwidthDCI />;
    case "regulated-industry-infrastructure": return <RegulatedIndustry />;
    case "china-network-as-a-service": return <ChinaNaaS />;
    default: return null;
  }
}

function CrossBorderCloud() {
  return (
    <>
      {/* China DC */}
      <rect x="15" y="100" width="80" height="100" rx="6" stroke={D} strokeWidth="1.5" fill="white" />
      <text x="55" y="130" textAnchor="middle" fontSize="9" fontWeight="600" fill={D}>China</text>
      <text x="55" y="145" textAnchor="middle" fontSize="8" fill="#737373">Data Center</text>
      <rect x="30" y="155" width="50" height="8" rx="2" fill={A} opacity="0.2" />
      <rect x="30" y="167" width="35" height="6" rx="1" fill={L} />
      <rect x="30" y="177" width="40" height="6" rx="1" fill={L} />

      {/* Private/Cloud Connect lines */}
      <line x1="95" y1="130" x2="155" y2="80" stroke={A} strokeWidth="2" />
      <line x1="95" y1="150" x2="155" y2="150" stroke={A} strokeWidth="2" />
      <line x1="95" y1="170" x2="155" y2="220" stroke={A} strokeWidth="2" />
      <text x="125" y="75" textAnchor="middle" fontSize="7" fill={A} fontWeight="600">Private Connect</text>
      <text x="125" y="143" textAnchor="middle" fontSize="7" fill={A} fontWeight="600">Cloud Connect</text>

      {/* AWS */}
      <rect x="160" y="50" width="80" height="60" rx="6" stroke="#FF9900" strokeWidth="1" fill="white" opacity="0.9" />
      <text x="200" y="78" textAnchor="middle" fontSize="10" fontWeight="700" fill="#232F3E">AWS</text>
      <text x="200" y="94" textAnchor="middle" fontSize="7" fill="#737373">Asia Pacific</text>

      {/* Azure */}
      <rect x="160" y="120" width="80" height="60" rx="6" stroke="#0078D4" strokeWidth="1" fill="white" opacity="0.9" />
      <text x="200" y="148" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0078D4">Azure</text>
      <text x="200" y="164" textAnchor="middle" fontSize="7" fill="#737373">US East</text>

      {/* GCP */}
      <rect x="160" y="190" width="80" height="60" rx="6" stroke="#4285F4" strokeWidth="1" fill="white" opacity="0.9" />
      <text x="200" y="218" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4285F4">GCP</text>
      <text x="200" y="234" textAnchor="middle" fontSize="7" fill="#737373">Europe West</text>

      {/* Right side: Enterprise */}
      <rect x="280" y="100" width="105" height="100" rx="6" stroke={D} strokeWidth="1.5" fill="white" />
      <text x="332" y="128" textAnchor="middle" fontSize="9" fontWeight="600" fill={D}>Enterprise</text>
      <text x="332" y="143" textAnchor="middle" fontSize="7" fill="#737373">Hybrid Cloud</text>
      <line x1="240" y1="130" x2="280" y2="130" stroke={L} strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="240" y1="150" x2="280" y2="150" stroke={L} strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="240" y1="220" x2="280" y2="170" stroke={L} strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Labels */}
      <text x="200" y="275" textAnchor="middle" fontSize="8" fill="#8c8c8c">50 Mbps 芒鈧?100 Gbps | Managed or Dedicated</text>
    </>
  );
}

function HighBandwidthDCI() {
  return (
    <>
      {/* DC 1 */}
      <rect x="15" y="80" width="90" height="140" rx="6" stroke={D} strokeWidth="1.5" fill="white" />
      <text x="60" y="110" textAnchor="middle" fontSize="9" fontWeight="600" fill={D}>Data Center A</text>
      <text x="60" y="125" textAnchor="middle" fontSize="7" fill="#737373">Shanghai</text>
      <rect x="30" y="140" width="60" height="8" rx="2" fill={A} opacity="0.2" />
      <rect x="30" y="153" width="50" height="6" rx="1" fill={L} />
      <rect x="30" y="163" width="45" height="6" rx="1" fill={L} />
      <rect x="30" y="173" width="55" height="6" rx="1" fill={L} />

      {/* Dark Fiber primary */}
      <path d="M105 120 Q200 80 295 120" stroke={A} strokeWidth="2.5" fill="none" />
      <text x="200" y="72" textAnchor="middle" fontSize="8" fontWeight="600" fill={A}>Dark Fiber 100 Gbps+ (Primary)</text>

      {/* Private Connect backup */}
      <path d="M105 170 Q200 220 295 170" stroke={L} strokeWidth="1.5" strokeDasharray="6 4" fill="none" />
      <text x="200" y="238" textAnchor="middle" fontSize="8" fill="#737373">Private Connect (Diverse Backup)</text>

      {/* DC 2 */}
      <rect x="295" y="80" width="90" height="140" rx="6" stroke={D} strokeWidth="1.5" fill="white" />
      <text x="340" y="110" textAnchor="middle" fontSize="9" fontWeight="600" fill={D}>Data Center B</text>
      <text x="340" y="125" textAnchor="middle" fontSize="7" fill="#737373">Beijing</text>
      <rect x="310" y="140" width="60" height="8" rx="2" fill={A} opacity="0.2" />
      <rect x="310" y="153" width="50" height="6" rx="1" fill={L} />
      <rect x="310" y="163" width="45" height="6" rx="1" fill={L} />
      <rect x="310" y="173" width="55" height="6" rx="1" fill={L} />

      {/* DWDM label */}
      <circle cx="200" cy="120" r="8" fill="white" stroke={A} strokeWidth="1.5" />
      <text x="200" y="123" textAnchor="middle" fontSize="6" fontWeight="700" fill={A}>DWDM</text>

      <text x="200" y="275" textAnchor="middle" fontSize="8" fill="#8c8c8c">Physically diverse paths | Full optical-layer control</text>
    </>
  );
}

function RegulatedIndustry() {
  return (
    <>
      {/* Regulated zone */}
      <rect x="15" y="20" width="175" height="130" rx="8" stroke={A} strokeWidth="1.5" strokeDasharray="8 4" fill="#fff" />
      <text x="102" y="42" textAnchor="middle" fontSize="8" fontWeight="700" fill={A}>REGULATED ZONE</text>

      {/* Colocation */}
      <rect x="30" y="55" width="70" height="40" rx="4" stroke={D} strokeWidth="1" fill="white" />
      <text x="65" y="72" textAnchor="middle" fontSize="7" fontWeight="600" fill={D}>Colocation</text>
      <text x="65" y="84" textAnchor="middle" fontSize="6" fill="#737373">Isolated Racks</text>

      {/* Bare Metal */}
      <rect x="110" y="55" width="65" height="40" rx="4" stroke={D} strokeWidth="1" fill="white" />
      <text x="142" y="72" textAnchor="middle" fontSize="7" fontWeight="600" fill={D}>Bare Metal</text>
      <text x="142" y="84" textAnchor="middle" fontSize="6" fill="#737373">Dedicated</text>

      {/* Shield icon */}
      <circle cx="102" cy="120" r="10" fill={A} opacity="0.1" stroke={A} strokeWidth="1" />
      <text x="102" y="123" textAnchor="middle" fontSize="7" fill={A}>MLPS 2.0</text>

      {/* Compliant tunnel */}
      <line x1="190" y1="80" x2="240" y2="80" stroke={A} strokeWidth="2" />
      <text x="215" y="72" textAnchor="middle" fontSize="6" fill={A} fontWeight="600">Private</text>
      <text x="215" y="95" textAnchor="middle" fontSize="6" fill={A} fontWeight="600">Connect</text>

      {/* Non-regulated zone */}
      <rect x="245" y="20" width="140" height="130" rx="8" stroke={L} strokeWidth="1.5" fill="white" />
      <text x="315" y="42" textAnchor="middle" fontSize="8" fontWeight="600" fill={D}>NON-REGULATED</text>

      <rect x="260" y="55" width="55" height="40" rx="4" stroke={D} strokeWidth="1" fill="white" />
      <text x="287" y="72" textAnchor="middle" fontSize="7" fontWeight="600" fill={D}>Compute</text>
      <text x="287" y="84" textAnchor="middle" fontSize="6" fill="#737373">Elastic</text>

      <rect x="320" y="55" width="50" height="40" rx="4" stroke={D} strokeWidth="1" fill="white" />
      <text x="345" y="72" textAnchor="middle" fontSize="7" fontWeight="600" fill={D}>Storage</text>
      <text x="345" y="84" textAnchor="middle" fontSize="6" fill="#737373">Object</text>

      <line x1="240" y1="120" x2="280" y2="120" stroke={L} strokeWidth="1" strokeDasharray="3 3" />
      <text x="260" y="135" textAnchor="middle" fontSize="6" fill="#8c8c8c">Cloud Connect</text>

      {/* Bottom: Compliance docs */}
      <rect x="100" y="175" width="200" height="50" rx="6" stroke={L} strokeWidth="1" fill="white" />
      <text x="200" y="195" textAnchor="middle" fontSize="8" fontWeight="600" fill={D}>Compliance Documentation</text>
      <text x="200" y="210" textAnchor="middle" fontSize="7" fill="#737373">CSL 路 DSL 路 PIPL 路 Quarterly Audits</text>

      <line x1="102" y1="150" x2="150" y2="175" stroke={L} strokeWidth="1" />
      <line x1="315" y1="150" x2="250" y2="175" stroke={L} strokeWidth="1" />

      <text x="200" y="275" textAnchor="middle" fontSize="8" fill="#8c8c8c">Segmented architecture | Full regulatory compliance</text>
    </>
  );
}

function ChinaNaaS() {
  return (
    <>
      {/* Enterprise */}
      <rect x="15" y="50" width="80" height="50" rx="6" stroke={D} strokeWidth="1.5" fill="white" />
      <text x="55" y="72" textAnchor="middle" fontSize="8" fontWeight="600" fill={D}>Enterprise</text>
      <text x="55" y="86" textAnchor="middle" fontSize="6" fill="#737373">Global HQ</text>

      {/* SD-WAN cloud */}
      <circle cx="150" cy="75" r="30" stroke={A} strokeWidth="1" fill="none" strokeDasharray="4 3" />
      <text x="150" y="70" textAnchor="middle" fontSize="7" fontWeight="600" fill={A}>SD-WAN</text>
      <text x="150" y="83" textAnchor="middle" fontSize="6" fill={A}>Fabric</text>

      <line x1="95" y1="75" x2="120" y2="75" stroke={L} strokeWidth="1.5" />

      {/* Virtual Edge appliances */}
      <rect x="195" y="20" width="85" height="55" rx="6" stroke={D} strokeWidth="1.5" fill="white" />
      <text x="237" y="36" textAnchor="middle" fontSize="6" fontWeight="600" fill={A}>VIRTUAL EDGE</text>
      <text x="237" y="50" textAnchor="middle" fontSize="7" fill={D}>FortiGate / VyOS</text>
      <text x="237" y="64" textAnchor="middle" fontSize="6" fill="#737373">RouterOS / Zscaler</text>

      <rect x="195" y="85" width="85" height="55" rx="6" stroke={D} strokeWidth="1.5" fill="white" />
      <text x="237" y="101" textAnchor="middle" fontSize="6" fontWeight="600" fill={A}>VIRTUAL EDGE</text>
      <text x="237" y="115" textAnchor="middle" fontSize="7" fill={D}>FortiGate / VyOS</text>
      <text x="237" y="129" textAnchor="middle" fontSize="6" fill="#737373">RouterOS / Zscaler</text>

      {/* DIA circuit */}
      <line x1="150" y1="105" x2="195" y2="47" stroke={A} strokeWidth="1.5" />
      <text x="168" y="70" textAnchor="middle" fontSize="5" fill={A}>DIA</text>

      {/* Private Connect */}
      <line x1="150" y1="105" x2="195" y2="112" stroke={A} strokeWidth="1.5" />
      <text x="168" y="118" textAnchor="middle" fontSize="5" fill={A}>Private</text>

      {/* China endpoints */}
      <rect x="300" y="20" width="85" height="55" rx="6" stroke={D} strokeWidth="1.5" fill="white" />
      <text x="342" y="42" textAnchor="middle" fontSize="8" fontWeight="600" fill={D}>China</text>
      <text x="342" y="56" textAnchor="middle" fontSize="7" fill="#737373">Internet</text>
      <text x="342" y="68" textAnchor="middle" fontSize="6" fill={A}>via DIA</text>

      <rect x="300" y="85" width="85" height="55" rx="6" stroke={D} strokeWidth="1.5" fill="white" />
      <text x="342" y="107" textAnchor="middle" fontSize="8" fontWeight="600" fill={D}>China</text>
      <text x="342" y="121" textAnchor="middle" fontSize="7" fill="#737373">Private Net</text>
      <text x="342" y="133" textAnchor="middle" fontSize="6" fill={A}>via Connect</text>

      <line x1="280" y1="47" x2="300" y2="47" stroke={L} strokeWidth="1" />
      <line x1="280" y1="112" x2="300" y2="112" stroke={L} strokeWidth="1" />

      {/* Managed label */}
      <rect x="140" y="175" width="120" height="45" rx="6" stroke={A} strokeWidth="1" fill={A} opacity="0.08" />
      <text x="200" y="195" textAnchor="middle" fontSize="8" fontWeight="600" fill={D}>Fully Managed</text>
      <text x="200" y="210" textAnchor="middle" fontSize="7" fill="#737373">24/7 Monitoring 路 SLA</text>

      <line x1="200" y1="150" x2="200" y2="175" stroke={L} strokeWidth="1" />

      <text x="200" y="275" textAnchor="middle" fontSize="8" fill="#8c8c8c">Zero hardware | Your choice of platform | One partner</text>
    </>
  );
}