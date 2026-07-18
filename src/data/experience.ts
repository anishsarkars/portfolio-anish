import type { ExperienceItemType } from '../components/work-experience';

export const experience: ExperienceItemType[] = [
  {
    id: 'flip',
    companyName: 'Flip',
    positions: [
      {
        id: 'flip-designer',
        title: 'Product Designer',
        employmentType: 'Internship',
        location: 'Remote',
        employmentPeriod: { start: '07.2026' },
        description: `- Designing and improving product experiences.`,
      },
    ],
  },
  {
    id: 'greenflow',
    companyName: 'GreenFlow Ventures',
    positions: [
      {
        id: 'greenflow-pe',
        title: 'Product Engineer',
        employmentType: 'Internship',
        employmentPeriod: { start: '06.2026' },
        description: `- Working on product engineering and shipping customer-facing features.`,
      },
    ],
  },
  {
    id: 'tgn',
    companyName: 'TGN Ventures',
    positions: [
      {
        id: 'tgn-fellow',
        title: 'Fellow',
        employmentType: 'Fellowship',
        location: 'Oklahoma, United States · Remote',
        employmentPeriod: { start: '05.2026' },
        description: `- One of 20 builders selected globally from a highly competitive applicant pool, with a $5,000 grant opportunity.`,
      },
    ],
  },
  {
    id: 'muta',
    companyName: 'Muta Social',
    companyLogo: '/logos/muta.ico',
    positions: [
      {
        id: 'muta-designer',
        title: 'Product Designer',
        employmentType: 'Internship',
        location: 'Hyderabad, Telangana, India · Remote',
        employmentPeriod: { start: '03.2026', end: '05.2026' },
        description: `- Worked on product design and user experience.`,
      },
    ],
  },
  {
    id: 'gdgoc',
    companyName: 'GDGOC - CDGI',
    companyLogo: '/logos/gdgoc.png',
    positions: [
      {
        id: 'gdgoc-lead',
        title: 'Lead',
        employmentPeriod: { start: '08.2025' },
        description: `- Leading developer community initiatives, impacting 3,000+ students.`,
      },
    ],
  },
  {
    id: 'intervue',
    companyName: 'Intervue.io',
    companyLogo: '/logos/intervue.png',
    positions: [
      {
        id: 'intervue-intern',
        title: 'Technology Intern',
        employmentType: 'Internship',
        location: 'Bengaluru, Karnataka, India · Remote',
        employmentPeriod: { start: '01.2025', end: '03.2025' },
        description: `- Built WhatsApp automation that cut operations time by ~30%.
- Worked on product improvements and automation. (Intervue appeared on Shark Tank India '24.)`,
      },
    ],
  },
  {
    id: 'drdo',
    companyName: 'Defence Research and Development Laboratory (DRDL) — DRDO',
    positions: [
      {
        id: 'drdo-intern',
        title: 'Software Engineer Intern',
        employmentType: 'Apprenticeship',
        location: 'Hyderabad, Telangana, India · On-site',
        employmentPeriod: { start: '07.2023', end: '09.2023' },
        description: `- Worked on internal defence systems.
- Led frontend development, focused on usability and enterprise software.`,
      },
    ],
  },
  {
    id: 'brightchamps',
    companyName: 'BrightChamps',
    companyLogo: '/logos/brightchamps.png',
    positions: [
      {
        id: 'brightchamps-instructor',
        title: 'Technical Instructor',
        employmentType: 'Part-time',
        location: 'East Region, Singapore · Remote',
        employmentPeriod: { start: '07.2022', end: '11.2022' },
        description: `- Mentored students globally, teaching programming (started at age 16).`,
      },
    ],
  },
];
