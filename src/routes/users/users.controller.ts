import { db } from "../../db/BDConect.js";
import { users } from "../../db/tables/User.js";
import type { Context } from "hono";
import { eq } from "drizzle-orm";

export const createUser = async (c: Context) => {
  const body = await c.req.json();

  if (!body.name || !body.email) {
    return c.json({ error: "Nombre y correo son obligatorios" }, 400);
  }

  try {
    const newUser = await db
      .insert(users)
      .values({
        name: body.name,
        email: body.email,
      })
      .returning();

    return c.json({ user: newUser[0] }, 201);
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return c.json({ error: "Error al crear usuario" }, 500);
  }
};

export const getUsers = async (c: Context) => {
  try {
    const usersList = await db.select().from(users);
    return c.json({ users: usersList });
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return c.json({ error: "Error al obtener usuarios" }, 500);
  }
};

export const getUserById = async (c: Context) => {
  const { id } = c.req.param();
  const user = await db
    .select()
    .from(users)
    .where(eq(users.id, parseInt(id)));
  return c.json({ user });
};

// export const updateUser = async (c: Context) => {};

// export const deleteUser = async (c: Context) => {
//   const { id } = c.req.param();
//   await db.delete(users).where(eq(users.id, id));
//   return c.json({ message: "Usuario eliminado correctamente" }, 200);
// };
