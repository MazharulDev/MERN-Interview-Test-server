type Drawings = [
  {
    clientX: number;
    clientY: number;
    newColour?: string;
    newLinewidth?: number;
    transparency?: string;
  }
];

export type IDrawing = Drawings[][];
