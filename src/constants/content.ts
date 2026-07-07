import {
  Users,
  BookOpen,
  TriangleAlert,
  MapPin,
  Zap,
  LayoutDashboard,
  Bell,
  Cpu,
  Database,
  Globe,
  Brain,
  Layers,
  Server,
  Cloud,
  CirclePlay,
  Download,
  ExternalLink,
  Code
} from 'lucide-react';

export const SITE_CONFIG = {
  name: "GuardianCM",
  tagline: "AI-Powered Community Safety & Cybersecurity Platform",
  description: "GuardianCM is a next-generation ecosystem designed to protect communities and secure digital assets through advanced AI and decentralized intelligence.",
  version: "v1.0.0",
  year: 2026,
  links: {
    demo: "#",
    apk: "#",
    pitch: "#",
    github: "#",
    email: "contact@guardiancm.tech",
    linkedin: "#"
  }
};

export const FEATURES = [
  {
    title: "AI Safety Assistant",
    description: "Real-time threat detection and safety guidance powered by advanced LLMs.",
    icon: Brain,
  },
  {
    title: "Community Intelligence",
    description: "Collaborative safety data sourced from verified community members.",
    icon: Users,
  },
  {
    title: "Cyber Academy",
    description: "Interactive modules to master digital hygiene and threat prevention.",
    icon: BookOpen,
  },
  {
    title: "Incident Reporting",
    description: "Seamless, end-to-end encrypted reporting for local emergencies.",
    icon: TriangleAlert,
  },
  {
    title: "Geofencing",
    description: "Smart perimeter alerts for children, elderly, and high-risk areas.",
    icon: MapPin,
  },
  {
    title: "SOS & Emergency",
    description: "One-tap emergency broadcast to authorities and emergency contacts.",
    icon: Zap,
  },
  {
    title: "Interactive Maps",
    description: "Real-time safety heatmaps and navigation using OpenStreetMap.",
    icon: LayoutDashboard,
  },
  {
    title: "Smart Alerts",
    description: "Critical notifications tailored to your specific location and interests.",
    icon: Bell,
  }
];

export const TECH_STACK = [
  { name: "Flutter", icon: Layers },
  { name: "Supabase", icon: Database },
  { name: "OpenStreetMap", icon: Globe },
  { name: "Google AI", icon: Cpu },
  { name: "Riverpod", icon: Zap },
  { name: "PostgreSQL", icon: Server },
  { name: "Vercel", icon: Cloud }
];

export const DEMO_RESOURCES = [
  {
    title: "Launch Web Demo",
    description: "Experience the full platform in your browser.",
    icon: ExternalLink,
    link: SITE_CONFIG.links.demo,
    cta: "Open Demo"
  },
  {
    title: "Download APK",
    description: "Get the latest build for your Android device.",
    icon: Download,
    link: SITE_CONFIG.links.apk,
    cta: "Download Now"
  },
  {
    title: "Watch Pitch",
    description: "A 3-minute deep dive into our vision.",
    icon: CirclePlay,
    link: SITE_CONFIG.links.pitch,
    cta: "Watch Now"
  },
  {
    title: "Source Code",
    description: "Explore the codebase on GitHub.",
    icon: Code,
    link: SITE_CONFIG.links.github,
    cta: "View Repository"
  }
];
