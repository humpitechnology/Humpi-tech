# Humpi Technology Website

Premium corporate website for **Humpi Technology** built with Next.js 15, React 19, TypeScript, Tailwind CSS, ShadCN-style UI primitives, Framer Motion, Lucide React, React Hook Form, and Zod.

## Features

- Responsive enterprise-grade public website
- Editable CMS-ready data files under `data/`
- Services, industries, solutions, portfolio, case studies, careers, blog, testimonials, contact, legal pages, and custom 404
- Lightweight mocked admin dashboard at `/admin`
- Dark mode, cookie consent, newsletter, WhatsApp/call actions, scroll progress, back-to-top
- SEO metadata, sitemap, robots, canonical URLs, Open Graph, Twitter Cards, and JSON-LD
- Vercel, Netlify, Docker, and Nginx deployment-ready configuration

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Commands

- `npm run dev` - start local development
- `npm run lint` - run ESLint
- `npm run typecheck` - run TypeScript checks
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run format` - format files with Prettier
- `npm run format:check` - check formatting

## Folder Structure

```text
app/                  App Router pages, SEO routes, layouts
components/           Reusable UI, layout, forms, sections, admin
components/ui/        ShadCN-style primitives
data/                 Editable content layer
hooks/                Future reusable React hooks
lib/                  Utilities and constants
public/images/        Portfolio and testimonial assets
public/logo/          SVG logo assets and icon
styles/               Future global style modules
types/                Shared TypeScript content types
```

## Content Management

The website content is isolated in `data/*.ts`. Add services, products, reviews, projects, blogs, FAQ, jobs, and industries there without changing UI components. The admin dashboard is mocked and ready to be connected to a backend or headless CMS.

## Environment Variables

Copy `.env.example` to `.env.local` and fill values when integrations are enabled.

## Deployment

### Vercel

Import the repository into Vercel and deploy with the default Next.js settings.

### Netlify

`netlify.toml` is included. Use the Next.js runtime/plugin provided by Netlify.

### Docker

```bash
docker build -t humpi-technology .
docker run -p 3000:3000 humpi-technology
```

### Nginx

Use `nginx.conf` as a reverse proxy example in front of `next start` or a Node process manager.

## Company

- Website: `https://humpitechnology.in`
- Email: `admin@humpitechnology.in`
- Phone: `+91 7477234777`
- Location: Kolkata, West Bengal, India
