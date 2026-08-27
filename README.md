# Dr. Maya Torem Website

Public website for Dr. Maya Torem, built with Next.js, React, TypeScript, and
Tailwind CSS. The production site is available at
[drmayatorem.com](https://drmayatorem.com).

## Local development

Requirements:

- Node.js
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

| Path | Purpose |
| --- | --- |
| `src/app/page.tsx` | Home page |
| `src/app/about/page.tsx` | About page |
| `src/app/services/page.tsx` | Services page |
| `src/app/contact/page.tsx` | Contact page |
| `src/components/layout.tsx` | Shared header and footer |
| `src/components/contact-form.tsx` | Contact form UI and submission logic |
| `src/app/api/contact/route.ts` | Contact email API |
| `src/content/site-content.json` | Website copy, contact details, and notification recipients |
| `public/` | Public images and other static assets |

Most text and contact information can be updated in
`src/content/site-content.json` without changing page components.

## Contact email configuration

The contact API sends mail through [Resend](https://resend.com). Set the
following environment variable locally and in Vercel:

```text
RESEND_API_KEY=your_resend_api_key
```

For local development, place it in `.env.local`. Environment files are ignored
by Git and must never be committed.

Notification recipients are configured in
`contact.notificationEmail` inside `src/content/site-content.json`. The form
must not solicit or transmit medical details or other sensitive personal
information because submissions are delivered by email.

## Validation

Run these checks before publishing:

```bash
npm run lint
npm run build
```

## Deployment

The GitHub repository is
[`yaroncan/dr-maya-torem-website`](https://github.com/yaroncan/dr-maya-torem-website)
and is connected to Vercel.

- Pull-request branches receive a Vercel preview deployment.
- Merging a pull request into `main` triggers the production deployment.
- Confirm the Vercel deployment succeeds, then verify the affected page on
  [drmayatorem.com](https://drmayatorem.com).

Do not commit API keys, environment files, patient information, or form
submissions to the repository.
