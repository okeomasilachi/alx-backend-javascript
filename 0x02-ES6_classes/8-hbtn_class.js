export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case "number":
        return this._size;
      case "string":
        return this._location;
      default:
        return this._size;
    }
  }
}