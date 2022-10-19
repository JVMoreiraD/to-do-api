import { Router } from "express";

import { CreateTaskController } from "@modules/tasks/useCases/createTask/CreateTaskController";
import { ListTaskByUserController } from "@modules/tasks/useCases/listTaskByUser/ListTasksByUserController";

const createTaskController = new CreateTaskController();
const listTaskByUserController = new ListTaskByUserController();
const tasksRoutes = Router();

tasksRoutes.post("/", createTaskController.handle);
tasksRoutes.get("/", listTaskByUserController.handle);

export { tasksRoutes };
