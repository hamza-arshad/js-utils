import { toNearestByStep } from '../src'

const numbers = [
  1,
  0,
  -0,
  -1,
  -4.5,
  10000,
  Math.sqrt(2),
  NaN,
  'string',
  '5',
  '-0.4',
  Number.MAX_SAFE_INTEGER,
  Number.MIN_SAFE_INTEGER,
  Number.MAX_VALUE,
  Number.MIN_VALUE,
  Number.EPSILON,
  Infinity,
  -Infinity,
  true,
  false,
  '',
  null,
  undefined,
]

const steps = [
  0.001,
  0.002,
  0.005,
  Infinity,
  -0.001,
  1 / 300,
  100,
  0,
  NaN,
  true,
  false,
  '',
  null,
  undefined,
]

describe('toNearestByStep', () => {
  for (const n of numbers) {
    for (const step of steps) {
      it(`Should toNearestByStep(${n}, ${step}) correctly`, () => {
        // @ts-ignore
        const result = toNearestByStep(n, step)
        expect(result).toMatchSnapshot()
      })
    }
  }
})
