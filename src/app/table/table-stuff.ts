export interface Table {
  rows: Row[];
}

export interface Row {
  cells: Cell[];
}

export interface Cell {
  text: string;
}

interface TableItem {
  [key: string]: string
}

const toObject = (obj: any, x: any): any => ({...obj, ...x})

export function createFrom(table: Table): TableItem[] {
  if(table.rows.length < 1) {
    return []
  }

  return table.rows.map(row => {
    const indices = range(
      0,
      (x) => x < row.cells.length,
      (x) => x + 1
    );

    console.log(indices)

    return zip([row.cells, indices])
      .map(([cell, index]) => ({[index]: cell.text}))
      .reduce(toObject)
  })
}

/**
 * Creates a number array starting from specified `start` value. The `hasNext` predicate will terminate the array when applying to false
 * @param start the starting value
 * @param hasNext the predicate to check if the end of the array has been reached
 * @param next function to produce the next element
 * @returns a number array
 */
function range (start: number, hasNext: (a: number) => boolean, next: (a: number) => number): number[] {
  if (!hasNext(start)) {
    return [start]
  }

  return [start, ...range(next(start), hasNext, next)]
}

function zip (arrays: any[][]): any[] {
  const others = arrays.slice(1)
  return arrays[0].map((x, index) => [x, ...others.map(array => array[index])])
}
