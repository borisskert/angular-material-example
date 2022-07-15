import {Table} from "../input";

export function columnsFrom(table: Table) {
  const lengths: number[] = table.rows.map(row => row.cells.length);
  return Math.max(...lengths, 0)
}

export interface GridRow {
  items: GridItem[];
}

export interface GridItem {
  text: string;
}

export interface GridStuff {
  columns: number;
  rows: GridRow[];
}

export const EMPTY: GridStuff = {
  columns: 0,
  rows: [],
}

export function createGridFrom(table: Table): GridStuff {
  const columns = columnsFrom(table);

  const rows = table.rows.map(row => {
    const items = row.cells.map(cell => ({text: cell.text}));

    const others: GridItem[] = arrayOf({text: ''}, columns - items.length);

    return ({items: [...items, ...others]})
  });

  return {
    columns,
    rows: rows,
  };
}

function arrayOf<T>(value: T, n: number): T[] {
  if (n <= 0) return []
  return [value, ...arrayOf(value, n - 1)]
}
