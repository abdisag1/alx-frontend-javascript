import Building from './5-building.js';

export default class skyscraper extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // floors getter
  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `The ${this.sqft} square feet building is too high!`;
  }
}
