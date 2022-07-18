export interface Table {
  rows: (Row | Line)[];
}

export interface Line {
  text: string;
  type: 'line';
}

export interface Row {
  cells: Cell[];
  type: 'row';
}

export interface Cell {
  text: string;
}
