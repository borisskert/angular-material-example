import {Table} from "../input";
import {createGridFrom, GridStuff} from "./grid-stuff";
import {TableStuff} from "../table/table-stuff";

describe('TableStuff', () => {
  it('should create GridStuff from empty table', () => {
    const table: Table = {
      rows: []
    }

    const expected: GridStuff = {
      columns: 0,
      rows: [],
    }

    expect(createGridFrom(table)).toEqual(expected)
  });

  it('should create GridStuff from table with one row and one column', () => {
    const table: Table = {
      rows: [{
        cells: [{
          text: 'abc'
        }]
      }]
    }

    const expected: GridStuff = {
      columns: 1,
      rows: [
        {
          items: [
            {
              text: 'abc'
            }
          ]
        }
      ],
    }

    expect(createGridFrom(table)).toEqual(expected)
  });

  it('should create GridStuff from table with one row and two columns', () => {
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
        }
      ]
    }

    const expected: GridStuff = {
      columns: 2,
      rows: [
        {
          items: [
            {
              text: 'abc',
            },
            {
              text: 'xyz'
            }
          ]
        }
      ]
    }

    expect(createGridFrom(table)).toEqual(expected)
  });

  it('should create GridStuff from table with two rows and two columns', () => {
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

    const expected: GridStuff = {
      columns: 2,
      rows: [
        {
          items: [
            {
              text: 'abc'
            }, {
              text: 'xyz'
            }
          ]
        },
        {
          items: [
            {
              text: 'uvw'
            }, {
              text: 'qrs'
            }
          ]
        }
      ]
    }

    expect(createGridFrom(table)).toEqual(expected)
  });

  it('should create GridStuff from table with two rows and with two and three columns', () => {
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

    const expected: GridStuff = {
      columns: 3,
      rows: [
        {
          items: [
            {
              text: 'abc'
            },
            {
              text: 'xyz'
            },
            {
              text: ''
            }
          ]
        },
        {
          items: [
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

    expect(createGridFrom(table)).toEqual(expected)
  });
});
