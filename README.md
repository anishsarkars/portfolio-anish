# Anish Sarkar Portfolio

A minimal, pixel-perfect dev portfolio based on the design of [chanhdai.com](https://github.com/ncdai/chanhdai.com).

## Features

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS v4**
- **Framer Motion** for animations
- **Shadcn UI** components
- **MDX** support for blogs and components
- **Responsive design** with a focus on details

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Data Migration

All data is stored in `src/features/portfolio/data/`. You can update your info there:
- `user.ts`: Basic info, bio, avatar.
- `experiences.tsx`: Work history and education.
- `projects.ts`: Your projects.
- `social-links.ts`: Your social profiles.
- `awards.ts`: Hackathons and awards.

## Credits

Original design and template by [Nguyen Chanh Dai](https://github.com/ncdai/chanhdai.com).
