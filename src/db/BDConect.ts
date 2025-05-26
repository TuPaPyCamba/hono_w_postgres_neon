import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

pool
  .query("SELECT 1")
  .then(() => console.log("Conexión exitosa"))
  .catch((error) => console.error("Error de conexión:", error));

export const db = drizzle(pool);
