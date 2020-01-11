import isNonNegativeInteger from './isNonNegativeInteger'

interface Obj {
  [k: number]: any,
}

/**
 * Takes all values matching non-negative integer keys in an object
 * and puts them in an array
 */
export default <O extends Readonly<Obj>, V extends O[keyof O]>(o: O) => {
  const indices = Object.keys(o)
    .map(Number)
    .filter(isNonNegativeInteger)

  const minKey = Math.min(...indices)
  const maxKey = Math.max(...indices)
  const arr: V[] = []

  for (let i = minKey; i <= maxKey; ++i) {
    arr[i] = o[i]
  }

  return arr
}
