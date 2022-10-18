import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "@prisma/client";

import { prisma } from "../../../../shared/infra/database/prismaClient";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    async create({ name, email, password }: ICreateUserDTO): Promise<User> {
        const user = await prisma.user.create({
            data: { email, name, password },
        });
        return user;
    }
    async findByEmail(email: string): Promise<User> {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        return user;
    }
}
export { UsersRepository };
