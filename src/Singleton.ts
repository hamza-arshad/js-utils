export default class Singleton {
  static getInstance() {
    // @ts-ignore
    if (!this.instance) {
      throw new Error(`${this.name} singleton wasn't created yet`)
    }
    // @ts-ignore
    return this.instance
  }

  static isInstantiated() {
    // @ts-ignore
    return this.instance != null
  }

  constructor() {
    // @ts-ignore
    this.constructor.instance = this
  }
}
