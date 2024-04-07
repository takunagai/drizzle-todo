import type { Config } from "drizzle-kit"

const drizzleConfig = {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  breakpoints: true,
  driver: "pg",
  dbCredentials: {
    connectionString: "https://mywbwmbjwnxqtvuptkub.supabase.co",
  },
} satisfies Config

export default drizzleConfig