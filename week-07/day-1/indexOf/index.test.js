import { indexOf } from "./index";

describe("indexOf", () => {
  let array;
  let value;
  beforeEach(() => {
    array = [1, 2, 3, 4, 5];
  });
  it("indexOf function should be defined", () => {
    expect(indexOf).toBeDefined();
  });
  it("should return -1 if value is not in array", () => {
    value = 6;
    expect(indexOf(value, array)).toBe(-1);
  });
  it("should return 2 if value 3", () => {
    value = 3;
    expect(indexOf(value, array)).toBe(2);
  });
  it("should return 4 if value 5", () => {
    value = 5;
    expect(indexOf(value, array)).toBe(4);
  });
});
