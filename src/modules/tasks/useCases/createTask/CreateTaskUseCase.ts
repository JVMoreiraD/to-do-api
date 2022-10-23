import { ITaskRepository } from "@modules/tasks/repositories/ITaskRepository";

interface IRequest {
    user_id: string;
    description: string;
}

class CreateTaskUseCase {
    constructor(private taskRepository: ITaskRepository) {}

    async execute({ user_id, description }: IRequest) {
        const task = await this.taskRepository.create({ user_id, description });
        return task;
    }
}
export { CreateTaskUseCase };
