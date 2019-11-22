function getValue<T extends {}>(val: T) {
  if (val instanceof Date) {
    return val.toISOString()
  }

  return String(val)
}

interface O<V> {
  [key: string]: V,
}

export default <V>(obj: null | undefined | Readonly<O<V>>) => {
  if (obj === undefined || obj === null) {
    return ''
  }

  const entries = Object.entries(obj)
  const mappedEntries = entries.map(([k, v]) => [k, String(getValue(v))] as const)
  const transformedObj = Object.fromEntries(mappedEntries)
  const params = new URLSearchParams(transformedObj)
  return params.toString()
}
