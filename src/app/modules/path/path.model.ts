import { Schema, model } from "mongoose";

export const PathSchema = new Schema({
  drawings: [
    [
      {
        clientX: {
          type: Number,
        },
        clientY: {
          type: Number,
        },
        newColour: {
          type: String,
        },
        newLinewidth: {
          type: Number,
        },
        transparency: {
          type: String,
        },
      },
    ],
  ],
});

export const Path = model("Path", PathSchema);
