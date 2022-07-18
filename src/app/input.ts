export interface Table {
  rows: (Row | Line)[];
}

export const EMPTY: Table = {
  rows: [],
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

export function columnsFrom(table: Table): number {
  const lengths: number[] = table.rows.map(row => {
    if (row.type === 'row') {
      return row.cells.length;
    }

    return 1;
  });
  return Math.max(...lengths, 0)
}
