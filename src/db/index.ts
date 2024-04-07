import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = "ここにSupabaseのDATABASE_URIを入れる";
const client = postgres(connectionString);
const db = drizzle(client, { schema });

export default db;