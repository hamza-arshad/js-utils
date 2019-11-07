import { Cache } from '../src'

let cache = new Cache()

describe('cache class and all its properties', () => {
  beforeEach(() => {
    cache = new Cache()
  })

  it('creates an instance of the cache class', () => {
    expect(cache).toBeInstanceOf(Cache)
    expect(typeof cache).toBe('object')
  })

  it('adds to cache', () => {
    cache.add('foo', 'bar')
    expect(cache.map.get('foo')).toBe('bar')
  })

  it('gets item from cache', () => {
    cache.map.set('foo', 'bar')
    expect(cache.get('foo')).toBe('bar')
  })

  it('clears cache', () => {
    cache.add('foo', 'bar')
    cache.clear()
    expect(cache.map.size).toBe(0)
  })
})
