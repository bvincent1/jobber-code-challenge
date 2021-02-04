import Calc from "./index";

describe("Cacl", () => {
  it("should return single value 1", () => {
    expect(Number(Calc.new.one)).toBe(1);
  });

  it("should convert Class to Number(3)", () => {
    expect(Number(Calc.new.one.plus.one.plus.one)).toBe(3);
  });

  it("should return multi-operation result 3", () => {
    expect(Calc.new.one.plus.one.plus.one.result).toBe(3);
  });

  it("should a number greater than 10 (18)", () => {
    expect(Calc.new.nine.plus.nine.result).toBe(18);
  });

  it("should a number greater than 10 (81)", () => {
    expect(Calc.new.nine.times.nine.result).toBe(81);
  });

  it("should return a negative number (-5)", () => {
    expect(Calc.new.one.minus.six.result).toBe(-5);
  });

  it("should return long multi-operator result (2)", () => {
    expect(Calc.new.one.minus.six.plus.nine.divided_by.two.result).toBe(2);
  });

  it("should return a fraction (-0.33333)", () => {
    expect(Calc.new.one.divided_by.three.result).toBe(1 / 3);
  });

  it("should return the calculation current value", () => {
    expect(Calc.new.one.divided_by.result).toEqual("1/");
  });

  it("should compare result value and return truthy", () => {
    expect(Calc.new.one.divided_by.one.equals(1)).toBeTruthy();
  });
});
