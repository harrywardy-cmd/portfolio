# Harry Ward | Software Engineering Portfolio

A modern, responsive software engineering portfolio built with **Next.js 16, React 19, TypeScript, and Tailwind CSS v4**.

The portfolio showcases my software engineering projects, technical experience, GitHub activity, algorithms and data structures practice, and ongoing development work through a clean, responsive, and performance-focused web application.

---

## ✨ Highlights

* **Next.js 16** App Router architecture
* **React 19** with TypeScript
* Responsive, mobile-first design
* Light and dark theme support
* Live GitHub repository integration
* Dynamic project showcase
* Algorithms & Data Structures section
* Engineering activity dashboard
* Technical blog *(coming soon)*
* SEO-focused structure
* Accessibility-conscious UI
* Modern component architecture

---

## 🛠️ Tech Stack

| Technology          | Purpose                                      |
| ------------------- | -------------------------------------------- |
| **Next.js 16**      | React framework and application architecture |
| **React 19**        | User interface development                   |
| **TypeScript**      | Static typing and developer safety           |
| **Tailwind CSS v4** | Utility-first styling                        |
| **shadcn/ui**       | Reusable UI components                       |
| **Lucide React**    | Interface icons                              |
| **React Icons**     | Technology and brand icons                   |
| **next-themes**     | Light and dark theme management              |
| **GitHub REST API** | Live GitHub repository and activity data     |

---

## 📂 Project Structure

```text
src/
├── app/              # Application routes and pages
├── components/       # Reusable UI components
│   ├── layout/       # Layout and navigation components
│   ├── sections/     # Portfolio sections
│   └── ui/           # Shared UI components
├── content/          # Portfolio and page content
├── lib/              # Utilities and API integrations
├── providers/        # Application providers
├── styles/           # Global styles
└── types/            # TypeScript type definitions

public/               # Static assets
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **pnpm** installed on your machine (`corepack enable` sets up the pinned pnpm version).

### 1. Clone the repository

```bash
git clone https://github.com/harrywardy-cmd/portfolio.git
```

### 2. Navigate to the project

```bash
cd portfolio
```

### 3. Install dependencies

```bash
pnpm install
```

### 4. Configure environment variables

```bash
cp .env.example .env.local
```

Then fill in the values:

| Variable | Required | Purpose |
| --- | --- | --- |
| `GITHUB_TOKEN` | Recommended | Live GitHub stats. Without it the contributions count shows "—" and the GitHub API is limited to 60 requests/hour. |
| `RESEND_API_KEY` | For the contact form | Sends contact form emails via [Resend](https://resend.com). |
| `NEXT_PUBLIC_SITE_URL` | Once a custom domain is live | Canonical URL for metadata, sitemap and robots.txt. Falls back to the Vercel production URL. |

### 5. Start the development server

```bash
pnpm dev
```

### 6. Open the application

Visit:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

### Development

```bash
pnpm dev
```

Starts the Next.js development server.

### Production Build

```bash
pnpm build
```

Creates an optimized production build.

### Production Server

```bash
pnpm start
```

Runs the production build locally.

### Linting

```bash
pnpm lint
```

Runs ESLint to identify code quality and style issues.

### Tests

```bash
pnpm test        # run once
pnpm test:watch  # re-run on file changes
```

Runs the [Vitest](https://vitest.dev) suite in `tests/`. It covers the GitHub and LeetCode stat parsing and fallbacks, the contact form API (validation and HTML escaping), the site URL, the sitemap and robots.txt, and checks that every listed project has a detail page. Lint, type checks, tests and a production build also run on every push and pull request via GitHub Actions.

---

## ✍️ Writing a Blog Post

Add an MDX file to `content/blog/`, e.g. `content/blog/my-post.mdx`:

```mdx
export const metadata = {
  title: "My Post",
  description: "One-sentence summary shown in the post list.",
  date: "2026-09-24",
  draft: true,
};

Write the post in Markdown here.
```

Drafts are visible in `pnpm dev` but hidden in production. Set `draft: false` to publish. The Blog link in the navigation and footer appears automatically once at least one post is published.

---

## ☁️ Deployment

The site is built for [Vercel](https://vercel.com). Import the repository, then add `GITHUB_TOKEN`, `RESEND_API_KEY` and (once the domain is live) `NEXT_PUBLIC_SITE_URL` under **Project → Settings → Environment Variables**. Vercel detects pnpm from `pnpm-lock.yaml`. Turn on **Analytics** and **Speed Insights** in the Vercel project to start collecting visitor and performance data; both are already wired into the layout.

If GitHub or LeetCode are unreachable, the homepage falls back gracefully instead of failing the build.

---

## 🗺️ Development Roadmap

### ✅ Completed

* [x] Initial project architecture
* [x] Responsive navigation
* [x] Light and dark theme system
* [x] Hero section
* [x] GitHub API integration
* [x] Live "Currently Building" section

### 🚧 In Progress

* [ ] Featured Projects section
* [ ] Engineering Dashboard
* [ ] Experience Timeline

### 🔜 Planned

* [ ] Technical Blog
* [ ] Algorithms & Data Structures section
* [ ] Contact section
* [ ] Analytics
* [ ] Performance optimisation
* [ ] Additional accessibility improvements

---

## 📸 Preview

> Screenshots and additional project previews will be added as development progresses.

---

## 🌐 Live Website

**Coming soon.**

The portfolio is currently under active development.

---

## 👨‍💻 About

**Harry Ward**
Software Developer | Computer Science Graduate | IT Service Desk Analyst

I’m building my career in software engineering with a focus on developing practical applications, strengthening my algorithms and data structures knowledge, and continuously improving my engineering practices.

This portfolio serves as both a professional showcase and an ongoing record of that journey.

### Connect

* **GitHub:** https://github.com/harrywardy-cmd
* **LinkedIn:** https://www.linkedin.com/in/harry-ward-b2b9b4319

---

## 📄 License

This project is licensed under the **MIT License**.
