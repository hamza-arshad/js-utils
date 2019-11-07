import isNonNegativeInteger from './isNonNegativeInteger'

type O = Readonly<{
  [k: number]: any,
}>

export default <Obj extends O, V extends Obj[keyof Obj]>(o: Obj) => {
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
