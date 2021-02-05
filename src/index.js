/**
 * Chainable calculator utility class.
 *
 * Allows for ruby-esq syntax of `<ClassInstance>.one.plus.two.minus.three.result`.
 */
class CalcChained extends Number {
  constructor(init) {
    if (typeof init === "number") {
      super(init);
    } else {
      super();
    }
    this._value = null || init;
  }

  /**
   * Adds [newNumber] to internal  value.
   * If there is already a value returns the eval result of [this.value] and [newNumber].
   * @param {Number} newNumber this
   */
  _addNumberToValue(newNumber) {
    if (!this._value) {
      return new CalcChained(newNumber);
    } else {
      return new CalcChained(eval(`${this._value}${newNumber}`));
    }
  }

  /**
   * Adds [newOperator] to internal  value.
   * If there is already a value returns the eval result.
   * @param {'+' | '-' | '*' | '/'} newOperator this
   */
  _addOperatorToValue(newOperator) {
    this._value = `${this._value}${newOperator}`;
    return this;
  }

  /**
   * returns equality comparison of [num] with [this._value]
   * @param {Number} num Boolean
   */
  equals(num) {
    return num === this._value;
  }

  /**
   * Getter for intervalue _value, doesn't need any type conversions for deep equality.
   */
  get result() {
    return this._value;
  }

  /**
   * Value getters for 0-9
   */
  get one() {
    return this._addNumberToValue(1);
  }

  get two() {
    return this._addNumberToValue(2);
  }

  get three() {
    return this._addNumberToValue(3);
  }

  get four() {
    return this._addNumberToValue(4);
  }

  get five() {
    return this._addNumberToValue(5);
  }

  get six() {
    return this._addNumberToValue(6);
  }

  get seven() {
    return this._addNumberToValue(7);
  }

  get eight() {
    return this._addNumberToValue(8);
  }

  get nine() {
    return this._addNumberToValue(9);
  }

  /**
   * Value operators for +,-,*,/
   */
  get plus() {
    return this._addOperatorToValue("+");
  }

  get minus() {
    return this._addOperatorToValue("-");
  }

  get times() {
    return this._addOperatorToValue("*");
  }

  get divided_by() {
    return this._addOperatorToValue("/");
  }
}

const Calc = {
  get new() {
    return new CalcChained(0);
  },
  CalcChained
};

export default Calc;
