# Services page — 7 day prompts

**Setup (once):**
```bash
git checkout -b feat/services-page
cp DESIGN.md SERVICES_COPY.md .   # both in repo root
```

**How to use:** paste one prompt per session, in order. After each day, review, run the check commands, commit, then move on. Do not paste the next day until the current one passes.

Every prompt starts with the same header. It is repeated in each block so each block can be pasted on its own.

---

## DAY 1 — Audit and skeleton (no visuals)

```text
Read DESIGN.md and SERVICES_COPY.md fully before doing anything.

Do ONLY Day 1. Do not build any page content.

Task:
1. Inspect the project and report: framework and router type (App vs Pages), styling system, fonts, colors, spacing, container width, breakpoints, border radius, shadows, icon library, animation approach, button components, card components, accordion component (if any), nav and footer implementation, and how the existing #contact/#projects anchors work.
2. Fill in every TO VERIFY row in DESIGN.md Section 3 with real values from the code. Replace the TO VERIFY markers in Section 2 as well.
3. Nav risk: the homepage nav uses anchors (Skills, Experience, Projects, Contact). Explain how those links will work from /services (for example /#contact) WITHOUT breaking the homepage. Propose the approach but do not implement it yet.
4. Create only: an empty /services route with a single <h1>Cloud & DevOps Services</h1>, using the project's existing layout, and a metadata stub using the project's existing SEO approach.
5. Do not touch any other file except DESIGN.md and the new route.

Rules: no new dependencies, no new framework, no redesign.

When done, stop and report: findings, files created, files modified, build result. Wait for my approval.
```

**Check:**
```bash
npm run lint && npm run build
git diff --stat main
```
**Commit:** `git add -A && git commit -m "feat(services): day 1 - audit and route scaffold"`

---

## DAY 2 — Hero and section shell

```text
Read DESIGN.md and SERVICES_COPY.md fully before doing anything.

Do ONLY Day 2.

Task:
1. Create a reusable Section wrapper component for the services page (container width, vertical spacing, optional heading/subheading) that matches the homepage sections. Place it following the project's component conventions.
2. Build the Hero exactly from the "Hero" block in SERVICES_COPY.md. Use existing button styles for both CTAs. Primary CTA uses the mailto from the "Contact mechanism" block. Secondary CTA links to /#projects.
3. Use the same typography scale and spacing rhythm as the homepage hero. Reuse existing animation patterns only; no new animation libraries.
4. Render the hero on /services. Do not add other sections yet.

Rules: no new dependencies, semantic HTML, one h1, visible focus states, no horizontal overflow at 320px.

When done, stop and report files created/modified, checks run, and what I should look at in the browser. Wait for approval.
```

**Check:** `npm run lint && npm run build`, then view at 320 / 768 / 1440 px.
**Commit:** `feat(services): day 2 - hero and section shell`

---

## DAY 3 — Problems and Services

```text
Read DESIGN.md and SERVICES_COPY.md fully before doing anything.

Do ONLY Day 3.

Task:
1. Create a typed data file (for example services.data.ts) holding the six problems and six services from SERVICES_COPY.md, verbatim. Include title, description, bullet list, price text, CTA label, and mailto subject.
2. Build the Problems section (six cards) and Services grid (six cards) from that data. Reuse the existing card style from the homepage (border, radius, shadow, hover behavior).
3. Prices show exactly as written ("From €149", "Custom"). Include the pricing note and the "Not a compliance certification or penetration test" note under the Security card.
4. Each service CTA is a real <a> using its own mailto subject (URL-encoded).
5. Grid: 1 column mobile, 2 tablet, 3 desktop (adjust if it clashes with the existing layout). No layout shift, no horizontal overflow.

Rules: no new dependencies, keep bullet lists short and scannable, no icons unless the project already uses an icon library, no invented content.

When done, run:
grep -riE "guarantee|cheap|affordable|24/7|best devops" <source dir>
and report any matches. Stop and report. Wait for approval.
```

**Check:** `npm run lint && npm run build`
**Commit:** `feat(services): day 3 - problems and services`

---

## DAY 4 — Metrics and proof

```text
Read DESIGN.md and SERVICES_COPY.md fully before doing anything.

Do ONLY Day 4.

Task:
1. Build the compact Metrics strip using ONLY the three values in the "Metrics" table of SERVICES_COPY.md (99.9%, 15%, 40%). Do NOT use 25% or $15K+.
2. Build the Proof section from the "Proof" block. Prefer reusing the existing project card/tag components. Keep each entry to the one line given; do not copy full project descriptions. Add the "See all projects" link to /#projects.
3. If existing testimonials are wanted here, reuse the existing testimonial component and its existing data. Do not write any new testimonial text.

Before finishing, output a table: every number and technology on the new page → where on the live site or in SERVICES_COPY.md it comes from. Flag anything you cannot trace.

Rules: no new dependencies, no invented claims. Stop and report. Wait for approval.
```

**Check:** read the traceability table yourself. Every row must be sourced.
**Commit:** `feat(services): day 4 - metrics and proof`

---

## DAY 5 — Process, audience, Cloud Watchdog

```text
Read DESIGN.md and SERVICES_COPY.md fully before doing anything.

Do ONLY Day 5.

Task:
1. Build "How I work" (four numbered steps, matching the numbered style already used in the Skills and Projects sections).
2. Build "Who I work with" (four short cards or a clean list).
3. Build the Cloud Watchdog block from SERVICES_COPY.md. Make it visually distinct from the service cards (for example a wider panel with a stronger border or the site's existing accent), but use existing tokens only. It must stay understated: no heavy gradients, no glow.
4. Include the small text "A starting offering, not an SLA or 24/7 support package." Use the CTA "Ask About Cloud Watchdog" with its own mailto subject.

Rules: no new dependencies, no 24/7 or SLA wording anywhere except that disclaimer. Stop and report. Wait for approval.
```

**Check:** `npm run lint && npm run build`; `grep -ri "24/7" <source dir>` should only match the disclaimer and FAQ.
**Commit:** `feat(services): day 5 - process, audience, watchdog`

---

## DAY 6 — FAQ, final CTA, SEO, navigation

```text
Read DESIGN.md and SERVICES_COPY.md fully before doing anything.

Do ONLY Day 6.

Task:
1. FAQ: use the project's existing accordion if it has one. If not, use native <details>/<summary> styled to match. No new library. Use the six Q&As verbatim from SERVICES_COPY.md. Must be keyboard accessible with visible focus.
2. Final CTA section verbatim from SERVICES_COPY.md, with the mailto and /#projects links.
3. SEO using the project's existing approach: title, description, canonical, Open Graph and Twitter metadata from the "SEO" block. Add /services to the sitemap if the project has one. Tell me whether the existing opengraph-image route will be reused or whether /services needs its own; do not create a large image asset.
4. Navigation: add "Services" to desktop and mobile nav, and to the footer Quick Links if appropriate. Implement the anchor approach agreed in Day 1 so Skills / Experience / Projects / Contact work from BOTH / and /services. Add an active state only if the site already has one.

Rules: do not change existing nav behavior on the homepage. No new dependencies.

When done, list exactly which nav and footer files changed. Stop and report. Wait for approval.
```

**Check:**
```bash
npm run lint && npm run build
git diff --stat main
```
Then click every nav item on `/` and `/services`, desktop and mobile.
**Commit:** `feat(services): day 6 - faq, cta, seo, nav`

---

## DAY 7 — QA and polish

```text
Read DESIGN.md and SERVICES_COPY.md fully before doing anything.

Do ONLY Day 7. Do not add features.

Task:
1. Run lint, type check, tests (if present) and the production build. Fix every error.
2. Run the dev server and report anything you can verify. List separately what you cannot verify without a browser so I can check it manually. Do not add Playwright or any test tool.
3. Review the /services code for: horizontal overflow risks at 320, 768, 1024, 1440 px; heading order (one h1, then h2/h3); clickable non-semantic elements; missing focus styles; low-contrast text; missing aria attributes on the accordion; images without alt.
4. Scan the page source for banned phrases: guarantee, cheap, affordable, 24/7, best devops, expert (flag any "expert" that is not backed by the site).
5. Verify against DESIGN.md Section 9 (Definition of done), item by item, and report pass/fail with evidence.
6. Run git diff --stat main and confirm: no unrelated files changed, no dependencies added, homepage/About/Projects/Experience/Skills unchanged apart from nav.

Polish only: small spacing, alignment, and consistency fixes to match the homepage.

Finish with the final summary: files created, files modified, components created, routes added, dependencies added (should be none), checks run, build result, assumptions made, and what I must manually review before deploying.
```

**Check:**
```bash
npm run lint && npm run build && npm run start
git diff --stat main
```
Then run Lighthouse in Chrome on `/services` (mobile), and check the page on a real phone.
**Commit:** `feat(services): day 7 - qa and polish`

---

## Before you deploy
- Decide on the 25% vs 15% and $15K+ figures. Update the metrics table in `SERVICES_COPY.md` if you confirm them.
- Reconcile "4+ years" vs "6+ years" on the homepage.
- Confirm prices (€100 to €200) match how you want to be positioned.
- Confirm you have actually done cost anomaly and AWS Budgets work before adding those bullets back.
