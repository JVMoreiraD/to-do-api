import { Router } from "express";

import { ChangeTaskStatusController } from "@modules/tasks/useCases/changeTaskStatus/ChangeTaskStatusController";
import { CreateTaskController } from "@modules/tasks/useCases/createTask/CreateTaskController";
import { DeleteTaskController } from "@modules/tasks/useCases/deleteTask/DeleteTaskController";
import { ListTaskByUserController } from "@modules/tasks/useCases/listTaskByUser/ListTasksByUserController";

const createTaskController = new CreateTaskController();
const listTaskByUserController = new ListTaskByUserController();
const deleteTaskController = new DeleteTaskController();
const changeTaskStatusController = new ChangeTaskStatusController();

const tasksRoutes = Router();

tasksRoutes.post("/", createTaskController.handle);
tasksRoutes.get("/", listTaskByUserController.handle);
tasksRoutes.delete("/", deleteTaskController.handle);
tasksRoutes.patch("/", changeTaskStatusController.handle);

export { tasksRoutes };
