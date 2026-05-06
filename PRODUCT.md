# PRODUCT.md — PrivateAgent.ch

## Register
brand

This is a marketing landing page where design IS the product. The page must convince a Swiss business owner that PrivateAgent.ch is a serious operator company, not another AI demo. The design carries 60% of the persuasion; the copy carries 40%.

## Product Purpose
PrivateAgent.ch sells **managed private OpenClaw AI-Operators** for Swiss SMBs, agencies, and operative teams. The buyer pays CHF 390–990 setup plus monthly retainer to delegate recurring operative work (Inbox triage, calendar checks, browser portal automation, daily reports, customer messaging on Telegram/WhatsApp) to a private agent running on a dedicated Hetzner VPS in Germany.

It is explicitly **not**:
- A no-code chatbot tool
- A SaaS subscription with a shared multi-tenant runtime
- A generic ChatGPT wrapper
- A consulting hour package

It is: a hardened, monitored, human-approved, private operator instance built and run for one customer at a time.

## Users
**Primary:** Swiss small/medium business owners and agency operators (35–60), German/Swiss-German speaking, technically literate but not engineers. They own their inbox, their calendar, their phone, their customer relationships. They have tried ChatGPT, found it useful but unintegrated, and are losing 5–15 hours/week to portal logins, mail triage, calendar conflicts, recurring reports, and "remind-me-please" messaging.

**Secondary:** Solo founders and consultants who want their own private operator (not a shared SaaS) for confidentiality reasons (legal, healthcare, finance, family office).

What they need from this page:
1. **Fast trust establishment.** Swiss buyers don't trust flashy bullshit. They trust precision, restraint, real infrastructure mentions, and visible craft.
2. **Concrete examples** of what an agent actually does in their day, not abstract "AI for business" copy.
3. **Pricing transparency** before any "Demo buchen" forced funnel.
4. **A reason to believe** the privacy claim. Hetzner ISO 27001, dedicated VPS, BYO API keys, human approval, audit logs.

## Brand
**Voice:** Swiss-precise. German first, English allowed for technical terms. Direct, never salesy. Says "wir" instead of "PrivateAgent.ch", "du" instead of "Sie" for tech buyers but "Sie" never used. No exclamation marks. No em dashes. Numbers and concrete words over adjectives ("14 emails triaged · 3 drafts ready" beats "powerful AI automation").

**Tone keywords:** confident, technical, calm, hands-on, slightly nerdy. Closer to a Swiss systems engineer than a SaaS marketer.

**Personality cues:**
- Lists actual infrastructure (Hetzner, ufw, fail2ban, Caddy)
- Mentions human approval as a feature, not an afterthought
- Doesn't promise replacement of staff, promises delegation of recurring tasks
- Uses operator/operations vocabulary, not "AI co-pilot" or "intelligent assistant"

**Anti-references:**
- Anything in the ChatGPT/Claude/Gemini consumer aesthetic (cream-and-black serif marketing, soft pastel gradients, "It just works" bromides)
- Vercel-template aesthetic (the indigo→violet→cyan gradient + aurora blob is the AI-SaaS first reflex; we are currently in this trap)
- Linear/Notion/Cal.com clean-pastel-card grid
- Crypto/web3 neon glow on black
- LinkedIn corporate enterprise navy
- Generic Bootstrap dashboard
- Feature-card-grid landing pages where every section is the same 3-column tile arrangement

## Strategic Principles
1. **Show ops, don't promise ops.** Every section should feel like looking at a control room, not a brochure. Live timestamps, real tool names, real numbers, real screenshots of agent activity.

2. **Swiss pragmatism beats American hype.** No "10x your productivity", no "transform your business", no "AI revolution". Every claim is small enough to be verifiable.

3. **Restraint is the differentiator.** The market is full of loud, gradient-soaked AI landing pages. PrivateAgent.ch wins by feeling more like a custom-built engineering studio than a SaaS product.

4. **Motion as proof of life.** Animations exist to communicate that the agents move, watch, react, report. Not because motion is trendy. Every animation should answer "what does an agent do?". Decorative motion is a distraction.

5. **Pricing on the page.** Three tiers, real numbers, no "Contact for pricing" except on the Ops+ tier. Hidden pricing reads as enterprise-untrustworthy in the Swiss SMB market.

6. **The contact form converts, not a calendar widget.** The buyer wants to write 3 sentences about their problem and get a human answer in German, not book a 30-min Zoom slot at 9am Tuesday.

## Constraints
- **Tech:** Next.js 16 static export. Framer Motion + Lenis already installed. Lucide for icons. Tailwind not used; raw CSS in `app/globals.css` with custom properties.
- **Hosting:** Hostpoint FTPS deploy. No SSR, no API routes (the contact form posts to a separate `contact.php` endpoint).
- **Performance:** Mobile users on Swiss 4G; LCP target <2.5s, FID <100ms, CLS <0.05.
- **Accessibility:** German content, must respect `prefers-reduced-motion`, keyboard-navigable nav and contact form.
- **i18n:** German only for v1. English/French/Italian later, not now.
- **Content already exists** in `lib/data.ts`. Copy is good. The job is design + motion, not a rewrite.
