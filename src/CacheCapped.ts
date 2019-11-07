import Cache from './Cache'

export default class CacheCapped<K, V> extends Cache<K, V> {
  private capacity: number

  constructor(capacity: number) {
    super()
    this.capacity = capacity
  }

  rm(item: K) {
    this.map.delete(item)
  }

  add(idx: K, item: V) {
    if (this.map.size === this.capacity && !this.map.has(idx)) {
      const oldest = this.map.keys().next().value
      this.rm(oldest)
    }
    this.map.set(idx, item)
  }
}
