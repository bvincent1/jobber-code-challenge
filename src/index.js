class CalcChained {
  constructor() {
    this.value = null;
  }

  /**
   * Adds [newNumber] to internal  value.
   * If there is already a value returns the eval result of [this.value] and [newNumber].
   * @param {Number} newNumber this
   */
  addNumberToValue(newNumber) {
    if (!this.value) {
      this.value = newNumber;
      return this;
    } else {
      return eval(`${this.value}${newNumber}`);
    }
  }

  /**
   * Adds [newOperator] to internal  value.
   * If there is already a value returns the eval result.
   * @param {'+' | '-' | '*' | '/'} newOperator this
   */
  addOperatorToValue(newOperator) {
    this.value = `${this.value}${newOperator}`;
    return this;
  }

  /**
   * Value getters for 0-9
   */
  get one() {
    return this.addNumberToValue(1);
  }

  get two() {
    return this.addNumberToValue(2);
  }

  get three() {
    return this.addNumberToValue(3);
  }

  get four() {
    return this.addNumberToValue(4);
  }

  get five() {
    return this.addNumberToValue(5);
  }

  get six() {
    return this.addNumberToValue(6);
  }

  get seven() {
    return this.addNumberToValue(7);
  }

  get eight() {
    return this.addNumberToValue(8);
  }

  get nine() {
    return this.addNumberToValue(9);
  }

  /**
   * Value operators for +,-,*,/
   */
  get plus() {
    return this.addOperatorToValue("+");
  }

  get minus() {
    return this.addOperatorToValue("-");
  }

  get multiply() {
    return this.addOperatorToValue("*");
  }

  get divided_by() {
    return this.addOperatorToValue("/");
  }
}

const Calc = {
  get new() {
    return new CalcChained();
  },
};

export default Calc;
