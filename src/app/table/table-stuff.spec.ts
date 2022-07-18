import {createTableStuffFrom, TableStuff} from "./table-stuff";
import {Table} from "../input";

describe('TableStuff', () => {
  it('should create TableStuff from empty table', () => {
    const table: Table = {
      rows: []
    }

    const expected: TableStuff = {
      columns: [],
      items: []
    }

    expect(createTableStuffFrom(table)).toEqual(expected)
  });

  it('should create TableStuff from table with one row and one column', () => {
    const table: Table = {
      rows: [
        {
          type: 'row',
          cells: [{
            text: 'abc'
          }
          ]
        }
      ]
    }

    const expected: TableStuff = {
      columns: [{
        name: '0'
      }],
      items: [{
        '0': 'abc'
      }]
    }

    expect(createTableStuffFrom(table)).toEqual(expected)
  });

  it('should create TableItems from table with one row and two columns', () => {
    const table: Table = {
      rows: [
        {
          type: 'row',
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

    const expected: TableStuff = {
      columns: [
        {
          name: '0'
        },
        {
          name: '1'
        }
      ],
      items: [
        {
          '0': 'abc',
          '1': 'xyz',
        }
      ]
    }

    expect(createTableStuffFrom(table)).toEqual(expected)
  });

  it('should create TableItems from table with two rows and two columns', () => {
    const table: Table = {
      rows: [
        {
          type: 'row',
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
          type: 'row',
          cells: [
            {
              text: 'uvw'
            },
            {
              text: 'qrs'
            }
          ]
        }
      ]
    }

    const expected: TableStuff = {
      columns: [
        {
          name: '0'
        },
        {
          name: '1'
        }
      ],
      items: [
        {
          '0': 'abc',
          '1': 'xyz',
        },
        {
          '0': 'uvw',
          '1': 'qrs',
        }]
    }

    expect(createTableStuffFrom(table)).toEqual(expected)
  });

  it('should create TableColumns from table with two rows and with two and three columns', () => {
    const table: Table = {
      rows: [
        {
          type: 'row',
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
          type: 'row',
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

    const expected: TableStuff = {
      columns: [
        {
          name: '0'
        },
        {
          name: '1'
        },
        {
          name: '2'
        }
      ],
      items: [
        {
          '0': 'abc',
          '1': 'xyz',
        },
        {
          '0': 'uvw',
          '1': 'qrs',
          '2': 'bhu',
        }]
    }

    expect(createTableStuffFrom(table)).toEqual(expected)
  });

  it('should create TableColumns from table with two rows and with two and three columns and a line', () => {
    const table: Table = {
      rows: [
        {
          type: 'row',
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
          type: 'line',
          text: 'qwerty'
        },
        {
          type: 'row',
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

    const expected: TableStuff = {
      columns: [
        {
          name: '0'
        },
        {
          name: '1'
        },
        {
          name: '2'
        }
      ],
      items: [
        {
          '0': 'abc',
          '1': 'xyz',
        },
        {
          '0': 'qwerty',
        },
        {
          '0': 'uvw',
          '1': 'qrs',
          '2': 'bhu',
        }]
    }

    expect(createTableStuffFrom(table)).toEqual(expected)
  });
});
