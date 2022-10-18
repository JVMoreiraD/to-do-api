import { Task } from "@prisma/client";

import { ICreateTaskDTO } from "../dtos/ICreateTaskDTO";

interface ITaskRepository {
    create({ user_id, description }: ICreateTaskDTO): Promise<Task>;
    listTaskByUser(user_id: string): Promise<Task[]>;
    deleteTask(id: string): Promise<void>;
    markTask(status: boolean): Promise<Task>;
}

export { ITaskRepository };
