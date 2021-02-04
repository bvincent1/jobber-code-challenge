import Calc from "./index";

describe("Cacl", () => {
  it("should return 1", () => {
    expect(Calc.new.one.plus.one).toBe(1);
  });

  it("should return 18", () => {
    expect(Calc.new.nine.plus.nine).toBe(18);
  });

  it("should return -5", () => {
    expect(Calc.new.one.minus.six).toBe(6);
  });

  it("should return -0.33333", () => {
    expect(Calc.new.one.divided_by.three).toBe(1/3);
  });

  it("should return Syntax Error", () => {
    expect(Calc.new.one.divided_by).toEqual(Calc.SyntaxError)
  });
});
