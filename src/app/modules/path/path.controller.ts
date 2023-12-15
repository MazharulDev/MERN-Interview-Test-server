import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { PathService } from "./path.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createPath = catchAsync(async (req: Request, res: Response) => {
  const { ...pathData } = req.body;
  const result = await PathService.createPath(pathData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "path created successfully",
    data: result,
  });
});

const getAllPath = catchAsync(async (req: Request, res: Response) => {
  const result = await PathService.getAllPath();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "all path showing successfully",
    data: result,
  });
});

export const PathController = {
  createPath,
  getAllPath,
};
