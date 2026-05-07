# CLAUDE.md — PrivateAgent.ch

## Project
PrivateAgent.ch is a static Next.js landing page for Ali's managed OpenClaw AI-Operator service for Swiss SMBs.

- Public brand/domain: `privateagent.ch` (live, HTTPS, Hostpoint)
- GitHub: `morningstarnasser/PrivateAgent.ch`
- VPS path: `/root/.openclaw/workspace/repos/privateagent.ch`
- Mac path: `~/Desktop/_Websites & Apps/privateagent.ch/`
- Stack: Next.js 16 static export, React 19, Framer Motion, Lucide, Spline (3D)
- Build output: `out/`
- Register: brand (landing/marketing — design IS the product)

See `PRODUCT.md` for full product/brand/users context (loaded by impeccable skill).

## Commands
```bash
npm install
npm run dev      # localhost:3000 (also exposed on LAN at 192.168.1.x:3000)
npm run build    # static export to out/
npm run lint
npx tsc --noEmit
```

## Deployment
- **Trigger:** push to `main` → GitHub Actions FTPS to Hostpoint webspace root `/`.
- **Workflow:** `.github/workflows/deploy-hostpoint.yml` (`SamKirkland/FTP-Deploy-Action@v4.3.6`).
- **Secrets in GitHub:** `HOSTPOINT_FTP_SERVER`, `HOSTPOINT_FTP_USERNAME`, `HOSTPOINT_FTP_PASSWORD`.
- **Live verify:** `https://privateagent.ch/` and `https://www.privateagent.ch/` both 200.
- Raw FTPS/mail credentials only in vault: `~/Documents/obsidian-vault/ai-brain/credentials/privateagent-hostpoint-ftp.md`, `privateagent-hostpoint-mail.md`.

## Design System (current — light theme since 2026-05-06)

**Theme:** warm light paper. No dark default anymore.

| Token | Value | Use |
|-------|-------|-----|
| `--paper` | `oklch(0.985 0.006 80)` | page bg |
| `--ink-strong` | `oklch(0.10 0.015 80)` | headings |
| `--amber` | `oklch(0.72 0.20 55)` | single accent (sodium amber) |
| `--amber-bright` | `oklch(0.78 0.22 60)` | highlights |
| `--ink (button bg)` | `oklch(0.10 0.015 80)` | primary CTA dark on light |

**Type:**
- Body: Inter 400–800 (`cv11`, `ss01`, `ss03` features on)
- Mono: JetBrains Mono — labels, tier IDs, tickers, code-feel UI
- Italic: **Instrument Serif italic** for h1/h2 emphasis (`<em>` tag inside headings) — replaces gradient text bans
- h1: `clamp(36–72px)` inside Spline hero card
- h2: `clamp(34–64px)` with serif italic accent

**Background:** `.ai-mesh` — drifting OKLCH radial gradient + 80×80 grid lines, animated 40s/80s loops. No aurora-blob anymore.

## Hero — Spline 3D bot in dark card
- Component: `components/spline-hero.tsx`
- Scene: `https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode` (3D humanoid robot, free Spline asset, ~2MB)
- Loader: `dynamic(() => import("@splinetool/react-spline"))` with `ssr: false` and `<BotPoster />` fallback
- Layout: `0.85fr 1.15fr` grid (copy left, bot right). Stage `min-height: 600px` desktop, `480px` tablet, `360px` mobile.
- **Mobile auto-cursor:** on `(hover: none)` matchMedia (and not `prefers-reduced-motion`), a `requestAnimationFrame` loop dispatches `MouseEvent('mousemove')` on the Spline canvas in a Lissajous pattern (sin/cos with different frequencies). Real `touchstart` / `touchmove` dispatches a mousemove at the touch coords and pauses auto-cycle for 1.6s.
- **Watermark cover:** `.spline-watermark-cover` is a 220×80 (160×64 mobile) radial-gradient block anchored bottom-right that fades from card-base color to transparent — masks the "Built with Spline" badge without looking like a flat black box.
- **Static fallback PNG:** `public/brand/ai-operator-bot.png` (266KB, extracted from the live Spline canvas via `canvas.toDataURL`) — used as poster while Spline loads.

## Components
| File | Purpose |
|------|---------|
| `landing.tsx` | Page composition; uses `useLenis()` directly (Lenis smooth scroll) |
| `spline-hero.tsx` | Dark Spline 3D card with mobile auto-cursor |
| `live-feed.tsx` | Streaming operator-log terminal (new entry every 4–7s, typed-in animation, color-coded tags) |
| `status-ticker.tsx` | Telemetry-style scrolling pills (HET-NUE 1.4ms · TG online · etc.) — replaces marquee |
| `tilt-card.tsx` | 3D perspective tilt + cursor spotlight bento card (replaces old `bento.tsx` which was deleted) |
| `animated-icon.tsx` | Lucide icon registry with per-icon hover variants (pulse, spin, tilt, scan, shake, rise) |
| `counter.tsx` | useInView-driven number animation (used in timeline-sticky stats) |
| `magnetic.tsx` | Cursor-magnetic button wrapper (existing) |
| `split-text.tsx` | Word- or character-level reveal with rotateX + blur (existing, extended with `mode="char"`) |
| `contact-status.tsx` | Reads `?contact=ok|error|missing|invalid` from URL after PHP redirect |

Old components removed in 2026-05-06 light-pivot: `bento.tsx`, `marquee.tsx`, `hero-logo.tsx`, `lenis-provider.tsx`.

## Contact form
- **PHP handler:** `public/contact.php` (deployed as `/contact.php` on Hostpoint).
- **Honeypot:** hidden `website` field; bots fill it → silent success redirect.
- **Validation:** name/email/message required server-side. Email via `FILTER_VALIDATE_EMAIL`.
- **Mail flow:**
  1. **Admin notification** → `info@privateagent.ch` (To) + `info@creativesync.ch` (Cc). Reply-To set to the customer.
  2. **Customer confirmation** → only if admin send succeeded. Personal Du-form, signed by Ali.
- **Status feedback:** redirect to `/?contact=<status>#kontakt`; client `ContactStatus` component renders the banner and smooth-scrolls to it.

## Brand assets (`public/brand/`)
- `private-agent-logo.png` — current handshake logo (black silhouette + dot-network) on transparent. Used in nav and footer at native colors.
- `ai-operator-bot.png` — static Spline-bot poster, extracted from live canvas (266KB).
- `og-image.png` — social card.
- `*.old.*` — archived previous brand iterations, kept for reference.

## Architecture notes
- **Static export only.** No SSR, no API routes. Contact form posts to a separate `contact.php` endpoint.
- **Scroll:** Lenis (`lib/use-lenis.ts`) — `duration: 1.05`, `lerp: 0.085`, called directly from `landing.tsx` (no provider component).
- **Reduced motion:** global media query disables all `*-animation`, marquee, scroll-beam, mesh-drift, and the mobile Spline auto-cursor.
- **Performance budget:** mobile 4G, LCP < 2.5s. Spline ~2MB lazy-loaded; everything else static.
- **No Tailwind.** Raw CSS in `app/globals.css` with custom properties.
- **No emoji** in source per `coding-style.md`.

## Recent design pivots
- **2026-05-04** — `design/blowmind-upgrade` merged: dark premium, indigo→violet→cyan, aurora blobs, magnetic CTAs, bento, Lenis. (Now superseded.)
- **2026-05-06** — Light pivot: paper bg + sodium amber + Spline 3D bot + italic serif accents. Removed gradient text, aurora, glassmorphism-as-default. Added impeccable `PRODUCT.md`. New components above.

## Safety
- Never commit raw FTPS/mail/SMTP credentials.
- Don't overwrite Hostpoint webspace via direct FTPS without confirmation — always go through GitHub Actions on `main`.
- Don't push to `main` without `npm run build` succeeding locally.
