export type Project = {
  id: string;
  title: string;
  description: string;
  // Headline metric shown as an accent on the card (downloads, DAU, "Latest").
  // GitHub stars render automatically from the live count, so put non-star
  // impact here. Leave undefined to let stars speak for themselves.
  impact?: string;
  liveLink?: string;
  githubLink?: string;
};

// Ordered by what to lead with: the first three surface on the home page.
export const projects: Project[] = [
  {
    id: 'zelp',
    title: 'ZELP',
    description: 'AI-powered healthcare platform that helps patients discover the right diagnostic tests and instantly book nearby hospitals and diagnostic centres.',
    impact: '8+ hospitals · MVP live',
    liveLink: 'https://tryzelp.app',
  },
  {
    id: 'diagramr',
    title: 'Diagramr',
    description: 'A search engine for diagrams. Top 20 on Product Hunt with 90+ day-one users, 100+ organic upvotes, and 6 paying customers.',
    impact: 'Top 20 Product Hunt',
    liveLink: 'https://diagramr.vercel.app',
  },
  {
    id: 'cleanclip',
    title: 'CleanClip',
    description: 'AI background remover for videos.',
    liveLink: 'https://cleanclip.vercel.app',
  },
  {
    id: 'seenly',
    title: 'Seenly',
    description: 'A new product I\'m building.',
    liveLink: 'https://seenly.tech',
  },
  {
    id: 'cleankeyboard',
    title: 'CleanKeyboard',
    description: 'Lock your keyboard so you can wipe it down without triggering keystrokes.',
    liveLink: 'https://cleankeyboard.vercel.app',
  },
];
