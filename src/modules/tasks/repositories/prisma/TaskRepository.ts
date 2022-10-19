import { ICreateTaskDTO } from "@modules/tasks/dtos/ICreateTaskDTO";
import { Task } from "@prisma/client";
import { prisma } from "@shared/infra/database/prismaClient";

import { ITaskRepository } from "../ITaskRepository";

class TaskRepository implements ITaskRepository {
    async create({ user_id, description }: ICreateTaskDTO): Promise<Task> {
        const task = await prisma.task.create({
            data: { user_id, description },
        });
        return task;
    }
    async listTaskByUser(user_id: string): Promise<Task[]> {
        const tasks = await prisma.task.findMany({ where: { user_id } });
        return tasks;
    }
    async deleteTask(id: string): Promise<void> {
        await prisma.task.delete({ where: { id } });
    }
    async markTask(id: string, status: boolean): Promise<Task> {
        const task = await prisma.task.update({
            where: { id },
            data: { status },
        });
        return task;
    }
}

export { TaskRepository };
