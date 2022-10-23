import { Request, Response } from "express";

import { TaskRepository } from "@modules/tasks/repositories/prisma/TaskRepository";

import { ChangeTaskStatusUseCase } from "./ChangeTaskStatusUseCase";

class ChangeTaskStatusController {
    async handle(request: Request, response: Response) {
        const { id } = request.query;
        const { status } = request.body;

        const taskRepository = new TaskRepository();

        const createTaskUseCase = new ChangeTaskStatusUseCase(taskRepository);

        const result = await createTaskUseCase.execute({
            id: id as string,
            status,
        });

        return response.json(result);
    }
}

export { ChangeTaskStatusController };
