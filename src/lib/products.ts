import boom120 from "@/assets/boom-mt-dcmt-120.png";
import boom150 from "@/assets/boom-mt-dcgl-150.png";
import boom200 from "@/assets/boom-mt-dcmt-200.png";
import boom240 from "@/assets/boom-mt-dcmths-240.png";
import sliding from "@/assets/sliding-gate-motor.png";
import access from "@/assets/access-control.jpg";
import bollard from "@/assets/automatic-bollard.png";

export type Product = {
  slug: string;
  model: string;
  name: string;
  category: "boom" | "gate" | "access" | "bollard";
  tagline: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  features: string[];
  applications: string[];
};

export const products: Product[] = [
  {
    slug: "mt-dcmt-120",
    model: "MT-DCMT/120",
    name: "Compact DC Boom Barrier",
    category: "boom",
    tagline: "Precision-engineered for commercial lanes",
    description:
      "A compact DC-motor boom barrier purpose-built for residential complexes, office parks, and retail entrances. Smooth, silent operation with intelligent obstacle detection.",
    image: boom120,
    specs: [
      { label: "Opening Time", value: "1.8 sec" },
      { label: "Boom Length", value: "Up to 3 m" },
      { label: "Motor", value: "24V DC Brushless" },
      { label: "Duty Cycle", value: "Continuous" },
    ],
    features: [
      "Brushless DC motor",
      "Silent magnetic limit sensing",
      "Auto-reverse on obstacle",
      "LED status strip",
      "Manual release",
    ],
    applications: ["Residential complexes", "Office parks", "Retail parking", "Hotels"],
  },
  {
    slug: "mt-dcgl-150",
    model: "MT-DCGL/150",
    name: "Integrated Gate-Lane Barrier",
    category: "boom",
    tagline: "Boom barrier with articulated gate fence",
    description:
      "Heavy-duty integrated solution combining a precision boom with an articulated gate-fence. Ideal for high-security perimeters that demand both vehicle and pedestrian control.",
    image: boom150,
    specs: [
      { label: "Opening Time", value: "2.5 sec" },
      { label: "Boom Length", value: "Up to 4.5 m" },
      { label: "Motor", value: "24V DC High-Torque" },
      { label: "IP Rating", value: "IP55" },
    ],
    features: [
      "Articulated fence boom",
      "Anti-climb construction",
      "Reinforced steel chassis",
      "RFID & app integration ready",
      "Battery backup compatible",
    ],
    applications: ["Industrial gates", "Defense premises", "Logistics yards", "Data centers"],
  },
  {
    slug: "mt-dcmt-200",
    model: "MT-DCMT/200",
    name: "High-Speed DC Boom Barrier",
    category: "boom",
    tagline: "Engineered for rapid throughput lanes",
    description:
      "Tower-style high-speed boom barrier built for premium corporate entrances and toll lanes that demand sub-2-second cycles with continuous duty.",
    image: boom200,
    specs: [
      { label: "Opening Time", value: "1.2 sec" },
      { label: "Boom Length", value: "Up to 3.5 m" },
      { label: "Motor", value: "Brushless DC Servo" },
      { label: "MCBF", value: "8M cycles" },
    ],
    features: [
      "Sub-second opening",
      "Servo precision motor",
      "Edge-detection safety",
      "Smart slow-down profile",
      "OLED diagnostics panel",
    ],
    applications: ["Corporate HQ", "Hotels & resorts", "Airports", "Smart cities"],
  },
  {
    slug: "mt-dcmths-240",
    model: "MT-DCMTHS/240",
    name: "Heavy-Duty High-Speed Barrier",
    category: "boom",
    tagline: "Toll-plaza grade ultra-fast barrier",
    description:
      "Our flagship industrial-grade boom barrier. Armored cabinet, ultra high-speed servo drive, and integrated traffic intelligence — designed for highway tolls and critical infrastructure.",
    image: boom240,
    specs: [
      { label: "Opening Time", value: "0.9 sec" },
      { label: "Boom Length", value: "Up to 6 m" },
      { label: "Motor", value: "Industrial Servo Drive" },
      { label: "MCBF", value: "10M+ cycles" },
    ],
    features: [
      "Armored IP65 cabinet",
      "Vehicle-loop & ANPR ready",
      "Real-time telemetry",
      "Redundant power input",
      "Lightning protection",
    ],
    applications: ["Highway toll plazas", "Border checkpoints", "Critical infrastructure", "Ports"],
  },
  {
    slug: "mt-dcmths-240-ultra",
    model: "MT-DCMTHS-240 ULTRA",
    name: "Ultra-Grade High-Speed Barrier",
    category: "boom",
    tagline: "Next-level highway toll performance",
    description:
      "Ultra-grade barrier technology for the highest-traffic toll plazas and mission-critical perimeters. Designed for rapid cycles, maximum durability, and advanced traffic analytics.",
    image: "https://ik.imagekit.io/f1iw3r6um/image00004.jpg",
    specs: [
      { label: "Opening Time", value: "0.8 sec" },
      { label: "Boom Length", value: "Up to 6 m" },
      { label: "Motor", value: "Industrial Servo Drive" },
      { label: "MCBF", value: "12M+ cycles" },
    ],
    features: [
      "Ultra-fast cycle times",
      "AI traffic sensing",
      "Dual-redundant power inputs",
      "Corrosion-resistant armor",
      "Cloud diagnostics ready",
    ],
    applications: ["Highway tolls", "Airport gateways", "Border security", "Critical infrastructure"],
  },
  {
    slug: "mt-dcml-120-prime",
    model: "MT-DCML-120 PRIME",
    name: "Compact Prime Barrier",
    category: "boom",
    tagline: "Prime performance for first-mile security",
    description:
      "A compact prime boom barrier optimized for commercial entry lanes and secure residential access. Built for reliability, low noise, and seamless integration with access systems.",
    image: "https://ik.imagekit.io/f1iw3r6um/image00001.jpg",
    specs: [
      { label: "Opening Time", value: "1.7 sec" },
      { label: "Boom Length", value: "Up to 3.2 m" },
      { label: "Motor", value: "24V DC High-Efficiency" },
      { label: "Duty Cycle", value: "Continuous" },
    ],
    features: [
      "Compact footprint",
      "Low-noise gear system",
      "Intelligent obstacle detection",
      "App-enabled diagnostics",
      "Fast manual release",
    ],
    applications: ["Commercial entrances", "Gated communities", "Retail hubs", "Hospital campuses"],
  },
  {
    slug: "mt-dcmt-200-prime",
    model: "MT-DCMT-200 PRIME",
    name: "Prime High-Speed Barrier",
    category: "boom",
    tagline: "High-speed precision for premium lanes",
    description:
      "Precision-engineered high-speed boom barrier for premium corporate and hospitality entrances. Designed for consistent performance under heavy use and smart integration.",
    image: "https://ik.imagekit.io/f1iw3r6um/image00008.jpg",
    specs: [
      { label: "Opening Time", value: "1.1 sec" },
      { label: "Boom Length", value: "Up to 3.8 m" },
      { label: "Motor", value: "Brushless DC Servo" },
      { label: "MCBF", value: "9M cycles" },
    ],
    features: [
      "High-speed servo control",
      "Smart lane analytics",
      "Soft-start / soft-stop",
      "LED status indicators",
      "RFID integration ready",
    ],
    applications: ["Corporate HQ", "Hotels", "Event venues", "Luxury residences"],
  },
  {
    slug: "mt-dcgl-150-pro",
    model: "MT-DCGL-150 PRO",
    name: "Pro Gate-Lane Barrier",
    category: "boom",
    tagline: "Professional gate-lane control for pedestrian + vehicle security",
    description:
      "A pro-grade boom barrier with an articulated gate arm for mixed vehicle and pedestrian control. Engineered for secure perimeters that demand versatility and strength.",
    image: "https://ik.imagekit.io/f1iw3r6um/image00006.jpg",
    specs: [
      { label: "Opening Time", value: "2.3 sec" },
      { label: "Boom Length", value: "Up to 4.8 m" },
      { label: "Motor", value: "24V DC High-Torque" },
      { label: "IP Rating", value: "IP55" },
    ],
    features: [
      "Articulated fence arm",
      "Heavy-duty chassis",
      "Anti-tailgate sensing",
      "Remote access control ready",
      "Battery backup support",
    ],
    applications: ["Secure campuses", "Logistics hubs", "Military bases", "Data centers"],
  },
  {
    slug: "mt-acmt-200-eco",
    model: "MT-ACMT-200 ECO",
    name: "Eco-Friendly Boom Barrier",
    category: "boom",
    tagline: "Efficient operation for steady traffic lanes",
    description:
      "Economical boom barrier engineered for moderate-traffic commercial entrances. Compact, energy-efficient, and tuned for reliable everyday operation.",
    image: "https://ik.imagekit.io/f1iw3r6um/image00005.jpg",
    specs: [
      { label: "Opening Time", value: "1.9 sec" },
      { label: "Boom Length", value: "Up to 4 m" },
      { label: "Motor", value: "DC Eco Drive" },
      { label: "Power", value: "Low consumption" },
    ],
    features: [
      "Energy-efficient drive",
      "Compact footprint",
      "Smart safety sensors",
      "Quiet operation",
      "Reliable all-day duty",
    ],
    applications: ["Office parking", "Residential gates", "Schools", "Retail centers"],
  },
  {
    slug: "mt-sl300-eco",
    model: "MT-SL300 ECO",
    name: "Sliding Gate Motor ECO",
    category: "gate",
    tagline: "Economical sliding gate automation for residential sites",
    description:
      "Compact sliding gate motor engineered for smooth, low-energy operation. Ideal for residential gates and light-commercial access points.",
    image: "https://ik.imagekit.io/f1iw3r6um/image00007.jpg",
    specs: [
      { label: "Max Gate Weight", value: "1200 kg" },
      { label: "Speed", value: "10 m/min" },
      { label: "Motor", value: "DC Gearmotor" },
      { label: "IP Rating", value: "IP54" },
    ],
    features: [
      "Energy-efficient motor",
      "Soft-start / soft-stop",
      "Quiet operation",
      "Compact housing",
      "Remote access ready",
    ],
    applications: ["Residential gates", "Small offices", "Light industrial", "Private villas"],
  },
  {
    slug: "mt-sl600-pro",
    model: "MT-SL600 PRO",
    name: "Sliding Gate Motor PRO",
    category: "gate",
    tagline: "Professional sliding gate automation for heavy gates",
    description:
      "Heavy-duty sliding gate motor built for large gates and demanding access points. Delivers torque, speed, and soft motion control for industrial applications.",
    image: "https://ik.imagekit.io/f1iw3r6um/image00002.jpg",
    specs: [
      { label: "Max Gate Weight", value: "2000 kg" },
      { label: "Speed", value: "12 m/min" },
      { label: "Motor", value: "DC Servo" },
      { label: "IP Rating", value: "IP55" },
    ],
    features: [
      "Encoder feedback",
      "Soft-start / soft-stop",
      "High-torque drive",
      "Battery backup option",
      "Smart gate sensing",
    ],
    applications: ["Industrial gates", "Logistics yards", "Warehouse entrances", "Corporate campuses"],
  },
  {
    slug: "mt-sl1000-max",
    model: "MT-SL1000 MAX",
    name: "Sliding Gate Motor MAX",
    category: "gate",
    tagline: "Maximum capacity sliding gate drive",
    description:
      "Top-tier sliding gate motor for the largest gates. Engineered for extreme duty cycles and reliable motion control across heavy industrial applications.",
    image: "https://ik.imagekit.io/f1iw3r6um/image00003.jpg",
    specs: [
      { label: "Max Gate Weight", value: "3000 kg" },
      { label: "Speed", value: "14 m/min" },
      { label: "Motor", value: "High-Torque DC Servo" },
      { label: "IP Rating", value: "IP55" },
    ],
    features: [
      "Heavy-duty capacity",
      "Smooth acceleration control",
      "Advanced overload protection",
      "Remote diagnostics ready",
      "Long-life gearbox",
    ],
    applications: ["Heavy industrial gates", "Port terminals", "Large warehouses", "Heavy logistics"],
  },
  {
    slug: "sliding-gate-motor",
    model: "MT-SGM",
    name: "Sliding Gate Motor",
    category: "gate",
    tagline: "Silent automation for sliding gates",
    description:
      "Compact, weather-sealed sliding gate motor delivering smooth, quiet automation for gates up to 1800 kg with intelligent soft-start / soft-stop control.",
    image: sliding,
    specs: [
      { label: "Max Gate Weight", value: "1800 kg" },
      { label: "Speed", value: "12 m/min" },
      { label: "Motor", value: "DC Geared" },
      { label: "IP Rating", value: "IP54" },
    ],
    features: [
      "Soft-start / soft-stop",
      "Encoder feedback",
      "Battery backup option",
      "Mobile app control",
      "Self-learning end stops",
    ],
    applications: ["Villas", "Industrial yards", "Warehouses", "Corporate campuses"],
  },
  {
    slug: "automatic-bollard",
    model: "MT-BLD",
    name: "Automatic Rising Bollard",
    category: "bollard",
    tagline: "Hostile-vehicle mitigation, elegantly engineered",
    description:
      "A premium stainless-steel automatic rising bollard for high-security perimeters. Hydraulic actuation with sub-3-second deployment and crash-rated construction for critical entries.",
    image: bollard,
    specs: [
      { label: "Rise Time", value: "2.8 sec" },
      { label: "Height", value: "600 mm" },
      { label: "Diameter", value: "Ø 220 mm" },
      { label: "Build", value: "SS-304 Crash-Rated" },
    ],
    features: [
      "Hydraulic precision actuation",
      "LED amber rim lighting",
      "Crash-rated stainless construction",
      "Sub-3-second deployment",
      "Loop & RFID integration",
    ],
    applications: ["Embassies", "VIP entrances", "Government", "Corporate HQ"],
  },
  {
    slug: "access-control-systems",
    model: "MT-AC",
    name: "Access Control Systems",
    category: "access",
    tagline: "Biometric, RFID & mobile-credential ready",
    description:
      "A unified access platform combining biometric, RFID, and mobile credentials with cloud dashboards, audit trails, and seamless integration with boom barriers and gates.",
    image: access,
    specs: [
      { label: "Auth Methods", value: "Bio · RFID · App" },
      { label: "Users", value: "Up to 50,000" },
      { label: "Logs", value: "Unlimited Cloud" },
      { label: "Integration", value: "REST · MQTT" },
    ],
    features: [
      "Multi-factor authentication",
      "Cloud dashboard",
      "Real-time alerts",
      "API & webhook ready",
      "Visitor management",
    ],
    applications: ["Enterprises", "Co-working spaces", "Educational campuses", "Healthcare"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
