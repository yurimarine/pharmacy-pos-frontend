# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint (eslint, no extra args needed)
```

No test suite is configured yet.

## Stack

- **Next.js 16.2.2** with App Router and `src/` directory — see AGENTS.md: read `node_modules/next/dist/docs/` before writing Next.js code
- **React 19.2.4**
- **Tailwind CSS v4** — configured entirely via CSS (`src/globals.css`), no `tailwind.config.js`. Theme tokens are CSS variables defined in `@theme inline {}`.
- **shadcn/ui** (`base-maia` style, `hugeicons` icon library) — components live in `src/components/ui/`. Add new components with `npx shadcn add <component>`.
- **Redux Toolkit** + **Axios** — store and API service files exist as stubs (`src/redux/`, `src/services/api/`) but packages are not yet installed. Install before using.

## Architecture

### Route structure

```
/              → redirects to /auth/login
/auth/login    → login page (no layout wrapper)
/admin/*       → admin section (SidebarProvider + AppSidebar + Header layout)
```

The root `src/app/layout.tsx` wraps everything in `<TooltipProvider>`. The `src/app/admin/layout.tsx` adds the sidebar shell.

### Path alias

`@/` maps to `src/`. Always use this alias for imports.

### shadcn `render` prop pattern

This version of shadcn uses a `render` prop instead of `asChild`:

```tsx
// Correct
<SidebarMenuButton render={<Link href="/admin/dashboard" />}>Label</SidebarMenuButton>

// Wrong — asChild is the old API
<SidebarMenuButton asChild><Link href="...">Label</Link></SidebarMenuButton>
```

### Styling conventions

- Tailwind v4: use utility classes directly; no `extend` object — add custom tokens in `src/globals.css` inside `@theme inline {}`.
- `cn()` from `@/lib/utils` for conditional class merging (clsx + tailwind-merge).
- Dark mode via `.dark` class (`@custom-variant dark (&:is(.dark *))`).
