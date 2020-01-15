import { isNaturalNumber } from '../src'

import numbers from './data/numbers'

describe('isNaturalNumber', () => {
  for (const n of numbers) {
    it(`Should isNaturalNumber(${n}) correctly`, () => {
      const result = isNaturalNumber(n)
      expect(result).toMatchSnapshot()
    })
  }
})
