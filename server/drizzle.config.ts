import { defineConfig } from 'drizzle-kit'
import { env } from './scr/env'

export default defineConfig({
  schema: './scr/db/schema.ts',
  out: './.migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
