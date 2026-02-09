import express, { Application, Request, Response } from "express";
import { prisma } from "./app/lib/prisma";
import { IndexRoutes } from "./app/routes";
import { golobalErrorHandler } from "./app/middleware/golobalErrorHandler";
import status from "http-status";
import { notFound } from "./app/middleware/notFound";

const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

app.use("/api/v1", IndexRoutes);

// Basic route
app.get("/", async (req: Request, res: Response) => {
  const specialty = await prisma.specialty.create({
    data: {
      title: "Cardiology",
    },
  });
  res.status(status.OK).json({
    success: true,
    message: "APi is working",
    data: specialty,
  });
});

app.use(golobalErrorHandler);
app.use(notFound);

export default app;
