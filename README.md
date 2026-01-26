# Next.js + shadcn/ui E2B Template

A Next.js template with shadcn/ui components, configured for E2B sandboxes.

## E2B Template Setup (v2)

This repository uses E2B Build System v2.

### Prerequisites

1. Get your E2B API key from [E2B Dashboard](https://e2b.dev/dashboard)
2. Install dependencies: `npm install`

### Building the Template

```bash
# Set your API key and build
E2B_API_KEY="your-api-key" npm run e2b:build

# Or with custom alias
E2B_API_KEY="your-api-key" E2B_TEMPLATE_ALIAS="my-template" npm run e2b:build
```

After building, you'll get a template ID and alias that you can use in your application.

### Using the Template in Your Application

```typescript
import { Sandbox } from 'e2b'

// Create a sandbox using the template alias
const sandbox = await Sandbox.create('next-shadcn-template', {
  apiKey: process.env.E2B_API_KEY,
})

// The dev server is already running on port 3000
const url = sandbox.getHost(3000)
console.log(`Dev server: https://${url}`)

// When done
await sandbox.kill()
```

### Template Configuration

The template:
- Uses Node.js 20
- Installs dependencies with `npm ci`
- Pre-builds Next.js for faster dev startup
- Starts dev server on port 3000 (bound to 0.0.0.0)
- Is "ready" only when port 3000 is available

### NestJS Integration Notes

When using this template in a NestJS application:

1. **Increase timeout** for port readiness to at least 90 seconds (first startup may take longer)
2. **The dev server binds to 0.0.0.0** so it's accessible from outside the sandbox
3. **Use the sandbox URL** from `sandbox.getHost(3000)` to access the dev server

Example SandboxService configuration:

```typescript
// Wait longer for dev server on first startup
const MAX_WAIT_MS = 90_000 // 90 seconds

// The template already starts the dev server via setStartCmd
// No need to manually run npm run dev
```

## Project Structure

```
├── e2b/
│   ├── template.ts    # E2B v2 template definition
│   └── build.ts       # Build script
├── src/
│   ├── app/           # Next.js App Router
│   └── components/ui/ # shadcn/ui components
├── components.md      # Component reference
└── package.json
```

## Available shadcn/ui Components

See `components.md` for a complete list of installed components with import examples.

## Development

```bash
# Install dependencies
npm install

# Run dev server locally
npm run dev

# Build for production
npm run build
```
