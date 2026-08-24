# Portfolio — DevOps & Cloud Engineer

A neo-brutalist personal portfolio built with **Next.js 15 (App Router)** + **GSAP ScrollTrigger**.
Inspired by the layout of shynnguyen.vercel.app, restyled for a DevOps/Cloud profile.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit your content — one file

Everything (name, hero text, education, experience, skills, awards, projects, contact)
lives in **`data/content.js`**. Change the values there; you never need to touch the
components to update copy.

Things marked `// TODO` in `data/content.js` still need your input:
- `site.name` — the display name / brand (currently a placeholder derived from your email)
- `hero.secondaryCta.href` — link to your résumé/CV
- `contact.email` and the GitHub / LinkedIn `href`s under `contact.socials`

## Structure

```
app/
  layout.js       fonts (Space Grotesk + JetBrains Mono) + metadata
  page.js         section order
  globals.css     all styling / design tokens
components/        Navbar, Hero, Marquee, About, Experience, Skills, Awards, Projects, Contact, GsapInit
data/content.js   ← EDIT HERE
```

## Deploy

Push to GitHub and import into **Vercel** (zero config for Next.js), or run `npm run build && npm start`.
