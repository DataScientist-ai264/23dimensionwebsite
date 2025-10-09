import React from "react";
import type {
  NavLink,
  Service,
  ClientProfile,
  Article,
  TeamMember,
  CaseSnapshot,
} from "./types";

// Duotone Icons
const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-12 h-12 bg-surface border border-border rounded-lg flex items-center justify-center mb-4 group-hover:border-accent-gold/50 group-hover:bg-accent-gold/10 transition-colors">
    {children}
  </div>
);

const DuotoneIcon: React.FC<{ path1: string; path2: string }> = ({
  path1,
  path2,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d={path1}
      className="text-accent-gold/50 group-hover:text-accent-gold/70 transition-colors"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d={path2}
      className="text-accent-gold group-hover:text-accent-gold transition-colors"
    />
  </svg>
);

const BrainIcon = () => (
  <DuotoneIcon
    path1="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14.05 5 15 8.354 15 10c3.75 0 4.545 2.455 4.545 4.545 0 3.182-2.545 4.545-4.545 4.545-2.455 0-4.545-2.455-4.545-4.545"
    path2="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M12 10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
  />
);
const CompassIcon = () => (
  <DuotoneIcon
    path1="M12 21a9 9 0 110-18 9 9 0 010 18z"
    path2="M12 8v4l3 3m-9-3l-1.06-1.06a1.5 1.5 0 012.12-2.12L6 6"
  />
);
const LifebuoyIcon = () => (
  <DuotoneIcon
    path1="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    path2="M13 16h-1v-4h-1m1-4h.01m-4.01 4a2 2 0 114 0 2 2 0 01-4 0z"
  />
);
const RocketIcon = () => (
  <DuotoneIcon path1="M4 14h7v7l9-11h-7" path2="M13 10V3L4 14" />
);
const ChartIcon = () => (
  <DuotoneIcon
    path1="M4 19v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6"
    path2="M14 19V5a2 2 0 012-2h2a2 2 0 012 2v14"
  />
);
const BuildingIcon = () => (
  <DuotoneIcon
    path1="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5"
    path2="M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5"
  />
);

export const NAV_LINKS: NavLink[] = [
  { name: "What We Do", path: "/what-we-do" },
  { name: "How We Work", path: "/how-we-work" },
  { name: "Who We Help", path: "/who-we-help" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About Us", path: "/about-us" },
  { name: "Insights", path: "/insights" },
];

export const SERVICES: Service[] = [
  {
    icon: (
      <IconWrapper>
        <BrainIcon />
      </IconWrapper>
    ),
    title: "Technical Strategy & Architecture",
    description:
      "We shape concepts into technically sound strategies — from early-stage brainstorming to architecture assessments and due diligence.",
  },
  {
    icon: (
      <IconWrapper>
        <CompassIcon />
      </IconWrapper>
    ),
    title: "Vendor Vetting & Go / No-Go",
    description:
      "We provide neutral, structured assessments to separate evidence from sales pitches and ensure you choose the right technology partner.",
  },
  {
    icon: (
      <IconWrapper>
        <LifebuoyIcon />
      </IconWrapper>
    ),
    title: "Rescue of At-Risk Projects",
    description:
      "When initiatives falter, we step in with seasoned judgment to diagnose gaps, assess risk, and craft actionable recovery plans.",
  },
  {
    icon: (
      <IconWrapper>
        <RocketIcon />
      </IconWrapper>
    ),
    title: "Investor-Ready Product Development",
    description:
      "We build MVPs and products that balance technical elegance with market reality, ensuring a solid foundation for growth.",
    link: {
      text: "See Our Portfolio",
      path: "/portfolio",
    },
  },
  {
    icon: (
      <IconWrapper>
        <ChartIcon />
      </IconWrapper>
    ),
    title: "Boot Marketing & Investor Readiness",
    description:
      "We help startups craft technical narratives and strategic positioning that speak fluently to investors and markets — turning clarity into traction.",
  },
  {
    icon: (
      <IconWrapper>
        <BuildingIcon />
      </IconWrapper>
    ),
    title: "In-House Product Initiatives",
    description:
      "We don’t just advise. We build. Our product house validates our methods in real markets, turning theory into practice.",
  },
];

export const CLIENT_PROFILES: ClientProfile[] = [
  {
    name: "Startups & Founders",
    description:
      "You have a world-changing idea but need a technical co-founder's perspective to build a robust, scalable foundation. We act as your fractional CTO and strategic partner.",
    needs: [
      "Architectural roadmapping",
      "MVP development strategy",
      "Investor-facing technical narrative",
      "Technology stack selection",
    ],
  },
  {
    name: "Investors & VCs",
    description:
      "You're evaluating a promising but technically complex investment. You need an unbiased, rigorous due diligence partner to assess the architecture, team, and scalability.",
    needs: [
      "Technical due diligence",
      "Portfolio company health checks",
      "Go-to-market technology validation",
      "Post-investment advisory",
    ],
  },
  {
    name: "Enterprises with At-Risk Projects",
    description:
      "A critical digital transformation or product initiative is behind schedule, over budget, or failing to deliver. You need an external, impartial team to diagnose the root cause and chart a path to recovery.",
    needs: [
      "Project rescue and stabilization",
      "Vendor performance audits",
      "Architecture modernization review",
      "Team capability assessment",
    ],
  },
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title:
      "The Categorical Imperative of Code: A Kantian View on Software Ethics",
    category: "Ethics & Governance",
    excerpt:
      "Can a 200-year-old philosophical principle guide modern software development? We explore how Kant's categorical imperative applies to creating ethical algorithms and responsible AI.",
    imageUrl: "/images/insights/Ethics.jpeg",
  },
  {
    id: 2,
    title:
      "From Noumena to MVP: Structuring Product Strategy with Philosophical Rigor",
    category: "Strategy",
    excerpt:
      "Before the first line of code is written, a product exists in its ideal form. We discuss how to translate abstract concepts into structured, testable, and viable products.",
    imageUrl: "/images/insights/Noumnea.jpeg",
  },
  {
    id: 3,
    title:
      "The Architect as Lawgiver: Designing Systems for Universalizability",
    category: "Architecture",
    excerpt:
      "Good architecture isn't just about scalability; it's about creating rules and patterns that can be universally applied across an organization. A look into creating resilient, principled systems.",
    imageUrl: "/images/insights/Architecture.png",
  },
  {
    id: 4,
    title: "Beyond the Pitch Deck: What VCs Should Really Ask About Tech",
    category: "Investment",
    excerpt:
      "Moving beyond surface-level questions to a deeper, more structured technical due diligence process that uncovers real risks and opportunities in potential investments.",
    imageUrl: "/images/insights/Investment.png",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Eleanor Vance",
    role: "Founding Partner, Lead Strategist",
    avatarId: "avatar1",
    bio: "Eleanor founded 2+3Dimension on the principle that enduring value is built on a foundation of rational ethics. With a background in applied philosophy and enterprise architecture, she specializes in translating abstract strategic goals into concrete, defensible technical roadmaps.",
  },
  {
    name: "Julian Sark",
    role: "Principal, Technical Architecture",
    avatarId: "avatar2",
    bio: "Julian is a systems thinker with two decades of experience architecting resilient, scalable platforms. He excels at dissecting complex technical ecosystems to identify foundational risks and opportunities, ensuring that a project's structure can withstand its future ambitions.",
  },
  {
    name: "Anya Sharma",
    role: "Advisory Lead, Project Rescue",
    avatarId: "avatar3",
    bio: "Anya brings clarity and calm to high-stakes situations. Her expertise lies in diagnosing the root causes of project distress—from technical debt to team misalignment—and implementing rigorous, pragmatic plans to guide at-risk initiatives back to stability and success.",
  },
];

export const CASE_SNAPSHOTS: CaseSnapshot[] = [
  {
    client: "Fintech Scale-Up",
    challenge:
      "A monolithic architecture was hindering growth and creating instability.",
    outcome:
      "Designed and guided a phased migration to a scalable microservices platform.",
    metric: "Deployment Frequency",
    metricValue: "+400%",
  },
  {
    client: "Venture Capital Firm",
    challenge:
      "Needed rapid, rigorous due diligence on a complex AI/ML investment opportunity.",
    outcome:
      "Delivered a comprehensive technical risk assessment in under two weeks.",
    metric: "Decision Time",
    metricValue: "-50%",
  },
  {
    client: "Healthcare Enterprise",
    challenge:
      "A critical patient data platform was failing, risking compliance and operations.",
    outcome: "Stabilized the platform and architected a modernization roadmap.",
    metric: "Critical Incidents",
    metricValue: "↓ 92%",
  },
];
