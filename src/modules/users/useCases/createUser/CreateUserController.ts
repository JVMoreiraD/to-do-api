import { Request, Response } from "express";

import { UsersRepository } from "@modules/users/repositories/prisma/UsersRepository";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { email, password, name } = request.body;

        const usersRepository = new UsersRepository();

        const createUserUseCase = new CreateUserUseCase(usersRepository);

        const result = await createUserUseCase.execute({
            email,
            password,
            name,
        });

        return response.json(result);
    }
}

export { CreateUserController };
