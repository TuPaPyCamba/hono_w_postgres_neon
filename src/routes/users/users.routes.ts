import { Hono } from "hono";
import { createUser, getUsers } from "./users.controller.js";

// EndPoints

const usersRouter = new Hono();

usersRouter.post("/create", createUser);
usersRouter.get("/", getUsers);
// usersRouter.get("/");
// usersRouter.patch("/");
// usersRouter.delete("/");

export default usersRouter;
