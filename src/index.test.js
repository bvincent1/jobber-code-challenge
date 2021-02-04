import Calc from "./index";

describe("Cacl", () => {
  it("should return 1", () => {
    expect(Calc.new.one).toEqual({ value: 1 });
  });

  it("should return 2", () => {
    expect(Calc.new.one.plus.one).toBe(2);
  });

  it("should return 18", () => {
    expect(Calc.new.nine.plus.nine).toBe(18);
  });

  it("should return -5", () => {
    expect(Calc.new.one.minus.six).toBe(-5);
  });

  it("should return -0.33333", () => {
    expect(Calc.new.one.divided_by.three).toBe(1 / 3);
  });

  it("should return current value", () => {
    expect(Calc.new.one.divided_by).toEqual({ value: "1/" });
  });
});
