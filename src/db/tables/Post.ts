import { pgTable, serial, varchar, text, integer } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  authorId: integer("author_id").references(() => users.id),
});
