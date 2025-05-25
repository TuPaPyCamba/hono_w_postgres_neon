import { db } from "../../db/BDConect.js";
import { users } from "../../db/models/User.js";
import type { Context } from "hono";

export const createUser = async (c: Context) => {
  const body = await c.req.json();
  await db.insert(users).values({ name: body.name, email: body.email });
  return c.json({ message: "Usuario Creado con exito" });
};
