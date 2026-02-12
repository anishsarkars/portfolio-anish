import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anish Sarkar",
  initials: "AS",
  url: "https://anishsarkar.site",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "IT Undergraduate | Frontend & Product Engineer | UI/UX | Startup & Research Experience",
  summary:
    "I’m Anish Sarkar, a Undergrad Information Technology undergraduate passionate about building and shipping real-world products. I work at the intersection of frontend engineering, UI/UX design, product thinking, and execution. I’ve collaborated with startups, early-stage products, and research organizations, focusing on turning ideas into usable, scalable solutions. I enjoy fast iteration, clean design, and solving problems end-to-end—from idea to deployment.",
  avatarUrl: "/profile.png",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "UI/UX Design (Figma)",
    "Git & GitHub",
    "WordPress",
    "Firebase",
    "AWS",
    "Google Cloud",
    "DevOps basics",
    "Product thinking",
    "Rapid prototyping",
    "Communication & mentorship",
    "Team collaboration",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hi@anishsarkar.site",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/anishsarkars",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/anishsarkar-",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/anishsarkars",
        icon: Icons.x,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/anish.sarkars/",
        icon: Icons.instagram,
        navbar: true,
      },
      Cal: {
        name: "Book a Call",
        url: "https://cal.com/anishsarkar/",
        icon: Icons.calendar,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hi@anishsarkar.site",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "GirlScript Summer of Code",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "",
      start: "",
      end: "",
      description:
        "Contributed to open source projects.",
    },
    {
      company: "Intervue.io",
      href: "#",
      badges: [],
      location: "California, US",
      title: "Technology Intern",
      logoUrl: "",
      start: "",
      end: "",
      description:
        "Appeared on Shark Tank India'24.",
    },
    {
      company: "DRDL - DRDO",
      href: "#",
      badges: [],
      location: "Hyderabad, India",
      title: "Software Engineer Intern",
      logoUrl: "",
      start: "",
      end: "",
      description:
        "Worked on secure internal systems.",
    },
    {
      company: "BrightChamps",
      href: "#",
      badges: [],
      location: "Singapore",
      title: "Technical Instructor",
      logoUrl: "",
      start: "",
      end: "",
      description: "",
    },
  ],
  education: [
    {
      school: "Chameli Devi Group of Institutions",
      href: "#",
      degree: "B.Tech in Information Technology",
      logoUrl: "",
      start: "2023",
      end: "2027",
    },
    {
      school: "Govt. Polytechnic College",
      href: "#",
      degree: "Diploma in Computer Science Engineering",
      logoUrl: "",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Diagramr",
      href: "#",
      active: true,
      description:
        "Built and launched a product that ranked Top 15 on Product Hunt with ₹0 marketing spend.",
      technologies: [
        "Product Hunt",
        "Launch",
      ],
      links: [
        {
          type: "Website",
          href: "https://diagramr.site",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Smart Waste Management System",
      href: "#",
      active: true,
      description:
        "Hackathon project selected among Top 80 teams out of 1500+.",
      technologies: [
        "Hackathon",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Modernized College Government Website",
      href: "#",
      active: true,
      description:
        "Redesigned and rebuilt a legacy system with improved accessibility, payments, and UX.",
      technologies: [
        "UX",
        "Accessibility",
        "Payments"
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Voidhacks",
      dates: "",
      location: "",
      description:
        "Winner",
      image: "",
      links: [],
    },
    {
      title: "Ideathon",
      dates: "",
      location: "",
      description:
        "Winner",
      image: "",
      links: [],
    },
    {
      title: "Athena Hacker House",
      dates: "",
      location: "",
      description:
        "Won PS5",
      image: "",
      links: [],
    },
    {
      title: "Hack'Ndore",
      dates: "",
      location: "Indore",
      description:
        "Prefinalist",
      image: "",
      links: [],
    },
    {
      title: "GDG CDGI",
      dates: "",
      location: "Indore",
      description:
        "Lead",
      image: "",
      links: [],
    },
  ],
} as const;
