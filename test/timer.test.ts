import { timer } from '../src'

describe('timer', () => {
  it('should convert to a rolled range correctly', () => {
    const end = timer()
    const result = end()
    expect(result).toEqual(expect.any(Number))
  })
})
