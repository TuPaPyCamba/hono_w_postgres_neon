import { Hono } from "hono";
import { createUser } from "./users.controller.js";

// EndPoints

const usersRouter = new Hono();

usersRouter.post("/create", createUser);
// usersRouter.get("/");
// usersRouter.get("/");
// usersRouter.patch("/");
// usersRouter.delete("/");

export default usersRouter;
