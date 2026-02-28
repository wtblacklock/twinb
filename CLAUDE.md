# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build
npm run lint     # ESLint via Next.js
```

There are no tests in this project.

## Architecture

This is a **Next.js 14 (App Router)** marketing website for TwinB, a product & growth engineering consultancy. It uses TypeScript, Tailwind CSS, and `motion/react` (Framer Motion) for animations.

### Key Conventions

- **Path alias**: `@/` maps to the project root (`tsconfig.json` paths)
- **Layout**: `app/layout.tsx` wraps all pages with `<Header>` and `<Footer>`. The `<main>` tag has `md:pt-[50px]` offset for the fixed header.
- **Container**: Max width `1280px`, `px-6` padding — consistently applied via `Section` component and `container mx-auto px-6 max-w-[1280px]` inline.
- **Fonts**: Space Grotesk (`--font-sans`) + JetBrains Mono (`--font-mono`) loaded via `next/font/google`.
- **Colors**: All via CSS variables in `globals.css` (`--background`, `--foreground`, `--accent`, `--muted`, `--muted-foreground`, `--border`). Tailwind classes like `bg-background`, `text-foreground`, etc. map to these.

### Pages

- `/` — Homepage
- `/product` — Product Engineering service page (anchored sections: `#architecture`, `#performance`, `#security`, `#infrastructure`, `#observability`, `#roadmap`)
- `/growth` — Growth Engineering service page (anchored sections: `#positioning`, `#adoption`, `#conversion`, `#retention`, `#automation`, `#brand-assets`)
- `/work` — Case study directory; `/work/[slug]` for individual cases
- `/process` — Engagement process page
- `/insights` — Blog/articles; `/insights/[slug]` for individual posts
- `/about`, `/contact` — Static pages

Nav structure is driven by `config/nav.ts` — update anchors there to keep the header mega-menu in sync.

### Contact / Form Flow

The `ServicePanel` component (`components/ServicePanel.tsx`) is the primary contact form. It slides in from the right on desktop, bottom-sheet on mobile. It supports two variants:
- `"productReview"` — triggered from the "Request a Product Review" CTA in the header and homepage
- `"serviceInquiry"` — triggered from individual service sections, pre-selects the relevant service

Form submissions POST to `/api/contact`. The `useDialog` hook (`hooks/useDialog.ts`) manages open/close state, focus trapping, and scroll-lock — use it whenever you need to open `ServicePanel`.

### Work Items Data

`lib/work-items.ts` exports `workItems: WorkItem[]` — the single source of truth for case studies. Both the `/work` directory page and individual `[slug]` pages derive from this.

### Shared Components

- `Section` — standard section wrapper with consistent vertical padding and container
- `CTA` — full-width dark CTA banner; accepts an `onOpen` prop to open `ServicePanel` instead of linking to `/contact`
- `SectionCTA` — floating mobile sticky CTA (hidden via CSS when mobile menu is open via `body[data-mobile-menu="open"]`)
- `HighlightOnView` — scroll-triggered text highlight animation
- `JumpNav` — in-page anchor navigation (used on `/product` and `/growth`)
- `MastheadLines` — animated decorative lines for hero sections
- `WorkCard` / `WorkDirectoryCard` / `EditorialCard` — card variants for work/insights listings

### Environment

Copy `.env.example` to `.env.local`. `GEMINI_API_KEY` is required for any Gemini AI API routes. `APP_URL` sets the hosted URL for self-referential links.
