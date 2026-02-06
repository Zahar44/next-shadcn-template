# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## Template for New Entries

```markdown
## [Version] - YYYY-MM-DD

### Added
- New features or components that have been added

### Changed
- Changes to existing functionality

### Fixed
- Bug fixes

### Removed
- Features or files that have been removed

### Security
- Security improvements or vulnerability fixes

### Dependencies
- Dependency updates (major versions only)

### Notes
- Additional context, breaking changes, migration guides, etc.
```

---

## [0.1.0] - 2026-02-06

### Added
- **Next.js 16.1.4** project setup with App Router
- **React 19.2.3** with latest features
- **TypeScript 5.x** with strict mode enabled
- **Tailwind CSS 4** for styling with PostCSS plugin
- **shadcn/ui** component library (50+ pre-installed components)
  - UI primitives based on Radix UI
  - Fully accessible and customizable components
  - Includes: Accordion, Alert, Avatar, Badge, Button, Card, Checkbox, Dialog, Dropdown Menu, Form, Input, Label, Select, Table, Tabs, Tooltip, and many more
- **next-themes** for dark/light mode support
- **react-hook-form** with **zod** validation for forms
- **E2B sandbox configuration** (Build System v2)
  - Template definition in `e2b/template.ts`
  - Build scripts for dev and production environments
  - Pre-configured to run dev server on port 3000
  - Node.js 20 runtime with npm ci for dependencies
- **Project structure**:
  - `src/app/` - Next.js App Router with layout and home page
  - `src/components/ui/` - shadcn/ui components
  - `src/hooks/` - Custom React hooks (`use-mobile.ts`)
  - `src/lib/` - Utility functions (`utils.ts` with `cn()` helper)
- **Documentation**:
  - `README.md` - Setup guide and E2B usage
  - `components.md` - shadcn/ui component reference
  - `agents/structure.md` - Project structure guide for AI Agents
  - `agents/changelog.md` - This changelog file
- **Development tools**:
  - ESLint with Next.js configuration
  - Turbopack for faster development builds
  - Dev server bound to 0.0.0.0 for E2B compatibility

### Dependencies
Initial dependencies:
- **Core**: next@16.1.4, react@19.2.3, react-dom@19.2.3
- **UI**: 40+ @radix-ui packages, lucide-react@0.563.0
- **Forms**: react-hook-form@7.71.1, zod@4.3.6
- **Styling**: tailwindcss@4, class-variance-authority@0.7.1, clsx@2.1.1, tailwind-merge@3.4.0
- **Charts**: recharts@2.15.4
- **Utilities**: date-fns@4.1.0, cmdk@1.1.1, sonner@2.0.7, vaul@1.1.2
- **E2B**: e2b@2.10.5
- **Dev**: typescript@5, tsx@4.21.0, eslint@9, dotenv@16.5.0

### Notes
- This is the initial project setup for a Next.js + shadcn/ui template
- Configured for E2B sandboxes with automatic dev server startup
- Dev server binds to 0.0.0.0:3000 for external accessibility
- Port readiness may take up to 90 seconds on first startup in E2B sandbox
- All shadcn/ui components are pre-installed and ready to use
- Project uses App Router (not Pages Router) - add new routes in `src/app/`
- TypeScript strict mode is enabled for better type safety
