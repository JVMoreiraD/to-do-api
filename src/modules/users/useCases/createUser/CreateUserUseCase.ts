import { hash } from "bcrypt";

import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    async execute({ email, name, password }: ICreateUserDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new AppError("Email já em uso");
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name,
            email,
            password: passwordHash,
        });
    }
}

export { CreateUserUseCase };
