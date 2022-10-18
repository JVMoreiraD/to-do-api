import { User } from "@prisma/client";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    create({ username, email, password }: ICreateUserDTO): Promise<User>;
}
export { IUsersRepository };
