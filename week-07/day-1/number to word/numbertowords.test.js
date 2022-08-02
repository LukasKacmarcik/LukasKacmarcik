import { number2words } from "./numbertowords";

describe("number to words function", () => {
  it("should return twenty-one", () => {
    expect(number2words(21)).toBe(`twenty-one`);
  });
  it("zero", () => {
    expect(number2words(0)).toBe(`zero`);
  });
  it("one thousand three hundred and fifty-five", () => {
    expect(number2words(1355)).toBe(
      "one thousand three hundred and fifty-five"
    );
  });
});
