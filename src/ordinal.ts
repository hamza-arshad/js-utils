import isNaturalNumber from './isNaturalNumber'

const got = (i: any) =>
  typeof i === 'string' ? JSON.stringify(i) : i

export default (i: number) => {
  if (!isNaturalNumber(i)) {
    throw new Error(`Number must be a natural number. Instead got: ${got(i)}`)
  }

  const j = i % 10
  const k = (i % 100) - j
  if (k !== 10) {
    if (j === 1) {
      return `${i}st`
    }
    if (j === 2) {
      return `${i}nd`
    }
    if (j === 3) {
      return `${i}rd`
    }
  }
  return `${i}th`
}
