import { Request, Response } from "express";

import { TaskRepository } from "@modules/tasks/repositories/prisma/TaskRepository";

import { ListTaskByUserUseCase } from "./ListTaskByUserUseCase";

class ListTaskByUserController {
    async handle(request: Request, response: Response) {
        const { user_id } = request.query;

        const taskRepository = new TaskRepository();

        const listTaskByUserUseCase = new ListTaskByUserUseCase(taskRepository);

        const result = await listTaskByUserUseCase.execute({
            user_id: user_id as string,
        });

        return response.json(result);
    }
}

export { ListTaskByUserController };
