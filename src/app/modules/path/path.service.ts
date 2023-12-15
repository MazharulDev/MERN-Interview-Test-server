import { Path } from "./path.model";

const createPath = async (payload: any) => {
  const result = await Path.create(payload);
  return result;
};

const getAllPath = async () => {
  const result = await Path.find({});
  return result;
};

export const PathService = {
  createPath,
  getAllPath,
};
