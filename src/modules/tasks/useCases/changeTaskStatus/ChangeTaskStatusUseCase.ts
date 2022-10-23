import { ITaskRepository } from "@modules/tasks/repositories/ITaskRepository";

interface IRequest {
    id: string;
    status: boolean;
}

class ChangeTaskStatusUseCase {
    constructor(private taskRepository: ITaskRepository) {}

    async execute({ id, status }: IRequest) {
        const task = await this.taskRepository.markTask(id, status);
        return task;
    }
}
export { ChangeTaskStatusUseCase };
