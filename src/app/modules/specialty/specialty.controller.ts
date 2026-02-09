/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import status from "http-status";

const createSpecialty = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const specialty = await SpecialtyService.createSpecialty(payload);

  sendResponse(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Specialty Create successfully!",
    data: specialty,
  });
});

const getAllSpecialty = catchAsync(async (req: Request, res: Response) => {
  const specialty = await SpecialtyService.getAllSpecialty();

  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Specialty fetched successfully!",
    data: specialty,
  });
});

const deleteSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const specialty = await SpecialtyService.deleteSpecialty(id as string);

  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Specialty Delete successfully!",
    data: specialty,
  });
});

export const SpecialtyController = {
  createSpecialty,
  getAllSpecialty,
  deleteSpecialty,
};
