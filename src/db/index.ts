import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL || "postgres://postgres.mywbwmbjwnxqtvuptkub:ek8ey2eFZWuJU5QU@aws-0-ap-northeast-1.pooler.supabase.com:6543/postgres";
const client = postgres(connectionString);
const db = drizzle(client, { schema });

export default db;