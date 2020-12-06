import mapValues from 'lodash/mapValues'
import isNil from 'lodash/isNil'

function getValue<T extends unknown>(val: T) {
  if (val instanceof Date) {
    return val.toISOString()
  }

  return String(val)
}

/**
 * Converts object to search params string
 */
export default (obj: null | undefined | Readonly<Record<string, any>>) => {
  if (isNil(obj)) {
    return ''
  }

  const transformedObj = mapValues(obj, getValue)
  const params = new URLSearchParams(transformedObj)
  return params.toString()
}
