import {createColumnsFrom, createItemsFrom, Table, TableColumn} from "./table-stuff";

describe('TableStuff', () => {
  it('should create TableItems from empty table', () => {
    const table: Table = {
      rows: []
    }

    expect(createItemsFrom(table)).toEqual([])
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

    expect(createItemsFrom(table)).toEqual(expected)
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

    expect(createItemsFrom(table)).toEqual(expected)
  });

  it('should create TableItems from table with two rows and two columns', () => {
    const table: Table = {
      rows: [
        {
          cells: [{
            text: 'abc'
          }, {
            text: 'xyz'
          }]
        },
        {
          cells: [{
            text: 'uvw'
          }, {
            text: 'qrs'
          }]
        }]
    }

    const expected = [
      {
        '0': 'abc',
        '1': 'xyz',
      },
      {
        '0': 'uvw',
        '1': 'qrs',
      }]

    expect(createItemsFrom(table)).toEqual(expected)
  });

  it('should create TableColumns from empty table', () => {
    const table: Table = {
      rows: []
    }

    expect(createColumnsFrom(table)).toEqual([])
  });

  it('should create TableColumns from table with one row and with one column', () => {
    const table: Table = {
      rows: [{
        cells: [{
          text: 'abc'
        }]
      }]
    }

    const expected: TableColumn[] = [{
      name: '0'
    }]

    expect(createColumnsFrom(table)).toEqual(expected)
  });

  it('should create TableColumns from table with one row and with two columns', () => {
    const table: Table = {
      rows: [
        {
          cells: [
            {
              text: 'abc'
            },
            {
              text: 'xyz'
            }
          ]
        }]
    }

    const expected: TableColumn[] = [
      {
        name: '0'
      },
      {
        name: '1'
      }
    ]

    expect(createColumnsFrom(table)).toEqual(expected)
  });

  it('should create TableColumns from table with two rows and with two columns', () => {
    const table: Table = {
      rows: [
        {
          cells: [
            {
              text: 'abc'
            }, {
              text: 'xyz'
            }
          ]
        },
        {
          cells: [
            {
              text: 'uvw'
            }, {
              text: 'qrs'
            }
          ]
        }
      ]
    }

    const expected: TableColumn[] = [
      {
        name: '0'
      },
      {
        name: '1'
      }
    ]

    expect(createColumnsFrom(table)).toEqual(expected)
  });

  it('should create TableColumns from table with two rows and with two and three columns', () => {
    const table: Table = {
      rows: [
        {
          cells: [
            {
              text: 'abc'
            },
            {
              text: 'xyz'
            }
          ]
        },
        {
          cells: [
            {
              text: 'uvw'
            },
            {
              text: 'qrs'
            },
            {
              text: 'bhu'
            }
          ]
        }
      ]
    }

    const expected: TableColumn[] = [
      {
        name: '0'
      },
      {
        name: '1'
      },
      {
        name: '2'
      }
    ]

    expect(createColumnsFrom(table)).toEqual(expected)
  });
});
