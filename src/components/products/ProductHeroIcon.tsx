export default function ProductHeroIcon({ productId }: { productId: string }) {
  return (
    <div className="relative w-full max-w-sm aspect-square rounded-2xl border border-border bg-surface-alt flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="w-3/4 h-3/4" fill="none">
        {getIcon(productId)}
      </svg>
    </div>
  );
}

function getIcon(id: string) {
  switch (id) {
    case "ai-gateway":
      return <AIGatewayIcon />;
    case "elastic-cloud-servers":
      return <ElasticCloud />;
    case "bare-metal":
      return <BareMetal />;
    case "gpu-instances":
      return <GPUInstances />;
    case "dia":
      return <DIA />;
    case "ip-transit":
      return <IPTransit />;
    case "private-connect":
      return <PrivateConnect />;
    case "cloud-connect":
      return <CloudConnect />;
    case "dark-fiber":
      return <DarkFiber />;
    case "virtual-edge":
      return <VirtualEdge />;
    case "colocation":
      return <Colocation />;
    case "smart-hands":
      return <SmartHands />;
    default:
      return <DefaultIcon />;
  }
}

const accent = "#8a6d5c";
const dark = "#0d0d0d";
const light = "#d4d4d4";

function DefaultIcon() {
  return (
    <>
      <circle cx="100" cy="100" r="40" stroke={dark} strokeWidth="1.5" />
      <circle cx="100" cy="100" r="16" fill={accent} />
    </>
  );
}

function AIGatewayIcon() {
  return (
    <>
      <circle cx="100" cy="100" r="12" fill={accent} />
      <circle cx="50" cy="50" r="6" fill={dark} />
      <circle cx="150" cy="50" r="6" fill={dark} />
      <circle cx="50" cy="150" r="6" fill={dark} />
      <circle cx="150" cy="150" r="6" fill={dark} />
      <circle cx="100" cy="30" r="5" fill={dark} />
      <circle cx="170" cy="100" r="5" fill={dark} />
      <circle cx="30" cy="100" r="5" fill={dark} />
      <line x1="100" y1="88" x2="56" y2="54" stroke={light} strokeWidth="1" />
      <line x1="100" y1="88" x2="144" y2="54" stroke={light} strokeWidth="1" />
      <line x1="100" y1="112" x2="56" y2="146" stroke={light} strokeWidth="1" />
      <line x1="100" y1="112" x2="144" y2="146" stroke={light} strokeWidth="1" />
      <line x1="100" y1="88" x2="100" y2="34" stroke={light} strokeWidth="1" />
      <line x1="112" y1="100" x2="165" y2="100" stroke={light} strokeWidth="1" />
      <line x1="88" y1="100" x2="35" y2="100" stroke={light} strokeWidth="1" />
    </>
  );
}

function ElasticCloud() {
  return (
    <>
      <path d="M70 140 Q100 100 130 140" stroke={light} strokeWidth="1.5" fill="none" />
      <path d="M50 120 Q100 70 150 120" stroke={light} strokeWidth="1.5" fill="none" />
      <rect x="80" y="125" width="40" height="35" rx="4" stroke={dark} strokeWidth="1.5" fill="none" />
      <rect x="88" y="132" width="24" height="8" rx="2" fill={accent} />
      <rect x="88" y="144" width="16" height="4" rx="1" fill={light} />
    </>
  );
}

function BareMetal() {
  return (
    <>
      <rect x="60" y="50" width="80" height="100" rx="4" stroke={dark} strokeWidth="1.5" fill="none" />
      <rect x="68" y="58" width="64" height="8" rx="2" fill={accent} />
      <rect x="68" y="72" width="64" height="6" rx="2" fill={light} />
      <rect x="68" y="84" width="64" height="6" rx="2" fill={light} />
      <rect x="68" y="96" width="64" height="6" rx="2" fill={light} />
      <rect x="68" y="108" width="64" height="6" rx="2" fill={light} />
      <circle cx="100" cy="130" r="4" fill="#0f0" opacity="0.6" />
      <circle cx="115" cy="138" r="3" fill="#0f0" opacity="0.4" />
    </>
  );
}

function GPUInstances() {
  return (
    <>
      <rect x="50" y="60" width="100" height="80" rx="6" stroke={dark} strokeWidth="1.5" fill="none" />
      <rect x="60" y="72" width="80" height="56" rx="4" fill={accent} opacity="0.15" />
      <rect x="70" y="80" width="15" height="15" rx="2" fill={accent} />
      <rect x="90" y="80" width="15" height="15" rx="2" fill={accent} />
      <rect x="110" y="80" width="15" height="15" rx="2" fill={accent} />
      <rect x="70" y="100" width="15" height="15" rx="2" fill={accent} />
      <rect x="90" y="100" width="15" height="15" rx="2" fill={accent} />
      <rect x="110" y="100" width="15" height="15" rx="2" fill={accent} />
    </>
  );
}

function DIA() {
  return (
    <>
      <rect x="40" y="80" width="40" height="40" rx="3" stroke={dark} strokeWidth="1.5" fill="none" />
      <rect x="120" y="80" width="40" height="40" rx="3" stroke={dark} strokeWidth="1.5" fill="none" />
      <line x1="80" y1="100" x2="120" y2="100" stroke={accent} strokeWidth="2" />
      <circle cx="80" cy="100" r="3" fill={dark} />
      <circle cx="120" cy="100" r="3" fill={dark} />
      <circle cx="100" cy="100" r="6" fill={accent} />
    </>
  );
}

function IPTransit() {
  return (
    <>
      <circle cx="100" cy="100" r="50" stroke={light} strokeWidth="1" fill="none" />
      <circle cx="100" cy="100" r="15" fill={accent} />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 100 + 35 * Math.cos(rad);
        const y = 100 + 35 * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r="4" fill={dark} />;
      })}
    </>
  );
}

function PrivateConnect() {
  return (
    <>
      <rect x="30" y="60" width="50" height="80" rx="4" stroke={dark} strokeWidth="1.5" fill="none" />
      <rect x="55" y="75" width="0" height="50" stroke={dark} strokeWidth="1" />
      <rect x="120" y="60" width="50" height="80" rx="4" stroke={dark} strokeWidth="1.5" fill="none" />
      <line x1="85" y1="85" x2="115" y2="85" stroke={accent} strokeWidth="2" />
      <line x1="85" y1="100" x2="115" y2="100" stroke={accent} strokeWidth="2" />
      <line x1="85" y1="115" x2="115" y2="115" stroke={accent} strokeWidth="2" />
    </>
  );
}

function CloudConnect() {
  return (
    <>
      <path d="M100 30 Q130 10 160 30 Q180 30 180 50 Q180 70 160 70" stroke={dark} strokeWidth="1.5" fill="none" />
      <path d="M110 45 Q130 30 155 40" stroke={light} strokeWidth="1" fill="none" />
      <rect x="40" y="110" width="50" height="50" rx="4" stroke={dark} strokeWidth="1.5" fill="none" />
      <rect x="110" y="110" width="50" height="50" rx="4" stroke={dark} strokeWidth="1.5" fill="none" />
      <line x1="90" y1="135" x2="110" y2="135" stroke={accent} strokeWidth="2" strokeDasharray="4 3" />
      <line x1="65" y1="100" x2="65" y2="70" stroke={accent} strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="135" y1="100" x2="135" y2="70" stroke={accent} strokeWidth="1.5" strokeDasharray="4 3" />
    </>
  );
}

function DarkFiber() {
  return (
    <>
      <path d="M30 170 Q60 100 100 100 Q140 100 170 30" stroke={dark} strokeWidth="2" fill="none" />
      <circle cx="100" cy="100" r="8" fill={accent} />
      <circle cx="60" cy="140" r="4" fill={dark} />
      <circle cx="140" cy="60" r="4" fill={dark} />
      <circle cx="75" cy="120" r="2" fill={accent} opacity="0.6" />
      <circle cx="90" cy="108" r="2" fill={accent} opacity="0.8" />
      <circle cx="115" cy="88" r="2" fill={accent} opacity="0.6" />
    </>
  );
}

function VirtualEdge() {
  return (
    <>
      <rect x="40" y="40" width="120" height="120" rx="8" stroke={dark} strokeWidth="1.5" fill="none" />
      <rect x="60" y="60" width="80" height="80" rx="4" stroke={light} strokeWidth="1" strokeDasharray="6 4" fill="none" />
      <path d="M100 60 L100 50" stroke={accent} strokeWidth="2" />
      <path d="M100 140 L100 150" stroke={accent} strokeWidth="2" />
      <path d="M60 100 L50 100" stroke={accent} strokeWidth="2" />
      <path d="M140 100 L150 100" stroke={accent} strokeWidth="2" />
      <circle cx="100" cy="100" r="18" stroke={accent} strokeWidth="1.5" fill="none" />
      <circle cx="100" cy="100" r="6" fill={accent} />
    </>
  );
}

function Colocation() {
  return (
    <>
      <rect x="50" y="30" width="100" height="140" rx="3" stroke={dark} strokeWidth="1.5" fill="none" />
      <line x1="50" y1="80" x2="150" y2="80" stroke={light} strokeWidth="1" />
      <line x1="50" y1="120" x2="150" y2="120" stroke={light} strokeWidth="1" />
      <rect x="65" y="45" width="15" height="25" rx="2" fill={accent} opacity="0.2" stroke={accent} strokeWidth="0.5" />
      <rect x="90" y="45" width="15" height="25" rx="2" fill={accent} opacity="0.2" stroke={accent} strokeWidth="0.5" />
      <rect x="115" y="45" width="15" height="25" rx="2" fill={accent} opacity="0.2" stroke={accent} strokeWidth="0.5" />
      <rect x="65" y="90" width="15" height="20" rx="2" fill={light} />
      <rect x="90" y="90" width="15" height="20" rx="2" fill={light} />
      <rect x="115" y="90" width="15" height="20" rx="2" fill={light} />
      <rect x="65" y="130" width="15" height="25" rx="2" fill={dark} opacity="0.1" />
      <rect x="90" y="130" width="15" height="25" rx="2" fill={dark} opacity="0.1" />
    </>
  );
}

function SmartHands() {
  return (
    <>
      <rect x="60" y="50" width="80" height="100" rx="4" stroke={dark} strokeWidth="1.5" fill="none" />
      <circle cx="100" cy="80" r="12" stroke={accent} strokeWidth="1.5" fill="none" />
      <line x1="100" y1="92" x2="100" y2="110" stroke={accent} strokeWidth="2" />
      <line x1="85" y1="105" x2="115" y2="100" stroke={accent} strokeWidth="1.5" />
      <line x1="100" y1="110" x2="85" y2="125" stroke={accent} strokeWidth="1.5" />
      <line x1="100" y1="110" x2="115" y2="125" stroke={accent} strokeWidth="1.5" />
      <circle cx="75" cy="60" r="2" fill="#0f0" opacity="0.6" />
      <circle cx="82" cy="60" r="2" fill={accent} opacity="0.6" />
      <circle cx="89" cy="60" r="2" fill={light} />
    </>
  );
}
