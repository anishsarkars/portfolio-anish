import {
  CodeXmlIcon,
  GraduationCapIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "intervue",
    companyName: "Intervue.io",
    companyLogo: "",
    companyWebsite: "https://intervue.io",
    positions: [
      {
        id: "1",
        title: "Technology Intern",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description:
          "- Appeared on Shark Tank India'24.\n- Worked on technology solutions for the platform.",
        skills: [
          "React",
          "Next.js",
          "Tailwind CSS",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "drdo",
    companyName: "DRDL - DRDO",
    companyLogo: "",
    companyWebsite: "#",
    positions: [
      {
        id: "1",
        title: "Software Engineer Intern",
        employmentPeriod: {
          start: "2023",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description:
          "- Worked on secure internal systems.\n- Collaborated with senior engineers on software development.",
        skills: [
          "Software Engineering",
          "Security",
        ],
      },
    ],
  },
  {
    id: "girlscript",
    companyName: "GirlScript Summer of Code",
    companyLogo: "",
    companyWebsite: "#",
    positions: [
      {
        id: "1",
        title: "Open Source Contributor",
        employmentPeriod: {
          start: "2023",
        },
        employmentType: "Contributor",
        icon: <CodeXmlIcon />,
        description:
          "Contributed to various open-source projects during the summer program.",
        skills: [
          "Git",
          "GitHub",
          "Open Source",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "2",
        title: "Chameli Devi Group of Institutions",
        employmentPeriod: {
          start: "2023",
          end: "2027",
        },
        icon: <GraduationCapIcon />,
        description: "B.Tech in Information Technology",
        skills: [
          "Information Technology",
          "Computer Science",
        ],
      },
      {
        id: "1",
        title: "Govt. Polytechnic College",
        employmentPeriod: {
          start: "2021",
          end: "2024",
        },
        icon: <GraduationCapIcon />,
        description: "Diploma in Computer Science Engineering",
        skills: [
          "Computer Science",
          "Foundations",
        ],
      },
    ],
  },
]
