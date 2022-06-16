export default class Currency {
  constructor(symbol, name) {
    // symbol (String)
    if (typeof symbol !== 'string') {
      throw new Error('symbol must be a string');
    }
    this._symbol = symbol;

    // name (String)
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._symbol})`;
  }
}
