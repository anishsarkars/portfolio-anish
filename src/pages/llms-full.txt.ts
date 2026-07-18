import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { experience } from '../data/experience';

export const prerender = true;

// The full-content companion to /llms.txt: the entire site as one Markdown
// document so AI agents / LLMs can ingest everything in a single fetch
// (profile, experience, projects, and complete blog post bodies).
// Convention: https://llmstxt.org
export const GET: APIRoute = async ({ site }) => {
  const base = (site?.toString() ?? 'https://aniish.me/').replace(/\/$/, '');
  const socialLines = [
    ...profile.socials.map((s) => `- ${s.label}: ${s.href}`),
    `- Email: ${profile.email}`,
    `- Book a call: ${profile.bookCall}`,
    `- Website: ${profile.website}`,
  ].join('\n');

  const experienceMd = experience
    .flatMap((c) =>
      c.positions.map((p) => {
        const end = p.employmentPeriod.end ?? 'present';
        return `### ${p.title} · ${c.companyName} (${p.employmentPeriod.start}–${end})\n\n${p.description ?? ''}`;
      }),
    )
    .join('\n\n');

  const projectsMd = projects
    .map((p) => {
      const links = [p.liveLink && `[Live](${p.liveLink})`, p.githubLink && `[GitHub](${p.githubLink})`]
        .filter(Boolean)
        .join(' · ');
      const impact = p.impact ? ` — ${p.impact}` : '';
      return `### ${p.title}${impact}\n\n${p.description}${links ? `\n\n${links}` : ''}`;
    })
    .join('\n\n');

  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
  const postsMd = posts
    .map((p) => {
      const slug = p.id.replace(/\/index$/, '');
      const date = p.data.pubDate.toISOString().slice(0, 10);
      const md = p.body?.trim() || p.data.description;
      return `### ${p.data.title}\n\n${date} · ${base}/blog/${slug}\n\n${md}`;
    })
    .join('\n\n---\n\n');

  const body = `# ${profile.name}

> ${profile.role}. ${profile.bio}

- Location: ${profile.location}
${socialLines}

## Experience

${experienceMd}

## Projects

${projectsMd}
${postsMd ? `\n## Writing\n\n${postsMd}\n` : ''}`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
