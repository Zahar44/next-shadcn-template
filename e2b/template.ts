import { Template, waitForPort } from 'e2b'

/**
 * E2B Template Definition (v2)
 * 
 * This template creates a Next.js + shadcn/ui development environment.
 * The sandbox starts a dev server on port 3000, bound to 0.0.0.0.
 */
export const template = Template()
  // Use Node.js 20 base image
  .fromImage('node:20-bullseye')
  
  // Set working directory
  .runCmd('mkdir -p /home/user')
  .setWorkdir('/home/user')
  
  // Copy package files first for better caching
  .addLocalFiles('.', '/home/user', {
    include: ['package.json', 'package-lock.json'],
  })
  
  // Install dependencies
  .runCmd('npm ci || npm install')
  
  // Copy the rest of the project
  .addLocalFiles('.', '/home/user', {
    exclude: ['node_modules', '.next', '.git', 'e2b'],
  })
  
  // Pre-build Next.js for faster dev startup
  .runCmd('npm run build || true')
  
  // Set start command with ready check on port 3000
  // The dev server binds to 0.0.0.0 so it's accessible externally
  .setStartCmd('npm run dev', waitForPort(3000))
