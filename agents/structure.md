# Project Structure

## Overview
This is a **Next.js 16.1.4** template with **shadcn/ui** components, configured for **E2B sandboxes**. It uses the Next.js App Router, React 19, TypeScript, and Tailwind CSS 4.

## Technology Stack
- **Framework**: Next.js 16.1.4 (App Router)
- **React**: 19.2.3
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4 + tw-animate-css
- **UI Components**: shadcn/ui (50+ pre-built components)
- **Theme**: next-themes for dark/light mode support
- **Forms**: react-hook-form + zod validation
- **E2B**: Sandbox template with pre-built dev environment

## Directory Structure

```
next-shadcn-template/
├── agents/                    # AI Agent documentation
│   ├── structure.md          # This file - project structure guide
│   └── changelog.md          # Project changelog
├── e2b/                      # E2B template configuration
│   ├── template.ts          # E2B v2 template definition
│   ├── build.dev.ts         # Development build script
│   └── build.prod.ts        # Production build script
├── public/                   # Static assets
│   └── [static files]       # Images, fonts, etc.
├── src/                      # Source code
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout with providers
│   │   ├── page.tsx         # Home page
│   │   └── [routes]/        # Add new routes here
│   ├── components/          # React components
│   │   └── ui/             # shadcn/ui components (50+ components)
│   ├── hooks/              # Custom React hooks
│   │   └── use-mobile.ts   # Mobile detection hook
│   └── lib/                # Utility functions
│       └── utils.ts        # Tailwind CSS class merging utility
├── components.json          # shadcn/ui configuration
├── components.md           # shadcn/ui component reference
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration (v4)
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies

```

## Where to Add New Code

### 📄 Pages & Routes
**Location**: `src/app/`

- Create new routes by adding folders: `src/app/[route-name]/page.tsx`
- Add layouts: `src/app/[route-name]/layout.tsx`
- Add loading states: `src/app/[route-name]/loading.tsx`
- Add error boundaries: `src/app/[route-name]/error.tsx`
- Use route groups with `(folder-name)` for organization without affecting URL

**Example**:
```
src/app/
  ├── dashboard/
  │   ├── page.tsx        # /dashboard
  │   └── settings/
  │       └── page.tsx    # /dashboard/settings
  └── (marketing)/
      ├── about/
      │   └── page.tsx    # /about
      └── contact/
          └── page.tsx    # /contact
```

### 🎨 UI Components
**Location**: `src/components/ui/`

- **Do NOT manually edit** files in `src/components/ui/` - these are managed by shadcn/ui CLI
- To add new shadcn/ui components, use: `npx shadcn@latest add [component-name]`
- See `components.md` for list of available components
- For custom modifications, create wrapper components in `src/components/`

### 🧩 Custom Components
**Location**: `src/components/`

- Create feature-specific components: `src/components/[ComponentName].tsx`
- Create component folders for complex components with multiple files
- Use PascalCase for component filenames

**Example**:
```
src/components/
  ├── Header.tsx
  ├── Footer.tsx
  ├── Navbar/
  │   ├── Navbar.tsx
  │   ├── NavItem.tsx
  │   └── index.ts
  └── ui/  # shadcn/ui components (managed by CLI)
```

### 🪝 Custom Hooks
**Location**: `src/hooks/`

- Create custom React hooks with `use` prefix: `use-[hook-name].ts`
- Example: `use-auth.ts`, `use-fetch.ts`, `use-local-storage.ts`
- Keep hooks pure and reusable

### 🔧 Utilities & Helpers
**Location**: `src/lib/`

- Add utility functions: `src/lib/[utility-name].ts`
- API clients: `src/lib/api.ts`
- Constants: `src/lib/constants.ts`
- Type definitions: `src/lib/types.ts`
- Existing: `utils.ts` (cn() function for Tailwind classes)

### 🎯 API Routes
**Location**: `src/app/api/`

- Create API endpoints: `src/app/api/[endpoint]/route.ts`
- Use Route Handlers for GET, POST, PUT, DELETE, etc.

**Example**:
```
src/app/api/
  ├── users/
  │   └── route.ts        # /api/users
  └── posts/
      ├── route.ts        # /api/posts
      └── [id]/
          └── route.ts    # /api/posts/[id]
```

### 🖼️ Static Assets
**Location**: `public/`

- Images: `public/images/`
- Icons: `public/icons/`
- Fonts: `public/fonts/`
- Access in code: `/images/logo.png` (leading slash, no "public")

### 🎨 Styling
- **Primary**: Use Tailwind CSS utility classes
- **Global styles**: `src/app/globals.css` (imports Tailwind directives)
- **Theme configuration**: Modify `tailwind.config.ts`
- **CSS variables**: Defined in `globals.css` for shadcn/ui theming

## Naming Conventions

- **Files**:
  - Components: `PascalCase.tsx` (e.g., `Button.tsx`, `UserProfile.tsx`)
  - Utilities: `kebab-case.ts` (e.g., `format-date.ts`, `api-client.ts`)
  - Hooks: `use-kebab-case.ts` (e.g., `use-auth.ts`, `use-mobile.ts`)
- **Folders**: `kebab-case` (e.g., `user-profile/`, `api-routes/`)
- **Variables & Functions**: `camelCase`
- **Types & Interfaces**: `PascalCase`
- **Constants**: `UPPER_SNAKE_CASE`

## Key Files

### Configuration Files
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript compiler options
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS v4 configuration
- `components.json` - shadcn/ui CLI configuration
- `eslint.config.mjs` - ESLint rules (Next.js defaults)
- `postcss.config.mjs` - PostCSS with Tailwind plugin

### Source Files
- `src/app/layout.tsx` - Root layout (HTML structure, providers, metadata)
- `src/app/page.tsx` - Home page component
- `src/lib/utils.ts` - `cn()` utility for conditional class names
- `src/hooks/use-mobile.ts` - Mobile breakpoint detection hook

### Documentation
- `README.md` - Project setup and E2B usage guide
- `components.md` - shadcn/ui component reference with examples
- `agents/structure.md` - This file
- `agents/changelog.md` - Project changelog

## Development Workflow

### Adding shadcn/ui Components
```bash
npx shadcn@latest add [component-name]
# Example: npx shadcn@latest add button
# Available: accordion, alert, avatar, badge, button, card, checkbox,
#            dialog, dropdown-menu, form, input, label, select, table, etc.
```

### Running the Project
```bash
npm install          # Install dependencies
npm run dev         # Start dev server (localhost:3000)
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
```

### E2B Template
```bash
E2B_API_KEY="your-key" npm run e2b:build      # Build production template
E2B_API_KEY="your-key" npm run e2b:build:dev  # Build dev template
```

## Important Notes

### shadcn/ui Components
- 50+ pre-installed UI components in `src/components/ui/`
- Built on Radix UI primitives
- Fully customizable and accessible
- See `components.md` for complete list and import examples

### App Router (Next.js 13+)
- Uses `src/app/` directory for routing
- `page.tsx` exports default component for route
- `layout.tsx` for nested layouts
- `loading.tsx` for loading states
- `error.tsx` for error boundaries
- Server Components by default (add `"use client"` for client components)

### TypeScript
- Strict mode enabled
- Use explicit types for props and function returns
- Leverage type inference where appropriate

### Styling Best Practices
- Prefer Tailwind utility classes over custom CSS
- Use `cn()` from `src/lib/utils.ts` for conditional classes
- Use CSS variables (defined in `globals.css`) for theme colors
- Leverage shadcn/ui components for consistent design

### State Management
- React hooks (useState, useReducer) for local state
- Context API for shared state
- React Hook Form + Zod for form state and validation
- No additional state management library included (add if needed)

## Adding New Features

When adding new features, follow this pattern:

1. **Create the necessary files** in appropriate directories
2. **Use existing shadcn/ui components** where possible
3. **Create custom components** in `src/components/` for feature-specific UI
4. **Add utilities** in `src/lib/` for helper functions
5. **Create hooks** in `src/hooks/` for reusable logic
6. **Update changelog** in `agents/changelog.md`
7. **Test locally** with `npm run dev`
8. **Build** with `npm run build` to ensure no errors

## Questions?

For Next.js documentation: https://nextjs.org/docs
For shadcn/ui components: https://ui.shadcn.com
For E2B sandboxes: https://e2b.dev/docs
