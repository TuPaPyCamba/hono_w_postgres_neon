import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts", // Ruta correcta a tu esquema
  dialect: "postgresql", // ¡Aquí agregamos el dialecto correcto!
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
});
