import "reflect-metadata";
import "dotenv/config";
import "express-async-errors";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import SwaggerUI from "swagger-ui-express";

import { AppError } from "@shared/errors/AppError";

import swaggerFile from "../../../swagger.json";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(swaggerFile));

app.use(router);

app.use(
    (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction
    ) => {
        if (error instanceof AppError) {
            return response
                .status(error.statusCode)
                .json({ message: error.message });
        }

        return response.status(500).json({
            status: "error",
            message: `Internal server Error - ${error.message}`,
        });
        next();
    }
);

export { app };
