import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "diagramr",
    title: "Diagramr",
    period: {
      start: "2024",
    },
    link: "https://diagramr.vercel.app",
    skills: [
      "Product Hunt",
      "Next.js",
      "React",
      "Tailwind CSS",
    ],
    description: `Built and launched a product that ranked Top 15 on Product Hunt with ₹0 marketing spend. Diagramr helps users create beautiful diagrams with ease.`,
    logo: "",
    isExpanded: true,
  },
  {
    id: "waste-management",
    title: "Smart Waste Management System",
    period: {
      start: "2023",
    },
    link: "#",
    skills: [
      "Hackathon",
      "IoT",
      "Dashboard",
      "Analytics",
    ],
    description: `Hackathon project selected among Top 80 teams out of 1500+ applicants. Focuses on optimizing waste collection and management using smart sensors and data analytics.`,
    logo: "",
  },
  {
    id: "college-website",
    title: "Modernized College Government Website",
    period: {
      start: "2023",
    },
    link: "#",
    skills: [
      "UX Design",
      "Accessibility",
      "Payments",
      "Next.js",
    ],
    description: `Redesigned and rebuilt a legacy government college website with improved accessibility, payment integrations, and overall user experience.`,
    logo: "",
  },
]
