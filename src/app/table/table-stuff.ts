import {Line, Row, Table} from "../input";

export interface TableItem {
  [key: string]: string
}

const toObject = (obj: any, x: any): any => ({...obj, ...x})

function createItemsFrom(table: Table): TableItem[] {
  return table.rows.map(rowToTableItem)
}

function rowToTableItem(row: Row | Line): TableItem {
  if(row.type === 'row') {
    return row.cells
      .map((cell, index) => ({[index]: cell.text}))
      .reduce(toObject)
  } else {
    return {
      '0': row.text,
    }
  }
}

export interface TableColumn {
  name: string;
}

function createColumnsFrom(tableItems: TableItem[]): TableColumn[] {
  const sortedColumnNames = tableItems
    .map(item => Object.keys(item))
    .sort((a, b) => b.length - a.length);

  if (sortedColumnNames.length < 1) {
    return []
  }

  return sortedColumnNames[0].map(name => ({name}))
}

export interface TableStuff {
  columns: TableColumn[];
  items: TableItem[];
}

export const EMPTY: TableStuff = {
  columns: [],
  items: [],
}

export function createTableStuffFrom(table: Table): TableStuff {
  const items = createItemsFrom(table);

  return {
    columns: createColumnsFrom(items),
    items,
  }
}
