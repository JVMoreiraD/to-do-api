import { Request, Response } from "express";

import { TaskRepository } from "@modules/tasks/repositories/prisma/TaskRepository";

import { CreateTaskUseCase } from "./CreateTaskUseCase";

class CreateTaskController {
    async handle(request: Request, response: Response) {
        const { description, user_id } = request.body;

        const taskRepository = new TaskRepository();

        const createTaskUseCase = new CreateTaskUseCase(taskRepository);

        const result = await createTaskUseCase.execute({
            description,
            user_id,
        });

        return response.json(result);
    }
}

export { CreateTaskController };
