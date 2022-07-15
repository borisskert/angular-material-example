import {createFrom, Table} from "./table-stuff";

describe('TableStuff', () => {
  it('should create TableItems from empty table', () => {
    const table: Table = {
      rows: []
    }

    expect(createFrom(table)).toEqual([])
  });

  it('should create TableItems from table with one row and one column', () => {
    const table: Table = {
      rows: [{
        cells: [{
          text: 'abc'
        }]
      }]
    }

    const expected = [{
      '0': 'abc'
    }]

    expect(createFrom(table)).toEqual(expected)
  });

  it('should create TableItems from table with one row and two columns', () => {
    const table: Table = {
      rows: [{
        cells: [{
          text: 'abc'
        }, {
          text: 'xyz'
        }]
      }]
    }

    const expected = [{
      '0': 'abc',
      '1': 'xyz',
    }]

    expect(createFrom(table)).toEqual(expected)
  });
});
