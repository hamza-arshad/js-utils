import { performance } from 'perf_hooks'

/**
 * Measure precise time in Node.js
 * @usage
 * ```javascript
 * const end = timer()
 * // ... do something
 * const duration = end()
 * console.log(duration, 'ms elapsed')
 * ```
 */
export default () => {
  const start = performance.now()
  return () => {
    const end = performance.now()
    return end - start
  }
}
