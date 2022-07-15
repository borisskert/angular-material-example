export interface Table {
  rows: Row[];
}

export interface Row {
  cells: Cell[];
}

export interface Cell {
  text: string;
}
