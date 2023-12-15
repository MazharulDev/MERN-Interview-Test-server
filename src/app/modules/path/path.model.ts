import { Schema, model } from "mongoose";

export const PathSchema = new Schema({
  drawings: [
    [
      {
        clientX: {
          type: Number,
          required: true,
        },
        clientY: {
          type: Number,
          required: true,
        },
        newColour: {
          type: String,
          required: true,
        },
        newLinewidth: {
          type: Number,
          required: true,
        },
        transparency: {
          type: String,
          required: true,
        },
      },
    ],
  ],
});

export const Path = model("Path", PathSchema);
