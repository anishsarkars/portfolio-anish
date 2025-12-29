# Portfolio Website Guide

This is a comprehensive guide explaining the structure, content, and usage of this Next.js portfolio website.

## 📁 Project Structure Overview

```
portfolio/
├── public/                     # Static assets
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── components/             # React components
│   ├── data/                   # Data files (your content!)
│   └── lib/                    # Utility functions
├── content/                    # Blog/MDX content
├── package.json                # Dependencies
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

---

## 📄 File-by-File Breakdown

### `/public/` - Static Assets

| File | Purpose |
|------|---------|
| `me.png` | Your profile photo/avatar displayed in the hero section |
| `cmh.png` | Logo for Computer Market Hub (work experience) |
| `munshot.png` | Logo for Munshot (work experience) |
| `bgiem.png` | Logo for Baderia Global Institute (education) |

> **Note:** Add company/institution logos here. Use PNG, JPG, or SVG format. Reference them as `/filename.ext` in the data file.

---

### `/src/data/` - Content Data

#### `resume.tsx` - **Main Content File** ⭐

This is the most important file! It contains ALL your portfolio content:

```typescript
export const DATA = {
  // Personal Information
  name: "Samiksha Shukla",
  initials: "SS",
  description: "...",          // Short bio shown in hero
  summary: "...",              // Detailed about section
  avatarUrl: "/me.png",        // Profile photo
  location: "India",
  
  // Skills Array
  skills: ["PyTorch", "Langchain", ...],
  
  // Work Experience Array
  work: [
    {
      company: "Company Name",
      title: "Your Role",
      logoUrl: "/logo.png",
      start: "August 2024",
      end: "December 2024",
      description: "What you did...",
      href: "https://company.com",
      location: "Remote",
      badges: []
    }
  ],
  
  // Education Array
  education: [{...}],
  
  // Projects Array
  projects: [{...}],
  
  // Hackathons Array
  hackathons: [{...}],
  
  // Social Links
  contact: {
    social: {
      GitHub: { url: "...", navbar: true },
      LinkedIn: { url: "...", navbar: true },
      X: { url: "...", navbar: true }
    }
  }
}
```

#### `blog.ts` - Blog Configuration

Contains blog-related data and MDX file mappings.

---

### `/src/app/` - Pages

| File | Purpose |
|------|---------|
| `page.tsx` | **Homepage** - Renders all sections (hero, about, work, education, skills, projects, hackathons, contact) |
| `layout.tsx` | Root layout with theme provider, fonts, and metadata |
| `globals.css` | Global styles and CSS variables |
| `favicon.ico` | Browser tab icon |
| `blog/` | Blog page and individual post pages |

---

### `/src/components/` - UI Components

| File | Purpose |
|------|---------|
| `navbar.tsx` | Top navigation bar with links and theme toggle |
| `resume-card.tsx` | Card component for work/education entries |
| `project-card.tsx` | Card component for project entries |
| `hackathon-card.tsx` | Card component for hackathon entries |
| `mode-toggle.tsx` | Dark/Light theme toggle button |
| `theme-provider.tsx` | Theme context provider |
| `icons.tsx` | SVG icon components (GitHub, LinkedIn, X, etc.) |
| `mdx.tsx` | MDX renderer for blog posts |
| `ui/` | Base UI components (avatar, badge, button, card, dock, tooltip) |
| `magicui/` | Animation components (blur-fade, blur-fade-text, dock) |

---

### `/content/` - Blog Content

Store your blog posts as `.mdx` files here. Each file becomes a blog post.

Example: `hello-world.mdx`

---

### Configuration Files

| File | Purpose |
|------|---------|
| `tailwind.config.ts` | Tailwind CSS theme customization |
| `tsconfig.json` | TypeScript settings |
| `next.config.mjs` | Next.js configuration |
| `components.json` | Shadcn/UI configuration |
| `package.json` | Project dependencies |
| `.eslintrc.json` | ESLint rules |

---

## 🚀 How to Run

### Prerequisites
- Node.js 18+ installed
- pnpm, npm, or yarn

### Installation

```bash
# Navigate to portfolio folder
cd portfolio

# Install dependencies (using pnpm - recommended)
pnpm install

# OR using npm
npm install

# OR using yarn
yarn install
```

### Development

```bash
# Start development server
pnpm dev

# The site will be available at http://localhost:3000
```

### Production Build

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

---

## ✏️ How to Customize

### 1. Update Your Content

Edit `/src/data/resume.tsx`:

- **Personal Info**: Change `name`, `initials`, `description`, `summary`
- **Skills**: Modify the `skills` array
- **Work Experience**: Add/edit entries in the `work` array
- **Education**: Add/edit entries in the `education` array
- **Projects**: Add/edit entries in the `projects` array
- **Hackathons**: Add/edit entries in the `hackathons` array
- **Social Links**: Update URLs in `contact.social`

### 2. Update Images

1. Add your images to `/public/`
2. Reference them in `resume.tsx` as `/imagename.ext`
3. Common images:
   - Profile photo: `me.png`
   - Company logos: `companyname.png`
   - School logos: `schoolname.png`

### 3. Add Company Logos

For work experience entries without logos:
1. Download the company logo
2. Save it to `/public/` (e.g., `companyname.png`)
3. Update the `logoUrl` in resume.tsx to `/companyname.png`

### 4. Customize Theme

Edit `tailwind.config.ts` to change colors, fonts, and other theme settings.

### 5. Add Blog Posts

1. Create a new `.mdx` file in `/content/`
2. Add frontmatter and content
3. The post will automatically appear on the blog page

---

## 📱 Key Sections

| Section | Description | Data Source |
|---------|-------------|-------------|
| Hero | Name, short bio, profile photo | `name`, `description`, `avatarUrl` |
| About | Detailed summary/background | `summary` |
| Work Experience | Professional experience timeline | `work[]` |
| Education | Academic background | `education[]` |
| Skills | Technical skills badges | `skills[]` |
| Projects | Featured projects grid | `projects[]` |
| Hackathons | Hackathon participation timeline | `hackathons[]` |
| Contact | Get in touch message with social links | `contact.social` |

---

## 🎨 Features

- ✅ **Dark/Light Mode** - Automatic theme switching
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Animations** - Blur fade effects on scroll
- ✅ **SEO Optimized** - Meta tags and structured data
- ✅ **Fast Performance** - Next.js optimizations
- ✅ **Blog Support** - MDX-powered blog
- ✅ **Easy Updates** - Single data file for all content

---

## 🔧 Troubleshooting

### Images not showing?
- Ensure images are in `/public/`
- Check file names (case-sensitive)
- Use correct path format: `/imagename.ext`

### Content not updating?
- Restart the dev server after changing `resume.tsx`
- Clear browser cache

### Build errors?
- Run `pnpm install` to ensure all dependencies are installed
- Check for TypeScript errors in the terminal

---

## 📞 Current Portfolio Content

### Personal Info
- **Name**: Samiksha Shukla
- **Role**: AI/ML Engineer
- **Focus**: Machine Learning, Deep Learning, NLP, Backend Development

### Experience (2 positions)
1. Computer Market Hub - AI Intern (Aug 2024 - Dec 2024)
2. Munshot - AI Intern (Aug 2025 - Sept 2025)

### Projects (4 projects)
1. ContextMemory - Memory system for AI applications
2. AIxAI - MCP-powered agent generator
3. HomeSage - Real estate price prediction
4. n8n Clone - Visual workflow automation

### Hackathons (2 events)
1. Smart India Hackathon (SIH) - Top finalist
2. Hack JKLU - 3rd Place Winner

### Education
- B.Tech in Computer Science, BGIEM (2021-2025)

### Skills
PyTorch, Langchain, RAG, LangGraph, PydanticAI, Python, Machine Learning, Deep Learning, Agentic AI, FastAPI, SQLAlchemy, Pydantic
