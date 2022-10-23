import { ITaskRepository } from "@modules/tasks/repositories/ITaskRepository";

interface IRequest {
    id: string;
}

class DeleteTaskUseCase {
    constructor(private taskRepository: ITaskRepository) {}

    async execute({ id }: IRequest) {
        const task = await this.taskRepository.deleteTask(id);
        return task;
    }
}
export { DeleteTaskUseCase };
