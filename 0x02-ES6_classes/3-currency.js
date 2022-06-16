export default class Currency {
  constructor(code, name) {
    // symbol (String)
    if (typeof code !== 'string') {
      throw new Error('symbol must be a string');
    }
    this._code = code;

    // name (String)
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
