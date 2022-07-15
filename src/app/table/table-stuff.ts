export interface Table {
  rows: Row[];
}

export interface Row {
  cells: Cell[];
}

export interface Cell {
  text: string;
}

export interface TableItem {
  [key: string]: string
}

const toObject = (obj: any, x: any): any => ({...obj, ...x})

export function createItemsFrom(table: Table): TableItem[] {
  return table.rows.map(rowToTableItem)
}

function rowToTableItem(row: Row): TableItem {
  return row.cells
    .map((cell, index) => ({[index]: cell.text}))
    .reduce(toObject)
}

export interface TableColumn {
  name: string;
}

export function createColumnsFrom(table: Table): TableColumn[] {
  let tableItems = createItemsFrom(table);

  const sortedColumnNames = tableItems
    .map(item => Object.keys(item))
    .sort((a1, a2) => a2.length - a1.length);

  if (sortedColumnNames.length < 1) {
    return []
  }

  return sortedColumnNames[0].map(name => ({name}))
}
