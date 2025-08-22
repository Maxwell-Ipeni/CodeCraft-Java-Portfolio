# CodeCraft-Java-Port
A comprehensive full-stack developer portfolio showcasing my journey and projects as a Java full-stack developer. Built with a blend of modern frontend and backend technologies, this portfolio highlights my expertise in React, Tailwind CSS, Java (Spring Boot), MongoDB, and additional experience with PHP Laravel. Features real-world projects, technical skills, work experience, and a clean, responsive design to demonstrate both my coding proficiency and attention to detail. Perfect for recruiters, collaborators, and fellow developers to explore my full-stack capabilities.

Highlights skills, experience & responsive design. Built for developers, by a developer. #Java #React #MongoDB #Laravel #FullStack

Tech Stack: React, Tailwind CSS, Java, Spring Boot, MongoDB, PHP, Laravel, RESTful APIs, Responsive Design

## Deployment (GitHub Pages)

This repo is configured to auto-deploy to GitHub Pages on each push to `main`.

- Workflow: `.github/workflows/deploy.yml`
- Static export is produced at `out/` by `pnpm build`
- Locally, no base path is used; in CI, `basePath`/`assetPrefix` is set to `/CodeCraft-Java-Portfolio`

If you rename the repository, update `repoBasePath` in `next.config.mjs`.

## Local development

```bash
pnpm install
pnpm dev
```

## Build static export

```bash
pnpm build
# output in ./out
```
