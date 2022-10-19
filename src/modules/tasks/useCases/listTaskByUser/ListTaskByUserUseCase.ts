import { ITaskRepository } from "@modules/tasks/repositories/ITaskRepository";

interface IRequest {
    user_id: string;
}

class ListTaskByUserUseCase {
    constructor(private taskRepository: ITaskRepository) {}

    async execute({ user_id }: IRequest) {
        const task = await this.taskRepository.listTaskByUser(user_id);
        return task;
    }
}
export { ListTaskByUserUseCase };
