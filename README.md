# PrivateAgent.ch

[![Deploy to Hostpoint](https://github.com/morningstarnasser/PrivateAgent.ch/actions/workflows/deploy-hostpoint.yml/badge.svg)](https://github.com/morningstarnasser/PrivateAgent.ch/actions/workflows/deploy-hostpoint.yml)

Private OpenClaw agents for Swiss business operations.

## Positioning

PrivateAgent.ch is a premium managed OpenClaw service for entrepreneurs and Swiss SMBs. It offers private AI operators on isolated infrastructure with messaging, email, calendar, browser automation, reports, social media workflows, monitoring and human support.

## Reference analysis

Reference: `suisse-agent.ch`

Core offer observed:
- Private OpenClaw-style agent on a dedicated server
- Gmail, browser, Telegram integrations
- Managed setup, security, updates and support
- Individual and company plans
- Strong argument against DIY VPS complexity

PrivateAgent.ch differentiation:
- More premium Swiss-B2B visual identity
- Stronger workflow language: “operator”, “business ops”, “human approval”
- Focus on WhatsApp/Telegram, Swiss SMB workflows, reports, media QC and custom automations
- Cleaner pricing as setup + monthly management instead of commodity VPS subscription

## Name/domain candidates checked

DNS NS lookup on 2026-05-03:

- `privateagent.ch` — no NS found, likely available
- `clawops.ch` — no NS found, likely available
- `privateagent.ch` — no NS found, likely available
- `agentforge.ch` — no NS found, likely available

Domain purchased/connected: `privateagent.ch`. Hosting/deploy target: Hostpoint FTPS via GitHub Actions.

## Tech

- Next.js
- React
- Framer Motion
- Lucide icons
- 21st.dev-ready component structure / agentic UI direction

## Run

```bash
npm install
npm run dev
npm run build
```


## Deploy

Deploy is automated via GitHub Actions on every push to `main`.

Required repository secrets:

- `HOSTPOINT_FTP_SERVER`
- `HOSTPOINT_FTP_USERNAME`
- `HOSTPOINT_FTP_PASSWORD`

The workflow builds the static Next.js export and uploads `out/` to Hostpoint via FTPS.
