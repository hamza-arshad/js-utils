import { objectToArray } from '../src'

describe('objectToArray', () => {
  it('Should convert object to array', () => {
    const o = {
      3: 'd',
      '10': 'k',
      '0': 'a',
      '1': 'b',
      '6': 'g',
      8: 'i',
      11: 'l',
      '4': 'e',
      7: 'h',
      13: 'n',
      '9': 'j',
      '12': 'm',
      '2': 'c',
      5: 'f',
    }
    const result = objectToArray(o)
    expect(result).toMatchSnapshot()
  })
})
