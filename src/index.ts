import { serve } from "@hono/node-server";
import { Hono } from "hono";

// Routes
import usersRouter from "./routes/users/users.routes.js";

const app = new Hono();

app.route("/users", usersRouter);

// TODO: More routes
// app.route("/route", Router);
// app.route("/route", Router);
// app.route("/route", Router);
// app.route("/route", Router);
// app.route("/route", Router);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
