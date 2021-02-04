import Calc from "./index";

describe("Cacl", () => {
  it("should return 1", () => {
    expect(Number(Calc.new.one)).toBe(1);
  });

  it("should return 3", () => {
    expect(Number(Calc.new.one.plus.one.plus.one)).toBe(3);
  });

  it("should return 18", () => {
    expect(Number(Calc.new.nine.plus.nine)).toBe(18);
  });

  it("should return -5", () => {
    expect(Number(Calc.new.one.minus.six)).toBe(-5);
  });

  it("should return -0.33333", () => {
    expect(Number(Calc.new.one.divided_by.three)).toBe(1 / 3);
  });

  it("should return current value", () => {
    expect(Calc.new.one.divided_by.value).toEqual("1/");
  });
});
