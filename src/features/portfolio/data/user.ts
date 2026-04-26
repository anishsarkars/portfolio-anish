import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Anish",
  lastName: "Sarkar",
  displayName: "Anish Sarkar",
  username: "anishsarkars",
  gender: "male",
  pronouns: "he/him",
  bio: "Developer & Designer ✦ I craft elegant digital experiences with attention to detail and a focus on user experience",
  flipSentences: [
    "Developer & Designer",
    "Product Thinker",
    "Open Source Contributor",
    "Undergrad Student",
  ],
  address: "India",
  phoneNumber: "", 
  email: "aGlAYW5pc2hzYXJrYXIuc2l0ZQ==", // hi@anishsarkar.site base64 encoded
  website: "https://anishsarkar.site",
  jobTitle: "Developer & Designer",
  jobs: [
    {
      title: "Technology Intern",
      company: "Intervue.io",
      website: "https://intervue.io",
      experienceId: "intervue",
    },
    {
      title: "Software Engineer Intern",
      company: "DRDL - DRDO",
      website: "#",
      experienceId: "drdo",
    },
  ],
  about: `
- I’m Anish Sarkar, a Undergrad Information Technology undergraduate passionate about building and shipping real-world products. 
- I work at the intersection of frontend engineering, UI/UX design, product thinking, and execution. 
- I’ve collaborated with startups, early-stage products, and research organizations, focusing on turning ideas into usable, scalable solutions. 
- I enjoy fast iteration, clean design, and solving problems end-to-end—from idea to deployment.
`,
  avatar: "/profile.png",
  ogImage: "/profile.png",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "anish sarkar",
    "anishsarkar",
    "anishsarkars",
    "developer",
    "designer",
    "india",
  ],
  dateCreated: "2024-04-25", // YYYY-MM-DD
}
