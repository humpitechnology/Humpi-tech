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
- `npm run seed` - add sample quote requests to `data/quote_requests.csv`
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

### Request a Quote Backend

The contact page posts quote requests to `POST /api/request-quote`. Submissions are validated server-side, sanitized, rate limited, checked for recent duplicates by email, stored in `data/quote_requests.csv`, and then sent through SMTP email notifications and a Message India SMS confirmation. Admin tooling can read all saved records from `GET /api/request-quote`.

CSV columns:

```text
id,full_name,email,phone_number,service_required,project_details,submitted_at
```

The CSV file is created automatically with headers when missing. Each successful submission appends one row with a generated ID and ISO timestamp.

Required variables:

```env
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
SALES_EMAIL=admin@humpitechnology.in
MESSAGEINDIA_BASE_URL=http://sms.messageindia.in
MESSAGEINDIA_USERNAME=
MESSAGEINDIA_API_KEY=
MESSAGEINDIA_SENDER_ID=
MESSAGEINDIA_SMS_TYPE=TRANS
MESSAGEINDIA_PEID=
MESSAGEINDIA_TEMPLATE_ID=
```

The `MESSAGEINDIA_*` variables configure the Message India SMS provider. When any required variable is missing, the CSV submission is saved as usual but no SMS is sent. The SMS is sent server-side after the CSV row is appended, and a temporary SMS failure never blocks or corrupts the saved submission. Update the confirmation message inside `lib/sms.ts` (`buildQuoteSmsMessage`) to match your approved DLT template.

Seed sample quote requests:

```bash
npm run seed
```

The seed command uses stable sample IDs and skips records that already exist, so it can be run repeatedly without duplicating sample data.

Email setup:

1. Add SMTP host, port, username, and password for the sending mailbox.
2. Set `SALES_EMAIL` to the inbox that should receive admin alerts.
3. Submit a test quote and confirm both the admin notification and customer auto-response arrive.

End-to-end test checklist:

- Required fields show validation errors before submission.
- International phone numbers such as `+91 7031222466` are accepted.
- More than 3000 message characters are rejected.
- A successful submission clears the form and shows the success toast.
- `data/quote_requests.csv` receives a new row.
- `SALES_EMAIL` receives the `New Quote Request` email.
- The customer receives the `Thank you for contacting Humpi Technologies` email.
- A repeat submission from the same email within 5 minutes returns a friendly failure.
- Several rapid requests from the same IP are rate limited.

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
- Phone: `+91 7031222466`
- Location: Kolkata, West Bengal, India
