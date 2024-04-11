import type { Config } from "drizzle-kit"

const drizzleConfig = {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  breakpoints: true,
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || "postgres://postgres.mywbwmbjwnxqtvuptkub:ek8ey2eFZWuJU5QU@aws-0-ap-northeast-1.pooler.supabase.com:6543/postgres",
  },
} satisfies Config

export default drizzleConfig