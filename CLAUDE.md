# CLAUDE.md — PrivateAgent.ch

## Project
PrivateAgent.ch is a static Next.js landing page for Ali's managed OpenClaw AI-Agent service.

- Public brand/domain: `PrivateAgent.ch`
- GitHub repo: `morningstarnasser/PrivateAgent.ch`
- VPS path: `/root/.openclaw/workspace/repos/privateagent.ch`
- Main stack: Next.js static export, React, Framer Motion, Lucide Icons
- Build output: `out/`

## Commands
```bash
npm install
npm run build
```

Deployment target is Hostpoint FTPS. Do **not** hardcode credentials in scripts, commits, prompts, or logs.

## Credentials
Raw credentials are stored only in restricted Obsidian credential notes:
- `/root/obsidian-vault/ai-brain/credentials/privateagent-hostpoint-ftp.md`
- `/root/obsidian-vault/ai-brain/credentials/privateagent-hostpoint-mail.md`

Do not print, copy, or commit raw passwords. Use references only.

## Deployment Notes
- Static export is enabled in `next.config.ts` with `output: 'export'` and `images.unoptimized`.
- Build command: `npm run build`
- Upload source: `out/`
- Last known FTPS upload target: webspace root `/`.
- At first upload, `privateagent.ch` DNS was not resolving yet; verify DNS before claiming the site is live.

## Product Positioning
PrivateAgent.ch sells managed private OpenClaw AI-Operators for Swiss entrepreneurs/KMU:
- Telegram/WhatsApp operator
- Inbox and calendar ops
- Browser automation
- Business workflows and daily reports
- Private VPS, BYO API keys, human approval, monitoring and support

## CreativeSync Link
CreativeSync has a PrivateAgent.ch service section and portfolio card.
- VPS path: `/root/.openclaw/workspace/repos/creativesync.ch`
- Latest related commit: `fe32df2 chore: update AI service brand to PrivateAgent`

## Safety
- No secret exposure.
- No destructive FTP/DNS changes without explicit user confirmation.
- Before overwriting Hostpoint webspace, inspect target listing and avoid deleting unknown files unless Ali explicitly confirms.
