export type Product = {
  slug: string;
  model: string;
  name: string;
  category: "boom" | "gate";
  tagline: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  features: string[];
  applications: string[];
};

export const products: Product[] = [
  {
    slug: "mt-dcmths-240-ultra",
    model: "MT-DCMTHS-240 ULTRA",
    name: "Ultra High-Speed Boom Barrier",
    category: "boom",
    tagline: "Toll-plaza grade ultra-fast barrier",
    description:
      "Our flagship industrial-grade boom barrier. Armored cabinet, ultra high-speed servo drive, and integrated traffic intelligence — designed for highway tolls and critical infrastructure.",
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
      "Armored IP65 cabinet",
      "Dual-redundant power inputs",
      "Cloud diagnostics ready",
    ],
    applications: ["Highway toll plazas", "Border checkpoints", "Critical infrastructure", "Ports"],
  },
  {
    slug: "mt-dcml-120-prime",
    model: "MT-DCML-120 PRIME",
    name: "Compact Prime Boom Barrier",
    category: "boom",
    tagline: "Prime performance for first-mile security",
    description:
      "A compact prime boom barrier optimized for commercial entry lanes and secure residential access. Built for reliability, low noise, and seamless integration with access systems.",
    image: "https://ik.imagekit.io/f1iw3r6um/image00001.jpg",
    specs: [
      { label: "Opening Time", value: "1.7 sec" },
      { label: "Boom Length", value: "Up to 6 m" },
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
      { label: "Boom Length", value: "Up to 6 m" },
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
    tagline: "Professional gate-lane control for pedestrian and vehicle security",
    description:
      "A pro-grade boom barrier with an articulated gate arm for mixed vehicle and pedestrian control. Engineered for secure perimeters that demand versatility and strength.",
    image: "https://ik.imagekit.io/f1iw3r6um/image00006.jpg",
    specs: [
      { label: "Opening Time", value: "2.3 sec" },
      { label: "Boom Length", value: "Up to 6 m" },
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
      { label: "Boom Length", value: "Up to 6 m" },
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
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
