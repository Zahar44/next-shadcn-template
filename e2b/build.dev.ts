import { name } from '../package.json'
import { template } from './template'
import 'dotenv/config'
import { Template, defaultBuildLogger } from 'e2b'

Template.build(template, {
  alias: `${name}-dev-v2`,
  cpuCount: 4,
  memoryMB: 4096,
  onBuildLogs: defaultBuildLogger(),
})
