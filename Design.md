# DESIGN.md — Read this before every task

> **Agent protocol (mandatory, every prompt):**
> 1. Read this file fully before planning or writing code.
> 2. If the task conflicts with anything here, stop and tell me. Do not silently override.
> 3. Reuse existing components and styles. Never introduce a new framework, UI library, or visual identity.
> 4. If a section below is marked `TO VERIFY`, inspect the codebase and fill it in (Section 3) before building. Then continue.
> 5. End every task with: files created, files modified, dependencies added (should be none), checks run, and anything I must review.

---

## 1. Project

- **Owner:** Olusegun Akinnola — DevOps / SRE / Platform Engineer, Lagos, Nigeria (open to remote)
- **Site:** https://olusegunakinnola.com
- **Purpose:** Engineering portfolio. Being extended with a `/services` page (Cloud & DevOps Services).
- **Source of truth for visual identity:** the existing site. The site wins over any prompt that describes a different look.

## 2. Observed structure (from the live site)

- Framework: **Next.js 16.1.6 with the App Router** (`app/layout.tsx`, `app/page.tsx`, route handlers, and file-based metadata routes).
- Currently a **single-page layout** with anchor sections: Hero → Skills → Work Experience → Recent Live Projects → Testimonials → GitHub Activity → Featured LinkedIn → Contact → Footer.
- Nav / footer quick links: **Skills, Experience, Projects, Contact** (anchors, not separate routes).
- Existing UI patterns to reuse:
  - Hero with status pill ("Available for work"), avatar, primary "Let's Talk" + "View Resume" links
  - Numbered section cards (01, 02, 03…), used in Skills and Projects
  - Category filter tabs (All / Cloud & Platform Engineering / DevOps & Site Reliability)
  - Project cards: image, number, category, title, role, description, tech tags, "Live Link"
  - Testimonial carousel (01/03 style)
  - Marquee ticker ("Code · Commits · Open Source · Build in Public")
  - Contact block: email + Copy Email, phone, location, social icons
- Existing contact mechanism: `mailto:shegezzy@gmail.com` ("Say Hello") and the `#contact` section. **Reuse this for all CTAs.** Do not add forms, backends, or third-party booking.
- Because the site is anchor-based, adding `/services` means **nav links must work from both `/` and `/services`** (e.g. `/#contact`, `/#projects`). Do not break existing anchor scrolling. Currently `components/Navbar.tsx` and `components/Footer.tsx` render client-side buttons whose handlers call `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })`; these work only when the section is in the current document. The homepage section IDs are `skills`, `experience`, `projects`, and `contact`, and global `html { scroll-behavior: smooth; }` provides native smooth scrolling for hash URLs.

## 3. Design tokens — fill from the codebase, then keep in sync

Do not guess. Read the Tailwind config / global CSS / theme files and record real values.

| Token | Value |
|---|---|
| Styling system (Tailwind / CSS Modules / styled / other) | Tailwind CSS 3.3 plus shared rules and CSS custom properties in `app/globals.css`; no CSS Modules or CSS-in-JS. |
| Font families (heading / body / mono) | Heading: Space Grotesk. Body: Source Sans 3 with locally declared `Sathoshi` fallback. Brand/display: local Monument (`Monument-R` / `Monument`). No custom mono family; Tailwind's default `font-mono` stack is used where needed. |
| Font sizes and weights used for h1 / h2 / h3 / body | Homepage h1: `clamp(3rem, 9vw, 110px)`, Monument-R, uppercase. Section h2: commonly `1.875rem` mobile / `3rem` from `md`, with some sections using `2.25rem` / `3.75rem`; display font and bold/700 where specified. h3: commonly `1.5rem` / `1.875rem`, bold/700. Body: predominantly `0.875rem`–`1rem` (400–600), with lead copy at `1.125rem`–`1.25rem`. |
| Background colors (light / dark) | Light `#FAFAFA`; dark `#1C2328`. Alternating sections use neutral overlays (`#91A3B0` or `#536878` at 5% opacity); some cards use white in light mode. |
| Text colors | Light primary `#232121`, secondary `#656464`; dark primary `#FAFAFA`, secondary/neutral `#91A3B0`. |
| Accent / brand color | Primary blue `#1560BD` (light `#2D7DD6`, dark `#0E4A9A`); accent steel blue `#4682B4` (light `#5A9ACE`, dark `#366899`). The current homepage also uses gray-800 for prominent CTAs. |
| Border color and card border style | Light dividers usually Tailwind gray-200/300; dark borders `neutral-dark` (`#536878`), sometimes with opacity. Contact cards use square 2px gray-800 / neutral-light outlines; project layouts primarily use dividers and image outlines rather than a card shell. |
| Border radius (cards / buttons / pills) | Main homepage cards and CTAs are mostly square (`0`). Pills/tags/avatar use `rounded-full` (9999px). Reusable `Button` and theme control use `rounded-lg` (0.5rem); blog cards and modal use `rounded-xl` (0.75rem). |
| Shadows | Homepage sections/cards generally use no shadow. Shared `.card-hover` uses Tailwind `shadow-xl`; `Button` hover uses `shadow-lg`; blog cards use `shadow-lg` to `shadow-2xl`; modal uses `shadow-2xl`. |
| Container max-width and section padding | Standard container is `max-w-7xl` (80rem / 1280px), centered. Horizontal section padding is `px-5` (1.25rem) then `md:px-20` (5rem). Standard vertical padding is `py-20` (5rem), with larger sections using `py-24` (6rem) or `py-32` (8rem). |
| Breakpoints | Tailwind defaults: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px. Most layout changes occur at `md`; desktop nav switches at `lg`. |
| Dark mode? (toggle / system / none) | Class-based dark mode. `ThemeContext` restores `localStorage`, otherwise initializes from `prefers-color-scheme`; `ThemeToggle` switches the root `.dark` class. |
| Icon library | Remix Icon via its CDN font stylesheet in `app/layout.tsx`; icons use `ri-*` classes. The package also declares `remixicon`. |
| Animation library / pattern (Framer Motion, CSS, none) | AOS powers one-time scroll reveals (typically 600–1000ms); Tailwind/CSS transitions and keyframes handle hover, fade/slide/scale, ticker, and cursor effects. GSAP/ScrollTrigger is globally imported but not used by the current React components. `react-fast-marquee` is installed, while the visible ticker also has custom CSS marquee keyframes. No Framer Motion. |
| Button variants (primary / secondary / ghost) and file location | Reusable `primary`, `secondary`, and `ghost` variants with `sm`/`md`/`lg` sizes in `components/ui/Button.tsx`; homepage sections also use locally styled links/buttons, commonly solid gray-800 and outlined gray-800 variants. |
| Existing accordion component? (path) | None found in `app/` or `components/`. |

Rules once filled:
- Use tokens, not raw hex values, in new code.
- New components go beside existing ones, following the same folder and naming conventions.

## 4. Visual rules

**Feel:** premium, technical, modern, trustworthy, clean, understated.

**Avoid:** heavy gradients, glassmorphism, stock photos, generic SaaS illustrations, AI-style graphics, icon overload, walls of text, extra animation, fake testimonials.

**Do:**
- Match existing spacing rhythm, card style, and animation timing.
- Keep animations subtle and consistent with what already exists.
- No horizontal overflow at any width (mobile, tablet, laptop, desktop, ultrawide).
- Semantic HTML, one `h1` per page, logical heading order, real `<a>`/`<button>` elements (no clickable divs), visible focus states, sufficient contrast, keyboard-accessible accordion.

## 5. Content accuracy (hard rules)

Never invent clients, certifications, technologies, metrics, testimonials, or achievements. Keep claims proportional to real experience.

**Supported technologies:** AWS, Terraform, GitHub Actions, GitLab CI, Jenkins, Docker, ECS/Fargate, EKS, Lambda, EventBridge, IAM, Prometheus, Grafana, CloudWatch, Dynatrace, GuardDuty, CloudTrail, AWS WAF, Trivy, SonarQube, Kubernetes, C#/.NET, Node.js/TypeScript, Python, Bash. AWS is primary; Azure (AKS) also used.

**Metrics currently on the live site (safe to use as-is):**
- 99.9% availability (Divverse, WEMA)
- 15% infrastructure cost reduction (Divverse)
- 40% shorter release cycles (Divverse)
- 30% release-efficiency improvement (WEMA)

**Currency conversion snapshot confirmed by the owner on 2026-09-28:**
- EUR selling rate: 1 EUR = ₦1,571.52
- USD selling rate: 1 USD = ₦1,346.98
- EUR remains the source price. USD and NGN displays are derived from these rates and rounded to whole currency units; `Custom` remains unchanged.

**Metrics requested for `/services` that do NOT match the live site — must be confirmed before use:**
- "25% cloud infrastructure cost reduction" — site says **15%**
- "$15K+ AWS refunds and credits secured during security incident response" — not on the site

Rule: if a number is not confirmed against the resume, do not publish it. Ask, or use the confirmed figure. Do not round up.

**Experience years:** the site currently says both "4+ years" (hero) and "6+ years" (meta description). Do not repeat either on new pages until reconciled.

**Existing projects to link to, not duplicate:** Loubby AI, Cybermap, SafeSteps, Fitbux AI Chatbot, Digital Encode Platform, ICE Queue. Link to `/#projects` rather than copying descriptions.

**Real testimonials exist** on the site (e.g. Bibin Mathew, Product Owner, Cybermap). Reuse the existing testimonial component if a testimonial is wanted. Never write new ones.

## 6. Positioning and tone

**Position as:** AWS / DevOps / Cloud Infrastructure / Reliability Engineering.
**Not:** generic freelancer, cheap developer, general IT consultant, AI consultant, security-only or Kubernetes-only consultant.

**Voice:** experienced engineer offering focused technical services. Use: practical, production-ready, reliable, measurable, focused, secure, maintainable, scalable, cost-conscious.

**Banned phrases:** "affordable", "cheap", "best DevOps engineer", "I can do anything", "guaranteed savings", "guaranteed uptime", any 24/7 support claim.

## 7. Services page copy rules

- Prices are always presented as **starting prices** ("From €X") or "Custom". No guarantees, no percentage-savings promises.
- Security review is **not** a compliance certification or penetration test.
- Cloud Watchdog (from €100/month) is a starting offering, **not** an SLA and **not** 24/7 response.
- 24/7 FAQ answer (use verbatim): *"Support arrangements depend on the engagement. The standard services focus on scheduled reviews, implementation work, and technical troubleshooting rather than guaranteed 24/7 support."*
- All CTAs route to the existing contact mechanism (`mailto:` / `#contact`).

## 8. Scope guardrails

Do not build: payments, auth, dashboards, booking, CRM, database, admin panel, CMS, subscriptions, analytics, chatbot, or contact-management systems. Do not modify unrelated pages. Do not remove existing functionality. Do not add dependencies unless already used in the project.

If something in the codebase makes a change risky (for example the anchor-only nav), **stop and explain before making a destructive change.**

## 9. Definition of done

- [ ] Home, About, Projects, Experience, Skills unchanged
- [ ] Existing nav, anchors, and contact still work
- [ ] `/services` route works; "Services" in desktop and mobile nav, active state if the site has one
- [ ] SEO metadata via the project's existing approach (title: `Cloud & DevOps Services | Olusegun Akinnola`)
- [ ] Lint, type check, tests (if present), and production build all pass
- [ ] No console errors, no broken links, no horizontal overflow
- [ ] No new dependencies
- [ ] Every number on the page traces to Section 5

## 10. Change log

Append one line per meaningful design decision or token update.

- 2026-09-28: Verified the App Router, design tokens, shared UI patterns, dark mode, animation approach, and current same-document anchor implementation from the codebase; no visual changes made.
- 2026-09-28: Recorded the owner-supplied EUR and USD selling-rate snapshot used by the services currency selector.
