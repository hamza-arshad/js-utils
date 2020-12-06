/**
 * Converts an object to a `Map`
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export default <T extends {}, K extends keyof T>(o: T) =>
  new Map<string, T[K]>(Object.entries(o))
