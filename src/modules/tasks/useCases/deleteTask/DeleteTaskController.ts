import { Request, Response } from "express";

import { TaskRepository } from "@modules/tasks/repositories/prisma/TaskRepository";

import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

class DeleteTaskController {
    async handle(request: Request, response: Response) {
        const { id } = request.query;

        const taskRepository = new TaskRepository();

        const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);

        const result = await deleteTaskUseCase.execute({ id: id as string });

        return response.json(result);
    }
}

export { DeleteTaskController };
