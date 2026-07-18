import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { profile } from '../data/profile';
import { projects } from '../data/projects';

export const prerender = true;

// Generated from the same data the site renders, so /llms.txt never drifts.
// Format follows https://llmstxt.org: H1 + blockquote summary + link sections.
export const GET: APIRoute = async ({ site }) => {
  const base = (site?.toString() ?? 'https://aniish.me/').replace(/\/$/, '');
  const socialLines = [
    ...profile.socials.map((s) => `- ${s.label}: ${s.href}`),
    `- Email: ${profile.email}`,
    `- Book a call: ${profile.bookCall}`,
    `- Website: ${profile.website}`,
  ].join('\n');

  const projectLines = projects
    .map((p) => {
      const link = p.liveLink ?? p.githubLink ?? base;
      const impact = p.impact ? ` (${p.impact})` : '';
      return `- [${p.title}](${link})${impact}: ${p.description}`;
    })
    .join('\n');

  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
  const postLines = posts
    .map((p) => `- [${p.data.title}](${base}/blog/${p.id.replace(/\/index$/, '')}): ${p.data.description}`)
    .join('\n');
  const writingSection = postLines ? `\n## Writing\n\n${postLines}\n` : '';

  const body = `# ${profile.name}

> ${profile.role}. ${profile.bio}

- Location: ${profile.location}
${socialLines}

## Projects

${projectLines}
${writingSection}
## Pages

- [Home](${base}/): About, experience, and featured projects
- [Projects](${base}/projects): Full list of projects
- [Full content](${base}/llms-full.txt): Every page as one Markdown file
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
