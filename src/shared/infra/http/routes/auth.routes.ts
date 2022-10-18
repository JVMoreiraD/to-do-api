import { Router } from "express";

import { AuthenticateUserController } from "@modules/users/useCases/authenticateUser/AuthenticateUserController";

const authenticateUserController = new AuthenticateUserController();

const auth = Router();

auth.post("/singIn", authenticateUserController.handle);

export { auth };
