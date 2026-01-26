import { Template, defaultBuildLogger } from 'e2b'
import { template } from './template'

const TEMPLATE_ALIAS = process.env.E2B_TEMPLATE_ALIAS || 'next-shadcn-template'

async function main() {
  const apiKey = process.env.E2B_API_KEY
  
  if (!apiKey) {
    console.error('❌ E2B_API_KEY environment variable is required')
    console.error('')
    console.error('Get your API key from: https://e2b.dev/dashboard')
    console.error('Then run: E2B_API_KEY="your-key" npm run e2b:build')
    process.exit(1)
  }

  console.log(`🚀 Building E2B template: ${TEMPLATE_ALIAS}`)
  console.log('')

  try {
    const result = await Template.build(template, {
      alias: TEMPLATE_ALIAS,
      apiKey,
      onBuildLogs: defaultBuildLogger(),
    })

    console.log('')
    console.log('✅ Template built successfully!')
    console.log('')
    console.log('Template ID:', result.templateId)
    console.log('Alias:', TEMPLATE_ALIAS)
    console.log('')
    console.log('Use in your code:')
    console.log(`  const sandbox = await Sandbox.create('${TEMPLATE_ALIAS}')`)
    console.log('')
  } catch (error) {
    console.error('❌ Build failed:', error)
    process.exit(1)
  }
}

main()
