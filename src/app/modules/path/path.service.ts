import { Path } from "./path.model";

const createPath = async (payload: any) => {
  const newDrawingEvent = new Path(payload);
  const savedEvent = await newDrawingEvent.save();
  return savedEvent;
};

export const PathService = {
  createPath,
};
