import { Router } from "express";

import { auth } from "./auth.routes";
import { tasksRoutes } from "./tasks.routes";

const router = Router();

router.use("/auth", auth);
router.use("/task", tasksRoutes);
export { router };
