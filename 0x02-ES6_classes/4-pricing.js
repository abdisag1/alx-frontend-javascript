import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    // price (Number)
    if (typeof amount !== 'number') {
      throw new Error('price must be a number');
    }
    this._amount = amount;
    // currency (Currency)
    if (!(currency instanceof Currency)) {
      throw new Error('currency must be a Currency');
    }
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new Error('price must be a number');
    }
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new Error('currency must be a Currency');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  convertPrice(currency) {
    if (!(currency instanceof Currency)) {
      throw new Error('currency must be a Currency');
    }
    return this._amount * currency.convert(this._currency);
  }
} // end class Pricing