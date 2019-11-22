import { queryObjectToString } from '../src'

describe('sliceRotate', () => {
  it('should convert an empty object correctly', () => {
    const o = {}
    const result = queryObjectToString(o)
    expect(result).toMatchSnapshot()
  })

  it('should convert a normal object correctly', () => {
    const o = {
      a: 5,
      b: 'foo',
      tr: true,
      fs: false,
      trs: 'true',
      fss: 'false',
      emptystring: '',
      d: new Date('2019-11-22T22:17:17.771Z'),
      ud: undefined,
    }
    const result = queryObjectToString(o)
    expect(result).toMatchSnapshot()
  })

  it('should convert an object with various cases correctly', () => {
    const o = {
      snake_case: 'val',
      camelCase: 'val',
      Capital: 'val',
      ALL_CAPS: 'val',
    }
    const result = queryObjectToString(o)
    expect(result).toMatchSnapshot()
  })

  it('should convert an object with numeric keys correctly', () => {
    const o = {
      11: 'eleven',
      0: 'zero',
    }
    const result = queryObjectToString(o)
    expect(result).toMatchSnapshot()
  })

  it('should convert a non-english object correctly', () => {
    const o = {
      ключ: 'значение',
      anahtar: 'değer',
      Schlüssel: 'Werte',
    }
    const result = queryObjectToString(o)
    expect(result).toMatchSnapshot()
  })

  it('should convert a weird object correctly', () => {
    const o = {
      twowords: 'kaksi sanaa',
      'with space': 'space',
      $dlr: 'val',
      _us_: 'underscore',
    }
    const result = queryObjectToString(o)
    expect(result).toMatchSnapshot()
  })
})
