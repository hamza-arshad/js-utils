import castArray from 'lodash/castArray'

import isNaturalNumber from './isNaturalNumber'
import racePromises from './racePromises'

/**
 * Race promises and get the winner's index ordered by their finishing position
 */
export default <T>(promises: readonly Promise<T>[], limit = Infinity) => {
  const len = promises.length

  if (limit > len) {
    // eslint-disable-next-line no-param-reassign
    limit = len
  }

  if (!isNaturalNumber(limit) && limit !== Infinity) {
    throw new Error(`limit should be a natural number or Infinity. Instead got: ${limit}`)
  }

  if (limit === 1) {
    return racePromises(promises).then(castArray)
  }

  return new Promise<number[]>(resolve => {
    const positions: number[] = []
    for (let i = 0; i < len; ++i) {
      promises[i].then(() => {
        positions.push(i)
        if (positions.length === limit) {
          resolve(positions.slice())
        }
      })
    }
  })
}
