import Singleton from './Singleton'

export default class Cache<K, V> extends Singleton {
  map = new Map<K, V>()

  add(idx: K, item: V) {
    this.map.set(idx, item)
  }

  get(idx: K) {
    return this.map.get(idx)
  }

  clear() {
    this.map.clear()
  }
}
