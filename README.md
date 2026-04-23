# Clodia International FZE - Website

Static single-page-per-route website for Clodia International FZE, a subsidiary of International Finance Corporation (Miami, FL).

## Stack

- Vanilla HTML, CSS, JS (zero external dependencies except Google Fonts)
- Single shared stylesheet, single shared script
- Glassmorphism design system
- Full SEO and PWA baseline (Pattern 16): robots.txt, sitemap.xml, site.webmanifest, OG tags, Twitter cards, JSON-LD Organization schema
- Netlify Forms integration (no backend required)
- Target deployment: Netlify, publish root `"."`

## Pages

- `index.html` - Home
- `services.html` - Four service lines with SPA-grounded operational detail
- `consulting.html` - Eight practice areas
- `contact.html` - Contact form
- `imprint.html` - Legal notice (noindex)
- `privacy.html` - Privacy policy (noindex)

## Group Structure Referenced in Copy

- **International Finance Corporation** (parent, Florida Profit Corporation P24000069309, Miami)
- **Clodia International FZE** (UAE trade and clearing subsidiary, Sharjah)
- **IFB Holdings LLC** (US buyer-of-record for gold transactions, Miami L24000281331)
- **IFB International Finance Bank** (group banking channel, escrow)

## Assets to Replace

All images in `/assets/images/` are atmospheric gradient placeholders. Replace with real photography before production launch:

- `hero-dubai.jpg` (1920x1080, home hero)
- `palm-jumeirah.jpg` (1920x1080, home about section)
- `gold-bars.jpg` (1920x1080, services hero)
- `consulting.jpg` (1920x1080, consulting hero)
- `airport.jpg` (1920x1080, contact hero)
- `og-image.jpg` (1200x630, social sharing)

Optional Palm Jumeirah background video: drop an `.mp4` into `/assets/video/palm-jumeirah.mp4` and uncomment the `<video>` block in `index.html` (search for the commented `<video>` tag in the about section).

## Deployment

### 1. Push to GitHub

```bash
cd clodia-int
git init
git add .
git commit -m "Initial commit: Clodia International FZE site"
git branch -M main
git remote add origin https://<YOUR_GITHUB_PAT>@github.com/Mikixxl/clodia-int.git
git push -u origin main
```

(Create the empty `Mikixxl/clodia-int` repo on GitHub first via the web UI, then run the above.)

### 2. Deploy on Netlify

- New site from Git → select `Mikixxl/clodia-int`
- Build command: *(leave empty)*
- Publish directory: `.`
- Deploy

`netlify.toml` is already configured at the repo root with security headers, asset caching, and redirect rules for the old Jimdo URL paths (`/services/` → `/services.html`, etc.).

### 3. Attach Custom Domain

- In Netlify: Domain management → Add custom domain → `clodia-int.com` and `www.clodia-int.com`
- Add DNS records per Netlify instructions at your registrar
- Enable HTTPS (Netlify auto-provisions via Let's Encrypt)

### 4. Configure Netlify Forms

Three forms are pre-wired (`contact-main`, `contact-services`, `contact-consulting`). After first deploy:

- Netlify dashboard → Forms → verify all three forms are detected
- Forms → Notifications → add email to `info@clodia-int.com`
- Optional: add Slack or webhook integration

### 5. Google Search Console

- Add `clodia-int.com` as a property (DNS verification via TXT record, not URL prefix)
- Submit `https://www.clodia-int.com/sitemap.xml`

## Maintenance

- Year in footer auto-updates via JS
- All structural data (group info, addresses, phone, email) centralised in each page footer — update in all six HTML files if it changes (or extract to a JS include later)
- Writing voice: follow Writing-Guardrails and Text DNA Bible on any copy update. No em dashes, no LLM filler words, Murray-style prose

## License

Proprietary. © 2026 Clodia International FZE. All rights reserved.
