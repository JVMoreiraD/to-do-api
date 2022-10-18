import { Router } from "express";

import { AuthenticateUserController } from "@modules/users/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "@modules/users/useCases/createUser/CreateUserController";

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const auth = Router();

auth.post("/singIn", authenticateUserController.handle);
auth.post("/singUp", createUserController.handle);

export { auth };
