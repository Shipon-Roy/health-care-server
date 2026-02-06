/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

const createSpecialty = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const specialty = await SpecialtyService.createSpecialty(payload);

    res.status(201).json({
      success: true,
      message: "Specialty Create successfully!",
      data: specialty,
    });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      success: true,
      message: "Failed to create Specialty!",
      error: err.message,
    });
  }
};

const getAllSpecialty = async (req: Request, res: Response) => {
  try {
    const specialty = await SpecialtyService.getAllSpecialty();

    res.status(201).json({
      success: true,
      message: "Specialty fetched successfully!",
      data: specialty,
    });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      success: true,
      message: "Failed to Fetched Specialty!",
      error: err.message,
    });
  }
};

const deleteSpecialty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const specialty = await SpecialtyService.deleteSpecialty(id as string);

    res.status(201).json({
      success: true,
      message: "Specialty Delete successfully!",
      data: specialty,
    });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      success: true,
      message: "Failed to delete Specialty!",
      error: err.message,
    });
  }
};

export const SpecialtyController = {
  createSpecialty,
  getAllSpecialty,
  deleteSpecialty,
};
